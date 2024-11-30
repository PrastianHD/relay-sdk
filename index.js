/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 857:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const a0_0x2ca31a=a0_0xf3e9;function a0_0xf3e9(_0x4b1ca5,_0x518a91){const _0x3acde9=a0_0x3acd();return a0_0xf3e9=function(_0xf3e9ab,_0x67be7a){_0xf3e9ab=_0xf3e9ab-0x1c9;let _0x4bd1d9=_0x3acde9[_0xf3e9ab];return _0x4bd1d9;},a0_0xf3e9(_0x4b1ca5,_0x518a91);}(function(_0x5f30bc,_0x38f125){const _0x554000=a0_0xf3e9,_0x25ecd2=_0x5f30bc();while(!![]){try{const _0x16ed48=-parseInt(_0x554000(0x1d0))/0x1*(parseInt(_0x554000(0x1ea))/0x2)+parseInt(_0x554000(0x1e2))/0x3*(parseInt(_0x554000(0x1ee))/0x4)+-parseInt(_0x554000(0x207))/0x5*(-parseInt(_0x554000(0x1e7))/0x6)+parseInt(_0x554000(0x1dd))/0x7*(parseInt(_0x554000(0x1df))/0x8)+-parseInt(_0x554000(0x1dc))/0x9*(parseInt(_0x554000(0x1f6))/0xa)+-parseInt(_0x554000(0x1f3))/0xb+-parseInt(_0x554000(0x1cf))/0xc;if(_0x16ed48===_0x38f125)break;else _0x25ecd2['push'](_0x25ecd2['shift']());}catch(_0x3492f5){_0x25ecd2['push'](_0x25ecd2['shift']());}}}(a0_0x3acd,0xc0b78));const fs=__nccwpck_require__(896),inquirer=require(a0_0x2ca31a(0x1c9)),axios=require(a0_0x2ca31a(0x1f2)),{bridgeETH}=require(a0_0x2ca31a(0x1f0)),{log}=require(a0_0x2ca31a(0x1e4));require(a0_0x2ca31a(0x1d9))[a0_0x2ca31a(0x1e9)]();const PRIVATE_KEYS=process['env']['PRIVATE_KEY']['split'](','),mainnetChains=JSON[a0_0x2ca31a(0x1f5)](fs[a0_0x2ca31a(0x1e5)](a0_0x2ca31a(0x1d5))),testnetChains=JSON[a0_0x2ca31a(0x1f5)](fs[a0_0x2ca31a(0x1e5)]('./config/testnet.json')),LICENSE_SERVER='http://37.60.244.91:5000',LICENSE_FILE=a0_0x2ca31a(0x206),readLicenseFromFile=()=>{const _0x3bb9bd=a0_0x2ca31a;if(fs[_0x3bb9bd(0x1ef)](LICENSE_FILE)){const _0x2e2af7=fs['readFileSync'](LICENSE_FILE,_0x3bb9bd(0x1ed));return JSON['parse'](_0x2e2af7);}return null;},saveLicenseToFile=_0x3a0c4a=>{const _0xdb2e1a=a0_0x2ca31a;fs['writeFileSync'](LICENSE_FILE,JSON['stringify'](_0x3a0c4a),_0xdb2e1a(0x1ed));};function a0_0x3acd(){const _0x13da96=['message','mainnet','NetworkName','34495872FtukJP','9876QQRQGr','Failed\x20to\x20validate\x20saved\x20license:\x20','Bridging\x20','Mainnet','Select\x20a\x20source\x20chain:','./config/mainnet.json','Error\x20validating\x20license:\x20','post','\x20(ChainId:\x20','dotenv','Select\x20a\x20destination\x20chain:','Enter\x20License:','99PsFBOf','7IMWbFO','ChainId','11046248lfrquT','valid',')...','505587ZGmvSY','Testnet','./config/logger','readFileSync','/validate','4167522lDdKIX','\x20ETH\x20from\x20','config','12gkbbsQ','map','list','utf-8','36JrSjrt','existsSync','./src/bridge','prompt','axios','2348302oKaXif','testnet','parse','318140fjMuoy','stage','INFO','input','License\x20key\x20is\x20required.','/register','License\x20validated\x20and\x20registered\x20successfully:\x20','▫️\x20','Saved\x20license\x20is\x20invalid:\x20','license','Explorer','RpcUrl','Select\x20stage:','data','hostname','ERROR','./config/license.json','10MYlvLb','inquirer','Saved\x20license\x20is\x20valid.','Enter\x20the\x20amount\x20of\x20ETH\x20to\x20bridge\x20(e.g.,\x200.00005):'];a0_0x3acd=function(){return _0x13da96;};return a0_0x3acd();}((async()=>{const _0x3dea54=a0_0x2ca31a;let _0x465b85;const _0x2bd6d4=readLicenseFromFile();if(_0x2bd6d4)try{const _0x3549d2=await axios[_0x3dea54(0x1d7)](LICENSE_SERVER+_0x3dea54(0x1e6),{'license_key':_0x2bd6d4['license'],'device':__nccwpck_require__(857)[_0x3dea54(0x204)]()});_0x3549d2[_0x3dea54(0x203)]['valid']?(log(_0x3dea54(0x1f8),_0x3dea54(0x1ca)),_0x465b85=_0x2bd6d4[_0x3dea54(0x1ff)]):log(_0x3dea54(0x205),_0x3dea54(0x1fe)+_0x3549d2['data'][_0x3dea54(0x1cc)]);}catch(_0x100d12){log(_0x3dea54(0x205),_0x3dea54(0x1d1)+_0x100d12[_0x3dea54(0x1cc)]);}if(!_0x465b85){const {license:_0x166eed}=await inquirer[_0x3dea54(0x1f1)]([{'type':_0x3dea54(0x1f9),'name':_0x3dea54(0x1ff),'message':_0x3dea54(0x1db),'validate':async _0x258f6f=>{const _0x53baed=_0x3dea54;if(!_0x258f6f)return _0x53baed(0x1fa);try{const _0x18885d=await axios[_0x53baed(0x1d7)](LICENSE_SERVER+_0x53baed(0x1e6),{'license_key':_0x258f6f,'device':__nccwpck_require__(857)[_0x53baed(0x204)]()});if(!_0x18885d[_0x53baed(0x203)][_0x53baed(0x1e0)]){if(_0x18885d[_0x53baed(0x203)][_0x53baed(0x1cc)]==='Device\x20not\x20registered\x20with\x20this\x20license.')return await axios['post'](LICENSE_SERVER+_0x53baed(0x1fb),{'license_key':_0x258f6f,'device':__nccwpck_require__(857)[_0x53baed(0x204)]()}),!![];return'License\x20validation\x20failed:\x20'+_0x18885d['data'][_0x53baed(0x1cc)];}return!![];}catch(_0x5823bd){return _0x53baed(0x1d6)+_0x5823bd['message'];}}}]);_0x465b85=_0x166eed,saveLicenseToFile({'license':_0x166eed}),log('INFO',_0x3dea54(0x1fc)+_0x465b85);}const {stage:_0x38c3a1}=await inquirer[_0x3dea54(0x1f1)]([{'type':_0x3dea54(0x1ec),'name':_0x3dea54(0x1f7),'message':_0x3dea54(0x202),'choices':[{'name':_0x3dea54(0x1e3),'value':_0x3dea54(0x1f4)},{'name':_0x3dea54(0x1d3),'value':_0x3dea54(0x1cd)}]}]),_0x39e523=_0x38c3a1===_0x3dea54(0x1f4)?testnetChains:mainnetChains,{sourceChain:_0x3421bb}=await inquirer[_0x3dea54(0x1f1)]([{'type':_0x3dea54(0x1ec),'name':'sourceChain','message':_0x3dea54(0x1d4),'choices':_0x39e523[_0x3dea54(0x1eb)](_0x44827b=>({'name':_0x3dea54(0x1fd)+_0x44827b[_0x3dea54(0x1ce)],'value':_0x44827b}))}]),{destinationChain:_0x173d8e}=await inquirer[_0x3dea54(0x1f1)]([{'type':_0x3dea54(0x1ec),'name':'destinationChain','message':_0x3dea54(0x1da),'choices':_0x39e523[_0x3dea54(0x1eb)](_0x52f946=>({'name':_0x3dea54(0x1fd)+_0x52f946[_0x3dea54(0x1ce)],'value':_0x52f946}))}]),{amount:_0xd9323a}=await inquirer[_0x3dea54(0x1f1)]([{'type':'input','name':'amount','message':_0x3dea54(0x1cb),'validate':_0x488ced=>{if(isNaN(_0x488ced)||parseFloat(_0x488ced)<=0x0)return'Please\x20enter\x20a\x20valid\x20positive\x20number.';return!![];}}]);log('INFO',_0x3dea54(0x1d2)+_0xd9323a+_0x3dea54(0x1e8)+_0x3421bb['NetworkName']+'\x20(ChainId:\x20'+_0x3421bb[_0x3dea54(0x1de)]+')\x20to\x20'+_0x173d8e['NetworkName']+_0x3dea54(0x1d8)+_0x173d8e[_0x3dea54(0x1de)]+_0x3dea54(0x1e1)),await bridgeETH(_0x3421bb['ChainId'],_0x173d8e[_0x3dea54(0x1de)],_0xd9323a,PRIVATE_KEYS,_0x3421bb[_0x3dea54(0x201)],_0x3421bb[_0x3dea54(0x200)]);})());
module.exports = __webpack_exports__;
/******/ })()
;