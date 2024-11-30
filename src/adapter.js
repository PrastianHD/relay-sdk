const { adaptEthersSigner } = require("@reservoir0x/relay-ethers-wallet-adapter");
const { ethers } = require("ethers");

/**
 * Creates an adapted wallet for Reservoir SDK using Ethers.js signer.
 * @param {string} privateKey - The private key of the wallet.
 * @param {string} rpcUrl - The RPC URL for the chain.
 * @returns {object} Adapted wallet.
 */
const createAdaptedWallet = (privateKey, rpcUrl) => {
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl); 
  const signer = new ethers.Wallet(privateKey, provider); 
  return adaptEthersSigner(signer); 
};

module.exports = { createAdaptedWallet };
