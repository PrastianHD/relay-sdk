const { ethers } = require("ethers");
const { getClient, createClient, MAINNET_RELAY_API, TESTNET_RELAY_API } = require("@reservoir0x/relay-sdk");
const { createAdaptedWallet } = require("./adapter");
const { log } = require("../config/logger");

const bridgeETH = async (originChainId, destinationChainId, amount, privateKeys, rpcUrl, explorerUrl) => {
  const isTestnet = originChainId === 11155111; 
  createClient({
    baseApiUrl: isTestnet ? TESTNET_RELAY_API : MAINNET_RELAY_API,
    source: "my-app",
  });

  for (const privateKey of privateKeys) {
    try {
      log("INFO", `Processing wallet with private key: ${privateKey.slice(0, 6)}...`);

      const wallet = createAdaptedWallet(privateKey, rpcUrl);
      const parsedAmount = ethers.utils.parseEther(amount.trim());

      const quote = await getClient().actions.getQuote({
        chainId: originChainId,
        toChainId: destinationChainId,
        currency: "0x0000000000000000000000000000000000000000",
        toCurrency: "0x0000000000000000000000000000000000000000",
        amount: parsedAmount.toString(),
        tradeType: "EXACT_INPUT",
        wallet,
      });

      log("DEBUG", "Quote fetched successfully");

      let logged = false;
      await getClient().actions.execute({
        quote,
        wallet,
        onProgress: (progress) => {
          const { steps } = progress;
          const txHashes = steps
            ?.flatMap((step) => step.items || [])
            .flatMap((item) => item.txHashes || [])
            .map((tx) => tx?.txHash)
            .filter((txHash) => txHash);

          if (txHashes && txHashes.length > 0 && !logged) {
            log(
              "SUCCESS",
              `Bridged ${ethers.utils.formatEther(parsedAmount)} ETH to ${destinationChainId} with hash: ${explorerUrl}${txHashes[0]}`
            );
            logged = true;
          }
        },
      });
    } catch (error) {
      log("ERROR", `Error processing wallet with private key ${privateKey.slice(0, 6)}: ${error.message}`);
    }
  }
};

module.exports = { bridgeETH };
