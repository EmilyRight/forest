// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"foZEJ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1443f5e7ac8232";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6UhZ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _wowMin = require("./vendor/wow.min");
var _detectDevice = require("./components/detectDevice");
var _detectDeviceDefault = parcelHelpers.interopDefault(_detectDevice);
var _scrollEvents = require("./components/scrollEvents");
var _scrollEventsDefault = parcelHelpers.interopDefault(_scrollEvents);
var _swiperMin = require("./vendor/swiper.min");
var _swiperMinDefault = parcelHelpers.interopDefault(_swiperMin);
var _utils = require("./components/utils");
var _gtmEvents = require("./components/gtmEvents");
var _gtmEventsDefault = parcelHelpers.interopDefault(_gtmEvents);
var _videoTeaser = require("./components/videoTeaser");
var _videoTeaserDefault = parcelHelpers.interopDefault(_videoTeaser);
var _shares = require("./components/shares");
var _sharesDefault = parcelHelpers.interopDefault(_shares);
const GTM = new (0, _gtmEventsDefault.default)();
const shares = new (0, _sharesDefault.default)();
/// /////// DocReady //////////
document.addEventListener("DOMContentLoaded", ()=>{
    const animatedDigits = new (0, _scrollEventsDefault.default)();
    animatedDigits.init();
    (0, _detectDeviceDefault.default)();
    new (0, _wowMin.WOW)().init();
    GTM.addEventListeners();
    (0, _utils.getCurrentYear)();
    goNextSection();
    scrollTeaser(document.querySelector(".section-about"));
    (0, _videoTeaserDefault.default)();
    handleSlider();
    faqOpener();
    handleRating();
    shares.init();
});
function goNextSection() {
    const goNextBtns = document.querySelectorAll(".js-go-next");
    const sectionsList = document.querySelectorAll("section");
    goNextBtns.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            const btnParentNode = btn.closest("section");
            let sectionToScrollTo;
            sectionsList.forEach((el, index)=>{
                if (el === btnParentNode) {
                    sectionToScrollTo = sectionsList[index + 1];
                    scrollToElement(sectionToScrollTo);
                }
            });
        });
    });
}
function scrollToElement(el) {
    const offs = 0;
    const y = el.getBoundingClientRect().top + window.scrollY + offs;
    window.scrollTo({
        top: y,
        behavior: "smooth"
    }); // element.scrollIntoView();
}
// scroll to next if URL contains #about
function scrollTeaser(el) {
    if (window.location.hash === "#about") scrollToElement(el);
}
function setActive(arr) {
    const activeClassName = "active";
    arr.forEach((el)=>{
        const itemText = el.querySelector(".item__text");
        if (el.classList.contains(activeClassName)) {
            itemText.style.transition = "none";
            el.classList.remove(activeClassName);
        }
    });
}
function faqOpener() {
    const itemsList = document.querySelectorAll(".faq__item");
    const activeClassName = "active";
    itemsList.forEach((item)=>{
        item.addEventListener("click", ()=>{
            const itemText = item.childNodes[3]; // хардкод текстового дочернего узла
            if (item.classList.contains(activeClassName)) {
                itemText.style.transition = "none";
                item.classList.remove(activeClassName);
            } else {
                setActive(itemsList);
                itemText.style.transition = "0.2s ease-in-out";
                item.classList.add(activeClassName);
            }
        });
    });
}
function handleSlider() {
    const swiper = new (0, _swiperMinDefault.default)(".swiper-container", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        slidesPerView: "auto",
        spaceBetween: 45,
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: 16
            }
        }
    });
    return swiper;
}
function handleRating() {
    const inputsList = document.querySelectorAll(".rating__input");
    const shareBlock = document.querySelector(".share");
    inputsList.forEach((input)=>{
        input.addEventListener("click", ()=>{
            shareBlock.classList.add("visible");
        });
    });
}

},{"./vendor/wow.min":"9Mbe2","./components/detectDevice":"cP0rK","./components/scrollEvents":"eQ3IA","./components/utils":"9NB6x","./components/gtmEvents":"8bfnv","./components/videoTeaser":"61zhl","./components/shares":"3liWa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./vendor/swiper.min":"cc3E8"}],"9Mbe2":[function(require,module,exports) {
/*! WOW - v0.1.4 - 2014-03-03
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */ (function() {
    var a, b = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    };
    a = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for(c in a)d = a[c], null != d && (b[c] = d);
            return b;
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
        }, a;
    }(), this.WOW = function() {
        function c(a) {
            null == a && (a = {}), this.scrollCallback = b(this.scrollCallback, this), this.scrollHandler = b(this.scrollHandler, this), this.start = b(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults);
        }
        return c.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0
        }, c.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length ? this.disabled() ? this.resetStyle() : "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start) : void 0;
        }, c.prototype.start = function() {
            var a, b, c, d;
            for(d = this.boxes, b = 0, c = d.length; c > b; b++)a = d[b], this.applyStyle(a, !0);
            return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50);
        }, c.prototype.stop = function() {
            return window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0;
        }, c.prototype.show = function(a) {
            return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass;
        }, c.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), a.setAttribute("style", this.customStyle(b, d, c, e));
        }, c.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for(d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)a = d[b], e.push(a.setAttribute("style", "visibility: visible;"));
            return e;
        }, c.prototype.customStyle = function(a, b, c, d) {
            var e;
            return e = a ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;", b && (e += "-webkit-animation-duration: " + b + "; -moz-animation-duration: " + b + "; animation-duration: " + b + ";"), c && (e += "-webkit-animation-delay: " + c + "; -moz-animation-delay: " + c + "; animation-delay: " + c + ";"), d && (e += "-webkit-animation-iteration-count: " + d + "; -moz-animation-iteration-count: " + d + "; animation-iteration-count: " + d + ";"), e;
        }, c.prototype.scrollHandler = function() {
            return this.scrolled = !0;
        }, c.prototype.scrollCallback = function() {
            var a;
            return this.scrolled && (this.scrolled = !1, this.boxes = (function() {
                var b, c, d, e;
                for(d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e;
            }).call(this), !this.boxes.length) ? this.stop() : void 0;
        }, c.prototype.offsetTop = function(a) {
            var b;
            for(b = a.offsetTop; a = a.offsetParent;)b += a.offsetTop;
            return b;
        }, c.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + this.element.clientHeight - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f;
        }, c.prototype.util = function() {
            return this._util || (this._util = new a);
        }, c.prototype.disabled = function() {
            return this.config.mobile === !1 && this.util().isMobile(navigator.userAgent);
        }, c;
    }();
}).call(this);

},{}],"cP0rK":[function(require,module,exports) {
/// Detect device
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uaParserJs = require("ua-parser-js");
const getMobileOs = ()=>{
    const { userAgent } = navigator;
    const parser = new (0, _uaParserJs.UAParser)();
    let platform = "unknown";
    if (parser.getDevice().vendor === "Huawei") platform = "huawei";
    if (/android/i.test(userAgent)) platform = "android";
    if (parser.getDevice().vendor === "Apple") platform = "ios";
    return platform;
};
function detectDevice() {
    const deviceOs = getMobileOs();
    document.body.classList.add(`platform_${deviceOs}`);
    setLinkHref();
}
function setLinkHref() {
    const deviceOs = getMobileOs();
    const appLink = {
        ios: "https://redirect.appmetrica.yandex.com/serve/315401363163010541",
        android: "https://redirect.appmetrica.yandex.com/serve/388180713033187193",
        huawei: "https://redirect.appmetrica.yandex.com/serve/244065662866049837"
    };
    let appLinkHrf = appLink.android;
    if (deviceOs === "ios") appLinkHrf = appLink.ios;
    else if (deviceOs === "huawei") appLinkHrf = appLink.huawei;
    return appLinkHrf;
}
exports.default = detectDevice;

},{"ua-parser-js":"2fabB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2fabB":[function(require,module,exports) {
/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.37
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */ /*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */ /////////////////////////////////////////////////////////////////////////////////
(function(window1, undefined) {
    "use strict";
    //////////////
    // Constants
    /////////////
    var LIBVERSION = "1.0.37", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
    var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS";
    ///////////
    // Helper
    //////////
    var extend = function(regexes, extensions) {
        var mergedRegexes = {};
        for(var i in regexes)if (extensions[i] && extensions[i].length % 2 === 0) mergedRegexes[i] = extensions[i].concat(regexes[i]);
        else mergedRegexes[i] = regexes[i];
        return mergedRegexes;
    }, enumerize = function(arr) {
        var enums = {};
        for(var i = 0; i < arr.length; i++)enums[arr[i].toUpperCase()] = arr[i];
        return enums;
    }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
    }, lowerize = function(str) {
        return str.toLowerCase();
    }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined;
    }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
            str = str.replace(/^\s\s*/, EMPTY);
            return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
    };
    ///////////////
    // Map helper
    //////////////
    var rgxMapper = function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        // loop through all regexes maps
        while(i < arrays.length && !matches){
            var regex = arrays[i], props = arrays[i + 1]; // odd sequence (1,3,5,..)
            j = k = 0;
            // try matching uastring with regexes
            while(j < regex.length && !matches){
                if (!regex[j]) break;
                matches = regex[j++].exec(ua);
                if (!!matches) for(p = 0; p < props.length; p++){
                    match = matches[++k];
                    q = props[p];
                    // check if given property is actually array
                    if (typeof q === OBJ_TYPE && q.length > 0) {
                        if (q.length === 2) {
                            if (typeof q[1] == FUNC_TYPE) // assign modified match
                            this[q[0]] = q[1].call(this, match);
                            else // assign given value, ignore regex match
                            this[q[0]] = q[1];
                        } else if (q.length === 3) {
                            // check whether function or regex
                            if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) // call function (usually string mapper)
                            this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                            else // sanitize match using given regex
                            this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                        } else if (q.length === 4) this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                    } else this[q] = match ? match : undefined;
                }
            }
            i += 2;
        }
    }, strMapper = function(str, map) {
        for(var i in map){
            // check if current value is array
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) for(var j = 0; j < map[i].length; j++){
                if (has(map[i][j], str)) return i === UNKNOWN ? undefined : i;
            }
            else if (has(map[i], str)) return i === UNKNOWN ? undefined : i;
        }
        return str;
    };
    ///////////////
    // String map
    //////////////
    // Safari < 3.0
    var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
    }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": [
            "NT 5.1",
            "NT 5.2"
        ],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": [
            "NT 6.4",
            "NT 10.0"
        ],
        "RT": "ARM"
    };
    //////////////
    // Regex map
    /////////////
    var regexes = {
        browser: [
            [
                /\b(?:crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "Chrome"
                ]
            ],
            [
                /edg(?:e|ios|a)?\/([\w\.]+)/i // Microsoft Edge
            ],
            [
                VERSION,
                [
                    NAME,
                    "Edge"
                ]
            ],
            [
                // Presto based
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i // Opera
            ],
            [
                NAME,
                VERSION
            ],
            [
                /opios[\/ ]+([\w\.]+)/i // Opera mini on iphone >= 8.0
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Mini"
                ]
            ],
            [
                /\bopr\/([\w\.]+)/i // Opera Webkit
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA
                ]
            ],
            [
                // Mixed
                /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i // Baidu
            ],
            [
                VERSION,
                [
                    NAME,
                    "Baidu"
                ]
            ],
            [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                // Trident based
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
                /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i // Weibo
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i // UCBrowser
            ],
            [
                VERSION,
                [
                    NAME,
                    "UC" + BROWSER
                ]
            ],
            [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i // WeChat
            ],
            [
                VERSION,
                [
                    NAME,
                    "WeChat"
                ]
            ],
            [
                /konqueror\/([\w\.]+)/i // Konqueror
            ],
            [
                VERSION,
                [
                    NAME,
                    "Konqueror"
                ]
            ],
            [
                /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i // IE11
            ],
            [
                VERSION,
                [
                    NAME,
                    "IE"
                ]
            ],
            [
                /ya(?:search)?browser\/([\w\.]+)/i // Yandex
            ],
            [
                VERSION,
                [
                    NAME,
                    "Yandex"
                ]
            ],
            [
                /slbrowser\/([\w\.]+)/i // Smart Lenovo Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "Smart Lenovo " + BROWSER
                ]
            ],
            [
                /(avast|avg)\/([\w\.]+)/i // Avast/AVG Secure Browser
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    "$1 Secure " + BROWSER
                ],
                VERSION
            ],
            [
                /\bfocus\/([\w\.]+)/i // Firefox Focus
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " Focus"
                ]
            ],
            [
                /\bopt\/([\w\.]+)/i // Opera Touch
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Touch"
                ]
            ],
            [
                /coc_coc\w+\/([\w\.]+)/i // Coc Coc Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "Coc Coc"
                ]
            ],
            [
                /dolfin\/([\w\.]+)/i // Dolphin
            ],
            [
                VERSION,
                [
                    NAME,
                    "Dolphin"
                ]
            ],
            [
                /coast\/([\w\.]+)/i // Opera Coast
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Coast"
                ]
            ],
            [
                /miuibrowser\/([\w\.]+)/i // MIUI Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "MIUI " + BROWSER
                ]
            ],
            [
                /fxios\/([-\w\.]+)/i // Firefox for iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX
                ]
            ],
            [
                /\bqihu|(qi?ho?o?|360)browser/i // 360
            ],
            [
                [
                    NAME,
                    "360 " + BROWSER
                ]
            ],
            [
                /(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    "$1 " + BROWSER
                ],
                VERSION
            ],
            [
                /samsungbrowser\/([\w\.]+)/i // Samsung Internet
            ],
            [
                VERSION,
                [
                    NAME,
                    SAMSUNG + " Internet"
                ]
            ],
            [
                /(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
            ],
            [
                [
                    NAME,
                    /_/g,
                    " "
                ],
                VERSION
            ],
            [
                /metasr[\/ ]?([\d\.]+)/i // Sogou Explorer
            ],
            [
                VERSION,
                [
                    NAME,
                    "Sogou Explorer"
                ]
            ],
            [
                /(sogou)mo\w+\/([\d\.]+)/i // Sogou Mobile
            ],
            [
                [
                    NAME,
                    "Sogou Mobile"
                ],
                VERSION
            ],
            [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i // QQBrowser/2345 Browser
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(lbbrowser)/i,
                /\[(linkedin)app\]/i // LinkedIn App for iOS & Android
            ],
            [
                NAME
            ],
            [
                // WebView
                /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i // Facebook App for iOS & Android
            ],
            [
                [
                    NAME,
                    FACEBOOK
                ],
                VERSION
            ],
            [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i // Chromium/Instagram/Snapchat
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\bgsa\/([\w\.]+) .*safari\//i // Google Search Appliance on iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "GSA"
                ]
            ],
            [
                /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i // TikTok
            ],
            [
                VERSION,
                [
                    NAME,
                    "TikTok"
                ]
            ],
            [
                /headlesschrome(?:\/([\w\.]+)| )/i // Chrome Headless
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + " Headless"
                ]
            ],
            [
                / wv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
            ],
            [
                [
                    NAME,
                    CHROME + " WebView"
                ],
                VERSION
            ],
            [
                /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i // Android Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "Android " + BROWSER
                ]
            ],
            [
                /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i // Chrome/OmniWeb/Arora/Tizen/Nokia
            ],
            [
                NAME,
                VERSION
            ],
            [
                /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i // Mobile Safari
            ],
            [
                VERSION,
                [
                    NAME,
                    "Mobile Safari"
                ]
            ],
            [
                /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i // Safari & Safari Mobile
            ],
            [
                VERSION,
                NAME
            ],
            [
                /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    oldSafariMap
                ]
            ],
            [
                /(webkit|khtml)\/([\w\.]+)/i
            ],
            [
                NAME,
                VERSION
            ],
            [
                // Gecko based
                /(navigator|netscape\d?)\/([-\w\.]+)/i // Netscape
            ],
            [
                [
                    NAME,
                    "Netscape"
                ],
                VERSION
            ],
            [
                /mobile vr; rv:([\w\.]+)\).+firefox/i // Firefox Reality
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " Reality"
                ]
            ],
            [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                // Other
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
                /(links) \(([\w\.]+)/i,
                /panasonic;(viera)/i // Panasonic Viera
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(cobalt)\/([\w\.]+)/i // Cobalt
            ],
            [
                NAME,
                [
                    VERSION,
                    /master.|lts./,
                    ""
                ]
            ]
        ],
        cpu: [
            [
                /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i // AMD64 (x64)
            ],
            [
                [
                    ARCHITECTURE,
                    "amd64"
                ]
            ],
            [
                /(ia32(?=;))/i // IA32 (quicktime)
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ],
            [
                /((?:i[346]|x)86)[;\)]/i // IA32 (x86)
            ],
            [
                [
                    ARCHITECTURE,
                    "ia32"
                ]
            ],
            [
                /\b(aarch64|arm(v?8e?l?|_?64))\b/i // ARM64
            ],
            [
                [
                    ARCHITECTURE,
                    "arm64"
                ]
            ],
            [
                /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i // ARMHF
            ],
            [
                [
                    ARCHITECTURE,
                    "armhf"
                ]
            ],
            [
                // PocketPC mistakenly identified as PowerPC
                /windows (ce|mobile); ppc;/i
            ],
            [
                [
                    ARCHITECTURE,
                    "arm"
                ]
            ],
            [
                /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i // PowerPC
            ],
            [
                [
                    ARCHITECTURE,
                    /ower/,
                    EMPTY,
                    lowerize
                ]
            ],
            [
                /(sun4\w)[;\)]/i // SPARC
            ],
            [
                [
                    ARCHITECTURE,
                    "sparc"
                ]
            ],
            [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ]
        ],
        device: [
            [
                //////////////////////////
                // MOBILES & TABLETS
                /////////////////////////
                // Samsung
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Apple
                /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i // iPod/iPhone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(macintosh);/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ]
            ],
            [
                // Sharp
                /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Huawei
                /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Xiaomi
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i // Mi Pad tablets
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OPPO
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "OPPO"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Vivo
                /vivo (\w+)(?: bui|\))/i,
                /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Vivo"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Realme
                /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Realme"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Motorola
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // LG
                /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Lenovo
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Lenovo"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Nokia
                /(?:maemo|nokia).*(n900|lumia \d+)/i,
                /nokia[-_ ]?([-\w\.]*)/i
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    "Nokia"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Google
                /(pixel c)\b/i // Google Pixel C
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i // Google Pixel
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Sony
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /sony tablet [ps]/i,
                /\b(?:sony)?sgp\w+(?: bui|\))/i
            ],
            [
                [
                    MODEL,
                    "Xperia Tablet"
                ],
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OnePlus
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "OnePlus"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Amazon
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i // Kindle Fire HD
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i // Fire Phone
            ],
            [
                [
                    MODEL,
                    /(.+)/g,
                    "Fire Phone $1"
                ],
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // BlackBerry
                /(playbook);[-\w\),; ]+(rim)/i // BlackBerry PlayBook
            ],
            [
                MODEL,
                VENDOR,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:bb[a-f]|st[hv])100-\d)/i,
                /\(bb10; (\w+)/i // BlackBerry 10
            ],
            [
                MODEL,
                [
                    VENDOR,
                    BLACKBERRY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Asus
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // HTC
                /(nexus 9)/i // HTC Nexus 9
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "HTC"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                // ZTE
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ],
            [
                VENDOR,
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Acer
                /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Acer"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Meizu
                /droid.+; (m[1-5] note) bui/i,
                /\bmz-([-\w]{2,})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Meizu"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Ulefone
                /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Ulefone"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // MIXED
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i // OPPO
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i // Vodafone
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(surface duo)/i // Surface Duo
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid [\d\.]+; (fp\du?)(?: b|\))/i // Fairphone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Fairphone"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(u304aa)/i // AT&T
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "AT&T"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\bsie-(\w*)/i // Siemens
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Siemens"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(rct\w+) b/i // RCA Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "RCA"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(venue[\d ]{2,7}) b/i // Dell Venue Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Dell"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(q(?:mv|ta)\w+) b/i // Verizon Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Verizon"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i // Barnes & Noble Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Barnes & Noble"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(tm\d{3}\w+) b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "NuVision"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(k88) b/i // ZTE K Series Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "ZTE"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(nx\d{3}j) b/i // ZTE Nubia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "ZTE"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(gen\d{3}) b.+49h/i // Swiss GEN Mobile
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Swiss"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(zur\d{3}) b/i // Swiss ZUR Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Swiss"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((zeki)?tb.*\b) b/i // Zeki Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Zeki"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b([yr]\d{2}) b/i,
                /\b(dragon[- ]+touch |dt)(\w{5}) b/i // Dragon Touch Tablet
            ],
            [
                [
                    VENDOR,
                    "Dragon Touch"
                ],
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(ns-?\w{0,9}) b/i // Insignia Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Insignia"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((nxa|next)-?\w{0,9}) b/i // NextBook Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "NextBook"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i // Voice Xtreme Phones
            ],
            [
                [
                    VENDOR,
                    "Voice"
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(lvtel\-)?(v1[12]) b/i // LvTel Phones
            ],
            [
                [
                    VENDOR,
                    "LvTel"
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(ph-1) /i // Essential PH-1
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Essential"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(v(100md|700na|7011|917g).*\b) b/i // Envizen Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Envizen"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(trio[-\w\. ]+) b/i // MachSpeed Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "MachSpeed"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\btu_(1491) b/i // Rotor Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Rotor"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(shield[\w ]+) b/i // Nvidia Shield Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Nvidia"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(sprint) (\w+)/i // Sprint Phones
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(kin\.[onetw]{3})/i // Microsoft Kin
            ],
            [
                [
                    MODEL,
                    /\./g,
                    " "
                ],
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i // Zebra
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                ///////////////////
                // SMARTTVS
                ///////////////////
                /smart-tv.+(samsung)/i // Samsung
            ],
            [
                VENDOR,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /hbbtv.+maple;(\d+)/i
            ],
            [
                [
                    MODEL,
                    /^/,
                    "SmartTV"
                ],
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i // LG SmartTV
            ],
            [
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(apple) ?tv/i // Apple TV
            ],
            [
                VENDOR,
                [
                    MODEL,
                    APPLE + " TV"
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /crkey/i // Google Chromecast
            ],
            [
                [
                    MODEL,
                    CHROME + "cast"
                ],
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /droid.+aft(\w+)( bui|\))/i // Fire TV
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\(dtv[\);].+(aquos)/i,
                /(aquos-tv[\w ]+)\)/i // Sharp
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(bravia[\w ]+)( bui|\))/i // Sony
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(mitv-\w{5}) bui/i // Xiaomi
            ],
            [
                MODEL,
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /Hbbtv.*(technisat) (.*);/i // TechniSAT
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i // HbbTV devices
            ],
            [
                [
                    VENDOR,
                    trim
                ],
                [
                    MODEL,
                    trim
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i // SmartTV from Unidentified Vendors
            ],
            [
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                ///////////////////
                // CONSOLES
                ///////////////////
                /(ouya)/i,
                /(nintendo) ([wids3utch]+)/i // Nintendo
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /droid.+; (shield) bui/i // Nvidia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Nvidia"
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /(playstation [345portablevi]+)/i // Playstation
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /\b(xbox(?: one)?(?!; xbox))[\); ]/i // Microsoft Xbox
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                ///////////////////
                // WEARABLES
                ///////////////////
                /((pebble))app/i // Pebble
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i // Apple Watch
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (glass) \d/i // Google Glass
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (wt63?0{2,3})\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(quest( 2| pro)?)/i // Oculus Quest
            ],
            [
                MODEL,
                [
                    VENDOR,
                    FACEBOOK
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                ///////////////////
                // EMBEDDED
                ///////////////////
                /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i // Tesla
            ],
            [
                VENDOR,
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                /(aeobc)\b/i // Echo Dot
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                ////////////////////
                // MIXED (GENERIC)
                ///////////////////
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i // Android Phones from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i // Android Tablets from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i // Unidentifiable Tablet
            ],
            [
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i // Unidentifiable Mobile
            ],
            [
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(android[-\w\. ]{0,9});.+buil/i // Generic Android Device
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Generic"
                ]
            ]
        ],
        engine: [
            [
                /windows.+ edge\/([\w\.]+)/i // EdgeHTML
            ],
            [
                VERSION,
                [
                    NAME,
                    EDGE + "HTML"
                ]
            ],
            [
                /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i // Blink
            ],
            [
                VERSION,
                [
                    NAME,
                    "Blink"
                ]
            ],
            [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i
            ],
            [
                NAME,
                VERSION
            ],
            [
                /rv\:([\w\.]{1,9})\b.+(gecko)/i // Gecko
            ],
            [
                VERSION,
                NAME
            ]
        ],
        os: [
            [
                // Windows
                /microsoft (windows) (vista|xp)/i // Windows (iTunes)
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i // Windows Phone
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ]
            ],
            [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ],
            [
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ],
                [
                    NAME,
                    "Windows"
                ]
            ],
            [
                // iOS/macOS
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i
            ],
            [
                [
                    VERSION,
                    /_/g,
                    "."
                ],
                [
                    NAME,
                    "iOS"
                ]
            ],
            [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i // Mac OS
            ],
            [
                [
                    NAME,
                    MAC_OS
                ],
                [
                    VERSION,
                    /_/g,
                    "."
                ]
            ],
            [
                // Mobile OSes
                /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i // Android-x86/HarmonyOS
            ],
            [
                VERSION,
                NAME
            ],
            [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i // Series 40
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\(bb(10);/i // BlackBerry 10
            ],
            [
                VERSION,
                [
                    NAME,
                    BLACKBERRY
                ]
            ],
            [
                /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i // Symbian
            ],
            [
                VERSION,
                [
                    NAME,
                    "Symbian"
                ]
            ],
            [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " OS"
                ]
            ],
            [
                /web0s;.+rt(tv)/i,
                /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i // WebOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "webOS"
                ]
            ],
            [
                /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i // watchOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "watchOS"
                ]
            ],
            [
                // Google Chromecast
                /crkey\/([\d\.]+)/i // Google Chromecast
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + "cast"
                ]
            ],
            [
                /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i // Chromium OS
            ],
            [
                [
                    NAME,
                    CHROMIUM_OS
                ],
                VERSION
            ],
            [
                // Smart TVs
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                // Console
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                // Other
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i // Haiku
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(sunos) ?([\w\.\d]*)/i // Solaris
            ],
            [
                [
                    NAME,
                    "Solaris"
                ],
                VERSION
            ],
            [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i // UNIX
            ],
            [
                NAME,
                VERSION
            ]
        ]
    };
    /////////////////
    // Constructor
    ////////////////
    var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }
        if (!(this instanceof UAParser)) return new UAParser(ua, extensions).getResult();
        var _navigator = typeof window1 !== UNDEF_TYPE && window1.navigator ? window1.navigator : undefined;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser[MAJOR] = majorize(_browser[VERSION]);
            // Brave-specific detection
            if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) _browser[NAME] = "Brave";
            return _browser;
        };
        this.getCPU = function() {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function() {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) _device[TYPE] = MOBILE;
            // iPadOS-specific detection: identified as Mac, but has some iOS-only properties
            if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
                _device[MODEL] = "iPad";
                _device[TYPE] = TABLET;
            }
            return _device;
        };
        this.getEngine = function() {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function() {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            if (_isSelfNav && !_os[NAME] && _uach && _uach.platform != "Unknown") _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS); // backward compatibility
            return _os;
        };
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            };
        };
        this.getUA = function() {
            return _ua;
        };
        this.setUA = function(ua) {
            _ua = typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };
    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = enumerize([
        NAME,
        VERSION,
        MAJOR
    ]);
    UAParser.CPU = enumerize([
        ARCHITECTURE
    ]);
    UAParser.DEVICE = enumerize([
        MODEL,
        VENDOR,
        TYPE,
        CONSOLE,
        MOBILE,
        SMARTTV,
        TABLET,
        WEARABLE,
        EMBEDDED
    ]);
    UAParser.ENGINE = UAParser.OS = enumerize([
        NAME,
        VERSION
    ]);
    ///////////
    // Export
    //////////
    // check js environment
    if (typeof exports !== UNDEF_TYPE) {
        // nodejs env
        if ("object" !== UNDEF_TYPE && module.exports) exports = module.exports = UAParser;
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof define === FUNC_TYPE && define.amd) define(function() {
            return UAParser;
        });
        else if (typeof window1 !== UNDEF_TYPE) // browser env
        window1.UAParser = UAParser;
    }
    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window1 !== UNDEF_TYPE && (window1.jQuery || window1.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
            return parser.getUA();
        };
        $.ua.set = function(ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for(var prop in result)$.ua[prop] = result[prop];
        };
    }
})(typeof window === "object" ? window : this);

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eQ3IA":[function(require,module,exports) {
/* eslint-disable no-param-reassign */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class AnimationOnScroll {
    scrollInitBlock = document.querySelector(".scroll-event");
    smallDigits = document.querySelectorAll(".js-count-small");
    largeDigits = document.querySelector(".js-count-large");
    sectionLayers = document.querySelector(".section--tree");
    lastScroll = 0;
    setAnimationOnScroll(scrollElement, elementsArray, animationStep, timingFunction) {
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) this.setAnimationOnDigits(elementsArray, animationStep, timingFunction);
            });
        });
        observer.observe(scrollElement);
    }
    setOnPoint(section, className) {
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) this.handleClassList(section, className);
            });
        });
        observer.observe(section);
    }
    scrollDetect() {
        let direction = "";
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0 && this.lastScroll <= currentScroll) {
            this.lastScroll = currentScroll;
            direction = "down";
        } else if (currentScroll > 0 && this.lastScroll >= currentScroll) {
            this.lastScroll = currentScroll;
            direction = "up";
        }
        return direction;
    }
    handleClassList(section, className) {
        const direction = this.scrollDetect();
        if (section.classList.contains(className) && direction === "up") section.classList.remove(className);
        else section.classList.add(className);
    }
    setInterval(item, animationStep, timingFunction) {
        let initialNumber = 0;
        const finalNumber = Number(item.innerHTML);
        const step = animationStep;
        const interval = setInterval(()=>{
            initialNumber += step;
            if (initialNumber === finalNumber) clearInterval(interval);
            item.innerHTML = `${initialNumber}`;
        }, timingFunction);
    }
    setAnimationOnDigits(elements, animationStep, timingFunction) {
        if (elements.length) elements.forEach((element)=>{
            this.setInterval(element, animationStep, timingFunction);
        });
        else this.setInterval(elements, animationStep, timingFunction);
    }
    handleScroll() {
        this.setOnPoint(this.sectionLayers, "on_point");
    }
    init() {
        this.setAnimationOnScroll(this.scrollInitBlock, this.smallDigits, 1, 80);
        this.setAnimationOnScroll(this.scrollInitBlock, this.largeDigits, 10, 7);
    // this.sectionLayers.forEach((layer) => {
    //   this.setOnPoint(layer, 'on_point');
    // });
    }
}
exports.default = AnimationOnScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9NB6x":[function(require,module,exports) {
/// Unique ID
/**
  * @param {number} dec
  * @return {string}
  */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateId", ()=>generateId);
parcelHelpers.export(exports, "getCurrentYear", ()=>getCurrentYear);
function dec2hex(dec) {
    return `0${dec.toString(16)}`.substring(-2);
}
/**
 * @param {number} len
 * @return {string}
 */ function generateId(len) {
    const arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join("");
}
function getCurrentYear() {
    const yearSpan = document.querySelectorAll(".current-year");
    yearSpan.forEach((span)=>{
        span.innerHTML = new Date().getFullYear().toString();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8bfnv":[function(require,module,exports) {
/* eslint-disable no-use-before-define */ // GTM EVENTS
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
class GTMEvents {
    constructor(){
        this.scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
        this.clientHeight = document.documentElement.clientHeight;
        this.fullEventData = {};
        this.scrollGtm = new Set([
            10,
            30,
            50,
            70,
            90
        ]);
    }
    /**
  * @param {MouseEvent} event
  */ handleClick(event) {
        const className = "js-gtm-event";
        const target = event.target.classList.contains(className) ? event.target : event.target.closest(`.${className}`);
        if (target) {
            const eventBlock = target;
            const clickEventData = {
                eventAction: "click",
                eventLabel: eventBlock.getAttribute("data-event") || null,
                eventLocation: eventBlock.getAttribute("data-section") || null,
                eventContext: eventBlock.getAttribute("data-context") || null,
                eventCategory: eventBlock.getAttribute("data-event-category") || "Interactions"
            };
            this.gaPush(clickEventData);
        }
    }
    handleScroll() {
        const currentPos = 100 * (window.scrollY / (this.scrollHeight - this.clientHeight));
        this.scrollEvt(currentPos);
    }
    /**
  * @param {number} scrollPos
  */ scrollEvt(scrollPos) {
        this.scrollGtm.forEach((point)=>{
            if (scrollPos >= point) {
                this.scrollGtm.delete(point);
                this.scrollEventPush(point);
            }
        });
    }
    /**
   * @param {number} scrolledPercent
   */ scrollEventPush(scrolledPercent) {
        const scrollEventData = {
            eventAction: "scroll",
            eventLabel: `scrollPage-${scrolledPercent}%`,
            eventCategory: "Interactions"
        };
        this.gaPush(scrollEventData); // console.log(scrollEventData)
    }
    gaPush(eventData) {
        this.fullEventData = {
            eventLabel: eventData.eventLabel,
            eventLocation: eventData.eventLocation || null,
            eventContext: eventData.eventContext || null,
            hitsTime: Date.now(),
            requestId: (0, _utils.generateId)(7),
            firingOptions: "onesPerEvent",
            event: "event",
            eventStream: "flight",
            eventAction: eventData.eventAction,
            eventCategory: eventData.eventCategory,
            eventContent: eventData.eventContent || null,
            eventValue: eventData.eventValue || null,
            ecommerce: null,
            ecommerceAction: false,
            noninteraction: false
        };
        try {
            dataLayer.push(this.fullEventData);
        } catch (e) {
            console.log(this.fullEventData);
        }
    }
    addEventListeners() {
        document.body.addEventListener("click", this.handleClick.bind(this));
        document.addEventListener("scroll", ()=>{
            this.handleScroll();
        });
    }
}
exports.default = GTMEvents;

},{"./utils":"9NB6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"61zhl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>videoTeaser);
function videoTeaser() {
    const startedClass = "is_started";
    const savingClass = "device-suspended-mode";
    const offsetPause = 400;
    const selectorVideo = "#video-teaser";
    const vd = document.querySelector(selectorVideo);
    // change video source on HD
    // let hdVideoUrl = './video/video.h264.mp4'; ($(window).width()
    // >=960)? vd.src = hdVideoUrl : null;
    function playPause() {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        const state = vd.paused;
        if (+scrolled >= offsetPause && !state) vd.pause();
        else if (+scrolled < offsetPause && state) vd.play();
    }
    const readyPlay = vd.play();
    if (readyPlay !== undefined) readyPlay.then(()=>{
        window.addEventListener("scroll", playPause);
        vd.classList.add(startedClass);
    }).catch((err)=>{
        vd.classList.add(savingClass);
        document.body.addEventListener("touchstart", ()=>{
            if (!vd.playing) {
                vd.play();
                vd.classList.add(startedClass);
            }
            console.log("video started");
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3liWa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Share {
    constructor(){
        this.copyIcon = document.querySelector(".copy-icon");
        this.copyTooltip = document.querySelector(".copy-tooltip");
        this.okIcon = document.querySelector(".share__icon_ok");
        this.vkIcon = document.querySelector(".share__icon_vk");
        this.tgIcon = document.querySelector(".share__icon_tg");
    }
    init() {
        this.copyIcon?.addEventListener("click", ()=>this.copyLink());
        this.shareWithSocialMedia();
    }
    copyLink() {
        navigator.clipboard.writeText(window.location.href).then(()=>{
            this.copyTooltip.classList.add("opened");
            setTimeout(()=>{
                this.copyTooltip.classList.remove("opened");
            }, 2000);
        }).catch((err)=>{
            console.log("Something went wrong", err);
        });
    }
    shareWithSocialMedia() {
        const shareOptions = {
            url: window.location.href
        };
        this.vkIcon?.addEventListener("click", ()=>{
            this.vkIcon.href = `http://vk.com/share.php?url=${shareOptions.url}`;
        });
        this.okIcon?.addEventListener("click", ()=>{
            this.okIcon.href = `https://connect.ok.ru/offer?url=${shareOptions.url}`;
        });
        this.tgIcon?.addEventListener("click", ()=>{
            this.tgIcon.href = `https://t.me/share/url?url=${shareOptions.url}`;
        });
    }
}
exports.default = Share;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cc3E8":[function(require,module,exports) {
/**
 * Swiper 4.3.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 5, 2018
 */ !function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    var e = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null;
        },
        querySelectorAll: function() {
            return [];
        },
        getElementById: function() {
            return null;
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            };
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return [];
                }
            };
        },
        location: {
            hash: ""
        }
    } : document, t = "undefined" == typeof window ? {
        document: e,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this;
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return "";
                }
            };
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window, i = function(e) {
        for(var t = 0; t < e.length; t += 1)this[t] = e[t];
        return this.length = e.length, this;
    };
    function s(s, a) {
        var r = [], n = 0;
        if (s && !a && s instanceof i) return s;
        if (s) {
            if ("string" == typeof s) {
                var o, l, d = s.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for(0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1)r.push(l.childNodes[n]);
                } else for(o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [
                    e.getElementById(s.trim().split("#")[1])
                ], n = 0; n < o.length; n += 1)o[n] && r.push(o[n]);
            } else if (s.nodeType || s === t || s === e) r.push(s);
            else if (s.length > 0 && s[0].nodeType) for(n = 0; n < s.length; n += 1)r.push(s[n]);
        }
        return new i(r);
    }
    function a(e) {
        for(var t = [], i = 0; i < e.length; i += 1)-1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
    }
    s.fn = i.prototype, s.Class = i, s.Dom7 = i;
    var r = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for(var t = e.split(" "), i = 0; i < t.length; i += 1)for(var s = 0; s < this.length; s += 1)void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this;
        },
        removeClass: function(e) {
            for(var t = e.split(" "), i = 0; i < t.length; i += 1)for(var s = 0; s < this.length; s += 1)void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this;
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function(e) {
            for(var t = e.split(" "), i = 0; i < t.length; i += 1)for(var s = 0; s < this.length; s += 1)void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this;
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for(var s = 0; s < this.length; s += 1)if (2 === i.length) this[s].setAttribute(e, t);
            else for(var a in e)this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this;
        },
        removeAttr: function(e) {
            for(var t = 0; t < this.length; t += 1)this[t].removeAttribute(e);
            return this;
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for(var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this;
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0;
            }
        },
        transform: function(e) {
            for(var t = 0; t < this.length; t += 1){
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e;
            }
            return this;
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for(var t = 0; t < this.length; t += 1){
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e;
            }
            return this;
        },
        on: function() {
            for(var e, t = [], i = arguments.length; i--;)t[i] = arguments[i];
            var a = t[0], r = t[1], n = t[2], o = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);
                    else for(var a = s(t).parents(), o = 0; o < a.length; o += 1)s(a[o]).is(r) && n.apply(a[o], i);
                }
            }
            function d(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
            }
            "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
            for(var h, p = a.split(" "), c = 0; c < this.length; c += 1){
                var u = this[c];
                if (r) for(h = 0; h < p.length; h += 1){
                    var v = p[h];
                    u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
                        listener: n,
                        proxyListener: l
                    }), u.addEventListener(v, l, o);
                }
                else for(h = 0; h < p.length; h += 1){
                    var f = p[h];
                    u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
                        listener: n,
                        proxyListener: d
                    }), u.addEventListener(f, d, o);
                }
            }
            return this;
        },
        off: function() {
            for(var e, t = [], i = arguments.length; i--;)t[i] = arguments[i];
            var s = t[0], a = t[1], r = t[2], n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for(var o = s.split(" "), l = 0; l < o.length; l += 1)for(var d = o[l], h = 0; h < this.length; h += 1){
                var p = this[h], c = void 0;
                if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for(var u = c.length - 1; u >= 0; u -= 1){
                    var v = c[u];
                    r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1));
                }
            }
            return this;
        },
        trigger: function() {
            for(var i = [], s = arguments.length; s--;)i[s] = arguments[s];
            for(var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)for(var o = a[n], l = 0; l < this.length; l += 1){
                var d = this[l], h = void 0;
                try {
                    h = new t.CustomEvent(o, {
                        detail: r,
                        bubbles: !0,
                        cancelable: !0
                    });
                } catch (t) {
                    (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r;
                }
                d.dom7EventData = i.filter(function(e, t) {
                    return t > 0;
                }), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData;
            }
            return this;
        },
        transitionEnd: function(e) {
            var t, i = [
                "webkitTransitionEnd",
                "transitionend"
            ], s = this;
            function a(r) {
                if (r.target === this) for(e.call(this, r), t = 0; t < i.length; t += 1)s.off(i[t], a);
            }
            if (e) for(t = 0; t < i.length; t += 1)s.on(i[t], a);
            return this;
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        offset: function() {
            if (this.length > 0) {
                var i = this[0], s = i.getBoundingClientRect(), a = e.body, r = i.clientTop || a.clientTop || 0, n = i.clientLeft || a.clientLeft || 0, o = i === t ? t.scrollY : i.scrollTop, l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: s.top + o - r,
                    left: s.left + l - n
                };
            }
            return null;
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for(s = 0; s < this.length; s += 1)for(var a in e)this[s].style[a] = e[a];
                    return this;
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for(s = 0; s < this.length; s += 1)this[s].style[e] = i;
                return this;
            }
            return this;
        },
        each: function(e) {
            if (!e) return this;
            for(var t = 0; t < this.length; t += 1)if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for(var t = 0; t < this.length; t += 1)this[t].innerHTML = e;
            return this;
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for(var t = 0; t < this.length; t += 1)this[t].textContent = e;
            return this;
        },
        is: function(a) {
            var r, n, o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for(r = s(a), n = 0; n < r.length; n += 1)if (r[n] === o) return !0;
                return !1;
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for(r = a.nodeType ? [
                    a
                ] : a, n = 0; n < r.length; n += 1)if (r[n] === o) return !0;
                return !1;
            }
            return !1;
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for(e = 0; null !== (t = t.previousSibling);)1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [
                this[t]
            ] : [
                this[e]
            ]);
        },
        append: function() {
            for(var t, s = [], a = arguments.length; a--;)s[a] = arguments[a];
            for(var r = 0; r < s.length; r += 1){
                t = s[r];
                for(var n = 0; n < this.length; n += 1)if ("string" == typeof t) {
                    var o = e.createElement("div");
                    for(o.innerHTML = t; o.firstChild;)this[n].appendChild(o.firstChild);
                } else if (t instanceof i) for(var l = 0; l < t.length; l += 1)this[n].appendChild(t[l]);
                else this[n].appendChild(t);
            }
            return this;
        },
        prepend: function(t) {
            var s, a;
            for(s = 0; s < this.length; s += 1)if ("string" == typeof t) {
                var r = e.createElement("div");
                for(r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1)this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
            } else if (t instanceof i) for(a = 0; a < t.length; a += 1)this[s].insertBefore(t[a], this[s].childNodes[0]);
            else this[s].insertBefore(t, this[s].childNodes[0]);
            return this;
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([
                this[0].nextElementSibling
            ]) : new i([]) : this[0].nextElementSibling ? new i([
                this[0].nextElementSibling
            ]) : new i([]) : new i([]);
        },
        nextAll: function(e) {
            var t = [], a = this[0];
            if (!a) return new i([]);
            for(; a.nextElementSibling;){
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
            }
            return new i(t);
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([
                    t.previousElementSibling
                ]) : new i([]) : t.previousElementSibling ? new i([
                    t.previousElementSibling
                ]) : new i([]);
            }
            return new i([]);
        },
        prevAll: function(e) {
            var t = [], a = this[0];
            if (!a) return new i([]);
            for(; a.previousElementSibling;){
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
            }
            return new i(t);
        },
        parent: function(e) {
            for(var t = [], i = 0; i < this.length; i += 1)null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t));
        },
        parents: function(e) {
            for(var t = [], i = 0; i < this.length; i += 1)for(var r = this[i].parentNode; r;)e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return s(a(t));
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function(e) {
            for(var t = [], s = 0; s < this.length; s += 1)for(var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1)t.push(a[r]);
            return new i(t);
        },
        children: function(e) {
            for(var t = [], r = 0; r < this.length; r += 1)for(var n = this[r].childNodes, o = 0; o < n.length; o += 1)e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t));
        },
        remove: function() {
            for(var e = 0; e < this.length; e += 1)this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        },
        add: function() {
            for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
            var i, a;
            for(i = 0; i < e.length; i += 1){
                var r = s(e[i]);
                for(a = 0; a < r.length; a += 1)this[this.length] = r[a], this.length += 1;
            }
            return this;
        },
        styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {};
        }
    };
    Object.keys(r).forEach(function(e) {
        s.fn[e] = r[e];
    });
    var n, o, l, d = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null;
                } catch (e) {}
                try {
                    delete t[e];
                } catch (e) {}
            });
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t);
        },
        now: function() {
            return Date.now();
        },
        getTranslate: function(e, i) {
            var s, a, r;
            void 0 === i && (i = "x");
            var n = t.getComputedStyle(e, null);
            return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(e) {
                return e.replace(",", ".");
            }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0;
        },
        parseUrlQuery: function(e) {
            var i, s, a, r, n = {}, o = e || t.location.href;
            if ("string" == typeof o && o.length) for(r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                return "" !== e;
            })).length, i = 0; i < r; i += 1)a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
            return n;
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
        },
        extend: function() {
            for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
            for(var i = Object(e[0]), s = 1; s < e.length; s += 1){
                var a = e[s];
                if (void 0 !== a && null !== a) for(var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1){
                    var l = r[n], h = Object.getOwnPropertyDescriptor(a, l);
                    void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l]);
                }
            }
            return i;
        }
    }, h = (l = e.createElement("div"), {
        touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
        pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
        prefixedPointerEvents: !!t.navigator.msPointerEnabled,
        transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
        transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (n = l.style, "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n),
        flexbox: function() {
            for(var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)if (t[i] in e) return !0;
            return !1;
        }(),
        observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
        passiveListener: function() {
            var e = !1;
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0;
                    }
                });
                t.addEventListener("testPassiveListener", null, i);
            } catch (e) {}
            return e;
        }(),
        gestures: "ongesturestart" in t
    }), p = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e]);
        });
    }, c = {
        components: {
            configurable: !0
        }
    };
    p.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
        }), s;
    }, p.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        return s.on(e, function i() {
            for(var a = [], r = arguments.length; r--;)a[r] = arguments[r];
            t.apply(s, a), s.off(e, i);
        }, i);
    }, p.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function(s, a) {
                s === t && i.eventsListeners[e].splice(a, 1);
            });
        }), i) : i;
    }, p.prototype.emit = function() {
        for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
        var i, s, a, r = this;
        return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e);
                }), t.forEach(function(e) {
                    e.apply(a, s);
                });
            }
        }), r) : r;
    }, p.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i];
            s.params && d.extend(e, s.params);
        });
    }, p.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i], a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach(function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i;
            }), s.on && t.on && Object.keys(s.on).forEach(function(e) {
                t.on(e, s.on[e]);
            }), s.create && s.create.bind(t)(a);
        });
    }, c.components.set = function(e) {
        this.use && this.use(e);
    }, p.installModule = function(e) {
        for(var t = [], i = arguments.length - 1; i-- > 0;)t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
            s.prototype[t] = e.proto[t];
        }), e.static && Object.keys(e.static).forEach(function(t) {
            s[t] = e.static[t];
        }), e.install && e.install.apply(s, t), s;
    }, p.use = function(e) {
        for(var t = [], i = arguments.length - 1; i-- > 0;)t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return s.installModule(e);
        }), s) : s.installModule.apply(s, [
            e
        ].concat(t));
    }, Object.defineProperties(p, c);
    var u = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }));
        },
        updateSlides: function() {
            var e = this.params, i = this.$wrapperEl, s = this.size, a = this.rtlTranslate, r = this.wrongRTL, n = this.virtual && e.virtual.enabled, o = n ? this.virtual.slides.length : this.slides.length, l = i.children("." + this.params.slideClass), p = n ? this.virtual.slides.length : l.length, c = [], u = [], v = [], f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length, b = this.snapGrid.length, w = e.spaceBetween, y = -f, x = 0, E = 0;
            if (void 0 !== s) {
                var T, S;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }), e.slidesPerColumn > 1 && (T = Math.floor(p / e.slidesPerColumn) === p / this.params.slidesPerColumn ? p : Math.ceil(p / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
                for(var C, M = e.slidesPerColumn, z = T / M, k = z - (e.slidesPerColumn * z - p), P = 0; P < p; P += 1){
                    S = 0;
                    var $ = l.eq(P);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0, I = void 0, D = void 0;
                        "column" === e.slidesPerColumnFill ? (D = P - (I = Math.floor(P / M)) * M, (I > k || I === k && D === M - 1) && (D += 1) >= M && (D = 0, I += 1), L = I + D * T / M, $.css({
                            "-webkit-box-ordinal-group": L,
                            "-moz-box-ordinal-group": L,
                            "-ms-flex-order": L,
                            "-webkit-order": L,
                            order: L
                        })) : I = P - (D = Math.floor(P / z)) * z, $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", I).attr("data-swiper-row", D);
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var O = t.getComputedStyle($[0], null), A = $[0].style.transform, G = $[0].style.webkitTransform;
                            A && ($[0].style.transform = "none"), G && ($[0].style.webkitTransform = "none"), S = this.isHorizontal() ? $[0].getBoundingClientRect().width + parseFloat(O.getPropertyValue("margin-left")) + parseFloat(O.getPropertyValue("margin-right")) : $[0].getBoundingClientRect().height + parseFloat(O.getPropertyValue("margin-top")) + parseFloat(O.getPropertyValue("margin-bottom")), A && ($[0].style.transform = A), G && ($[0].style.webkitTransform = G), e.roundLengths && (S = Math.floor(S));
                        } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), l[P] && (this.isHorizontal() ? l[P].style.width = S + "px" : l[P].style.height = S + "px");
                        l[P] && (l[P].swiperSlideSize = S), v.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== P && (y = y - s / 2 - w), 0 === P && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), E % e.slidesPerGroup == 0 && c.push(y), u.push(y)) : (e.roundLengths && (y = Math.floor(y)), E % e.slidesPerGroup == 0 && c.push(y), u.push(y), y = y + S + w), this.virtualSize += S + w, x = S, E += 1;
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }), h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : i.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : i.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                }), e.centeredSlides)) {
                    C = [];
                    for(var H = 0; H < c.length; H += 1){
                        var N = c[H];
                        e.roundLengths && (N = Math.floor(N)), c[H] < this.virtualSize + c[0] && C.push(N);
                    }
                    c = C;
                }
                if (!e.centeredSlides) {
                    C = [];
                    for(var B = 0; B < c.length; B += 1){
                        var X = c[B];
                        e.roundLengths && (X = Math.floor(X)), c[B] <= this.virtualSize - s && C.push(X);
                    }
                    c = C, Math.floor(this.virtualSize - s) - Math.floor(c[c.length - 1]) > 1 && c.push(this.virtualSize - s);
                }
                0 === c.length && (c = [
                    0
                ]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? l.css({
                    marginLeft: w + "px"
                }) : l.css({
                    marginRight: w + "px"
                }) : l.css({
                    marginBottom: w + "px"
                })), d.extend(this, {
                    slides: l,
                    snapGrid: c,
                    slidesGrid: u,
                    slidesSizesGrid: v
                }), p !== o && this.emit("slidesLengthChange"), c.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for(t = 0; t < Math.ceil(this.params.slidesPerView); t += 1){
                var a = this.activeIndex + t;
                if (a > this.slides.length) break;
                i.push(this.slides.eq(a)[0]);
            }
            else i.push(this.slides.eq(this.activeIndex)[0]);
            for(t = 0; t < i.length; t += 1)if (void 0 !== i[t]) {
                var r = i[t].offsetHeight;
                s = r > s ? r : s;
            }
            s && this.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function() {
            for(var e = this.slides, t = 0; t < e.length; t += 1)e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params, i = this.slides, s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e), i.removeClass(t.slideVisibleClass);
                for(var r = 0; r < i.length; r += 1){
                    var n = i[r], o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var l = -(a - n.swiperSlideOffset), d = l + this.slidesSizesGrid[r];
                        (l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass);
                    }
                    n.progress = s ? -o : o;
                }
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params, i = this.maxTranslate() - this.minTranslate(), s = this.progress, a = this.isBeginning, r = this.isEnd, n = a, o = r;
            0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), d.extend(this, {
                progress: s,
                isBeginning: a,
                isEnd: r
            }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s);
        },
        updateSlidesClasses: function() {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, n = this.activeIndex, o = this.realIndex, l = this.snapIndex, h = e;
            if (void 0 === h) {
                for(var p = 0; p < s.length; p += 1)void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
            }
            if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n) {
                var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                d.extend(this, {
                    snapIndex: t,
                    realIndex: c,
                    previousIndex: n,
                    activeIndex: h
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange");
            } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"));
        },
        updateClickedSlide: function(e) {
            var t = this.params, i = s(e.target).closest("." + t.slideClass)[0], a = !1;
            if (i) for(var r = 0; r < this.slides.length; r += 1)this.slides[r] === i && (a = !0);
            if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
        }
    };
    var v = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, i = this.rtlTranslate, s = this.translate, a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            var r = d.getTranslate(a[0], e);
            return i && (r = -r), r || 0;
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate, s = this.params, a = this.$wrapperEl, r = this.progress, n = 0, o = 0;
            this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? n : o;
            var l = this.maxTranslate() - this.minTranslate();
            (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
        },
        minTranslate: function() {
            return -this.snapGrid[0];
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
    };
    var f = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.params, a = this.previousIndex;
            s.autoHeight && this.updateAutoHeight();
            var r = t;
            if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                if ("reset" === r) return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.previousIndex;
            this.animating = !1, this.setTransition(0);
            var a = t;
            if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                if ("reset" === a) return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
            }
        }
    };
    var m = {
        slideTo: function(e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = this, r = e;
            r < 0 && (r = 0);
            var n = a.params, o = a.snapGrid, l = a.slidesGrid, d = a.previousIndex, p = a.activeIndex, c = a.rtlTranslate;
            if (a.animating && n.preventIntercationOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
            var v, f = -o[u];
            if (a.updateProgress(f), n.normalizeSlideIndex) for(var m = 0; m < l.length; m += 1)-Math.floor(100 * f) >= Math.floor(100 * l[m]) && (r = m);
            if (a.initialized && r !== p) {
                if (!a.allowSlideNext && f < a.translate && f < a.minTranslate()) return !1;
                if (!a.allowSlidePrev && f > a.translate && f > a.maxTranslate() && (p || 0) !== r) return !1;
            }
            return v = r > p ? "next" : r < p ? "prev" : "reset", c && -f === a.translate || !c && f === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(f), "reset" !== v && (a.transitionStart(i, v), a.transitionEnd(i, v)), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(f), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, v), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.transitionEnd(i, v));
            }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))) : (a.setTransition(0), a.setTranslate(f), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, v), a.transitionEnd(i, v)), !0);
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating;
            return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i);
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating, r = this.snapGrid, n = this.slidesGrid, o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
            }
            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var d, h = l(o ? this.translate : -this.translate), p = r.map(function(e) {
                return l(e);
            }), c = (n.map(function(e) {
                return l(e);
            }), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
            return void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.activeIndex, a = Math.floor(s / this.params.slidesPerGroup);
            if (a < this.snapGrid.length - 1) {
                var r = this.rtlTranslate ? this.translate : -this.translate, n = this.snapGrid[a];
                r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup);
            }
            return this.slideTo(s, e, t, i);
        },
        slideToClickedSlide: function() {
            var e, t = this, i = t.params, a = t.$wrapperEl, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, n = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
                    t.slideTo(n);
                })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
                    t.slideTo(n);
                })) : t.slideTo(n);
            } else t.slideTo(n);
        }
    };
    var g = {
        loopCreate: function() {
            var t = this, i = t.params, a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for(var o = 0; o < n; o += 1){
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l);
                    }
                    r = a.children("." + i.slideClass);
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [], h = [];
            r.each(function(e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e);
            });
            for(var p = 0; p < h.length; p += 1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for(var c = d.length - 1; c >= 0; c -= 1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function() {
            var e, t = this.params, i = this.activeIndex, s = this.slides, a = this.loopedSlides, r = this.allowSlidePrev, n = this.allowSlideNext, o = this.snapGrid, l = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var d = -o[i] - this.getTranslate();
            i < a ? (e = s.length - 3 * a + i, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i >= s.length - a) && (e = -s.length + i + a, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
            this.allowSlidePrev = r, this.allowSlideNext = n;
        },
        loopDestroy: function() {
            var e = this.$wrapperEl, t = this.params, i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index");
        }
    };
    var b = {
        setGrabCursor: function(e) {
            if (!(h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
            }
        },
        unsetGrabCursor: function() {
            h.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
        }
    };
    var w = {
        appendSlide: function(e) {
            var t = this.$wrapperEl, i = this.params;
            if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for(var s = 0; s < e.length; s += 1)e[s] && t.append(e[s]);
            else t.append(e);
            i.loop && this.loopCreate(), i.observer && h.observer || this.update();
        },
        prependSlide: function(e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length" in e) {
                for(var r = 0; r < e.length; r += 1)e[r] && i.prepend(e[r]);
                a = s + e.length;
            } else i.prepend(e);
            t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1);
        },
        addSlide: function(e, t) {
            var i = this.$wrapperEl, s = this.params, a = this.activeIndex;
            s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0) this.prependSlide(t);
            else if (e >= r) this.appendSlide(t);
            else {
                for(var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1){
                    var d = this.slides.eq(l);
                    d.remove(), o.unshift(d);
                }
                if ("object" == typeof t && "length" in t) {
                    for(var p = 0; p < t.length; p += 1)t[p] && i.append(t[p]);
                    n = a > e ? a + t.length : a;
                } else i.append(t);
                for(var c = 0; c < o.length; c += 1)i.append(o[c]);
                s.loop && this.loopCreate(), s.observer && h.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
            }
        },
        removeSlide: function(e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length" in e) {
                for(var n = 0; n < e.length; n += 1)a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                r = Math.max(r, 0);
            } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
            t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
        },
        removeAllSlides: function() {
            for(var e = [], t = 0; t < this.slides.length; t += 1)e.push(t);
            this.removeSlide(e);
        }
    }, y = function() {
        var i = t.navigator.userAgent, s = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: t.cordova || t.phonegap,
            phonegap: t.cordova || t.phonegap
        }, a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), r = i.match(/(Android);?[\s\/]+([\d.]+)?/), n = i.match(/(iPad).*OS\s([\d_]+)/), o = i.match(/(iPod)(.*OS\s([\d_]+))?/), l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (s.os = "windows", s.osVersion = a[2], s.windows = !0), r && !a && (s.os = "android", s.osVersion = r[2], s.android = !0, s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0), (n || l || o) && (s.os = "ios", s.ios = !0), l && !o && (s.osVersion = l[2].replace(/_/g, "."), s.iphone = !0), n && (s.osVersion = n[2].replace(/_/g, "."), s.ipad = !0), o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, s.iphone = !0), s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), s.desktop = !(s.os || s.android || s.webView), s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), s.os && "ios" === s.os) {
            var d = s.osVersion.split("."), h = e.querySelector('meta[name="viewport"]');
            s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0;
        }
        return s.pixelRatio = t.devicePixelRatio || 1, s;
    }();
    function x() {
        var e = this.params, t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext, s = this.allowSlidePrev, a = this.snapGrid;
            if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight();
            } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
            this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
        }
    }
    var E = {
        attachEvents: function() {
            var i = this.params, a = this.touchEvents, r = this.el, n = this.wrapperEl;
            this.onTouchStart = (function(i) {
                var a = this.touchEventsData, r = this.params, n = this.touches;
                if (!this.animating || !r.preventIntercationOnTransition) {
                    var o = i;
                    if (o.originalEvent && (o = o.originalEvent), a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved)) {
                        if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
                        else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
                            n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                            var l = n.currentX, h = n.currentY;
                            if (!y.ios || y.cordova || !r.iOSEdgeSwipeDetection || !(l <= r.iOSEdgeSwipeThreshold || l >= t.screen.width - r.iOSEdgeSwipeThreshold)) {
                                if (d.extend(a, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), n.startX = l, n.startY = h, a.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
                                    var p = !0;
                                    s(o.target).is(a.formElements) && (p = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(), p && this.allowTouchMove && o.preventDefault();
                                }
                                this.emit("touchStart", o);
                            }
                        }
                    }
                }
            }).bind(this), this.onTouchMove = (function(t) {
                var i = this.touchEventsData, a = this.params, r = this.touches, n = this.rtlTranslate, o = t;
                if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
                    if (!i.isTouchEvent || "mousemove" !== o.type) {
                        var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX, h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        if (o.preventedByNestedSwiper) return r.startX = l, void (r.startY = h);
                        if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (d.extend(r, {
                            startX: l,
                            startY: h,
                            currentX: l,
                            currentY: h
                        }), i.touchStartTime = d.now()));
                        if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) {
                            if (this.isVertical()) {
                                if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
                            } else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate()) return;
                        }
                        if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
                        if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                            r.currentX = l, r.currentY = h;
                            var p, c = r.currentX - r.startX, u = r.currentY - r.startY;
                            if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                            else if (i.startMoving) {
                                this.allowClick = !1, o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
                                var v = this.isHorizontal() ? c : u;
                                r.diff = v, v *= a.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                                var f = !0, m = a.resistanceRatio;
                                if (a.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                    if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
                                }
                                a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                    position: r[this.isHorizontal() ? "startX" : "startY"],
                                    time: i.touchStartTime
                                }), i.velocities.push({
                                    position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                    time: d.now()
                                })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
                            }
                        }
                    }
                } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
            }).bind(this), this.onTouchEnd = (function(e) {
                var t = this, i = t.touchEventsData, s = t.params, a = t.touches, r = t.rtlTranslate, n = t.$wrapperEl, o = t.slidesGrid, l = t.snapGrid, h = e;
                if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
                s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p, c = d.now(), u = c - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function() {
                    t && !t.destroyed && t.emit("click", h);
                }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function() {
                    t.destroyed || (t.allowClick = !0);
                }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (s.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var v = i.velocities.pop(), f = i.velocities.pop(), m = v.position - f.position, g = v.time - f.time;
                            t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0);
                        } else t.velocity = 0;
                        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var b = 1e3 * s.freeModeMomentumRatio, w = t.velocity * b, y = t.translate + w;
                        r && (y = -y);
                        var x, E, T = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0);
                        else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0);
                        else if (s.freeModeSticky) {
                            for(var C, M = 0; M < l.length; M += 1)if (l[M] > -y) {
                                C = M;
                                break;
                            }
                            y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1]);
                        }
                        if (E && t.once("transitionEnd", function() {
                            t.loopFix();
                        }), 0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                        else if (s.freeModeSticky) return void t.slideToClosest();
                        s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), n.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd();
                            }));
                        })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd();
                        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                } else {
                    for(var z = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup)void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (z = P, k = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (z = P, k = o[o.length - 1] - o[o.length - 2]);
                    var $ = (p - o[z]) / k;
                    if (u > s.longSwipesMs) {
                        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && ($ >= s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)), "prev" === t.swipeDirection && ($ > 1 - s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z));
                    } else {
                        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(z + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(z);
                    }
                }
            }).bind(this), this.onClick = (function(e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
            }).bind(this);
            var o = "container" === i.touchEventsTarget ? r : n, l = !!i.nested;
            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                if (h.touch) {
                    var p = !("touchstart" !== a.start || !h.passiveListener || !i.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    o.addEventListener(a.start, this.onTouchStart, p), o.addEventListener(a.move, this.onTouchMove, h.passiveListener ? {
                        passive: !1,
                        capture: l
                    } : l), o.addEventListener(a.end, this.onTouchEnd, p);
                }
                (i.simulateTouch && !y.ios && !y.android || i.simulateTouch && !h.touch && y.ios) && (o.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1));
            } else o.addEventListener(a.start, this.onTouchStart, !1), e.addEventListener(a.move, this.onTouchMove, l), e.addEventListener(a.end, this.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0), this.on(y.ios || y.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x, !0);
        },
        detachEvents: function() {
            var t = this.params, i = this.touchEvents, s = this.el, a = this.wrapperEl, r = "container" === t.touchEventsTarget ? s : a, n = !!t.nested;
            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                if (h.touch) {
                    var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.removeEventListener(i.start, this.onTouchStart, o), r.removeEventListener(i.move, this.onTouchMove, n), r.removeEventListener(i.end, this.onTouchEnd, o);
                }
                (t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1));
            } else r.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off(y.ios || y.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x);
        }
    };
    var T = {
        setBreakpoint: function() {
            var e = this.activeIndex, t = this.initialized, i = this.loopedSlides;
            void 0 === i && (i = 0);
            var s = this.params, a = s.breakpoints;
            if (a && (!a || 0 !== Object.keys(a).length)) {
                var r = this.getBreakpoint(a);
                if (r && this.currentBreakpoint !== r) {
                    var n = r in a ? a[r] : this.originalParams, o = s.loop && n.slidesPerView !== s.slidesPerView;
                    d.extend(this.params, n), d.extend(this, {
                        allowTouchMove: this.params.allowTouchMove,
                        allowSlideNext: this.params.allowSlideNext,
                        allowSlidePrev: this.params.allowSlidePrev
                    }), this.currentBreakpoint = r, o && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", n);
                }
            }
        },
        getBreakpoint: function(e) {
            if (e) {
                var i = !1, s = [];
                Object.keys(e).forEach(function(e) {
                    s.push(e);
                }), s.sort(function(e, t) {
                    return parseInt(e, 10) - parseInt(t, 10);
                });
                for(var a = 0; a < s.length; a += 1){
                    var r = s[a];
                    r >= t.innerWidth && !i && (i = r);
                }
                return i || "max";
            }
        }
    }, S = function() {
        var e;
        return {
            isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
            isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        };
    }();
    var C = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventIntercationOnTransition: !1,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }, M = {
        update: u,
        translate: v,
        transition: f,
        slide: m,
        loop: g,
        grabCursor: b,
        manipulation: w,
        events: E,
        breakpoints: T,
        checkOverflow: {
            checkOverflow: function() {
                var e = this.isLocked;
                this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update());
            }
        },
        classes: {
            addClasses: function() {
                var e = this.classNames, t = this.params, i = this.rtl, s = this.$el, a = [];
                a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function(i) {
                    e.push(t.containerModifierClass + i);
                }), s.addClass(e.join(" "));
            },
            removeClasses: function() {
                var e = this.$el, t = this.classNames;
                e.removeClass(t.join(" "));
            }
        },
        images: {
            loadImage: function(e, i, s, a, r, n) {
                var o;
                function l() {
                    n && n();
                }
                e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l();
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for(var i = 0; i < e.imagesToLoad.length; i += 1){
                    var s = e.imagesToLoad[i];
                    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
                }
            }
        }
    }, z = {}, k = function(e) {
        function t() {
            for(var i, a, r, n = [], o = arguments.length; o--;)n[o] = arguments[o];
            1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (a = (i = n)[0], r = i[1]), r || (r = {}), r = d.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(M).forEach(function(e) {
                Object.keys(M[e]).forEach(function(i) {
                    t.prototype[i] || (t.prototype[i] = M[e][i]);
                });
            });
            var l = this;
            void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
                var t = l.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0], s = t.params[i];
                    if ("object" != typeof s) return;
                    if (!(i in r && "enabled" in s)) return;
                    !0 === r[i] && (r[i] = {
                        enabled: !0
                    }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
                        enabled: !1
                    });
                }
            });
            var p = d.extend({}, C);
            l.useModulesParams(p), l.params = d.extend({}, p, z, r), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, r), l.$ = s;
            var c = s(l.params.el);
            if (a = c[0]) {
                if (c.length > 1) {
                    var u = [];
                    return c.each(function(e, i) {
                        var s = d.extend({}, r, {
                            el: i
                        });
                        u.push(new t(s));
                    }), u;
                }
                a.swiper = l, c.data("swiper", l);
                var v, f, m = c.children("." + l.params.wrapperClass);
                return d.extend(l, {
                    $el: c,
                    el: a,
                    $wrapperEl: m,
                    wrapperEl: m[0],
                    classNames: [],
                    slides: s(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === l.params.direction;
                    },
                    isVertical: function() {
                        return "vertical" === l.params.direction;
                    },
                    rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                    rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                    wrongRTL: "-webkit-box" === m.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEvents: (v = [
                        "touchstart",
                        "touchmove",
                        "touchend"
                    ], f = [
                        "mousedown",
                        "mousemove",
                        "mouseup"
                    ], h.pointerEvents ? f = [
                        "pointerdown",
                        "pointermove",
                        "pointerup"
                    ] : h.prefixedPointerEvents && (f = [
                        "MSPointerDown",
                        "MSPointerMove",
                        "MSPointerUp"
                    ]), l.touchEventsTouch = {
                        start: v[0],
                        move: v[1],
                        end: v[2]
                    }, l.touchEventsDesktop = {
                        start: f[0],
                        move: f[1],
                        end: f[2]
                    }, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: d.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), l.useModules(), l.params.init && l.init(), l;
            }
        }
        e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
        var i = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return t.prototype.slidesPerViewDynamic = function() {
            var e = this.params, t = this.slides, i = this.slidesGrid, s = this.size, a = this.activeIndex, r = 1;
            if (e.centeredSlides) {
                for(var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                for(var d = a - 1; d >= 0; d -= 1)t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0));
            } else for(var h = a + 1; h < t.length; h += 1)i[h] - i[a] < s && (r += 1);
            return r;
        }, t.prototype.update = function() {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid, i = e.params;
                i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
            }
            function s() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate, i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
            }
        }, t.prototype.init = function() {
            this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
        }, t.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var i = this, s = i.params, a = i.$el, r = i.$wrapperEl, n = i.slides;
            return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([
                s.slideVisibleClass,
                s.slideActiveClass,
                s.slideNextClass,
                s.slidePrevClass
            ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                i.off(e);
            }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0, null);
        }, t.extendDefaults = function(e) {
            d.extend(z, e);
        }, i.extendedDefaults.get = function() {
            return z;
        }, i.defaults.get = function() {
            return C;
        }, i.Class.get = function() {
            return e;
        }, i.$.get = function() {
            return s;
        }, Object.defineProperties(t, i), t;
    }(p), P = {
        name: "device",
        proto: {
            device: y
        },
        static: {
            device: y
        }
    }, $ = {
        name: "support",
        proto: {
            support: h
        },
        static: {
            support: h
        }
    }, L = {
        name: "browser",
        proto: {
            browser: S
        },
        static: {
            browser: S
        }
    }, I = {
        name: "resize",
        create: function() {
            var e = this;
            d.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange");
                    }
                }
            });
        },
        on: {
            init: function() {
                t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler);
            },
            destroy: function() {
                t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
            }
        }
    }, D = {
        func: t.MutationObserver || t.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var i = this, s = new D.func(function(e) {
                e.forEach(function(e) {
                    i.emit("observerUpdate", e);
                });
            });
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), i.observer.observers.push(s);
        },
        init: function() {
            if (h.observer && this.params.observer) {
                if (this.params.observeParents) for(var e = this.$el.parents(), t = 0; t < e.length; t += 1)this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                    childList: !1
                }), this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                });
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect();
            }), this.observer.observers = [];
        }
    }, O = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1
        },
        create: function() {
            d.extend(this, {
                observer: {
                    init: D.init.bind(this),
                    attach: D.attach.bind(this),
                    destroy: D.destroy.bind(this),
                    observers: []
                }
            });
        },
        on: {
            init: function() {
                this.observer.init();
            },
            destroy: function() {
                this.observer.destroy();
            }
        }
    }, A = {
        update: function(e) {
            var t = this, i = t.params, s = i.slidesPerView, a = i.slidesPerGroup, r = i.centeredSlides, n = t.virtual, o = n.from, l = n.to, h = n.slides, p = n.slidesGrid, c = n.renderSlide, u = n.offset;
            t.updateActiveIndex();
            var v, f, m, g = t.activeIndex || 0;
            v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a, m = Math.floor(s / 2) + a) : (f = s + (a - 1), m = a);
            var b = Math.max((g || 0) - m, 0), w = Math.min((g || 0) + f, h.length - 1), y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
            function x() {
                t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
            }
            if (d.extend(t.virtual, {
                from: b,
                to: w,
                offset: y,
                slidesGrid: t.slidesGrid
            }), o === b && l === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress();
            if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                offset: y,
                from: b,
                to: w,
                slides: function() {
                    for(var e = [], t = b; t <= w; t += 1)e.push(h[t]);
                    return e;
                }()
            }), void x();
            var E = [], T = [];
            if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
            else for(var S = o; S <= l; S += 1)(S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
            for(var C = 0; C < h.length; C += 1)C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C)));
            T.forEach(function(e) {
                t.$wrapperEl.append(c(h[e], e));
            }), E.sort(function(e, t) {
                return e < t;
            }).forEach(function(e) {
                t.$wrapperEl.prepend(c(h[e], e));
            }), t.$wrapperEl.children(".swiper-slide").css(v, y + "px"), x();
        },
        renderSlide: function(e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
            var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a;
        },
        appendSlide: function(e) {
            this.virtual.slides.push(e), this.virtual.update(!0);
        },
        prependSlide: function(e) {
            if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
                var t = this.virtual.cache, i = {};
                Object.keys(t).forEach(function(e) {
                    i[e + 1] = t[e];
                }), this.virtual.cache = i;
            }
            this.virtual.update(!0), this.slideNext(0);
        }
    }, G = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null
            }
        },
        create: function() {
            d.extend(this, {
                virtual: {
                    update: A.update.bind(this),
                    appendSlide: A.appendSlide.bind(this),
                    prependSlide: A.prependSlide.bind(this),
                    renderSlide: A.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            });
        },
        on: {
            beforeInit: function() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {
                        watchSlidesProgress: !0
                    };
                    d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update();
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update();
            }
        }
    }, H = {
        handle: function(i) {
            var s = this.rtlTranslate, a = i;
            a.originalEvent && (a = a.originalEvent);
            var r = a.keyCode || a.charCode;
            if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r)) return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                    var n = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                    var o = t.innerWidth, l = t.innerHeight, d = this.$el.offset();
                    s && (d.left -= this.$el[0].scrollLeft);
                    for(var h = [
                        [
                            d.left,
                            d.top
                        ],
                        [
                            d.left + this.width,
                            d.top
                        ],
                        [
                            d.left,
                            d.top + this.height
                        ],
                        [
                            d.left + this.width,
                            d.top + this.height
                        ]
                    ], p = 0; p < h.length; p += 1){
                        var c = h[p];
                        c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
                    }
                    if (!n) return;
                }
                this.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === r && !s || 37 === r && s) && this.slideNext(), (37 === r && !s || 39 === r && s) && this.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === r && this.slideNext(), 38 === r && this.slidePrev()), this.emit("keyPress", r);
            }
        },
        enable: function() {
            this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
        },
        disable: function() {
            this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
        }
    }, N = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            d.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: H.enable.bind(this),
                    disable: H.disable.bind(this),
                    handle: H.handle.bind(this)
                }
            });
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable();
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable();
            }
        }
    };
    var B = {
        lastScrollTime: d.now(),
        event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
            var t = "onwheel" in e;
            if (!t) {
                var i = e.createElement("div");
                i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
            }
            return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
        }() ? "wheel" : "mousewheel",
        normalize: function(e) {
            var t = 0, i = 0, s = 0, a = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            };
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0;
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1;
        },
        handle: function(e) {
            var i = e, s = this, a = s.params.mousewheel;
            if (!s.mouseEntered && !a.releaseOnEdges) return !0;
            i.originalEvent && (i = i.originalEvent);
            var r = 0, n = s.rtlTranslate ? -1 : 1, o = B.normalize(i);
            if (a.forceToAxis) {
                if (s.isHorizontal()) {
                    if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                    r = o.pixelX * n;
                } else {
                    if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                    r = o.pixelY;
                }
            } else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
            if (0 === r) return !0;
            if (a.invert && (r = -r), s.params.freeMode) {
                s.params.loop && s.loopFix();
                var l = s.getTranslate() + r * a.sensitivity, h = s.isBeginning, p = s.isEnd;
                if (l >= s.minTranslate() && (l = s.minTranslate()), l <= s.maxTranslate() && (l = s.maxTranslate()), s.setTransition(0), s.setTranslate(l), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(function() {
                    s.slideToClosest();
                }, 300)), s.emit("scroll", i), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(), l === s.minTranslate() || l === s.maxTranslate()) return !0;
            } else {
                if (d.now() - s.mousewheel.lastScrollTime > 60) {
                    if (r < 0) {
                        if (s.isEnd && !s.params.loop || s.animating) {
                            if (a.releaseOnEdges) return !0;
                        } else s.slideNext(), s.emit("scroll", i);
                    } else if (s.isBeginning && !s.params.loop || s.animating) {
                        if (a.releaseOnEdges) return !0;
                    } else s.slidePrev(), s.emit("scroll", i);
                }
                s.mousewheel.lastScrollTime = (new t.Date).getTime();
            }
            return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1;
        },
        enable: function() {
            if (!B.event) return !1;
            if (this.mousewheel.enabled) return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(B.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
        },
        disable: function() {
            if (!B.event) return !1;
            if (!this.mousewheel.enabled) return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(B.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
        }
    }, X = {
        update: function() {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation, i = t.$nextEl, s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
            }
        },
        init: function() {
            var e, t, i = this, a = i.params.navigation;
            (a.nextEl || a.prevEl) && (a.nextEl && (e = s(a.nextEl), i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))), a.prevEl && (t = s(a.prevEl), i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))), e && e.length > 0 && e.on("click", function(e) {
                e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext();
            }), t && t.length > 0 && t.on("click", function(e) {
                e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev();
            }), d.extend(i.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }));
        },
        destroy: function() {
            var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
            t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass));
        }
    }, Y = {
        update: function() {
            var e = this.rtl, t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, r = this.pagination.$el, n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function(e, a) {
                        var r = s(a), n = r.index();
                        n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
                    });
                    else if (h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
                        for(var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1)h.eq(u).addClass(t.bulletActiveClass + "-main");
                        p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                    }
                    if (t.dynamicBullets) {
                        var v = Math.min(h.length, t.dynamicMainBullets + 4), f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize, m = e ? "right" : "left";
                        h.css(this.isHorizontal() ? m : "top", f + "px");
                    }
                }
                if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
                    var g;
                    g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var b = (i + 1) / n, w = 1, y = 1;
                    "horizontal" === g ? w = b : y = b, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(this.params.speed);
                }
                "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
            }
        },
        render: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, i = this.pagination.$el, s = "";
                if ("bullets" === e.type) {
                    for(var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
            }
        },
        init: function() {
            var e = this, t = e.params.pagination;
            if (t.el) {
                var i = s(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function(t) {
                    t.preventDefault();
                    var i = s(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                }), d.extend(e.pagination, {
                    $el: i,
                    el: i[0]
                }));
            }
        },
        destroy: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
            }
        }
    }, V = {
        setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = this.rtlTranslate, i = this.progress, s = e.dragSize, a = e.trackSize, r = e.$dragEl, n = e.$el, o = this.params.scrollbar, l = s, d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                    n[0].style.opacity = 0, n.transition(400);
                }, 1e3));
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
        },
        updateSize: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = e.$dragEl, i = e.$el;
                t[0].style.width = "", t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, n = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: n,
                    dragSize: s
                }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
            }
        },
        setDragPosition: function(e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize;
            t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
        },
        onDragStart: function(e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el, r = i.$dragEl;
            this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e);
        },
        onDragMove: function(e) {
            var t = this.scrollbar, i = this.$wrapperEl, s = t.$el, a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
        },
        onDragEnd: function(e) {
            var t = this.params.scrollbar, i = this.scrollbar.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function() {
                i.css("opacity", 0), i.transition(400);
            }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
        },
        enableDraggable: function() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar, i = this.touchEvents, s = this.touchEventsDesktop, a = this.params, r = t.$el[0], n = !(!h.passiveListener || !a.passiveListener) && {
                    passive: !1,
                    capture: !1
                }, o = !(!h.passiveListener || !a.passiveListener) && {
                    passive: !0,
                    capture: !1
                };
                h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.scrollbar.onDragStart, n), e.addEventListener("mousemove", this.scrollbar.onDragMove, n), e.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, o));
            }
        },
        disableDraggable: function() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar, i = this.touchEvents, s = this.touchEventsDesktop, a = this.params, r = t.$el[0], n = !(!h.passiveListener || !a.passiveListener) && {
                    passive: !1,
                    capture: !1
                }, o = !(!h.passiveListener || !a.passiveListener) && {
                    passive: !0,
                    capture: !1
                };
                h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n), e.removeEventListener("mousemove", this.scrollbar.onDragMove, n), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o));
            }
        },
        init: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.$el, i = this.params.scrollbar, a = s(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                var r = a.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), d.extend(e, {
                    $el: a,
                    el: a[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), i.draggable && e.enableDraggable();
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable();
        }
    }, R = {
        setTransform: function(e, t) {
            var i = this.rtl, a = s(e), r = i ? -1 : 1, n = a.attr("data-swiper-parallax") || "0", o = a.attr("data-swiper-parallax-x"), l = a.attr("data-swiper-parallax-y"), d = a.attr("data-swiper-parallax-scale"), h = a.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", void 0 !== h && null !== h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                a[0].style.opacity = p;
            }
            if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
            else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
            }
        },
        setTranslate: function() {
            var e = this, t = e.$el, i = e.slides, a = e.progress, r = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                e.parallax.setTransform(i, a);
            }), i.each(function(t, i) {
                var n = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                    e.parallax.setTransform(i, n);
                });
            });
        },
        setTransition: function(e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                var a = s(i), r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (r = 0), a.transition(r);
            });
        }
    }, F = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, s = e.targetTouches[1].pageX, a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
        },
        onGestureStart: function(e) {
            var t = this.params.zoom, i = this.zoom, a = i.gesture;
            if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, a.scaleStart = F.getDistanceBetweenTouches(e);
            }
            a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
        },
        onGestureChange: function(e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!h.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, s.scaleMove = F.getDistanceBetweenTouches(e);
            }
            s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!h.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
        },
        onTouchStart: function(e) {
            var t = this.zoom, i = t.gesture, s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
        },
        onTouchMove: function(e) {
            var t = this.zoom, i = t.gesture, s = t.image, a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var r = s.width * t.scale, n = s.height * t.scale;
                if (!(r < i.slideWidth && n < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
                    }
                    e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom, t = e.gesture, i = e.image, s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                i.isTouched = !1, i.isMoved = !1;
                var a = 300, r = 300, n = s.x * a, o = i.currentX + n, l = s.y * r, d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o, i.currentY = d;
                var p = i.width * e.scale, c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1);
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in: function(e) {
            var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom, w = this.params.zoom, y = b.gesture, x = b.image;
            (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = r * b.scale, n < c && (n = c), n > v && (n = v), o < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
        },
        out: function() {
            var e = this.zoom, t = this.params.zoom, i = e.gesture;
            i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
        },
        enable: function() {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
            }
        },
        disable: function() {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
            }
        }
    }, W = {
        loadInSlide: function(e, t) {
            void 0 === t && (t = !0);
            var i = this, a = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e), n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function(e, n) {
                    var o = s(n);
                    o.addClass(a.loadingClass);
                    var l = o.attr("data-background"), d = o.attr("data-src"), h = o.attr("data-srcset"), p = o.attr("data-sizes");
                    i.loadImage(o[0], d || l, h, p, !1, function() {
                        if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                var e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(i.params.slideDuplicateClass)) {
                                    var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(s.index(), !1);
                                } else {
                                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(n.index(), !1);
                                }
                            }
                            i.emit("lazyImageReady", r[0], o[0]);
                        }
                    }), i.emit("lazyImageLoad", r[0], o[0]);
                });
            }
        },
        load: function() {
            var e = this, t = e.$wrapperEl, i = e.params, a = e.slides, r = e.activeIndex, n = e.virtual && i.virtual.enabled, o = i.lazy, l = i.slidesPerView;
            function d(e) {
                if (n) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                } else if (a[e]) return !0;
                return !1;
            }
            function h(e) {
                return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
            }
            if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(t, i) {
                var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                e.lazy.loadInSlide(a);
            });
            else if (l > 1) for(var p = r; p < r + l; p += 1)d(p) && e.lazy.loadInSlide(p);
            else e.lazy.loadInSlide(r);
            if (o.loadPrevNext) {
                if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    for(var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1)d(m) && e.lazy.loadInSlide(m);
                    for(var g = f; g < r; g += 1)d(g) && e.lazy.loadInSlide(g);
                } else {
                    var b = t.children("." + i.slideNextClass);
                    b.length > 0 && e.lazy.loadInSlide(h(b));
                    var w = t.children("." + i.slidePrevClass);
                    w.length > 0 && e.lazy.loadInSlide(h(w));
                }
            }
        }
    }, q = {
        LinearSpline: function(e, t) {
            var i, s, a, r, n, o = function(e, t) {
                for(s = -1, i = e.length; i - s > 1;)e[a = i + s >> 1] <= t ? s = a : i = a;
                return i;
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
            }, this;
        },
        getInterpolateFunction: function(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid, e.slidesGrid) : new q.LinearSpline(this.snapGrid, e.snapGrid));
        },
        setTranslate: function(e, t) {
            var i, s, a = this, r = a.controller.control;
            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            if (Array.isArray(r)) for(var o = 0; o < r.length; o += 1)r[o] !== t && r[o] instanceof k && n(r[o]);
            else r instanceof k && t !== r && n(r);
        },
        setTransition: function(e, t) {
            var i, s = this, a = s.controller.control;
            function r(t) {
                t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
                }));
            }
            if (Array.isArray(a)) for(i = 0; i < a.length; i += 1)a[i] !== t && a[i] instanceof k && r(a[i]);
            else a instanceof k && t !== a && r(a);
        }
    }, j = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"), e;
        },
        addElRole: function(e, t) {
            return e.attr("role", t), e;
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t), e;
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0), e;
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1), e;
        },
        onEnterKey: function(e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = s(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation: function() {
            if (!this.params.loop) {
                var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
            }
        },
        updatePagination: function() {
            var e = this, t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, a) {
                var r = s(a);
                e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
            });
        },
        init: function() {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
        },
        destroy: function() {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
        }
    }, K = {
        init: function() {
            if (this.params.history) {
                if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0, e.paths = K.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState));
            }
        },
        destroy: function() {
            this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function() {
            this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
        },
        getPathValues: function() {
            var e = t.location.pathname.slice(1).split("/").filter(function(e) {
                return "" !== e;
            }), i = e.length;
            return {
                key: e[i - 2],
                value: e[i - 1]
            };
        },
        setHistory: function(e, i) {
            if (this.history.initialized && this.params.history.enabled) {
                var s = this.slides.eq(i), a = K.slugify(s.attr("data-history"));
                t.location.pathname.includes(e) || (a = e + "/" + a);
                var r = t.history.state;
                r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
                    value: a
                }, null, a) : t.history.pushState({
                    value: a
                }, null, a));
            }
        },
        slugify: function(e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        },
        scrollToSlide: function(e, t, i) {
            if (t) for(var s = 0, a = this.slides.length; s < a; s += 1){
                var r = this.slides.eq(s);
                if (K.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                    var n = r.index();
                    this.slideTo(n, e, i);
                }
            }
            else this.slideTo(0, e, i);
        }
    }, U = {
        onHashCange: function() {
            var t = e.location.hash.replace("#", "");
            t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index());
        },
        setHash: function() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) {
                if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash"));
                else {
                    var i = this.slides.eq(this.activeIndex), s = i.attr("data-hash") || i.attr("data-history");
                    e.location.hash = s || "";
                }
            }
        },
        init: function() {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var i = e.location.hash.replace("#", "");
                if (i) for(var a = 0, r = this.slides.length; a < r; a += 1){
                    var n = this.slides.eq(a);
                    if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                        var o = n.index();
                        this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
                    }
                }
                this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange);
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange);
        }
    }, _ = {
        run: function() {
            var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
            }, i);
        },
        start: function() {
            return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
        },
        stop: function() {
            return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
        },
        pause: function(e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
        }
    }, Z = {
        setTranslate: function() {
            for(var e = this.slides, t = 0; t < e.length; t += 1){
                var i = this.slides.eq(t), s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s, s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: r
                }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
            }
        },
        setTransition: function(e) {
            var t = this, i = t.slides, s = t.$wrapperEl;
            if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd(function() {
                    if (!a && t && !t.destroyed) {
                        a = !0, t.animating = !1;
                        for(var e = [
                            "webkitTransitionEnd",
                            "transitionend"
                        ], i = 0; i < e.length; i += 1)s.trigger(e[i]);
                    }
                });
            }
        }
    }, Q = {
        setTranslate: function() {
            var e, t = this.$el, i = this.$wrapperEl, a = this.slides, r = this.width, n = this.height, o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, h = this.isHorizontal(), p = this.virtual && this.params.virtual.enabled, c = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                height: r + "px"
            })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
            for(var u = 0; u < a.length; u += 1){
                var v = a.eq(u), f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f, g = Math.floor(m / 360);
                o && (m = -m, g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0;
                f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
                    var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"), C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(C)), T.length && (T[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0));
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }), d.shadow) {
                if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var M = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90), z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2), k = d.shadowScale, P = d.shadowScale / z, $ = d.shadowOffset;
                    e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / P + "px) rotateX(-90deg)");
                }
            }
            var L = S.isSafari || S.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
        }
    }, J = {
        setTranslate: function() {
            for(var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1){
                var a = e.eq(i), r = a[0].progress;
                this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                var n = -180 * r, o = 0, l = -a[0].swiperSlideOffset, d = 0;
                if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"), p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0));
                }
                a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
            }
        },
        setTransition: function(e) {
            var t = this, i = t.slides, s = t.activeIndex, a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd(function() {
                    if (!r && t && !t.destroyed) {
                        r = !0, t.animating = !1;
                        for(var e = [
                            "webkitTransitionEnd",
                            "transitionend"
                        ], i = 0; i < e.length; i += 1)a.trigger(e[i]);
                    }
                });
            }
        }
    }, ee = {
        setTranslate: function() {
            for(var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1){
                var f = i.eq(u), m = r[u], g = (d - f[0].swiperSlideOffset - m / 2) / m * n.modifier, b = o ? p * g : 0, w = o ? 0 : p * g, y = -c * Math.abs(g), x = o ? 0 : n.stretch * g, E = o ? n.stretch * g : 0;
                Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (f.transform(T), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                    var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"), C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0);
                }
            }
            (h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%");
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
        }
    }, te = [
        P,
        $,
        L,
        I,
        O,
        G,
        N,
        {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                d.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: B.enable.bind(this),
                        disable: B.disable.bind(this),
                        handle: B.handle.bind(this),
                        handleMouseEnter: B.handleMouseEnter.bind(this),
                        handleMouseLeave: B.handleMouseLeave.bind(this),
                        lastScrollTime: d.now()
                    }
                });
            },
            on: {
                init: function() {
                    this.params.mousewheel.enabled && this.mousewheel.enable();
                },
                destroy: function() {
                    this.mousewheel.enabled && this.mousewheel.disable();
                }
            }
        },
        {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                d.extend(this, {
                    navigation: {
                        init: X.init.bind(this),
                        update: X.update.bind(this),
                        destroy: X.destroy.bind(this)
                    }
                });
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update();
                },
                toEdge: function() {
                    this.navigation.update();
                },
                fromEdge: function() {
                    this.navigation.update();
                },
                destroy: function() {
                    this.navigation.destroy();
                },
                click: function(e) {
                    var t = this.navigation, i = t.$nextEl, a = t.$prevEl;
                    !this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass));
                }
            }
        },
        {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e;
                    },
                    formatFractionTotal: function(e) {
                        return e;
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                d.extend(this, {
                    pagination: {
                        init: Y.init.bind(this),
                        render: Y.render.bind(this),
                        update: Y.update.bind(this),
                        destroy: Y.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                });
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update();
                },
                activeIndexChange: function() {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update();
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update());
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update());
                },
                destroy: function() {
                    this.pagination.destroy();
                },
                click: function(e) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass);
                }
            }
        },
        {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                d.extend(this, {
                    scrollbar: {
                        init: V.init.bind(this),
                        destroy: V.destroy.bind(this),
                        updateSize: V.updateSize.bind(this),
                        setTranslate: V.setTranslate.bind(this),
                        setTransition: V.setTransition.bind(this),
                        enableDraggable: V.enableDraggable.bind(this),
                        disableDraggable: V.disableDraggable.bind(this),
                        setDragPosition: V.setDragPosition.bind(this),
                        onDragStart: V.onDragStart.bind(this),
                        onDragMove: V.onDragMove.bind(this),
                        onDragEnd: V.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                });
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
                },
                update: function() {
                    this.scrollbar.updateSize();
                },
                resize: function() {
                    this.scrollbar.updateSize();
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize();
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate();
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e);
                },
                destroy: function() {
                    this.scrollbar.destroy();
                }
            }
        },
        {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                d.extend(this, {
                    parallax: {
                        setTransform: R.setTransform.bind(this),
                        setTranslate: R.setTranslate.bind(this),
                        setTransition: R.setTransition.bind(this)
                    }
                });
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0);
                },
                init: function() {
                    this.params.parallax && this.parallax.setTranslate();
                },
                setTranslate: function() {
                    this.params.parallax && this.parallax.setTranslate();
                },
                setTransition: function(e) {
                    this.params.parallax && this.parallax.setTransition(e);
                }
            }
        },
        {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this, t = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    }
                };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
                    t[i] = F[i].bind(e);
                }), d.extend(e, {
                    zoom: t
                });
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable();
                },
                destroy: function() {
                    this.zoom.disable();
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e);
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e);
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
                }
            }
        },
        {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                d.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: W.load.bind(this),
                        loadInSlide: W.loadInSlide.bind(this)
                    }
                });
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load();
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load();
                },
                transitionStart: function() {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load();
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
                }
            }
        },
        {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                d.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: q.getInterpolateFunction.bind(this),
                        setTranslate: q.setTranslate.bind(this),
                        setTransition: q.setTransition.bind(this)
                    }
                });
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t);
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t);
                }
            }
        },
        {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    a11y: {
                        liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(j).forEach(function(t) {
                    e.a11y[t] = j[t].bind(e);
                });
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation();
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation();
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination();
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy();
                }
            }
        },
        {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                d.extend(this, {
                    history: {
                        init: K.init.bind(this),
                        setHistory: K.setHistory.bind(this),
                        setHistoryPopState: K.setHistoryPopState.bind(this),
                        scrollToSlide: K.scrollToSlide.bind(this),
                        destroy: K.destroy.bind(this)
                    }
                });
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init();
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy();
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
                }
            }
        },
        {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                d.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: U.init.bind(this),
                        destroy: U.destroy.bind(this),
                        setHash: U.setHash.bind(this),
                        onHashCange: U.onHashCange.bind(this)
                    }
                });
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init();
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy();
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash();
                }
            }
        },
        {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: _.run.bind(e),
                        start: _.start.bind(e),
                        stop: _.stop.bind(e),
                        pause: _.pause.bind(e),
                        onTransitionEnd: function(t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                        }
                    }
                });
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && this.autoplay.start();
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop();
                }
            }
        },
        {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                d.extend(this, {
                    fadeEffect: {
                        setTranslate: Z.setTranslate.bind(this),
                        setTransition: Z.setTransition.bind(this)
                    }
                });
            },
            on: {
                beforeInit: function() {
                    if ("fade" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        d.extend(this.params, e), d.extend(this.originalParams, e);
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate();
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e);
                }
            }
        },
        {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                d.extend(this, {
                    cubeEffect: {
                        setTranslate: Q.setTranslate.bind(this),
                        setTransition: Q.setTransition.bind(this)
                    }
                });
            },
            on: {
                beforeInit: function() {
                    if ("cube" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        d.extend(this.params, e), d.extend(this.originalParams, e);
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate();
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e);
                }
            }
        },
        {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                d.extend(this, {
                    flipEffect: {
                        setTranslate: J.setTranslate.bind(this),
                        setTransition: J.setTransition.bind(this)
                    }
                });
            },
            on: {
                beforeInit: function() {
                    if ("flip" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        d.extend(this.params, e), d.extend(this.originalParams, e);
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate();
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e);
                }
            }
        },
        {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                d.extend(this, {
                    coverflowEffect: {
                        setTranslate: ee.setTranslate.bind(this),
                        setTransition: ee.setTransition.bind(this)
                    }
                });
            },
            on: {
                beforeInit: function() {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
                }
            }
        }
    ];
    return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(te), k;
}); //# sourceMappingURL=swiper.min.js.map

},{}]},["foZEJ","6UhZ3"], "6UhZ3", "parcelRequire052b")

//# sourceMappingURL=index.e7ac8232.js.map
