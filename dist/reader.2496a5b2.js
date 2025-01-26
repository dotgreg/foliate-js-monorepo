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
        globalObject
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
})({"dZ9vL":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "14b1899a2496a5b2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
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
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"37obo":[function(require,module,exports,__globalThis) {
var _viewJs = require("./view.js");
var _treeJs = require("./ui/tree.js");
var _menuJs = require("./ui/menu.js");
var _overlayerJs = require("./overlayer.js");
const getCSS = ({ spacing, justify, hyphenate })=>`
    @namespace epub "http://www.idpf.org/2007/ops";
    html {
        color-scheme: light dark;
        background-color: white;
        color: black;
    }
    
    /* https://github.com/whatwg/html/issues/5426 */
    @media (prefers-color-scheme: dark) {
        a:link {
            color: lightblue;
        }
    }
    p, li, blockquote, dd {
        line-height: ${spacing};
        text-align: ${justify ? 'justify' : 'start'};
        -webkit-hyphens: ${hyphenate ? 'auto' : 'manual'};
        hyphens: ${hyphenate ? 'auto' : 'manual'};
        -webkit-hyphenate-limit-before: 3;
        -webkit-hyphenate-limit-after: 2;
        -webkit-hyphenate-limit-lines: 2;
        hanging-punctuation: allow-end last;
        widows: 2;
    }
    /* prevent the above from overriding the align attribute */
    [align="left"] { text-align: left; }
    [align="right"] { text-align: right; }
    [align="center"] { text-align: center; }
    [align="justify"] { text-align: justify; }

    pre {
        white-space: pre-wrap !important;
    }
    aside[epub|type~="endnote"],
    aside[epub|type~="footnote"],
    aside[epub|type~="note"],
    aside[epub|type~="rearnote"] {
        display: none;
    }
}
`;
const $ = document.querySelector.bind(document);
const locales = 'en';
const percentFormat = new Intl.NumberFormat(locales, {
    style: 'percent'
});
const listFormat = new Intl.ListFormat(locales, {
    style: 'short',
    type: 'conjunction'
});
const formatLanguageMap = (x)=>{
    if (!x) return '';
    if (typeof x === 'string') return x;
    const keys = Object.keys(x);
    return x[keys[0]];
};
const formatOneContributor = (contributor)=>typeof contributor === 'string' ? contributor : formatLanguageMap(contributor?.name);
const formatContributor = (contributor)=>Array.isArray(contributor) ? listFormat.format(contributor.map(formatOneContributor)) : formatOneContributor(contributor);
class Reader {
    #tocView;
    style = {
        spacing: 1.4,
        justify: true,
        hyphenate: true
    };
    annotations = new Map();
    annotationsByValue = new Map();
    closeSideBar() {
        $('#dimming-overlay').classList.remove('show');
        $('#side-bar').classList.remove('show');
    }
    constructor(){
        window.readerView = this;
        $('#side-bar-button').addEventListener('click', ()=>{
            $('#dimming-overlay').classList.add('show');
            $('#side-bar').classList.add('show');
        });
        $('#dimming-overlay').addEventListener('click', ()=>this.closeSideBar());
        const menu = (0, _menuJs.createMenu)([
            {
                name: 'layout',
                label: 'Layout',
                type: 'radio',
                items: [
                    [
                        'Paginated',
                        'paginated'
                    ],
                    [
                        'Scrolled',
                        'scrolled'
                    ]
                ],
                onclick: (value)=>{
                    this.view?.renderer.setAttribute('flow', value);
                }
            }
        ]);
        menu.element.classList.add('menu');
        $('#menu-button').append(menu.element);
        $('#menu-button > button').addEventListener('click', ()=>menu.element.classList.toggle('show'));
        menu.groups.layout.select('paginated');
    }
    async open(file) {
        this.view = document.createElement('foliate-view');
        document.body.append(this.view);
        await this.view.open(file);
        this.view.addEventListener('load', this.#onLoad.bind(this));
        this.view.addEventListener('relocate', this.#onRelocate.bind(this));
        const { book } = this.view;
        this.view.renderer.setStyles?.(getCSS(this.style));
        this.view.renderer.next();
        $('#header-bar').style.visibility = 'visible';
        $('#nav-bar').style.visibility = 'visible';
        $('#left-button').addEventListener('click', ()=>this.view.goLeft());
        $('#right-button').addEventListener('click', ()=>this.view.goRight());
        const slider = $('#progress-slider');
        slider.dir = book.dir;
        slider.addEventListener('input', (e)=>{
            return this.view.goToFraction(parseFloat(e.target.value));
        });
        for (const fraction of this.view.getSectionFractions()){
            const option = document.createElement('option');
            option.value = fraction;
            $('#tick-marks').append(option);
        }
        document.addEventListener('keydown', this.#handleKeydown.bind(this));
        const title = formatLanguageMap(book.metadata?.title) || 'Untitled Book';
        document.title = title;
        $('#side-bar-title').innerText = title;
        $('#side-bar-author').innerText = formatContributor(book.metadata?.author);
        Promise.resolve(book.getCover?.())?.then((blob)=>blob ? $('#side-bar-cover').src = URL.createObjectURL(blob) : null);
        const toc = book.toc;
        if (toc) {
            this.#tocView = (0, _treeJs.createTOCView)(toc, (href)=>{
                this.view.goTo(href).catch((e)=>console.error(e));
                this.closeSideBar();
            });
            $('#toc-view').append(this.#tocView.element);
        }
        // load and show highlights embedded in the file by Calibre
        const bookmarks = await book.getCalibreBookmarks?.();
        if (bookmarks) {
            const { fromCalibreHighlight } = await require("91769181b8b6a652");
            for (const obj of bookmarks)if (obj.type === 'highlight') {
                const value = fromCalibreHighlight(obj);
                const color = obj.style.which;
                const note = obj.notes;
                const annotation = {
                    value,
                    color,
                    note
                };
                const list = this.annotations.get(obj.spine_index);
                if (list) list.push(annotation);
                else this.annotations.set(obj.spine_index, [
                    annotation
                ]);
                this.annotationsByValue.set(value, annotation);
            }
            this.view.addEventListener('create-overlay', (e)=>{
                const { index } = e.detail;
                const list = this.annotations.get(index);
                if (list) for (const annotation of list)this.view.addAnnotation(annotation);
            });
            this.view.addEventListener('draw-annotation', (e)=>{
                const { draw, annotation } = e.detail;
                const { color } = annotation;
                draw((0, _overlayerJs.Overlayer).highlight, {
                    color
                });
            });
            this.view.addEventListener('show-annotation', (e)=>{
                const annotation = this.annotationsByValue.get(e.detail.value);
                if (annotation.note) alert(annotation.note);
            });
        }
    }
    #handleKeydown(event) {
        const k = event.key;
        if (k === 'ArrowLeft' || k === 'h') this.view.goLeft();
        else if (k === 'ArrowRight' || k === 'l') this.view.goRight();
    }
    #onLoad({ detail: { doc } }) {
        doc.addEventListener('keydown', this.#handleKeydown.bind(this));
    }
    #onRelocate({ detail }) {
        const { fraction, location: location1, tocItem, pageItem } = detail;
        const percent = percentFormat.format(fraction);
        const loc = pageItem ? `Page ${pageItem.label}` : `Loc ${location1.current}`;
        const slider = $('#progress-slider');
        slider.style.visibility = 'visible';
        slider.value = fraction;
        slider.title = `${percent} \xb7 ${loc}`;
        if (tocItem?.href) this.#tocView?.setCurrentHref?.(tocItem.href);
    }
}
const open = async (file)=>{
    // document.body.removeChild($('#drop-target'))
    // $('#drop-target').innerHtml = ''
    // find parent of drop-target and remove it
    const parent = $('#drop-target').parentNode;
    parent.removeChild($('#drop-target'));
    const reader = new Reader();
    globalThis.reader = reader;
    await reader.open(file);
};
const dragOverHandler = (e)=>e.preventDefault();
const dropHandler = (e)=>{
    e.preventDefault();
    const item = Array.from(e.dataTransfer.items).find((item)=>item.kind === 'file');
    if (item) {
        const entry = item.webkitGetAsEntry();
        open(entry.isFile ? item.getAsFile() : entry).catch((e)=>console.error(e));
    }
};
const dropTarget = $('#drop-target');
dropTarget.addEventListener('drop', dropHandler);
dropTarget.addEventListener('dragover', dragOverHandler);
$('#file-input').addEventListener('change', (e)=>open(e.target.files[0]).catch((e)=>console.error(e)));
$('#file-button').addEventListener('click', ()=>$('#file-input').click());
const params = new URLSearchParams(location.search);
const url = params.get('url');
if (url) open(url).catch((e)=>console.error(e));
// window.bookUrlToLoad = "http://127.0.0.1:8080/_books/Les.Origines.Du.Totalitarisme.Eichmann.A.Jerusalem.2021.Hannah.Arendt(1).epub"
if (window.bookUrlToLoad) {
    console.log('window.bookUrlToLoad', window.bookUrlToLoad);
    open(window.bookUrlToLoad).catch((e)=>console.error(e));
} else dropTarget.style.visibility = 'visible';

},{"./view.js":"de63B","./ui/tree.js":"eYr8X","./ui/menu.js":"ioQIV","./overlayer.js":"e1nX1","91769181b8b6a652":"c810w"}],"de63B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResponseError", ()=>ResponseError);
parcelHelpers.export(exports, "NotFoundError", ()=>NotFoundError);
parcelHelpers.export(exports, "UnsupportedTypeError", ()=>UnsupportedTypeError);
parcelHelpers.export(exports, "makeBook", ()=>makeBook);
parcelHelpers.export(exports, "View", ()=>View);
var _epubcfiJs = require("./epubcfi.js");
var _progressJs = require("./progress.js");
var _overlayerJs = require("./overlayer.js");
var _textWalkerJs = require("./text-walker.js");
// await import('./paginator.js')
// const { configure, ZipReader, BlobReader, TextWriter, BlobWriter } =        await import('./vendor/zip.js')
// const { EPUB } = await import('./epub.js')
// const { searchMatcher } = await import('./search.js')
var _paginatorJs = require("./paginator.js");
var _epubJs = require("./epub.js");
var _searchJs = require("./search.js");
var _ttsJs = require("./tts.js");
var _zipJs = require("./vendor/zip.js");
const SEARCH_PREFIX = 'foliate-search:';
const isZip = async (file)=>{
    const arr = new Uint8Array(await file.slice(0, 4).arrayBuffer());
    return arr[0] === 0x50 && arr[1] === 0x4b && arr[2] === 0x03 && arr[3] === 0x04;
};
const isPDF = async (file)=>{
    const arr = new Uint8Array(await file.slice(0, 5).arrayBuffer());
    return arr[0] === 0x25 && arr[1] === 0x50 && arr[2] === 0x44 && arr[3] === 0x46 && arr[4] === 0x2d;
};
const isCBZ = ({ name, type })=>type === 'application/vnd.comicbook+zip' || name.endsWith('.cbz');
const isFB2 = ({ name, type })=>type === 'application/x-fictionbook+xml' || name.endsWith('.fb2');
const isFBZ = ({ name, type })=>type === 'application/x-zip-compressed-fb2' || name.endsWith('.fb2.zip') || name.endsWith('.fbz');
const makeZipLoader = async (file)=>{
    (0, _zipJs.configure)({
        useWebWorkers: false
    });
    const reader = new (0, _zipJs.ZipReader)(new (0, _zipJs.BlobReader)(file));
    const entries = await reader.getEntries();
    const map = new Map(entries.map((entry)=>[
            entry.filename,
            entry
        ]));
    const load = (f)=>(name, ...args)=>map.has(name) ? f(map.get(name), ...args) : null;
    const loadText = load((entry)=>entry.getData(new (0, _zipJs.TextWriter)()));
    const loadBlob = load((entry, type)=>entry.getData(new (0, _zipJs.BlobWriter)(type)));
    const getSize = (name)=>map.get(name)?.uncompressedSize ?? 0;
    return {
        entries,
        loadText,
        loadBlob,
        getSize
    };
};
const getFileEntries = async (entry)=>entry.isFile ? entry : (await Promise.all(Array.from(await new Promise((resolve, reject)=>entry.createReader().readEntries((entries)=>resolve(entries), (error)=>reject(error))), getFileEntries))).flat();
const makeDirectoryLoader = async (entry)=>{
    const entries = await getFileEntries(entry);
    const files = await Promise.all(entries.map((entry)=>new Promise((resolve, reject)=>entry.file((file)=>resolve([
                    file,
                    entry.fullPath
                ]), (error)=>reject(error)))));
    const map = new Map(files.map(([file, path])=>[
            path.replace(entry.fullPath + '/', ''),
            file
        ]));
    const decoder = new TextDecoder();
    const decode = (x)=>x ? decoder.decode(x) : null;
    const getBuffer = (name)=>map.get(name)?.arrayBuffer() ?? null;
    const loadText = async (name)=>decode(await getBuffer(name));
    const loadBlob = (name)=>map.get(name);
    const getSize = (name)=>map.get(name)?.size ?? 0;
    return {
        loadText,
        loadBlob,
        getSize
    };
};
class ResponseError extends Error {
}
class NotFoundError extends Error {
}
class UnsupportedTypeError extends Error {
}
const fetchFile = async (url)=>{
    const res = await fetch(url);
    if (!res.ok) throw new ResponseError(`${res.status} ${res.statusText}`, {
        cause: res
    });
    return new File([
        await res.blob()
    ], new URL(res.url).pathname);
};
const makeBook = async (file)=>{
    if (typeof file === 'string') file = await fetchFile(file);
    let book;
    if (file.isDirectory) {
        const loader = await makeDirectoryLoader(file);
        book = await new (0, _epubJs.EPUB)(loader).init();
    } else if (!file.size) throw new NotFoundError('File not found');
    else if (await isZip(file)) {
        const loader = await makeZipLoader(file);
        if (isCBZ(file)) ;
        else if (isFBZ(file)) ;
        else book = await new (0, _epubJs.EPUB)(loader).init();
    } else await isPDF(file);
    if (!book) throw new UnsupportedTypeError('File type not supported');
    return book;
};
class CursorAutohider {
    #timeout;
    #el;
    #check;
    #state;
    constructor(el, check, state = {}){
        this.#el = el;
        this.#check = check;
        this.#state = state;
        if (this.#state.hidden) this.hide();
        this.#el.addEventListener('mousemove', ({ screenX, screenY })=>{
            // check if it actually moved
            if (screenX === this.#state.x && screenY === this.#state.y) return;
            this.#state.x = screenX, this.#state.y = screenY;
            this.show();
            if (this.#timeout) clearTimeout(this.#timeout);
            if (check()) this.#timeout = setTimeout(this.hide.bind(this), 1000);
        }, false);
    }
    cloneFor(el) {
        return new CursorAutohider(el, this.#check, this.#state);
    }
    hide() {
        this.#el.style.cursor = 'none';
        this.#state.hidden = true;
    }
    show() {
        this.#el.style.removeProperty('cursor');
        this.#state.hidden = false;
    }
}
class History extends EventTarget {
    #arr = [];
    #index = -1;
    pushState(x) {
        const last = this.#arr[this.#index];
        if (last === x || last?.fraction && last.fraction === x.fraction) return;
        this.#arr[++this.#index] = x;
        this.#arr.length = this.#index + 1;
        this.dispatchEvent(new Event('index-change'));
    }
    replaceState(x) {
        const index = this.#index;
        this.#arr[index] = x;
    }
    back() {
        const index = this.#index;
        if (index <= 0) return;
        const detail = {
            state: this.#arr[index - 1]
        };
        this.#index = index - 1;
        this.dispatchEvent(new CustomEvent('popstate', {
            detail
        }));
        this.dispatchEvent(new Event('index-change'));
    }
    forward() {
        const index = this.#index;
        if (index >= this.#arr.length - 1) return;
        const detail = {
            state: this.#arr[index + 1]
        };
        this.#index = index + 1;
        this.dispatchEvent(new CustomEvent('popstate', {
            detail
        }));
        this.dispatchEvent(new Event('index-change'));
    }
    get canGoBack() {
        return this.#index > 0;
    }
    get canGoForward() {
        return this.#index < this.#arr.length - 1;
    }
    clear() {
        this.#arr = [];
        this.#index = -1;
    }
}
const languageInfo = (lang)=>{
    if (!lang) return {};
    try {
        const canonical = Intl.getCanonicalLocales(lang)[0];
        const locale = new Intl.Locale(canonical);
        const isCJK = [
            'zh',
            'ja',
            'kr'
        ].includes(locale.language);
        const direction = (locale.getTextInfo?.() ?? locale.textInfo)?.direction;
        return {
            canonical,
            locale,
            isCJK,
            direction
        };
    } catch (e) {
        console.warn(e);
        return {};
    }
};
class View extends HTMLElement {
    #root = this.attachShadow({
        mode: 'closed'
    });
    #sectionProgress;
    #tocProgress;
    #pageProgress;
    #searchResults = new Map();
    #cursorAutohider = new CursorAutohider(this, ()=>this.hasAttribute('autohide-cursor'));
    isFixedLayout = false;
    lastLocation;
    history = new History();
    constructor(){
        super();
        this.history.addEventListener('popstate', ({ detail })=>{
            const resolved = this.resolveNavigation(detail.state);
            this.renderer.goTo(resolved);
        });
    }
    async open(book) {
        if (typeof book === 'string' || typeof book.arrayBuffer === 'function' || book.isDirectory) book = await makeBook(book);
        this.book = book;
        this.language = languageInfo(book.metadata?.language);
        if (book.splitTOCHref && book.getTOCFragment) {
            const ids = book.sections.map((s)=>s.id);
            this.#sectionProgress = new (0, _progressJs.SectionProgress)(book.sections, 1500, 1600);
            const splitHref = book.splitTOCHref.bind(book);
            const getFragment = book.getTOCFragment.bind(book);
            this.#tocProgress = new (0, _progressJs.TOCProgress)();
            await this.#tocProgress.init({
                toc: book.toc ?? [],
                ids,
                splitHref,
                getFragment
            });
            this.#pageProgress = new (0, _progressJs.TOCProgress)();
            await this.#pageProgress.init({
                toc: book.pageList ?? [],
                ids,
                splitHref,
                getFragment
            });
        }
        this.isFixedLayout = this.book.rendition?.layout === 'pre-paginated';
        if (this.isFixedLayout) ;
        else this.renderer = document.createElement('foliate-paginator');
        this.renderer.setAttribute('exportparts', 'head,foot,filter');
        this.renderer.addEventListener('load', (e)=>this.#onLoad(e.detail));
        this.renderer.addEventListener('relocate', (e)=>this.#onRelocate(e.detail));
        this.renderer.addEventListener('create-overlayer', (e)=>e.detail.attach(this.#createOverlayer(e.detail)));
        this.renderer.open(book);
        this.#root.append(this.renderer);
        if (book.sections.some((section)=>section.mediaOverlay)) {
            const activeClass = book.media.activeClass;
            const playbackActiveClass = book.media.playbackActiveClass;
            this.mediaOverlay = book.getMediaOverlay();
            let lastActive;
            this.mediaOverlay.addEventListener('highlight', (e)=>{
                const resolved = this.resolveNavigation(e.detail.text);
                this.renderer.goTo(resolved).then(()=>{
                    const { doc } = this.renderer.getContents().find((x)=>x.index = resolved.index);
                    const el = resolved.anchor(doc);
                    el.classList.add(activeClass);
                    if (playbackActiveClass) el.ownerDocument.documentElement.classList.add(playbackActiveClass);
                    lastActive = new WeakRef(el);
                });
            });
            this.mediaOverlay.addEventListener('unhighlight', ()=>{
                const el = lastActive?.deref();
                if (el) {
                    el.classList.remove(activeClass);
                    if (playbackActiveClass) el.ownerDocument.documentElement.classList.remove(playbackActiveClass);
                }
            });
        }
    }
    close() {
        this.renderer?.destroy();
        this.renderer?.remove();
        this.#sectionProgress = null;
        this.#tocProgress = null;
        this.#pageProgress = null;
        this.#searchResults = new Map();
        this.lastLocation = null;
        this.history.clear();
        this.tts = null;
        this.mediaOverlay = null;
    }
    goToTextStart() {
        return this.goTo(this.book.landmarks?.find((m)=>m.type.includes('bodymatter') || m.type.includes('text'))?.href ?? this.book.sections.findIndex((s)=>s.linear !== 'no'));
    }
    async init({ lastLocation, showTextStart }) {
        const resolved = lastLocation ? this.resolveNavigation(lastLocation) : null;
        if (resolved) {
            await this.renderer.goTo(resolved);
            this.history.pushState(lastLocation);
        } else if (showTextStart) await this.goToTextStart();
        else {
            this.history.pushState(0);
            await this.next();
        }
    }
    #emit(name, detail, cancelable) {
        return this.dispatchEvent(new CustomEvent(name, {
            detail,
            cancelable
        }));
    }
    #onRelocate({ reason, range, index, fraction, size }) {
        const progress = this.#sectionProgress?.getProgress(index, fraction, size) ?? {};
        const tocItem = this.#tocProgress?.getProgress(index, range);
        const pageItem = this.#pageProgress?.getProgress(index, range);
        const cfi = this.getCFI(index, range);
        this.lastLocation = {
            ...progress,
            tocItem,
            pageItem,
            cfi,
            range
        };
        if (reason === 'snap' || reason === 'page' || reason === 'scroll') this.history.replaceState(cfi);
        this.#emit('relocate', this.lastLocation);
    }
    #onLoad({ doc, index }) {
        // set language and dir if not already set
        doc.documentElement.lang ||= this.language.canonical ?? '';
        if (!this.language.isCJK) doc.documentElement.dir ||= this.language.direction ?? '';
        this.#handleLinks(doc, index);
        this.#cursorAutohider.cloneFor(doc.documentElement);
        this.#emit('load', {
            doc,
            index
        });
    }
    #handleLinks(doc, index) {
        const { book } = this;
        const section = book.sections[index];
        doc.addEventListener('click', (e)=>{
            const a = e.target.closest('a[href]');
            if (!a) return;
            e.preventDefault();
            const href_ = a.getAttribute('href');
            const href = section?.resolveHref?.(href_) ?? href_;
            if (book?.isExternal?.(href)) Promise.resolve(this.#emit('external-link', {
                a,
                href
            }, true)).then((x)=>x ? globalThis.open(href, '_blank') : null).catch((e)=>console.error(e));
            else Promise.resolve(this.#emit('link', {
                a,
                href
            }, true)).then((x)=>x ? this.goTo(href) : null).catch((e)=>console.error(e));
        });
    }
    async addAnnotation(annotation, remove) {
        const { value } = annotation;
        if (value.startsWith(SEARCH_PREFIX)) {
            const cfi = value.replace(SEARCH_PREFIX, '');
            const { index, anchor } = await this.resolveNavigation(cfi);
            const obj = this.#getOverlayer(index);
            if (obj) {
                const { overlayer, doc } = obj;
                if (remove) {
                    overlayer.remove(value);
                    return;
                }
                const range = doc ? anchor(doc) : anchor;
                overlayer.add(value, range, (0, _overlayerJs.Overlayer).outline);
            }
            return;
        }
        const { index, anchor } = await this.resolveNavigation(value);
        const obj = this.#getOverlayer(index);
        if (obj) {
            const { overlayer, doc } = obj;
            overlayer.remove(value);
            if (!remove) {
                const range = doc ? anchor(doc) : anchor;
                const draw = (func, opts)=>overlayer.add(value, range, func, opts);
                this.#emit('draw-annotation', {
                    draw,
                    annotation,
                    doc,
                    range
                });
            }
        }
        const label = this.#tocProgress.getProgress(index)?.label ?? '';
        return {
            index,
            label
        };
    }
    deleteAnnotation(annotation) {
        return this.addAnnotation(annotation, true);
    }
    #getOverlayer(index) {
        return this.renderer.getContents().find((x)=>x.index === index && x.overlayer);
    }
    #createOverlayer({ doc, index }) {
        const overlayer = new (0, _overlayerJs.Overlayer)();
        doc.addEventListener('click', (e)=>{
            const [value, range] = overlayer.hitTest(e);
            if (value && !value.startsWith(SEARCH_PREFIX)) this.#emit('show-annotation', {
                value,
                index,
                range
            });
        }, false);
        const list = this.#searchResults.get(index);
        if (list) for (const item of list)this.addAnnotation(item);
        this.#emit('create-overlay', {
            index
        });
        return overlayer;
    }
    async showAnnotation(annotation) {
        const { value } = annotation;
        const resolved = await this.goTo(value);
        if (resolved) {
            const { index, anchor } = resolved;
            const { doc } = this.#getOverlayer(index);
            const range = anchor(doc);
            this.#emit('show-annotation', {
                value,
                index,
                range
            });
        }
    }
    getCFI(index, range) {
        const baseCFI = this.book.sections[index].cfi ?? _epubcfiJs.fake.fromIndex(index);
        if (!range) return baseCFI;
        return _epubcfiJs.joinIndir(baseCFI, _epubcfiJs.fromRange(range));
    }
    resolveCFI(cfi) {
        if (this.book.resolveCFI) return this.book.resolveCFI(cfi);
        else {
            const parts = _epubcfiJs.parse(cfi);
            const index = _epubcfiJs.fake.toIndex((parts.parent ?? parts).shift());
            const anchor = (doc)=>_epubcfiJs.toRange(doc, parts);
            return {
                index,
                anchor
            };
        }
    }
    resolveNavigation(target) {
        try {
            if (typeof target === 'number') return {
                index: target
            };
            if (typeof target.fraction === 'number') {
                const [index, anchor] = this.#sectionProgress.getSection(target.fraction);
                return {
                    index,
                    anchor
                };
            }
            if (_epubcfiJs.isCFI.test(target)) return this.resolveCFI(target);
            return this.book.resolveHref(target);
        } catch (e) {
            console.error(e);
            console.error(`Could not resolve target ${target}`);
        }
    }
    async goTo(target) {
        const resolved = this.resolveNavigation(target);
        try {
            await this.renderer.goTo(resolved);
            this.history.pushState(target);
            return resolved;
        } catch (e) {
            console.error(e);
            console.error(`Could not go to ${target}`);
        }
    }
    async goToFraction(frac) {
        window.sectionProgress = this.#sectionProgress;
        const [index, anchor] = this.#sectionProgress.getSection(frac);
        await this.renderer.goTo({
            index,
            anchor
        });
        this.history.pushState({
            fraction: frac
        });
    }
    async select(target) {
        try {
            const obj = await this.resolveNavigation(target);
            await this.renderer.goTo({
                ...obj,
                select: true
            });
            this.history.pushState(target);
        } catch (e) {
            console.error(e);
            console.error(`Could not go to ${target}`);
        }
    }
    deselect() {
        for (const { doc } of this.renderer.getContents())doc.defaultView.getSelection().removeAllRanges();
    }
    getSectionFractions() {
        return (this.#sectionProgress?.sectionFractions ?? []).map((x)=>x + Number.EPSILON);
    }
    getProgressOf(index, range) {
        const tocItem = this.#tocProgress?.getProgress(index, range);
        const pageItem = this.#pageProgress?.getProgress(index, range);
        return {
            tocItem,
            pageItem
        };
    }
    async getTOCItemOf(target) {
        try {
            const { index, anchor } = await this.resolveNavigation(target);
            const doc = await this.book.sections[index].createDocument();
            const frag = anchor(doc);
            const isRange = frag instanceof Range;
            const range = isRange ? frag : doc.createRange();
            if (!isRange) range.selectNodeContents(frag);
            return this.#tocProgress.getProgress(index, range);
        } catch (e) {
            console.error(e);
            console.error(`Could not get ${target}`);
        }
    }
    async prev(distance) {
        await this.renderer.prev(distance);
    }
    async next(distance) {
        await this.renderer.next(distance);
    }
    goLeft() {
        return this.book.dir === 'rtl' ? this.next() : this.prev();
    }
    goRight() {
        return this.book.dir === 'rtl' ? this.prev() : this.next();
    }
    async *#searchSection(matcher, query, index) {
        const doc = await this.book.sections[index].createDocument();
        for (const { range, excerpt } of matcher(doc, query))yield {
            cfi: this.getCFI(index, range),
            excerpt
        };
    }
    async *#searchBook(matcher, query) {
        const { sections } = this.book;
        for (const [index, { createDocument }] of sections.entries()){
            if (!createDocument) continue;
            const doc = await createDocument();
            const subitems = Array.from(matcher(doc, query), ({ range, excerpt })=>({
                    cfi: this.getCFI(index, range),
                    excerpt
                }));
            const progress = (index + 1) / sections.length;
            yield {
                progress
            };
            if (subitems.length) yield {
                index,
                subitems
            };
        }
    }
    async *search(opts) {
        this.clearSearch();
        const { query, index } = opts;
        const matcher = (0, _searchJs.searchMatcher)((0, _textWalkerJs.textWalker), {
            defaultLocale: this.language,
            ...opts
        });
        const iter = index != null ? this.#searchSection(matcher, query, index) : this.#searchBook(matcher, query);
        const list = [];
        this.#searchResults.set(index, list);
        for await (const result of iter)if (result.subitems) {
            const list = result.subitems.map(({ cfi })=>({
                    value: SEARCH_PREFIX + cfi
                }));
            this.#searchResults.set(result.index, list);
            for (const item of list)this.addAnnotation(item);
            yield {
                label: this.#tocProgress.getProgress(result.index)?.label ?? '',
                subitems: result.subitems
            };
        } else {
            if (result.cfi) {
                const item = {
                    value: SEARCH_PREFIX + result.cfi
                };
                list.push(item);
                this.addAnnotation(item);
            }
            yield result;
        }
        yield 'done';
    }
    clearSearch() {
        for (const list of this.#searchResults.values())for (const item of list)this.deleteAnnotation(item);
        this.#searchResults.clear();
    }
    async initTTS() {
        const doc = this.renderer.getContents()[0].doc;
        console.log(333, doc);
        if (this.tts && this.tts.doc === doc) return;
        this.tts = new (0, _ttsJs.TTS)(doc, (0, _textWalkerJs.textWalker), (range)=>this.renderer.scrollToAnchor(range, true));
    }
    startMediaOverlay() {
        const { index } = this.renderer.getContents()[0];
        return this.mediaOverlay.start(index);
    }
}
customElements.define('foliate-view', View);

},{"./epubcfi.js":"5oxNx","./progress.js":"kRxkL","./overlayer.js":"e1nX1","./text-walker.js":"k8DSx","@parcel/transformer-js/src/esmodule-helpers.js":"3Ha98","./paginator.js":"aZDVJ","./epub.js":"klfU1","./search.js":"c41dc","./tts.js":"f6bus","./vendor/zip.js":"dtr1O"}],"5oxNx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCFI", ()=>isCFI);
parcelHelpers.export(exports, "joinIndir", ()=>joinIndir);
parcelHelpers.export(exports, "parse", ()=>parse);
parcelHelpers.export(exports, "collapse", ()=>collapse);
parcelHelpers.export(exports, "compare", ()=>compare);
parcelHelpers.export(exports, "fromRange", ()=>fromRange);
parcelHelpers.export(exports, "toRange", ()=>toRange);
parcelHelpers.export(exports, "fromElements", ()=>fromElements);
parcelHelpers.export(exports, "toElement", ()=>toElement);
parcelHelpers.export(exports, "fake", ()=>fake);
parcelHelpers.export(exports, "fromCalibrePos", ()=>fromCalibrePos);
parcelHelpers.export(exports, "fromCalibreHighlight", ()=>fromCalibreHighlight);
const findIndices = (arr, f)=>arr.map((x, i, a)=>f(x, i, a) ? i : null).filter((x)=>x != null);
const splitAt = (arr, is)=>[
        -1,
        ...is,
        arr.length
    ].reduce(({ xs, a }, b)=>({
            xs: xs?.concat([
                arr.slice(a + 1, b)
            ]) ?? [],
            a: b
        }), {}).xs;
const concatArrays = (a, b)=>a.slice(0, -1).concat([
        a[a.length - 1].concat(b[0])
    ]).concat(b.slice(1));
const isNumber = /\d/;
const isCFI = /^epubcfi\((.*)\)$/;
const escapeCFI = (str)=>str.replace(/[\^[\](),;=]/g, '^$&');
const wrap = (x)=>isCFI.test(x) ? x : `epubcfi(${x})`;
const unwrap = (x)=>x.match(isCFI)?.[1] ?? x;
const lift = (f)=>(...xs)=>`epubcfi(${f(...xs.map((x)=>x.match(isCFI)?.[1] ?? x))})`;
const joinIndir = lift((...xs)=>xs.join('!'));
const tokenizer = (str)=>{
    const tokens = [];
    let state, escape, value = '';
    const push = (x)=>(tokens.push(x), state = null, value = '');
    const cat = (x)=>(value += x, escape = false);
    for (const char of Array.from(str.trim()).concat('')){
        if (char === '^' && !escape) {
            escape = true;
            continue;
        }
        if (state === '!') push([
            '!'
        ]);
        else if (state === ',') push([
            ','
        ]);
        else if (state === '/' || state === ':') {
            if (isNumber.test(char)) {
                cat(char);
                continue;
            } else push([
                state,
                parseInt(value)
            ]);
        } else if (state === '~') {
            if (isNumber.test(char) || char === '.') {
                cat(char);
                continue;
            } else push([
                '~',
                parseFloat(value)
            ]);
        } else if (state === '@') {
            if (char === ':') {
                push([
                    '@',
                    parseFloat(value)
                ]);
                state = '@';
                continue;
            }
            if (isNumber.test(char) || char === '.') {
                cat(char);
                continue;
            } else push([
                '@',
                parseFloat(value)
            ]);
        } else if (state === '[') {
            if (char === ';' && !escape) {
                push([
                    '[',
                    value
                ]);
                state = ';';
            } else if (char === ',' && !escape) {
                push([
                    '[',
                    value
                ]);
                state = '[';
            } else if (char === ']' && !escape) push([
                '[',
                value
            ]);
            else cat(char);
            continue;
        } else if (state?.startsWith(';')) {
            if (char === '=' && !escape) {
                state = `;${value}`;
                value = '';
            } else if (char === ';' && !escape) {
                push([
                    state,
                    value
                ]);
                state = ';';
            } else if (char === ']' && !escape) push([
                state,
                value
            ]);
            else cat(char);
            continue;
        }
        if (char === '/' || char === ':' || char === '~' || char === '@' || char === '[' || char === '!' || char === ',') state = char;
    }
    return tokens;
};
const findTokens = (tokens, x)=>findIndices(tokens, ([t])=>t === x);
const parser = (tokens)=>{
    const parts = [];
    let state;
    for (const [type, val] of tokens){
        if (type === '/') parts.push({
            index: val
        });
        else {
            const last = parts[parts.length - 1];
            if (type === ':') last.offset = val;
            else if (type === '~') last.temporal = val;
            else if (type === '@') last.spatial = (last.spatial ?? []).concat(val);
            else if (type === ';s') last.side = val;
            else if (type === '[') {
                if (state === '/' && val) last.id = val;
                else {
                    last.text = (last.text ?? []).concat(val);
                    continue;
                }
            }
        }
        state = type;
    }
    return parts;
};
// split at step indirections, then parse each part
const parserIndir = (tokens)=>splitAt(tokens, findTokens(tokens, '!')).map(parser);
const parse = (cfi)=>{
    const tokens = tokenizer(unwrap(cfi));
    const commas = findTokens(tokens, ',');
    if (!commas.length) return parserIndir(tokens);
    const [parent, start, end] = splitAt(tokens, commas).map(parserIndir);
    return {
        parent,
        start,
        end
    };
};
const partToString = ({ index, id, offset, temporal, spatial, text, side })=>{
    const param = side ? `;s=${side}` : '';
    return `/${index}` + (id ? `[${escapeCFI(id)}${param}]` : '') + (offset != null && index % 2 ? `:${offset}` : '') + (temporal ? `~${temporal}` : '') + (spatial ? `@${spatial.join(':')}` : '') + (text || !id && side ? '[' + (text?.map(escapeCFI)?.join(',') ?? '') + param + ']' : '');
};
const toInnerString = (parsed)=>parsed.parent ? [
        parsed.parent,
        parsed.start,
        parsed.end
    ].map(toInnerString).join(',') : parsed.map((parts)=>parts.map(partToString).join('')).join('!');
const toString = (parsed)=>wrap(toInnerString(parsed));
const collapse = (x, toEnd)=>typeof x === 'string' ? toString(collapse(parse(x), toEnd)) : x.parent ? concatArrays(x.parent, x[toEnd ? 'end' : 'start']) : x;
// create range CFI from two CFIs
const buildRange = (from, to)=>{
    if (typeof from === 'string') from = parse(from);
    if (typeof to === 'string') to = parse(to);
    from = collapse(from);
    to = collapse(to, true);
    // ranges across multiple documents are not allowed; handle local paths only
    const localFrom = from[from.length - 1], localTo = to[to.length - 1];
    const localParent = [], localStart = [], localEnd = [];
    let pushToParent = true;
    const len = Math.max(localFrom.length, localTo.length);
    for(let i = 0; i < len; i++){
        const a = localFrom[i], b = localTo[i];
        pushToParent &&= a?.index === b?.index && !a?.offset && !b?.offset;
        if (pushToParent) localParent.push(a);
        else {
            if (a) localStart.push(a);
            if (b) localEnd.push(b);
        }
    }
    // copy non-local paths from `from`
    const parent = from.slice(0, -1).concat([
        localParent
    ]);
    return toString({
        parent,
        start: [
            localStart
        ],
        end: [
            localEnd
        ]
    });
};
const compare = (a, b)=>{
    if (typeof a === 'string') a = parse(a);
    if (typeof b === 'string') b = parse(b);
    if (a.start || b.start) return compare(collapse(a), collapse(b)) || compare(collapse(a, true), collapse(b, true));
    for(let i = 0; i < Math.max(a.length, b.length); i++){
        const p = a[i] ?? [], q = b[i] ?? [];
        const maxIndex = Math.max(p.length, q.length) - 1;
        for(let i = 0; i <= maxIndex; i++){
            const x = p[i], y = q[i];
            if (!x) return -1;
            if (!y) return 1;
            if (x.index > y.index) return 1;
            if (x.index < y.index) return -1;
            if (i === maxIndex) {
                // TODO: compare temporal & spatial offsets
                if (x.offset > y.offset) return 1;
                if (x.offset < y.offset) return -1;
            }
        }
    }
    return 0;
};
const isTextNode = ({ nodeType })=>nodeType === 3 || nodeType === 4;
const isElementNode = ({ nodeType })=>nodeType === 1;
const getChildNodes = (node, filter)=>{
    const nodes = Array.from(node.childNodes)// "content other than element and character data is ignored"
    .filter((node)=>isTextNode(node) || isElementNode(node));
    return filter ? nodes.map((node)=>{
        const accept = filter(node);
        if (accept === NodeFilter.FILTER_REJECT) return null;
        else if (accept === NodeFilter.FILTER_SKIP) return getChildNodes(node, filter);
        else return node;
    }).flat().filter((x)=>x) : nodes;
};
// child nodes are organized such that the result is always
//     [element, text, element, text, ..., element],
// regardless of the actual structure in the document;
// so multiple text nodes need to be combined, and nonexistent ones counted;
// see "Step Reference to Child Element or Character Data (/)" in EPUB CFI spec
const indexChildNodes = (node, filter)=>{
    const nodes = getChildNodes(node, filter).reduce((arr, node)=>{
        let last = arr[arr.length - 1];
        if (!last) arr.push(node);
        else if (isTextNode(node)) {
            if (Array.isArray(last)) last.push(node);
            else if (isTextNode(last)) arr[arr.length - 1] = [
                last,
                node
            ];
            else arr.push(node);
        } else if (isElementNode(last)) arr.push(null, node);
        else arr.push(node);
        return arr;
    }, []);
    // "the first chunk is located before the first child element"
    if (isElementNode(nodes[0])) nodes.unshift('first');
    // "the last chunk is located after the last child element"
    if (isElementNode(nodes[nodes.length - 1])) nodes.push('last');
    // "'virtual' elements"
    nodes.unshift('before') // "0 is a valid index"
    ;
    nodes.push('after') // "n+2 is a valid index"
    ;
    return nodes;
};
const partsToNode = (node, parts, filter)=>{
    const { id } = parts[parts.length - 1];
    if (id) {
        const el = node.ownerDocument.getElementById(id);
        if (el) return {
            node: el,
            offset: 0
        };
    }
    for (const { index } of parts){
        const newNode = node ? indexChildNodes(node, filter)[index] : null;
        // handle non-existent nodes
        if (newNode === 'first') return {
            node: node.firstChild ?? node
        };
        if (newNode === 'last') return {
            node: node.lastChild ?? node
        };
        if (newNode === 'before') return {
            node,
            before: true
        };
        if (newNode === 'after') return {
            node,
            after: true
        };
        node = newNode;
    }
    const { offset } = parts[parts.length - 1];
    if (!Array.isArray(node)) return {
        node,
        offset
    };
    // get underlying text node and offset from the chunk
    let sum = 0;
    for (const n of node){
        const { length } = n.nodeValue;
        if (sum + length >= offset) return {
            node: n,
            offset: offset - sum
        };
        sum += length;
    }
};
const nodeToParts = (node, offset, filter)=>{
    const { parentNode, id } = node;
    const indexed = indexChildNodes(parentNode, filter);
    const index = indexed.findIndex((x)=>Array.isArray(x) ? x.some((x)=>x === node) : x === node);
    // adjust offset as if merging the text nodes in the chunk
    const chunk = indexed[index];
    if (Array.isArray(chunk)) {
        let sum = 0;
        for (const x of chunk)if (x === node) {
            sum += offset;
            break;
        } else sum += x.nodeValue.length;
        offset = sum;
    }
    const part = {
        id,
        index,
        offset
    };
    return (parentNode !== node.ownerDocument.documentElement ? nodeToParts(parentNode, null, filter).concat(part) : [
        part
    ])// remove ignored nodes
    .filter((x)=>x.index !== -1);
};
const fromRange = (range, filter)=>{
    const { startContainer, startOffset, endContainer, endOffset } = range;
    const start = nodeToParts(startContainer, startOffset, filter);
    if (range.collapsed) return toString([
        start
    ]);
    const end = nodeToParts(endContainer, endOffset, filter);
    return buildRange([
        start
    ], [
        end
    ]);
};
const toRange = (doc, parts, filter)=>{
    const startParts = collapse(parts);
    const endParts = collapse(parts, true);
    const root = doc.documentElement;
    const start = partsToNode(root, startParts[0], filter);
    const end = partsToNode(root, endParts[0], filter);
    const range = doc.createRange();
    if (start.before) range.setStartBefore(start.node);
    else if (start.after) range.setStartAfter(start.node);
    else range.setStart(start.node, start.offset);
    if (end.before) range.setEndBefore(end.node);
    else if (end.after) range.setEndAfter(end.node);
    else range.setEnd(end.node, end.offset);
    return range;
};
const fromElements = (elements)=>{
    const results = [];
    const { parentNode } = elements[0];
    const parts = nodeToParts(parentNode);
    for (const [index, node] of indexChildNodes(parentNode).entries()){
        const el = elements[results.length];
        if (node === el) results.push(toString([
            parts.concat({
                id: el.id,
                index
            })
        ]));
    }
    return results;
};
const toElement = (doc, parts)=>partsToNode(doc.documentElement, collapse(parts)).node;
const fake = {
    fromIndex: (index)=>wrap(`/6/${(index + 1) * 2}`),
    toIndex: (parts)=>parts?.at(-1).index / 2 - 1
};
const fromCalibrePos = (pos)=>{
    const [parts] = parse(pos);
    const item = parts.shift();
    parts.shift();
    return toString([
        [
            {
                index: 6
            },
            item
        ],
        parts
    ]);
};
const fromCalibreHighlight = ({ spine_index, start_cfi, end_cfi })=>{
    const pre = fake.fromIndex(spine_index) + '!';
    return buildRange(pre + start_cfi.slice(2), pre + end_cfi.slice(2));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3Ha98"}],"3Ha98":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"kRxkL":[function(require,module,exports,__globalThis) {
// assign a unique ID for each TOC item
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TOCProgress", ()=>TOCProgress);
parcelHelpers.export(exports, "SectionProgress", ()=>SectionProgress);
const assignIDs = (toc)=>{
    let id = 0;
    const assignID = (item)=>{
        item.id = id++;
        if (item.subitems) for (const subitem of item.subitems)assignID(subitem);
    };
    for (const item of toc)assignID(item);
    return toc;
};
const flatten = (items)=>items.map((item)=>item.subitems?.length ? [
            item,
            flatten(item.subitems)
        ].flat() : item).flat();
class TOCProgress {
    async init({ toc, ids, splitHref, getFragment }) {
        assignIDs(toc);
        const items = flatten(toc);
        const grouped = new Map();
        for (const [i, item] of items.entries()){
            const [id, fragment] = await splitHref(item?.href) ?? [];
            const value = {
                fragment,
                item
            };
            if (grouped.has(id)) grouped.get(id).items.push(value);
            else grouped.set(id, {
                prev: items[i - 1],
                items: [
                    value
                ]
            });
        }
        const map = new Map();
        for (const [i, id] of ids.entries())if (grouped.has(id)) map.set(id, grouped.get(id));
        else map.set(id, map.get(ids[i - 1]));
        this.ids = ids;
        this.map = map;
        this.getFragment = getFragment;
    }
    getProgress(index, range) {
        if (!this.ids) return;
        const id = this.ids[index];
        const obj = this.map.get(id);
        if (!obj) return null;
        const { prev, items } = obj;
        if (!items) return prev;
        if (!range || items.length === 1 && !items[0].fragment) return items[0].item;
        const doc = range.startContainer.getRootNode();
        for (const [i, { fragment }] of items.entries()){
            const el = this.getFragment(doc, fragment);
            if (!el) continue;
            if (range.comparePoint(el, 0) > 0) return items[i - 1]?.item ?? prev;
        }
        return items[items.length - 1].item;
    }
}
class SectionProgress {
    constructor(sections, sizePerLoc, sizePerTimeUnit){
        this.sizes = sections.map((s)=>s.linear != 'no' && s.size > 0 ? s.size : 0);
        this.sizePerLoc = sizePerLoc;
        this.sizePerTimeUnit = sizePerTimeUnit;
        this.sizeTotal = this.sizes.reduce((a, b)=>a + b, 0);
        this.sectionFractions = this.#getSectionFractions();
    }
    #getSectionFractions() {
        const { sizeTotal } = this;
        const results = [
            0
        ];
        let sum = 0;
        for (const size of this.sizes)results.push((sum += size) / sizeTotal);
        return results;
    }
    // get progress given index of and fractions within a section
    getProgress(index, fractionInSection, pageFraction = 0) {
        const { sizes, sizePerLoc, sizePerTimeUnit, sizeTotal } = this;
        const sizeInSection = sizes[index] ?? 0;
        const sizeBefore = sizes.slice(0, index).reduce((a, b)=>a + b, 0);
        const size = sizeBefore + fractionInSection * sizeInSection;
        const nextSize = size + pageFraction * sizeInSection;
        const remainingTotal = sizeTotal - size;
        const remainingSection = (1 - fractionInSection) * sizeInSection;
        return {
            fraction: nextSize / sizeTotal,
            section: {
                current: index,
                total: sizes.length
            },
            location: {
                current: Math.floor(size / sizePerLoc),
                next: Math.floor(nextSize / sizePerLoc),
                total: Math.ceil(sizeTotal / sizePerLoc)
            },
            time: {
                section: remainingSection / sizePerTimeUnit,
                total: remainingTotal / sizePerTimeUnit
            }
        };
    }
    // the inverse of `getProgress`
    // get index of and fraction in section based on total fraction
    getSection(fraction) {
        if (fraction <= 0) return [
            0,
            0
        ];
        if (fraction >= 1) return [
            this.sizes.length - 1,
            1
        ];
        fraction = fraction + Number.EPSILON;
        const { sizeTotal } = this;
        let index = this.sectionFractions.findIndex((x)=>x > fraction) - 1;
        if (index < 0) return [
            0,
            0
        ];
        while(!this.sizes[index])index++;
        const fractionInSection = (fraction - this.sectionFractions[index]) / (this.sizes[index] / sizeTotal);
        return [
            index,
            fractionInSection
        ];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3Ha98"}],"e1nX1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Overlayer", ()=>Overlayer);
const createSVGElement = (tag)=>document.createElementNS('http://www.w3.org/2000/svg', tag);
class Overlayer {
    #svg = createSVGElement('svg');
    #map = new Map();
    constructor(){
        Object.assign(this.#svg.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
        });
    }
    get element() {
        return this.#svg;
    }
    add(key, range, draw, options) {
        if (this.#map.has(key)) this.remove(key);
        if (typeof range === 'function') range = range(this.#svg.getRootNode());
        const rects = range.getClientRects();
        const element = draw(rects, options);
        this.#svg.append(element);
        this.#map.set(key, {
            range,
            draw,
            options,
            element,
            rects
        });
    }
    remove(key) {
        if (!this.#map.has(key)) return;
        this.#svg.removeChild(this.#map.get(key).element);
        this.#map.delete(key);
    }
    redraw() {
        for (const obj of this.#map.values()){
            const { range, draw, options, element } = obj;
            this.#svg.removeChild(element);
            const rects = range.getClientRects();
            const el = draw(rects, options);
            this.#svg.append(el);
            obj.element = el;
            obj.rects = rects;
        }
    }
    hitTest({ x, y }) {
        const arr = Array.from(this.#map.entries());
        // loop in reverse to hit more recently added items first
        for(let i = arr.length - 1; i >= 0; i--){
            const [key, obj] = arr[i];
            for (const { left, top, right, bottom } of obj.rects)if (top <= y && left <= x && bottom > y && right > x) return [
                key,
                obj.range
            ];
        }
        return [];
    }
    static underline(rects, options = {}) {
        const { color = 'red', width: strokeWidth = 2, writingMode } = options;
        const g = createSVGElement('g');
        g.setAttribute('fill', color);
        if (writingMode === 'vertical-rl' || writingMode === 'vertical-lr') for (const { right, top, height } of rects){
            const el = createSVGElement('rect');
            el.setAttribute('x', right - strokeWidth);
            el.setAttribute('y', top);
            el.setAttribute('height', height);
            el.setAttribute('width', strokeWidth);
            g.append(el);
        }
        else for (const { left, bottom, width } of rects){
            const el = createSVGElement('rect');
            el.setAttribute('x', left);
            el.setAttribute('y', bottom - strokeWidth);
            el.setAttribute('height', strokeWidth);
            el.setAttribute('width', width);
            g.append(el);
        }
        return g;
    }
    static strikethrough(rects, options = {}) {
        const { color = 'red', width: strokeWidth = 2, writingMode } = options;
        const g = createSVGElement('g');
        g.setAttribute('fill', color);
        if (writingMode === 'vertical-rl' || writingMode === 'vertical-lr') for (const { right, left, top, height } of rects){
            const el = createSVGElement('rect');
            el.setAttribute('x', (right + left) / 2);
            el.setAttribute('y', top);
            el.setAttribute('height', height);
            el.setAttribute('width', strokeWidth);
            g.append(el);
        }
        else for (const { left, top, bottom, width } of rects){
            const el = createSVGElement('rect');
            el.setAttribute('x', left);
            el.setAttribute('y', (top + bottom) / 2);
            el.setAttribute('height', strokeWidth);
            el.setAttribute('width', width);
            g.append(el);
        }
        return g;
    }
    static squiggly(rects, options = {}) {
        const { color = 'red', width: strokeWidth = 2, writingMode } = options;
        const g = createSVGElement('g');
        g.setAttribute('fill', 'none');
        g.setAttribute('stroke', color);
        g.setAttribute('stroke-width', strokeWidth);
        const block = strokeWidth * 1.5;
        if (writingMode === 'vertical-rl' || writingMode === 'vertical-lr') for (const { right, top, height } of rects){
            const el = createSVGElement('path');
            const n = Math.round(height / block / 1.5);
            const inline = height / n;
            const ls = Array.from({
                length: n
            }, (_, i)=>`l${i % 2 ? -block : block} ${inline}`).join('');
            el.setAttribute('d', `M${right} ${top}${ls}`);
            g.append(el);
        }
        else for (const { left, bottom, width } of rects){
            const el = createSVGElement('path');
            const n = Math.round(width / block / 1.5);
            const inline = width / n;
            const ls = Array.from({
                length: n
            }, (_, i)=>`l${inline} ${i % 2 ? block : -block}`).join('');
            el.setAttribute('d', `M${left} ${bottom}${ls}`);
            g.append(el);
        }
        return g;
    }
    static highlight(rects, options = {}) {
        const { color = 'red' } = options;
        const g = createSVGElement('g');
        g.setAttribute('fill', color);
        g.style.opacity = 'var(--overlayer-highlight-opacity, .3)';
        g.style.mixBlendMode = 'var(--overlayer-highlight-blend-mode, normal)';
        for (const { left, top, height, width } of rects){
            const el = createSVGElement('rect');
            el.setAttribute('x', left);
            el.setAttribute('y', top);
            el.setAttribute('height', height);
            el.setAttribute('width', width);
            g.append(el);
        }
        return g;
    }
    static outline(rects, options = {}) {
        const { color = 'red', width: strokeWidth = 3, radius = 3 } = options;
        const g = createSVGElement('g');
        g.setAttribute('fill', 'none');
        g.setAttribute('stroke', color);
        g.setAttribute('stroke-width', strokeWidth);
        for (const { left, top, height, width } of rects){
            const el = createSVGElement('rect');
            el.setAttribute('x', left);
            el.setAttribute('y', top);
            el.setAttribute('height', height);
            el.setAttribute('width', width);
            el.setAttribute('rx', radius);
            g.append(el);
        }
        return g;
    }
    // make an exact copy of an image in the overlay
    // one can then apply filters to the entire element, without affecting them;
    // it's a bit silly and probably better to just invert images twice
    // (though the color will be off in that case if you do heu-rotate)
    static copyImage([rect], options = {}) {
        const { src } = options;
        const image = createSVGElement('image');
        const { left, top, height, width } = rect;
        image.setAttribute('href', src);
        image.setAttribute('x', left);
        image.setAttribute('y', top);
        image.setAttribute('height', height);
        image.setAttribute('width', width);
        return image;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3Ha98"}],"k8DSx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "textWalker", ()=>textWalker);
const walkRange = (range, walker)=>{
    const nodes = [];
    for(let node = walker.currentNode; node; node = walker.nextNode()){
        const compare = range.comparePoint(node, 0);
        if (compare === 0) nodes.push(node);
        else if (compare > 0) break;
    }
    return nodes;
};
const walkDocument = (_, walker)=>{
    const nodes = [];
    for(let node = walker.nextNode(); node; node = walker.nextNode())nodes.push(node);
    return nodes;
};
const filter = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_CDATA_SECTION;
const acceptNode = (node)=>{
    if (node.nodeType === 1) {
        const name = node.tagName.toLowerCase();
        if (name === 'script' || name === 'style') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_SKIP;
    }
    return NodeFilter.FILTER_ACCEPT;
};
const textWalker = function*(x, func) {
    const root = x.commonAncestorContainer ?? x.body ?? x;
    const walker = document.createTreeWalker(root, filter, {
        acceptNode
    });
    const walk = x.commonAncestorContainer ? walkRange : walkDocument;
    const nodes = walk(x, walker);
    const strs = nodes.map((node)=>node.nodeValue);
    const makeRange = (startIndex, startOffset, endIndex, endOffset)=>{
        const range = document.createRange();
        range.setStart(nodes[startIndex], startOffset);
        range.setEnd(nodes[endIndex], endOffset);
        return range;
    };
    for (const match of func(strs, makeRange))yield match;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3Ha98"}],"aZDVJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// NOTE: everything here assumes the so-called "negative scroll type" for RTL
parcelHelpers.export(exports, "Paginator", ()=>Paginator);
const wait = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
const debounce = (f, wait, immediate)=>{
    let timeout;
    return (...args)=>{
        const later = ()=>{
            timeout = null;
            if (!immediate) f(...args);
        };
        const callNow = immediate && !timeout;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) f(...args);
    };
};
const lerp = (min, max, x)=>x * (max - min) + min;
const easeOutQuad = (x)=>1 - (1 - x) * (1 - x);
const animate = (a, b, duration, ease, render)=>new Promise((resolve)=>{
        let start;
        const step = (now)=>{
            start ??= now;
            const fraction = Math.min(1, (now - start) / duration);
            render(lerp(a, b, ease(fraction)));
            if (fraction < 1) requestAnimationFrame(step);
            else resolve();
        };
        requestAnimationFrame(step);
    });
// collapsed range doesn't return client rects sometimes (or always?)
// try make get a non-collapsed range or element
const uncollapse = (range)=>{
    if (!range?.collapsed) return range;
    const { endOffset, endContainer } = range;
    if (endContainer.nodeType === 1) {
        const node = endContainer.childNodes[endOffset];
        if (node?.nodeType === 1) return node;
        return endContainer;
    }
    if (endOffset + 1 < endContainer.length) range.setEnd(endContainer, endOffset + 1);
    else if (endOffset > 1) range.setStart(endContainer, endOffset - 1);
    else return endContainer.parentNode;
    return range;
};
const makeRange = (doc, node, start, end = start)=>{
    const range = doc.createRange();
    range.setStart(node, start);
    range.setEnd(node, end);
    return range;
};
// use binary search to find an offset value in a text node
const bisectNode = (doc, node, cb, start = 0, end = node.nodeValue.length)=>{
    if (end - start === 1) {
        const result = cb(makeRange(doc, node, start), makeRange(doc, node, end));
        return result < 0 ? start : end;
    }
    const mid = Math.floor(start + (end - start) / 2);
    const result = cb(makeRange(doc, node, start, mid), makeRange(doc, node, mid, end));
    return result < 0 ? bisectNode(doc, node, cb, start, mid) : result > 0 ? bisectNode(doc, node, cb, mid, end) : mid;
};
const { SHOW_ELEMENT, SHOW_TEXT, SHOW_CDATA_SECTION, FILTER_ACCEPT, FILTER_REJECT, FILTER_SKIP } = NodeFilter;
const filter = SHOW_ELEMENT | SHOW_TEXT | SHOW_CDATA_SECTION;
// needed cause there seems to be a bug in `getBoundingClientRect()` in Firefox
// where it fails to include rects that have zero width and non-zero height
// (CSSOM spec says "rectangles [...] of which the height or width is not zero")
// which makes the visible range include an extra space at column boundaries
const getBoundingClientRect = (target)=>{
    let top = Infinity, right = -Infinity, left = Infinity, bottom = -Infinity;
    for (const rect of target.getClientRects()){
        left = Math.min(left, rect.left);
        top = Math.min(top, rect.top);
        right = Math.max(right, rect.right);
        bottom = Math.max(bottom, rect.bottom);
    }
    return new DOMRect(left, top, right - left, bottom - top);
};
const getVisibleRange = (doc, start, end, mapRect)=>{
    // first get all visible nodes
    const acceptNode = (node)=>{
        const name = node.localName?.toLowerCase();
        // ignore all scripts, styles, and their children
        if (name === 'script' || name === 'style') return FILTER_REJECT;
        if (node.nodeType === 1) {
            const { left, right } = mapRect(node.getBoundingClientRect());
            // no need to check child nodes if it's completely out of view
            if (right < start || left > end) return FILTER_REJECT;
            // elements must be completely in view to be considered visible
            // because you can't specify offsets for elements
            if (left >= start && right <= end) return FILTER_ACCEPT;
        // TODO: it should probably allow elements that do not contain text
        // because they can exceed the whole viewport in both directions
        // especially in scrolled mode
        } else {
            // ignore empty text nodes
            if (!node.nodeValue?.trim()) return FILTER_SKIP;
            // create range to get rect
            const range = doc.createRange();
            range.selectNodeContents(node);
            const { left, right } = mapRect(range.getBoundingClientRect());
            // it's visible if any part of it is in view
            if (right >= start && left <= end) return FILTER_ACCEPT;
        }
        return FILTER_SKIP;
    };
    const walker = doc.createTreeWalker(doc.body, filter, {
        acceptNode
    });
    const nodes = [];
    for(let node = walker.nextNode(); node; node = walker.nextNode())nodes.push(node);
    // we're only interested in the first and last visible nodes
    const from = nodes[0] ?? doc.body;
    const to = nodes[nodes.length - 1] ?? from;
    // find the offset at which visibility changes
    const startOffset = from.nodeType === 1 ? 0 : bisectNode(doc, from, (a, b)=>{
        const p = mapRect(getBoundingClientRect(a));
        const q = mapRect(getBoundingClientRect(b));
        if (p.right < start && q.left > start) return 0;
        return q.left > start ? -1 : 1;
    });
    const endOffset = to.nodeType === 1 ? 0 : bisectNode(doc, to, (a, b)=>{
        const p = mapRect(getBoundingClientRect(a));
        const q = mapRect(getBoundingClientRect(b));
        if (p.right < end && q.left > end) return 0;
        return q.left > end ? -1 : 1;
    });
    const range = doc.createRange();
    range.setStart(from, startOffset);
    range.setEnd(to, endOffset);
    return range;
};
const selectionIsBackward = (sel)=>{
    const range = document.createRange();
    range.setStart(sel.anchorNode, sel.anchorOffset);
    range.setEnd(sel.focusNode, sel.focusOffset);
    return range.collapsed;
};
const setSelectionTo = (target, collapse)=>{
    let range;
    if (target.startContainer) range = target.cloneRange();
    else if (target.nodeType) {
        range = document.createRange();
        range.selectNode(target);
    }
    if (range) {
        const sel = range.startContainer.ownerDocument.defaultView.getSelection();
        sel.removeAllRanges();
        if (collapse === -1) range.collapse(true);
        else if (collapse === 1) range.collapse();
        sel.addRange(range);
    }
};
const getDirection = (doc)=>{
    const { defaultView } = doc;
    const { writingMode, direction } = defaultView.getComputedStyle(doc.body);
    const vertical = writingMode === 'vertical-rl' || writingMode === 'vertical-lr';
    const rtl = doc.body.dir === 'rtl' || direction === 'rtl' || doc.documentElement.dir === 'rtl';
    return {
        vertical,
        rtl
    };
};
const getBackground = (doc)=>{
    const bodyStyle = doc.defaultView.getComputedStyle(doc.body);
    return bodyStyle.backgroundColor === 'rgba(0, 0, 0, 0)' && bodyStyle.backgroundImage === 'none' ? doc.defaultView.getComputedStyle(doc.documentElement).background : bodyStyle.background;
};
const makeMarginals = (length, part)=>Array.from({
        length
    }, ()=>{
        const div = document.createElement('div');
        const child = document.createElement('div');
        div.append(child);
        child.setAttribute('part', part);
        return div;
    });
const setStylesImportant = (el, styles)=>{
    const { style } = el;
    for (const [k, v] of Object.entries(styles))style.setProperty(k, v, 'important');
};
class View {
    #observer = new ResizeObserver(()=>this.expand());
    #element = document.createElement('div');
    #iframe = document.createElement('iframe');
    #contentRange = document.createRange();
    #overlayer;
    #vertical = false;
    #rtl = false;
    #column = true;
    #size;
    #layout = {};
    constructor({ container, onExpand }){
        this.container = container;
        this.onExpand = onExpand;
        this.#iframe.setAttribute('part', 'filter');
        this.#element.append(this.#iframe);
        Object.assign(this.#element.style, {
            boxSizing: 'content-box',
            position: 'relative',
            overflow: 'hidden',
            flex: '0 0 auto',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        });
        Object.assign(this.#iframe.style, {
            overflow: 'hidden',
            border: '0',
            display: 'none',
            width: '100%',
            height: '100%'
        });
        // `allow-scripts` is needed for events because of WebKit bug
        // https://bugs.webkit.org/show_bug.cgi?id=218086
        this.#iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
        this.#iframe.setAttribute('scrolling', 'no');
    }
    get element() {
        return this.#element;
    }
    get document() {
        return this.#iframe.contentDocument;
    }
    async load(src, afterLoad, beforeRender) {
        if (typeof src !== 'string') throw new Error(`${src} is not string`);
        return new Promise((resolve)=>{
            this.#iframe.addEventListener('load', ()=>{
                const doc = this.document;
                afterLoad?.(doc);
                // it needs to be visible for Firefox to get computed style
                this.#iframe.style.display = 'block';
                const { vertical, rtl } = getDirection(doc);
                const background = getBackground(doc);
                this.#iframe.style.display = 'none';
                this.#vertical = vertical;
                this.#rtl = rtl;
                this.#contentRange.selectNodeContents(doc.body);
                const layout = beforeRender?.({
                    vertical,
                    rtl,
                    background
                });
                this.#iframe.style.display = 'block';
                this.render(layout);
                this.#observer.observe(doc.body);
                // the resize observer above doesn't work in Firefox
                // (see https://bugzilla.mozilla.org/show_bug.cgi?id=1832939)
                // until the bug is fixed we can at least account for font load
                doc.fonts.ready.then(()=>this.expand());
                resolve();
            }, {
                once: true
            });
            this.#iframe.src = src;
        });
    }
    render(layout) {
        if (!layout) return;
        this.#column = layout.flow !== 'scrolled';
        this.#layout = layout;
        if (this.#column) this.columnize(layout);
        else this.scrolled(layout);
    }
    scrolled({ gap, columnWidth }) {
        const vertical = this.#vertical;
        const doc = this.document;
        setStylesImportant(doc.documentElement, {
            'box-sizing': 'border-box',
            'padding': vertical ? `${gap}px 0` : `0 ${gap}px`,
            'column-width': 'auto',
            'height': 'auto',
            'width': 'auto'
        });
        setStylesImportant(doc.body, {
            [vertical ? 'max-height' : 'max-width']: `${columnWidth}px`,
            'margin': 'auto'
        });
        this.setImageSize();
        this.expand();
    }
    columnize({ width, height, gap, columnWidth }) {
        const vertical = this.#vertical;
        this.#size = vertical ? height : width;
        const doc = this.document;
        setStylesImportant(doc.documentElement, {
            'box-sizing': 'border-box',
            'column-width': `${Math.trunc(columnWidth)}px`,
            'column-gap': `${gap}px`,
            'column-fill': 'auto',
            ...vertical ? {
                'width': `${width}px`
            } : {
                'height': `${height}px`
            },
            'padding': vertical ? `${gap / 2}px 0` : `0 ${gap / 2}px`,
            'overflow': 'hidden',
            // force wrap long words
            'overflow-wrap': 'break-word',
            // reset some potentially problematic props
            'position': 'static',
            'border': '0',
            'margin': '0',
            'max-height': 'none',
            'max-width': 'none',
            'min-height': 'none',
            'min-width': 'none',
            // fix glyph clipping in WebKit
            '-webkit-line-box-contain': 'block glyphs replaced'
        });
        setStylesImportant(doc.body, {
            'max-height': 'none',
            'max-width': 'none',
            'margin': '0'
        });
        this.setImageSize();
        this.expand();
    }
    setImageSize() {
        const { width, height, margin } = this.#layout;
        const vertical = this.#vertical;
        const doc = this.document;
        for (const el of doc.body.querySelectorAll('img, svg, video')){
            // preserve max size if they are already set
            const { maxHeight, maxWidth } = doc.defaultView.getComputedStyle(el);
            setStylesImportant(el, {
                'max-height': vertical ? maxHeight !== 'none' && maxHeight !== '0px' ? maxHeight : '100%' : `${height - margin * 2}px`,
                'max-width': vertical ? `${width - margin * 2}px` : maxWidth !== 'none' && maxWidth !== '0px' ? maxWidth : '100%',
                'object-fit': 'contain',
                'page-break-inside': 'avoid',
                'break-inside': 'avoid',
                'box-sizing': 'border-box'
            });
        }
    }
    expand() {
        const { documentElement } = this.document;
        if (this.#column) {
            const side = this.#vertical ? 'height' : 'width';
            const otherSide = this.#vertical ? 'width' : 'height';
            const contentRect = this.#contentRange.getBoundingClientRect();
            const rootRect = documentElement.getBoundingClientRect();
            // offset caused by column break at the start of the page
            // which seem to be supported only by WebKit and only for horizontal writing
            const contentStart = this.#vertical ? 0 : this.#rtl ? rootRect.right - contentRect.right : contentRect.left - rootRect.left;
            const contentSize = contentStart + contentRect[side];
            const pageCount = Math.ceil(contentSize / this.#size);
            const expandedSize = pageCount * this.#size;
            this.#element.style.padding = '0';
            this.#iframe.style[side] = `${expandedSize}px`;
            this.#element.style[side] = `${expandedSize + this.#size * 2}px`;
            this.#iframe.style[otherSide] = '100%';
            this.#element.style[otherSide] = '100%';
            documentElement.style[side] = `${this.#size}px`;
            if (this.#overlayer) {
                this.#overlayer.element.style.margin = '0';
                this.#overlayer.element.style.left = this.#vertical ? '0' : `${this.#size}px`;
                this.#overlayer.element.style.top = this.#vertical ? `${this.#size}px` : '0';
                this.#overlayer.element.style[side] = `${expandedSize}px`;
                this.#overlayer.redraw();
            }
        } else {
            const side = this.#vertical ? 'width' : 'height';
            const otherSide = this.#vertical ? 'height' : 'width';
            const contentSize = documentElement.getBoundingClientRect()[side];
            const expandedSize = contentSize;
            const { margin } = this.#layout;
            const padding = this.#vertical ? `0 ${margin}px` : `${margin}px 0`;
            this.#element.style.padding = padding;
            this.#iframe.style[side] = `${expandedSize}px`;
            this.#element.style[side] = `${expandedSize}px`;
            this.#iframe.style[otherSide] = '100%';
            this.#element.style[otherSide] = '100%';
            if (this.#overlayer) {
                this.#overlayer.element.style.margin = padding;
                this.#overlayer.element.style.left = '0';
                this.#overlayer.element.style.top = '0';
                this.#overlayer.element.style[side] = `${expandedSize}px`;
                this.#overlayer.redraw();
            }
        }
        this.onExpand();
    }
    set overlayer(overlayer) {
        this.#overlayer = overlayer;
        this.#element.append(overlayer.element);
    }
    get overlayer() {
        return this.#overlayer;
    }
    destroy() {
        if (this.document) this.#observer.unobserve(this.document.body);
    }
}
class Paginator extends HTMLElement {
    static observedAttributes = [
        'flow',
        'gap',
        'margin',
        'max-inline-size',
        'max-block-size',
        'max-column-count'
    ];
    #root = this.attachShadow({
        mode: 'closed'
    });
    #observer = new ResizeObserver(()=>this.render());
    #top;
    #background;
    #container;
    #header;
    #footer;
    #view;
    #vertical = false;
    #rtl = false;
    #margin = 0;
    #index = -1;
    #anchor = 0 // anchor view to a fraction (0-1), Range, or Element
    ;
    #justAnchored = false;
    #locked = false // while true, prevent any further navigation
    ;
    #styles;
    #styleMap = new WeakMap();
    #mediaQuery = matchMedia('(prefers-color-scheme: dark)');
    #mediaQueryListener;
    #scrollBounds;
    #touchState;
    #touchScrolled;
    #lastVisibleRange;
    constructor(){
        super();
        this.#root.innerHTML = `<style>
        :host {
            display: block;
            container-type: size;
        }
        :host, #top {
            box-sizing: border-box;
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
        #top {
            --_gap: 7%;
            --_margin: 48px;
            --_max-inline-size: 720px;
            --_max-block-size: 1440px;
            --_max-column-count: 2;
            --_max-column-count-portrait: 1;
            --_max-column-count-spread: var(--_max-column-count);
            --_half-gap: calc(var(--_gap) / 2);
            --_max-width: calc(var(--_max-inline-size) * var(--_max-column-count-spread));
            --_max-height: var(--_max-block-size);
            display: grid;
            grid-template-columns:
                minmax(var(--_half-gap), 1fr)
                var(--_half-gap)
                minmax(0, calc(var(--_max-width) - var(--_gap)))
                var(--_half-gap)
                minmax(var(--_half-gap), 1fr);
            grid-template-rows:
                minmax(var(--_margin), 1fr)
                minmax(0, var(--_max-height))
                minmax(var(--_margin), 1fr);
            &.vertical {
                --_max-column-count-spread: var(--_max-column-count-portrait);
                --_max-width: var(--_max-block-size);
                --_max-height: calc(var(--_max-inline-size) * var(--_max-column-count-spread));
            }
            @container (orientation: portrait) {
                & {
                    --_max-column-count-spread: var(--_max-column-count-portrait);
                }
                &.vertical {
                    --_max-column-count-spread: var(--_max-column-count);
                }
            }
        }
        #background {
            grid-column: 1 / -1;
            grid-row: 1 / -1;
        }
        #container {
            grid-column: 2 / 5;
            grid-row: 2;
            overflow: hidden;
        }
        :host([flow="scrolled"]) #container {
            grid-column: 1 / -1;
            grid-row: 1 / -1;
            overflow: auto;
        }
        #header {
            grid-column: 3 / 4;
            grid-row: 1;
        }
        #footer {
            grid-column: 3 / 4;
            grid-row: 3;
            align-self: end;
        }
        #header, #footer {
            display: grid;
            height: var(--_margin);
        }
        :is(#header, #footer) > * {
            display: flex;
            align-items: center;
            min-width: 0;
        }
        :is(#header, #footer) > * > * {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: center;
            font-size: .75em;
            opacity: .6;
        }
        </style>
        <div id="top">
            <div id="background" part="filter"></div>
            <div id="header"></div>
            <div id="container"></div>
            <div id="footer"></div>
        </div>
        `;
        this.#top = this.#root.getElementById('top');
        this.#background = this.#root.getElementById('background');
        this.#container = this.#root.getElementById('container');
        this.#header = this.#root.getElementById('header');
        this.#footer = this.#root.getElementById('footer');
        this.#observer.observe(this.#container);
        this.#container.addEventListener('scroll', ()=>this.dispatchEvent(new Event('scroll')));
        this.#container.addEventListener('scroll', debounce(()=>{
            if (this.scrolled) {
                if (this.#justAnchored) this.#justAnchored = false;
                else this.#afterScroll('scroll');
            }
        }, 250));
        const opts = {
            passive: false
        };
        this.addEventListener('touchstart', this.#onTouchStart.bind(this), opts);
        this.addEventListener('touchmove', this.#onTouchMove.bind(this), opts);
        this.addEventListener('touchend', this.#onTouchEnd.bind(this));
        this.addEventListener('load', ({ detail: { doc } })=>{
            doc.addEventListener('touchstart', this.#onTouchStart.bind(this), opts);
            doc.addEventListener('touchmove', this.#onTouchMove.bind(this), opts);
            doc.addEventListener('touchend', this.#onTouchEnd.bind(this));
        });
        this.addEventListener('relocate', ({ detail })=>{
            if (detail.reason === 'selection') setSelectionTo(this.#anchor, 0);
            else if (detail.reason === 'navigation') {
                if (this.#anchor === 1) setSelectionTo(detail.range, 1);
                else if (typeof this.#anchor === 'number') setSelectionTo(detail.range, -1);
                else setSelectionTo(this.#anchor, -1);
            }
        });
        const checkPointerSelection = debounce((range, sel)=>{
            const selRange = sel.getRangeAt(0);
            const backward = selectionIsBackward(sel);
            if (backward && selRange.compareBoundaryPoints(Range.START_TO_START, range) < 0) this.prev();
            else if (!backward && selRange.compareBoundaryPoints(Range.END_TO_END, range) > 0) this.next();
        }, 700);
        this.addEventListener('load', ({ detail: { doc } })=>{
            let isPointerSelecting = false;
            doc.addEventListener('pointerdown', ()=>isPointerSelecting = true);
            doc.addEventListener('pointerup', ()=>isPointerSelecting = false);
            let isKeyboardSelecting = false;
            doc.addEventListener('keydown', ()=>isKeyboardSelecting = true);
            doc.addEventListener('keyup', ()=>isKeyboardSelecting = false);
            doc.addEventListener('selectionchange', ()=>{
                if (this.scrolled) return;
                const range = this.#lastVisibleRange;
                if (!range) return;
                const sel = doc.getSelection();
                if (!sel.rangeCount) return;
                if (isPointerSelecting && sel.type === 'Range') checkPointerSelection(range, sel);
                else if (isKeyboardSelecting) {
                    const selRange = sel.getRangeAt(0).cloneRange();
                    const backward = selectionIsBackward(sel);
                    if (!backward) selRange.collapse();
                    this.#scrollToAnchor(selRange);
                }
            });
            doc.addEventListener('focusin', (e)=>this.scrolled ? null : // NOTE: `requestAnimationFrame` is needed in WebKit
                requestAnimationFrame(()=>this.#scrollToAnchor(e.target)));
        });
        this.#mediaQueryListener = ()=>{
            if (!this.#view) return;
            this.#background.style.background = getBackground(this.#view.document);
        };
        this.#mediaQuery.addEventListener('change', this.#mediaQueryListener);
    }
    attributeChangedCallback(name, _, value) {
        switch(name){
            case 'flow':
                this.render();
                break;
            case 'gap':
            case 'margin':
            case 'max-block-size':
            case 'max-column-count':
                this.#top.style.setProperty('--_' + name, value);
                break;
            case 'max-inline-size':
                // needs explicit `render()` as it doesn't necessarily resize
                this.#top.style.setProperty('--_' + name, value);
                this.render();
                break;
        }
    }
    open(book) {
        this.bookDir = book.dir;
        this.sections = book.sections;
    }
    #createView() {
        if (this.#view) {
            this.#view.destroy();
            this.#container.removeChild(this.#view.element);
        }
        this.#view = new View({
            container: this,
            onExpand: ()=>this.#scrollToAnchor(this.#anchor)
        });
        this.#container.append(this.#view.element);
        return this.#view;
    }
    #beforeRender({ vertical, rtl, background }) {
        this.#vertical = vertical;
        this.#rtl = rtl;
        this.#top.classList.toggle('vertical', vertical);
        // set background to `doc` background
        // this is needed because the iframe does not fill the whole element
        this.#background.style.background = background;
        const { width, height } = this.#container.getBoundingClientRect();
        const size = vertical ? height : width;
        const style = getComputedStyle(this.#top);
        const maxInlineSize = parseFloat(style.getPropertyValue('--_max-inline-size'));
        const maxColumnCount = parseInt(style.getPropertyValue('--_max-column-count-spread'));
        const margin = parseFloat(style.getPropertyValue('--_margin'));
        this.#margin = margin;
        const g = parseFloat(style.getPropertyValue('--_gap')) / 100;
        // The gap will be a percentage of the #container, not the whole view.
        // This means the outer padding will be bigger than the column gap. Let
        // `a` be the gap percentage. The actual percentage for the column gap
        // will be (1 - a) * a. Let us call this `b`.
        //
        // To make them the same, we start by shrinking the outer padding
        // setting to `b`, but keep the column gap setting the same at `a`. Then
        // the actual size for the column gap will be (1 - b) * a. Repeating the
        // process again and again, we get the sequence
        //     x₁ = (1 - b) * a
        //     x₂ = (1 - x₁) * a
        //     ...
        // which converges to x = (1 - x) * a. Solving for x, x = a / (1 + a).
        // So to make the spacing even, we must shrink the outer padding with
        //     f(x) = x / (1 + x).
        // But we want to keep the outer padding, and make the inner gap bigger.
        // So we apply the inverse, f⁻¹ = -x / (x - 1) to the column gap.
        const gap = -g / (g - 1) * size;
        const flow = this.getAttribute('flow');
        if (flow === 'scrolled') {
            // FIXME: vertical-rl only, not -lr
            this.setAttribute('dir', vertical ? 'rtl' : 'ltr');
            this.#top.style.padding = '0';
            const columnWidth = maxInlineSize;
            this.heads = null;
            this.feet = null;
            this.#header.replaceChildren();
            this.#footer.replaceChildren();
            return {
                flow,
                margin,
                gap,
                columnWidth
            };
        }
        const divisor = Math.min(maxColumnCount, Math.ceil(size / maxInlineSize));
        const columnWidth = size / divisor - gap;
        this.setAttribute('dir', rtl ? 'rtl' : 'ltr');
        const marginalDivisor = vertical ? Math.min(2, Math.ceil(width / maxInlineSize)) : divisor;
        const marginalStyle = {
            gridTemplateColumns: `repeat(${marginalDivisor}, 1fr)`,
            gap: `${gap}px`,
            direction: this.bookDir === 'rtl' ? 'rtl' : 'ltr'
        };
        Object.assign(this.#header.style, marginalStyle);
        Object.assign(this.#footer.style, marginalStyle);
        const heads = makeMarginals(marginalDivisor, 'head');
        const feet = makeMarginals(marginalDivisor, 'foot');
        this.heads = heads.map((el)=>el.children[0]);
        this.feet = feet.map((el)=>el.children[0]);
        this.#header.replaceChildren(...heads);
        this.#footer.replaceChildren(...feet);
        return {
            height,
            width,
            margin,
            gap,
            columnWidth
        };
    }
    render() {
        if (!this.#view) return;
        this.#view.render(this.#beforeRender({
            vertical: this.#vertical,
            rtl: this.#rtl
        }));
        this.#scrollToAnchor(this.#anchor);
    }
    get scrolled() {
        return this.getAttribute('flow') === 'scrolled';
    }
    get scrollProp() {
        const { scrolled } = this;
        return this.#vertical ? scrolled ? 'scrollLeft' : 'scrollTop' : scrolled ? 'scrollTop' : 'scrollLeft';
    }
    get sideProp() {
        const { scrolled } = this;
        return this.#vertical ? scrolled ? 'width' : 'height' : scrolled ? 'height' : 'width';
    }
    get size() {
        return this.#container.getBoundingClientRect()[this.sideProp];
    }
    get viewSize() {
        return this.#view.element.getBoundingClientRect()[this.sideProp];
    }
    get start() {
        return Math.abs(this.#container[this.scrollProp]);
    }
    get end() {
        return this.start + this.size;
    }
    get page() {
        return Math.floor((this.start + this.end) / 2 / this.size);
    }
    get pages() {
        return Math.round(this.viewSize / this.size);
    }
    scrollBy(dx, dy) {
        const delta = this.#vertical ? dy : dx;
        const element = this.#container;
        const { scrollProp } = this;
        const [offset, a, b] = this.#scrollBounds;
        const rtl = this.#rtl;
        const min = rtl ? offset - b : offset - a;
        const max = rtl ? offset + a : offset + b;
        element[scrollProp] = Math.max(min, Math.min(max, element[scrollProp] + delta));
    }
    snap(vx, vy) {
        const velocity = this.#vertical ? vy : vx;
        const [offset, a, b] = this.#scrollBounds;
        const { start, end, pages, size } = this;
        const min = Math.abs(offset) - a;
        const max = Math.abs(offset) + b;
        const d = velocity * (this.#rtl ? -size : size);
        const page = Math.floor(Math.max(min, Math.min(max, (start + end) / 2 + (isNaN(d) ? 0 : d))) / size);
        this.#scrollToPage(page, 'snap').then(()=>{
            const dir = page <= 0 ? -1 : page >= pages - 1 ? 1 : null;
            if (dir) return this.#goTo({
                index: this.#adjacentIndex(dir),
                anchor: dir < 0 ? ()=>1 : ()=>0
            });
        });
    }
    #onTouchStart(e) {
        const touch = e.changedTouches[0];
        this.#touchState = {
            x: touch?.screenX,
            y: touch?.screenY,
            t: e.timeStamp,
            vx: 0,
            xy: 0
        };
    }
    #onTouchMove(e) {
        const state = this.#touchState;
        if (state.pinched) return;
        state.pinched = globalThis.visualViewport.scale > 1;
        if (this.scrolled || state.pinched) return;
        if (e.touches.length > 1) {
            if (this.#touchScrolled) e.preventDefault();
            return;
        }
        e.preventDefault();
        const touch = e.changedTouches[0];
        const x = touch.screenX, y = touch.screenY;
        const dx = state.x - x, dy = state.y - y;
        const dt = e.timeStamp - state.t;
        state.x = x;
        state.y = y;
        state.t = e.timeStamp;
        state.vx = dx / dt;
        state.vy = dy / dt;
        this.#touchScrolled = true;
        this.scrollBy(dx, dy);
    }
    #onTouchEnd() {
        this.#touchScrolled = false;
        if (this.scrolled) return;
        // XXX: Firefox seems to report scale as 1... sometimes...?
        // at this point I'm basically throwing `requestAnimationFrame` at
        // anything that doesn't work
        requestAnimationFrame(()=>{
            if (globalThis.visualViewport.scale === 1) this.snap(this.#touchState.vx, this.#touchState.vy);
        });
    }
    // allows one to process rects as if they were LTR and horizontal
    #getRectMapper() {
        if (this.scrolled) {
            const size = this.viewSize;
            const margin = this.#margin;
            return this.#vertical ? ({ left, right })=>({
                    left: size - right - margin,
                    right: size - left - margin
                }) : ({ top, bottom })=>({
                    left: top + margin,
                    right: bottom + margin
                });
        }
        const pxSize = this.pages * this.size;
        return this.#rtl ? ({ left, right })=>({
                left: pxSize - right,
                right: pxSize - left
            }) : this.#vertical ? ({ top, bottom })=>({
                left: top,
                right: bottom
            }) : (f)=>f;
    }
    async #scrollToRect(rect, reason) {
        if (this.scrolled) {
            const offset = this.#getRectMapper()(rect).left - this.#margin;
            return this.#scrollTo(offset, reason);
        }
        const offset = this.#getRectMapper()(rect).left;
        return this.#scrollToPage(Math.floor(offset / this.size) + (this.#rtl ? -1 : 1), reason);
    }
    async #scrollTo(offset, reason, smooth) {
        const element = this.#container;
        const { scrollProp, size } = this;
        if (element[scrollProp] === offset) {
            this.#scrollBounds = [
                offset,
                this.atStart ? 0 : size,
                this.atEnd ? 0 : size
            ];
            this.#afterScroll(reason);
            return;
        }
        // FIXME: vertical-rl only, not -lr
        if (this.scrolled && this.#vertical) offset = -offset;
        if ((reason === 'snap' || smooth) && this.hasAttribute('animated')) return animate(element[scrollProp], offset, 300, easeOutQuad, (x)=>element[scrollProp] = x).then(()=>{
            this.#scrollBounds = [
                offset,
                this.atStart ? 0 : size,
                this.atEnd ? 0 : size
            ];
            this.#afterScroll(reason);
        });
        else {
            element[scrollProp] = offset;
            this.#scrollBounds = [
                offset,
                this.atStart ? 0 : size,
                this.atEnd ? 0 : size
            ];
            this.#afterScroll(reason);
        }
    }
    async #scrollToPage(page, reason, smooth) {
        const offset = this.size * (this.#rtl ? -page : page);
        return this.#scrollTo(offset, reason, smooth);
    }
    async scrollToAnchor(anchor, select) {
        return this.#scrollToAnchor(anchor, select ? 'selection' : 'navigation');
    }
    async #scrollToAnchor(anchor, reason = 'anchor') {
        this.#anchor = anchor;
        const rects = uncollapse(anchor)?.getClientRects?.();
        // if anchor is an element or a range
        if (rects) {
            // when the start of the range is immediately after a hyphen in the
            // previous column, there is an extra zero width rect in that column
            const rect = Array.from(rects).find((r)=>r.width > 0 && r.height > 0) || rects[0];
            if (!rect) return;
            await this.#scrollToRect(rect, reason);
            return;
        }
        // if anchor is a fraction
        if (this.scrolled) {
            await this.#scrollTo(anchor * this.viewSize, reason);
            return;
        }
        const { pages } = this;
        if (!pages) return;
        const textPages = pages - 2;
        const newPage = Math.round(anchor * (textPages - 1));
        await this.#scrollToPage(newPage + 1, reason);
    }
    #getVisibleRange() {
        if (this.scrolled) return getVisibleRange(this.#view.document, this.start + this.#margin, this.end - this.#margin, this.#getRectMapper());
        const size = this.#rtl ? -this.size : this.size;
        return getVisibleRange(this.#view.document, this.start - size, this.end - size, this.#getRectMapper());
    }
    #afterScroll(reason) {
        const range = this.#getVisibleRange();
        this.#lastVisibleRange = range;
        // don't set new anchor if relocation was to scroll to anchor
        if (reason !== 'selection' && reason !== 'navigation' && reason !== 'anchor') this.#anchor = range;
        else this.#justAnchored = true;
        const index = this.#index;
        const detail = {
            reason,
            range,
            index
        };
        if (this.scrolled) detail.fraction = this.start / this.viewSize;
        else if (this.pages > 0) {
            const { page, pages } = this;
            this.#header.style.visibility = page > 1 ? 'visible' : 'hidden';
            detail.fraction = (page - 1) / (pages - 2);
            detail.size = 1 / (pages - 2);
        }
        this.dispatchEvent(new CustomEvent('relocate', {
            detail
        }));
    }
    async #display(promise) {
        const { index, src, anchor, onLoad, select } = await promise;
        this.#index = index;
        const hasFocus = this.#view?.document?.hasFocus();
        if (src) {
            const view = this.#createView();
            const afterLoad = (doc)=>{
                if (doc.head) {
                    const $styleBefore = doc.createElement('style');
                    doc.head.prepend($styleBefore);
                    const $style = doc.createElement('style');
                    doc.head.append($style);
                    this.#styleMap.set(doc, [
                        $styleBefore,
                        $style
                    ]);
                }
                onLoad?.({
                    doc,
                    index
                });
            };
            const beforeRender = this.#beforeRender.bind(this);
            await view.load(src, afterLoad, beforeRender);
            this.dispatchEvent(new CustomEvent('create-overlayer', {
                detail: {
                    doc: view.document,
                    index,
                    attach: (overlayer)=>view.overlayer = overlayer
                }
            }));
            this.#view = view;
        }
        await this.scrollToAnchor((typeof anchor === 'function' ? anchor(this.#view.document) : anchor) ?? 0, select);
        if (hasFocus) this.focusView();
    }
    #canGoToIndex(index) {
        return index >= 0 && index <= this.sections.length - 1;
    }
    async #goTo({ index, anchor, select }) {
        if (index === this.#index) await this.#display({
            index,
            anchor,
            select
        });
        else {
            const oldIndex = this.#index;
            const onLoad = (detail)=>{
                this.sections[oldIndex]?.unload?.();
                this.setStyles(this.#styles);
                this.dispatchEvent(new CustomEvent('load', {
                    detail
                }));
            };
            await this.#display(Promise.resolve(this.sections[index].load()).then((src)=>({
                    index,
                    src,
                    anchor,
                    onLoad,
                    select
                })).catch((e)=>{
                console.warn(e);
                console.warn(new Error(`Failed to load section ${index}`));
                return {};
            }));
        }
    }
    async goTo(target) {
        if (this.#locked) return;
        const resolved = await target;
        if (this.#canGoToIndex(resolved.index)) return this.#goTo(resolved);
    }
    #scrollPrev(distance) {
        if (!this.#view) return true;
        if (this.scrolled) {
            if (this.start > 0) return this.#scrollTo(Math.max(0, this.start - (distance ?? this.size)), null, true);
            return true;
        }
        if (this.atStart) return;
        const page = this.page - 1;
        return this.#scrollToPage(page, 'page', true).then(()=>page <= 0);
    }
    #scrollNext(distance) {
        if (!this.#view) return true;
        if (this.scrolled) {
            if (this.viewSize - this.end > 2) return this.#scrollTo(Math.min(this.viewSize, distance ? this.start + distance : this.end), null, true);
            return true;
        }
        if (this.atEnd) return;
        const page = this.page + 1;
        const pages = this.pages;
        return this.#scrollToPage(page, 'page', true).then(()=>page >= pages - 1);
    }
    get atStart() {
        return this.#adjacentIndex(-1) == null && this.page <= 1;
    }
    get atEnd() {
        return this.#adjacentIndex(1) == null && this.page >= this.pages - 2;
    }
    #adjacentIndex(dir) {
        for(let index = this.#index + dir; this.#canGoToIndex(index); index += dir)if (this.sections[index]?.linear !== 'no') return index;
    }
    async #turnPage(dir, distance) {
        if (this.#locked) return;
        this.#locked = true;
        const prev = dir === -1;
        const shouldGo = await (prev ? this.#scrollPrev(distance) : this.#scrollNext(distance));
        if (shouldGo) await this.#goTo({
            index: this.#adjacentIndex(dir),
            anchor: prev ? ()=>1 : ()=>0
        });
        if (shouldGo || !this.hasAttribute('animated')) await wait(100);
        this.#locked = false;
    }
    prev(distance) {
        return this.#turnPage(-1, distance);
    }
    next(distance) {
        return this.#turnPage(1, distance);
    }
    prevSection() {
        return this.goTo({
            index: this.#adjacentIndex(-1)
        });
    }
    nextSection() {
        return this.goTo({
            index: this.#adjacentIndex(1)
        });
    }
    firstSection() {
        const index = this.sections.findIndex((section)=>section.linear !== 'no');
        return this.goTo({
            index
        });
    }
    lastSection() {
        const index = this.sections.findLastIndex((section)=>section.linear !== 'no');
        return this.goTo({
            index
        });
    }
    getContents() {
        if (this.#view) return [
            {
                index: this.#index,
                overlayer: this.#view.overlayer,
                doc: this.#view.document
            }
        ];
        return [];
    }
    setStyles(styles) {
        this.#styles = styles;
        const $$styles = this.#styleMap.get(this.#view?.document);
        if (!$$styles) return;
        const [$beforeStyle, $style] = $$styles;
        if (Array.isArray(styles)) {
            const [beforeStyle, style] = styles;
            $beforeStyle.textContent = beforeStyle;
            $style.textContent = style;
        } else $style.textContent = styles;
        // NOTE: needs `requestAnimationFrame` in Chromium
        requestAnimationFrame(()=>this.#background.style.background = getBackground(this.#view.document));
        // needed because the resize observer doesn't work in Firefox
        this.#view?.document?.fonts?.ready?.then(()=>this.#view.expand());
    }
    focusView() {
        this.#view.document.defaultView.focus();
    }
    destroy() {
        this.#observer.unobserve(this);
        this.#view.destroy();
        this.#view = null;
        this.sections[this.#index]?.unload?.();
        this.#mediaQuery.removeEventListener('change', this.#mediaQueryListener);
    }
}
customElements.define('foliate-paginator', Paginator);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3Ha98"}],"klfU1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EPUB", ()=>EPUB);
var _epubcfiJs = require("./epubcfi.js");
const NS = {
    CONTAINER: 'urn:oasis:names:tc:opendocument:xmlns:container',
    XHTML: 'http://www.w3.org/1999/xhtml',
    OPF: 'http://www.idpf.org/2007/opf',
    EPUB: 'http://www.idpf.org/2007/ops',
    DC: 'http://purl.org/dc/elements/1.1/',
    DCTERMS: 'http://purl.org/dc/terms/',
    ENC: 'http://www.w3.org/2001/04/xmlenc#',
    NCX: 'http://www.daisy.org/z3986/2005/ncx/',
    XLINK: 'http://www.w3.org/1999/xlink',
    SMIL: 'http://www.w3.org/ns/SMIL'
};
const MIME = {
    XML: 'application/xml',
    NCX: 'application/x-dtbncx+xml',
    XHTML: 'application/xhtml+xml',
    HTML: 'text/html',
    CSS: 'text/css',
    SVG: 'image/svg+xml',
    JS: /\/(x-)?(javascript|ecmascript)/
};
// https://www.w3.org/TR/epub-33/#sec-reserved-prefixes
const PREFIX = {
    a11y: 'http://www.idpf.org/epub/vocab/package/a11y/#',
    dcterms: 'http://purl.org/dc/terms/',
    marc: 'http://id.loc.gov/vocabulary/',
    media: 'http://www.idpf.org/epub/vocab/overlays/#',
    onix: 'http://www.editeur.org/ONIX/book/codelists/current.html#',
    rendition: 'http://www.idpf.org/vocab/rendition/#',
    schema: 'http://schema.org/',
    xsd: 'http://www.w3.org/2001/XMLSchema#',
    msv: 'http://www.idpf.org/epub/vocab/structure/magazine/#',
    prism: 'http://www.prismstandard.org/specifications/3.0/PRISM_CV_Spec_3.0.htm#'
};
const RELATORS = {
    art: 'artist',
    aut: 'author',
    clr: 'colorist',
    edt: 'editor',
    ill: 'illustrator',
    nrt: 'narrator',
    trl: 'translator',
    pbl: 'publisher'
};
const ONIX5 = {
    '02': 'isbn',
    '06': 'doi',
    '15': 'isbn',
    '26': 'doi',
    '34': 'issn'
};
// convert to camel case
const camel = (x)=>x.toLowerCase().replace(/[-:](.)/g, (_, g)=>g.toUpperCase());
// strip and collapse ASCII whitespace
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
const normalizeWhitespace = (str)=>str ? str.replace(/[\t\n\f\r ]+/g, ' ').replace(/^[\t\n\f\r ]+/, '').replace(/[\t\n\f\r ]+$/, '') : '';
const filterAttribute = (attr, value, isList)=>isList ? (el)=>el.getAttribute(attr)?.split(/\s/)?.includes(value) : typeof value === 'function' ? (el)=>value(el.getAttribute(attr)) : (el)=>el.getAttribute(attr) === value;
const getAttributes = (...xs)=>(el)=>el ? Object.fromEntries(xs.map((x)=>[
                camel(x),
                el.getAttribute(x)
            ])) : null;
const getElementText = (el)=>normalizeWhitespace(el?.textContent);
const childGetter = (doc, ns)=>{
    // ignore the namespace if it doesn't appear in document at all
    const useNS = doc.lookupNamespaceURI(null) === ns || doc.lookupPrefix(ns);
    const f = useNS ? (el, name)=>(el)=>el.namespaceURI === ns && el.localName === name : (el, name)=>(el)=>el.localName === name;
    return {
        $: (el, name)=>[
                ...el.children
            ].find(f(el, name)),
        $$: (el, name)=>[
                ...el.children
            ].filter(f(el, name)),
        $$$: useNS ? (el, name)=>[
                ...el.getElementsByTagNameNS(ns, name)
            ] : (el, name)=>[
                ...el.getElementsByTagName(name)
            ]
    };
};
const resolveURL = (url, relativeTo)=>{
    try {
        if (relativeTo.includes(':')) return new URL(url, relativeTo);
        // the base needs to be a valid URL, so set a base URL and then remove it
        const root = 'https://invalid.invalid/';
        const obj = new URL(url, root + relativeTo);
        obj.search = '';
        return decodeURI(obj.href.replace(root, ''));
    } catch (e) {
        console.warn(e);
        return url;
    }
};
const isExternal = (uri)=>/^(?!blob)\w+:/i.test(uri);
// like `path.relative()` in Node.js
const pathRelative = (from, to)=>{
    if (!from) return to;
    const as = from.replace(/\/$/, '').split('/');
    const bs = to.replace(/\/$/, '').split('/');
    const i = (as.length > bs.length ? as : bs).findIndex((_, i)=>as[i] !== bs[i]);
    return i < 0 ? '' : Array(as.length - i).fill('..').concat(bs.slice(i)).join('/');
};
const pathDirname = (str)=>str.slice(0, str.lastIndexOf('/') + 1);
// replace asynchronously and sequentially
// same technique as https://stackoverflow.com/a/48032528
const replaceSeries = async (str, regex, f)=>{
    const matches = [];
    str.replace(regex, (...args)=>(matches.push(args), null));
    const results = [];
    for (const args of matches)results.push(await f(...args));
    return str.replace(regex, ()=>results.shift());
};
const regexEscape = (str)=>str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
const tidy = (obj)=>{
    for (const [key, val] of Object.entries(obj))if (val == null) delete obj[key];
    else if (Array.isArray(val)) {
        obj[key] = val.filter((x)=>x).map((x)=>typeof x === 'object' && !Array.isArray(x) ? tidy(x) : x);
        if (!obj[key].length) delete obj[key];
        else if (obj[key].length === 1) obj[key] = obj[key][0];
    } else if (typeof val === 'object') {
        obj[key] = tidy(val);
        if (!Object.keys(val).length) delete obj[key];
    }
    const keys = Object.keys(obj);
    if (keys.length === 1 && keys[0] === 'name') return obj[keys[0]];
    return obj;
};
// https://www.w3.org/TR/epub/#sec-prefix-attr
const getPrefixes = (doc)=>{
    const map = new Map(Object.entries(PREFIX));
    const value = doc.documentElement.getAttributeNS(NS.EPUB, 'prefix') || doc.documentElement.getAttribute('prefix');
    if (value) for (const [, prefix, url] of value.matchAll(/(.+): +(.+)[ \t\r\n]*/g))map.set(prefix, url);
    return map;
};
// https://www.w3.org/TR/epub-rs/#sec-property-values
// but ignoring the case where the prefix is omitted
const getPropertyURL = (value, prefixes)=>{
    if (!value) return null;
    const [a, b] = value.split(':');
    const prefix = b ? a : null;
    const reference = b ? b : a;
    const baseURL = prefixes.get(prefix);
    return baseURL ? baseURL + reference : null;
};
const getMetadata = (opf)=>{
    const { $ } = childGetter(opf, NS.OPF);
    const $metadata = $(opf.documentElement, 'metadata');
    // first pass: convert to JS objects
    const els = Object.groupBy($metadata.children, (el)=>el.namespaceURI === NS.DC ? 'dc' : el.namespaceURI === NS.OPF && el.localName === 'meta' ? el.hasAttribute('name') ? 'legacyMeta' : 'meta' : '');
    const baseLang = $metadata.getAttribute('xml:lang') ?? opf.documentElement.getAttribute('xml:lang') ?? 'und';
    const prefixes = getPrefixes(opf);
    const parse = (el)=>{
        const property = el.getAttribute('property');
        const scheme = el.getAttribute('scheme');
        return {
            property: getPropertyURL(property, prefixes) ?? property,
            scheme: getPropertyURL(scheme, prefixes) ?? scheme,
            lang: el.getAttribute('xml:lang'),
            value: getElementText(el),
            props: getProperties(el),
            // `opf:` attributes from EPUB 2 & EPUB 3.1 (removed in EPUB 3.2)
            attrs: Object.fromEntries(Array.from(el.attributes).filter((attr)=>attr.namespaceURI === NS.OPF).map((attr)=>[
                    attr.localName,
                    attr.value
                ]))
        };
    };
    const refines = Map.groupBy(els.meta ?? [], (el)=>el.getAttribute('refines'));
    const getProperties = (el)=>{
        const els = refines.get(el ? '#' + el.getAttribute('id') : null);
        if (!els) return null;
        return Object.groupBy(els.map(parse), (x)=>x.property);
    };
    const dc = Object.fromEntries(Object.entries(Object.groupBy(els.dc, (el)=>el.localName)).map(([name, els])=>[
            name,
            els.map(parse)
        ]));
    const properties = getProperties() ?? {};
    const legacyMeta = Object.fromEntries(els.legacyMeta?.map((el)=>[
            el.getAttribute('name'),
            el.getAttribute('content')
        ]) ?? []);
    // second pass: map to webpub
    const one = (x)=>x?.[0]?.value;
    const prop = (x, p)=>one(x?.props?.[p]);
    const makeLanguageMap = (x)=>{
        if (!x) return null;
        const alts = x.props?.['alternate-script'] ?? [];
        const altRep = x.attrs['alt-rep'];
        if (!alts.length && (!x.lang || x.lang === baseLang) && !altRep) return x.value;
        const map = {
            [x.lang ?? baseLang]: x.value
        };
        if (altRep) map[x.attrs['alt-rep-lang']] = altRep;
        for (const y of alts)map[y.lang] ??= y.value;
        return map;
    };
    const makeContributor = (x)=>x ? {
            name: makeLanguageMap(x),
            sortAs: makeLanguageMap(x.props?.['file-as']?.[0]) ?? x.attrs['file-as'],
            role: x.props?.role?.filter((x)=>x.scheme === PREFIX.marc + 'relators')?.map((x)=>x.value) ?? [
                x.attrs.role
            ],
            code: prop(x, 'term') ?? x.attrs.term,
            scheme: prop(x, 'authority') ?? x.attrs.authority
        } : null;
    const makeCollection = (x)=>({
            name: makeLanguageMap(x),
            // NOTE: webpub requires number but EPUB allows values like "2.2.1"
            position: one(x.props?.['group-position'])
        });
    const makeAltIdentifier = (x)=>{
        const { value } = x;
        if (/^urn:/i.test(value)) return value;
        if (/^doi:/i.test(value)) return `urn:${value}`;
        const type = x.props?.['identifier-type'];
        if (!type) {
            const scheme = x.attrs.scheme;
            if (!scheme) return value;
            // https://idpf.github.io/epub-registries/identifiers/
            // but no "jdcn", which isn't a registered URN namespace
            if (/^(doi|isbn|uuid)$/i.test(scheme)) return `urn:${scheme}:${value}`;
            // NOTE: webpub requires scheme to be a URI; EPUB allows anything
            return {
                scheme,
                value
            };
        }
        if (type.scheme === PREFIX.onix + 'codelist5') {
            const nid = ONIX5[type.value];
            if (nid) return `urn:${nid}:${value}`;
        }
        return value;
    };
    const belongsTo = Object.groupBy(properties['belongs-to-collection'] ?? [], (x)=>prop(x, 'collection-type') === 'series' ? 'series' : 'collection');
    const mainTitle = dc.title?.find((x)=>prop(x, 'title-type') === 'main') ?? dc.title?.[0];
    const metadata = {
        identifier: getIdentifier(opf),
        title: makeLanguageMap(mainTitle),
        sortAs: makeLanguageMap(mainTitle?.props?.['file-as']?.[0]) ?? mainTitle?.attrs?.['file-as'] ?? legacyMeta?.['calibre:title_sort'],
        subtitle: dc.title?.find((x)=>prop(x, 'title-type') === 'subtitle')?.value,
        language: dc.language?.map((x)=>x.value),
        description: one(dc.description),
        publisher: makeContributor(dc.publisher?.[0]),
        published: dc.date?.find((x)=>x.attrs.event === 'publication')?.value ?? one(dc.date),
        modified: one(properties[PREFIX.dcterms + 'modified']) ?? dc.date?.find((x)=>x.attrs.event === 'modification')?.value,
        subject: dc.subject?.map(makeContributor),
        belongsTo: {
            collection: belongsTo.collection?.map(makeCollection),
            series: belongsTo.series?.map(makeCollection) ?? legacyMeta?.['calibre:series'] ? {
                name: legacyMeta?.['calibre:series'],
                position: parseFloat(legacyMeta?.['calibre:series_index'])
            } : null
        },
        altIdentifier: dc.identifier?.map(makeAltIdentifier),
        source: dc.source?.map(makeAltIdentifier),
        rights: one(dc.rights)
    };
    const remapContributor = (defaultKey)=>(x)=>{
            const keys = new Set(x.role?.map((role)=>RELATORS[role] ?? defaultKey));
            return [
                keys.size ? keys : [
                    defaultKey
                ],
                x
            ];
        };
    for (const [keys, val] of [].concat(dc.creator?.map(makeContributor)?.map(remapContributor('author')) ?? [], dc.contributor?.map(makeContributor)?.map(remapContributor('contributor')) ?? []))for (const key of keys)if (metadata[key]) metadata[key].push(val);
    else metadata[key] = [
        val
    ];
    tidy(metadata);
    if (metadata.altIdentifier === metadata.identifier) delete metadata.altIdentifier;
    const rendition = {};
    const media = {};
    for (const [key, val] of Object.entries(properties)){
        if (key.startsWith(PREFIX.rendition)) rendition[camel(key.replace(PREFIX.rendition, ''))] = one(val);
        else if (key.startsWith(PREFIX.media)) media[camel(key.replace(PREFIX.media, ''))] = one(val);
    }
    if (media.duration) media.duration = parseClock(media.duration);
    return {
        metadata,
        rendition,
        media
    };
};
const parseNav = (doc, resolve = (f)=>f)=>{
    const { $, $$, $$$ } = childGetter(doc, NS.XHTML);
    const resolveHref = (href)=>href ? decodeURI(resolve(href)) : null;
    const parseLI = (getType)=>($li)=>{
            const $a = $($li, 'a') ?? $($li, 'span');
            const $ol = $($li, 'ol');
            const href = resolveHref($a?.getAttribute('href'));
            const label = getElementText($a) || $a?.getAttribute('title');
            // TODO: get and concat alt/title texts in content
            const result = {
                label,
                href,
                subitems: parseOL($ol)
            };
            if (getType) result.type = $a?.getAttributeNS(NS.EPUB, 'type')?.split(/\s/);
            return result;
        };
    const parseOL = ($ol, getType)=>$ol ? $$($ol, 'li').map(parseLI(getType)) : null;
    const parseNav = ($nav, getType)=>parseOL($($nav, 'ol'), getType);
    const $$nav = $$$(doc, 'nav');
    let toc = null, pageList = null, landmarks = null, others = [];
    for (const $nav of $$nav){
        const type = $nav.getAttributeNS(NS.EPUB, 'type')?.split(/\s/) ?? [];
        if (type.includes('toc')) toc ??= parseNav($nav);
        else if (type.includes('page-list')) pageList ??= parseNav($nav);
        else if (type.includes('landmarks')) landmarks ??= parseNav($nav, true);
        else others.push({
            label: getElementText($nav.firstElementChild),
            type,
            list: parseNav($nav)
        });
    }
    return {
        toc,
        pageList,
        landmarks,
        others
    };
};
const parseNCX = (doc, resolve = (f)=>f)=>{
    const { $, $$ } = childGetter(doc, NS.NCX);
    const resolveHref = (href)=>href ? decodeURI(resolve(href)) : null;
    const parseItem = (el)=>{
        const $label = $(el, 'navLabel');
        const $content = $(el, 'content');
        const label = getElementText($label);
        const href = resolveHref($content.getAttribute('src'));
        if (el.localName === 'navPoint') {
            const els = $$(el, 'navPoint');
            return {
                label,
                href,
                subitems: els.length ? els.map(parseItem) : null
            };
        }
        return {
            label,
            href
        };
    };
    const parseList = (el, itemName)=>$$(el, itemName).map(parseItem);
    const getSingle = (container, itemName)=>{
        const $container = $(doc.documentElement, container);
        return $container ? parseList($container, itemName) : null;
    };
    return {
        toc: getSingle('navMap', 'navPoint'),
        pageList: getSingle('pageList', 'pageTarget'),
        others: $$(doc.documentElement, 'navList').map((el)=>({
                label: getElementText($(el, 'navLabel')),
                list: parseList(el, 'navTarget')
            }))
    };
};
const parseClock = (str)=>{
    if (!str) return;
    const parts = str.split(':').map((x)=>parseFloat(x));
    if (parts.length === 3) {
        const [h, m, s] = parts;
        return h * 3600 + m * 60 + s;
    }
    if (parts.length === 2) {
        const [m, s] = parts;
        return m * 60 + s;
    }
    const [x, unit] = str.split(/(?=[^\d.])/);
    const n = parseFloat(x);
    const f = unit === 'h' ? 3600 : unit === 'min' ? 60 : unit === 'ms' ? .001 : 1;
    return n * f;
};
class MediaOverlay extends EventTarget {
    #entries;
    #lastMediaOverlayItem;
    #sectionIndex;
    #audioIndex;
    #itemIndex;
    #audio;
    #volume = 1;
    #rate = 1;
    #state;
    constructor(book, loadXML){
        super();
        this.book = book;
        this.loadXML = loadXML;
    }
    async #loadSMIL(item) {
        if (this.#lastMediaOverlayItem === item) return;
        const doc = await this.loadXML(item.href);
        const resolve = (href)=>href ? resolveURL(href, item.href) : null;
        const { $, $$$ } = childGetter(doc, NS.SMIL);
        this.#audioIndex = -1;
        this.#itemIndex = -1;
        this.#entries = $$$(doc, 'par').reduce((arr, $par)=>{
            const text = resolve($($par, 'text')?.getAttribute('src'));
            const $audio = $($par, 'audio');
            if (!text || !$audio) return arr;
            const src = resolve($audio.getAttribute('src'));
            const begin = parseClock($audio.getAttribute('clipBegin'));
            const end = parseClock($audio.getAttribute('clipEnd'));
            const last = arr.at(-1);
            if (last?.src === src) last.items.push({
                text,
                begin,
                end
            });
            else arr.push({
                src,
                items: [
                    {
                        text,
                        begin,
                        end
                    }
                ]
            });
            return arr;
        }, []);
        this.#lastMediaOverlayItem = item;
    }
    get #activeAudio() {
        return this.#entries[this.#audioIndex];
    }
    get #activeItem() {
        return this.#activeAudio?.items?.[this.#itemIndex];
    }
    #error(e) {
        console.error(e);
        this.dispatchEvent(new CustomEvent('error', {
            detail: e
        }));
    }
    #highlight() {
        this.dispatchEvent(new CustomEvent('highlight', {
            detail: this.#activeItem
        }));
    }
    #unhighlight() {
        this.dispatchEvent(new CustomEvent('unhighlight', {
            detail: this.#activeItem
        }));
    }
    async #play(audioIndex, itemIndex) {
        this.#stop();
        this.#audioIndex = audioIndex;
        this.#itemIndex = itemIndex;
        const src = this.#activeAudio?.src;
        if (!src || !this.#activeItem) return this.start(this.#sectionIndex + 1);
        const url = URL.createObjectURL(await this.book.loadBlob(src));
        const audio = new Audio(url);
        this.#audio = audio;
        audio.volume = this.#volume;
        audio.playbackRate = this.#rate;
        audio.addEventListener('timeupdate', ()=>{
            if (audio.paused) return;
            const t = audio.currentTime;
            const { items } = this.#activeAudio;
            if (t > this.#activeItem?.end) {
                this.#unhighlight();
                if (this.#itemIndex === items.length - 1) {
                    this.#play(this.#audioIndex + 1, 0).catch((e)=>this.#error(e));
                    return;
                }
            }
            const oldIndex = this.#itemIndex;
            while(items[this.#itemIndex + 1]?.begin <= t)this.#itemIndex++;
            if (this.#itemIndex !== oldIndex) this.#highlight();
        });
        audio.addEventListener('error', ()=>this.#error(new Error(`Failed to load ${src}`)));
        audio.addEventListener('playing', ()=>this.#highlight());
        audio.addEventListener('ended', ()=>{
            this.#unhighlight();
            URL.revokeObjectURL(url);
            this.#audio = null;
            this.#play(audioIndex + 1, 0).catch((e)=>this.#error(e));
        });
        if (this.#state === 'paused') {
            this.#highlight();
            audio.currentTime = this.#activeItem.begin ?? 0;
        } else audio.addEventListener('canplaythrough', ()=>{
            // for some reason need to seek in `canplaythrough`
            // or it won't play when skipping in WebKit
            audio.currentTime = this.#activeItem.begin ?? 0;
            this.#state = 'playing';
            audio.play().catch((e)=>this.#error(e));
        }, {
            once: true
        });
    }
    async start(sectionIndex, filter = ()=>true) {
        this.#audio?.pause();
        const section = this.book.sections[sectionIndex];
        const href = section?.id;
        if (!href) return;
        const { mediaOverlay } = section;
        if (!mediaOverlay) return this.start(sectionIndex + 1);
        this.#sectionIndex = sectionIndex;
        await this.#loadSMIL(mediaOverlay);
        for(let i = 0; i < this.#entries.length; i++){
            const { items } = this.#entries[i];
            for(let j = 0; j < items.length; j++){
                if (items[j].text.split('#')[0] === href && filter(items[j], j, items)) return this.#play(i, j).catch((e)=>this.#error(e));
            }
        }
    }
    pause() {
        this.#state = 'paused';
        this.#audio?.pause();
    }
    resume() {
        this.#state = 'playing';
        this.#audio?.play().catch((e)=>this.#error(e));
    }
    #stop() {
        if (this.#audio) {
            this.#audio.pause();
            URL.revokeObjectURL(this.#audio.src);
            this.#audio = null;
            this.#unhighlight();
        }
    }
    stop() {
        this.#state = 'stopped';
        this.#stop();
    }
    prev() {
        if (this.#itemIndex > 0) this.#play(this.#audioIndex, this.#itemIndex - 1);
        else if (this.#audioIndex > 0) this.#play(this.#audioIndex - 1, this.#entries[this.#audioIndex - 1].items.length - 1);
        else if (this.#sectionIndex > 0) this.start(this.#sectionIndex - 1, (_, i, items)=>i === items.length - 1);
    }
    next() {
        this.#play(this.#audioIndex, this.#itemIndex + 1);
    }
    setVolume(volume) {
        this.#volume = volume;
        if (this.#audio) this.#audio.volume = volume;
    }
    setRate(rate) {
        this.#rate = rate;
        if (this.#audio) this.#audio.playbackRate = rate;
    }
}
const isUUID = /([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/;
const getUUID = (opf)=>{
    for (const el of opf.getElementsByTagNameNS(NS.DC, 'identifier')){
        const [id] = getElementText(el).split(':').slice(-1);
        if (isUUID.test(id)) return id;
    }
    return '';
};
const getIdentifier = (opf)=>getElementText(opf.getElementById(opf.documentElement.getAttribute('unique-identifier')) ?? opf.getElementsByTagNameNS(NS.DC, 'identifier')[0]);
// https://www.w3.org/publishing/epub32/epub-ocf.html#sec-resource-obfuscation
const deobfuscate = async (key, length, blob)=>{
    const array = new Uint8Array(await blob.slice(0, length).arrayBuffer());
    length = Math.min(length, array.length);
    for(var i = 0; i < length; i++)array[i] = array[i] ^ key[i % key.length];
    return new Blob([
        array,
        blob.slice(length)
    ], {
        type: blob.type
    });
};
const WebCryptoSHA1 = async (str)=>{
    const data = new TextEncoder().encode(str);
    const buffer = await globalThis.crypto.subtle.digest('SHA-1', data);
    return new Uint8Array(buffer);
};
const deobfuscators = (sha1 = WebCryptoSHA1)=>({
        'http://www.idpf.org/2008/embedding': {
            key: (opf)=>sha1(getIdentifier(opf)// eslint-disable-next-line no-control-regex
                .replaceAll(/[\u0020\u0009\u000d\u000a]/g, '')),
            decode: (key, blob)=>deobfuscate(key, 1040, blob)
        },
        'http://ns.adobe.com/pdf/enc#RC': {
            key: (opf)=>{
                const uuid = getUUID(opf).replaceAll('-', '');
                return Uint8Array.from({
                    length: 16
                }, (_, i)=>parseInt(uuid.slice(i * 2, i * 2 + 2), 16));
            },
            decode: (key, blob)=>deobfuscate(key, 1024, blob)
        }
    });
class Encryption {
    #uris = new Map();
    #decoders = new Map();
    #algorithms;
    constructor(algorithms){
        this.#algorithms = algorithms;
    }
    async init(encryption, opf) {
        if (!encryption) return;
        const data = Array.from(encryption.getElementsByTagNameNS(NS.ENC, 'EncryptedData'), (el)=>({
                algorithm: el.getElementsByTagNameNS(NS.ENC, 'EncryptionMethod')[0]?.getAttribute('Algorithm'),
                uri: el.getElementsByTagNameNS(NS.ENC, 'CipherReference')[0]?.getAttribute('URI')
            }));
        for (const { algorithm, uri } of data){
            if (!this.#decoders.has(algorithm)) {
                const algo = this.#algorithms[algorithm];
                if (!algo) {
                    console.warn('Unknown encryption algorithm');
                    continue;
                }
                const key = await algo.key(opf);
                this.#decoders.set(algorithm, (blob)=>algo.decode(key, blob));
            }
            this.#uris.set(uri, algorithm);
        }
    }
    getDecoder(uri) {
        return this.#decoders.get(this.#uris.get(uri)) ?? ((x)=>x);
    }
}
class Resources {
    constructor({ opf, resolveHref }){
        this.opf = opf;
        const { $, $$, $$$ } = childGetter(opf, NS.OPF);
        const $manifest = $(opf.documentElement, 'manifest');
        const $spine = $(opf.documentElement, 'spine');
        const $$itemref = $$($spine, 'itemref');
        this.manifest = $$($manifest, 'item').map(getAttributes('href', 'id', 'media-type', 'properties', 'media-overlay')).map((item)=>{
            item.href = resolveHref(item.href);
            item.properties = item.properties?.split(/\s/);
            return item;
        });
        this.spine = $$itemref.map(getAttributes('idref', 'id', 'linear', 'properties')).map((item)=>(item.properties = item.properties?.split(/\s/), item));
        this.pageProgressionDirection = $spine.getAttribute('page-progression-direction');
        this.navPath = this.getItemByProperty('nav')?.href;
        this.ncxPath = (this.getItemByID($spine.getAttribute('toc')) ?? this.manifest.find((item)=>item.mediaType === MIME.NCX))?.href;
        const $guide = $(opf.documentElement, 'guide');
        if ($guide) this.guide = $$($guide, 'reference').map(getAttributes('type', 'title', 'href')).map(({ type, title, href })=>({
                label: title,
                type: type.split(/\s/),
                href: resolveHref(href)
            }));
        this.cover = this.getItemByProperty('cover-image') ?? this.getItemByID($$$(opf, 'meta').find(filterAttribute('name', 'cover'))?.getAttribute('content')) ?? this.getItemByHref(this.guide?.find((ref)=>ref.type.includes('cover'))?.href);
        this.cfis = _epubcfiJs.fromElements($$itemref);
    }
    getItemByID(id) {
        return this.manifest.find((item)=>item.id === id);
    }
    getItemByHref(href) {
        return this.manifest.find((item)=>item.href === href);
    }
    getItemByProperty(prop) {
        return this.manifest.find((item)=>item.properties?.includes(prop));
    }
    resolveCFI(cfi) {
        const parts = _epubcfiJs.parse(cfi);
        const top = (parts.parent ?? parts).shift();
        let $itemref = _epubcfiJs.toElement(this.opf, top);
        // make sure it's an idref; if not, try again without the ID assertion
        // mainly because Epub.js used to generate wrong ID assertions
        // https://github.com/futurepress/epub.js/issues/1236
        if ($itemref && $itemref.nodeName !== 'idref') {
            top.at(-1).id = null;
            $itemref = _epubcfiJs.toElement(this.opf, top);
        }
        const idref = $itemref?.getAttribute('idref');
        const index = this.spine.findIndex((item)=>item.idref === idref);
        const anchor = (doc)=>_epubcfiJs.toRange(doc, parts);
        return {
            index,
            anchor
        };
    }
}
class Loader {
    #cache = new Map();
    #children = new Map();
    #refCount = new Map();
    allowScript = false;
    constructor({ loadText, loadBlob, resources }){
        this.loadText = loadText;
        this.loadBlob = loadBlob;
        this.manifest = resources.manifest;
        this.assets = resources.manifest;
    // needed only when replacing in (X)HTML w/o parsing (see below)
    //.filter(({ mediaType }) => ![MIME.XHTML, MIME.HTML].includes(mediaType))
    }
    createURL(href, data, type, parent) {
        if (!data) return '';
        const url = URL.createObjectURL(new Blob([
            data
        ], {
            type
        }));
        this.#cache.set(href, url);
        this.#refCount.set(href, 1);
        if (parent) {
            const childList = this.#children.get(parent);
            if (childList) childList.push(href);
            else this.#children.set(parent, [
                href
            ]);
        }
        return url;
    }
    ref(href, parent) {
        const childList = this.#children.get(parent);
        if (!childList?.includes(href)) {
            this.#refCount.set(href, this.#refCount.get(href) + 1);
            //console.log(`referencing ${href}, now ${this.#refCount.get(href)}`)
            if (childList) childList.push(href);
            else this.#children.set(parent, [
                href
            ]);
        }
        return this.#cache.get(href);
    }
    unref(href) {
        if (!this.#refCount.has(href)) return;
        const count = this.#refCount.get(href) - 1;
        //console.log(`unreferencing ${href}, now ${count}`)
        if (count < 1) {
            //console.log(`unloading ${href}`)
            URL.revokeObjectURL(this.#cache.get(href));
            this.#cache.delete(href);
            this.#refCount.delete(href);
            // unref children
            const childList = this.#children.get(href);
            if (childList) while(childList.length)this.unref(childList.pop());
            this.#children.delete(href);
        } else this.#refCount.set(href, count);
    }
    // load manifest item, recursively loading all resources as needed
    async loadItem(item, parents = []) {
        if (!item) return null;
        const { href, mediaType } = item;
        const isScript = MIME.JS.test(item.mediaType);
        if (isScript && !this.allowScript) return null;
        const parent = parents.at(-1);
        if (this.#cache.has(href)) return this.ref(href, parent);
        const shouldReplace = (isScript || [
            MIME.XHTML,
            MIME.HTML,
            MIME.CSS,
            MIME.SVG
        ].includes(mediaType)) && parents.every((p)=>p !== href);
        if (shouldReplace) return this.loadReplaced(item, parents);
        return this.createURL(href, await this.loadBlob(href), mediaType, parent);
    }
    async loadHref(href, base, parents = []) {
        if (isExternal(href)) return href;
        const path = resolveURL(href, base);
        const item = this.manifest.find((item)=>item.href === path);
        if (!item) return href;
        return this.loadItem(item, parents.concat(base));
    }
    async loadReplaced(item, parents = []) {
        const { href, mediaType } = item;
        const parent = parents.at(-1);
        const str = await this.loadText(href);
        if (!str) return null;
        // note that one can also just use `replaceString` for everything:
        // ```
        // const replaced = await this.replaceString(str, href, parents)
        // return this.createURL(href, replaced, mediaType, parent)
        // ```
        // which is basically what Epub.js does, which is simpler, but will
        // break things like iframes (because you don't want to replace links)
        // or text that just happen to be paths
        // parse and replace in HTML
        if ([
            MIME.XHTML,
            MIME.HTML,
            MIME.SVG
        ].includes(mediaType)) {
            let doc = new DOMParser().parseFromString(str, mediaType);
            // change to HTML if it's not valid XHTML
            if (mediaType === MIME.XHTML && (doc.querySelector('parsererror') || !doc.documentElement?.namespaceURI)) {
                console.warn(doc.querySelector('parsererror')?.innerText ?? 'Invalid XHTML');
                item.mediaType = MIME.HTML;
                doc = new DOMParser().parseFromString(str, item.mediaType);
            }
            // replace hrefs in XML processing instructions
            // this is mainly for SVGs that use xml-stylesheet
            if ([
                MIME.XHTML,
                MIME.SVG
            ].includes(item.mediaType)) {
                let child = doc.firstChild;
                while(child instanceof ProcessingInstruction){
                    if (child.data) {
                        const replacedData = await replaceSeries(child.data, /(?:^|\s*)(href\s*=\s*['"])([^'"]*)(['"])/i, (_, p1, p2, p3)=>this.loadHref(p2, href, parents).then((p2)=>`${p1}${p2}${p3}`));
                        child.replaceWith(doc.createProcessingInstruction(child.target, replacedData));
                    }
                    child = child.nextSibling;
                }
            }
            // replace hrefs (excluding anchors)
            // TODO: srcset?
            const replace = async (el, attr)=>el.setAttribute(attr, await this.loadHref(el.getAttribute(attr), href, parents));
            for (const el of doc.querySelectorAll('link[href]'))await replace(el, 'href');
            for (const el of doc.querySelectorAll('[src]'))await replace(el, 'src');
            for (const el of doc.querySelectorAll('[poster]'))await replace(el, 'poster');
            for (const el of doc.querySelectorAll('object[data]'))await replace(el, 'data');
            for (const el of doc.querySelectorAll('[*|href]:not([href])'))el.setAttributeNS(NS.XLINK, 'href', await this.loadHref(el.getAttributeNS(NS.XLINK, 'href'), href, parents));
            // replace inline styles
            for (const el of doc.querySelectorAll('style'))if (el.textContent) el.textContent = await this.replaceCSS(el.textContent, href, parents);
            for (const el of doc.querySelectorAll('[style]'))el.setAttribute('style', await this.replaceCSS(el.getAttribute('style'), href, parents));
            // TODO: replace inline scripts? probably not worth the trouble
            const result = new XMLSerializer().serializeToString(doc);
            return this.createURL(href, result, item.mediaType, parent);
        }
        const result = mediaType === MIME.CSS ? await this.replaceCSS(str, href, parents) : await this.replaceString(str, href, parents);
        return this.createURL(href, result, mediaType, parent);
    }
    async replaceCSS(str, href, parents = []) {
        const replacedUrls = await replaceSeries(str, /url\(\s*["']?([^'"\n]*?)\s*["']?\s*\)/gi, (_, url)=>this.loadHref(url, href, parents).then((url)=>`url("${url}")`));
        // apart from `url()`, strings can be used for `@import` (but why?!)
        const replacedImports = await replaceSeries(replacedUrls, /@import\s*["']([^"'\n]*?)["']/gi, (_, url)=>this.loadHref(url, href, parents).then((url)=>`@import "${url}"`));
        const w = window?.innerWidth ?? 800;
        const h = window?.innerHeight ?? 600;
        return replacedImports// unprefix as most of the props are (only) supported unprefixed
        .replace(/(?<=[{\s;])-epub-/gi, '')// replace vw and vh as they cause problems with layout
        .replace(/(\d*\.?\d+)vw/gi, (_, d)=>parseFloat(d) * w / 100 + 'px').replace(/(\d*\.?\d+)vh/gi, (_, d)=>parseFloat(d) * h / 100 + 'px')// `page-break-*` unsupported in columns; replace with `column-break-*`
        .replace(/page-break-(after|before|inside)\s*:/gi, (_, x)=>`-webkit-column-break-${x}:`).replace(/break-(after|before|inside)\s*:\s*(avoid-)?page/gi, (_, x, y)=>`break-${x}: ${y ?? ''}column`);
    }
    // find & replace all possible relative paths for all assets without parsing
    replaceString(str, href, parents = []) {
        const assetMap = new Map();
        const urls = this.assets.map((asset)=>{
            // do not replace references to the file itself
            if (asset.href === href) return;
            // href was decoded and resolved when parsing the manifest
            const relative = pathRelative(pathDirname(href), asset.href);
            const relativeEnc = encodeURI(relative);
            const rootRelative = '/' + asset.href;
            const rootRelativeEnc = encodeURI(rootRelative);
            const set = new Set([
                relative,
                relativeEnc,
                rootRelative,
                rootRelativeEnc
            ]);
            for (const url of set)assetMap.set(url, asset);
            return Array.from(set);
        }).flat().filter((x)=>x);
        if (!urls.length) return str;
        const regex = new RegExp(urls.map(regexEscape).join('|'), 'g');
        return replaceSeries(str, regex, async (match)=>this.loadItem(assetMap.get(match.replace(/^\//, '')), parents.concat(href)));
    }
    unloadItem(item) {
        this.unref(item?.href);
    }
    destroy() {
        for (const url of this.#cache.values())URL.revokeObjectURL(url);
    }
}
const getHTMLFragment = (doc, id)=>doc.getElementById(id) ?? doc.querySelector(`[name="${CSS.escape(id)}"]`);
const getPageSpread = (properties)=>{
    for (const p of properties){
        if (p === 'page-spread-left' || p === 'rendition:page-spread-left') return 'left';
        if (p === 'page-spread-right' || p === 'rendition:page-spread-right') return 'right';
        if (p === 'rendition:page-spread-center') return 'center';
    }
};
const getDisplayOptions = (doc)=>{
    if (!doc) return null;
    return {
        fixedLayout: getElementText(doc.querySelector('option[name="fixed-layout"]')),
        openToSpread: getElementText(doc.querySelector('option[name="open-to-spread"]'))
    };
};
class EPUB {
    parser = new DOMParser();
    #loader;
    #encryption;
    constructor({ loadText, loadBlob, getSize, sha1 }){
        this.loadText = loadText;
        this.loadBlob = loadBlob;
        this.getSize = getSize;
        this.#encryption = new Encryption(deobfuscators(sha1));
    }
    async #loadXML(uri) {
        const str = await this.loadText(uri);
        if (!str) return null;
        const doc = this.parser.parseFromString(str, MIME.XML);
        if (doc.querySelector('parsererror')) throw new Error(`XML parsing error: ${uri}
${doc.querySelector('parsererror').innerText}`);
        return doc;
    }
    async init() {
        const $container = await this.#loadXML('META-INF/container.xml');
        if (!$container) throw new Error('Failed to load container file');
        const opfs = Array.from($container.getElementsByTagNameNS(NS.CONTAINER, 'rootfile'), getAttributes('full-path', 'media-type')).filter((file)=>file.mediaType === 'application/oebps-package+xml');
        if (!opfs.length) throw new Error('No package document defined in container');
        const opfPath = opfs[0].fullPath;
        const opf = await this.#loadXML(opfPath);
        if (!opf) throw new Error('Failed to load package document');
        const $encryption = await this.#loadXML('META-INF/encryption.xml');
        await this.#encryption.init($encryption, opf);
        this.resources = new Resources({
            opf,
            resolveHref: (url)=>resolveURL(url, opfPath)
        });
        this.#loader = new Loader({
            loadText: this.loadText,
            loadBlob: (uri)=>Promise.resolve(this.loadBlob(uri)).then(this.#encryption.getDecoder(uri)),
            resources: this.resources
        });
        this.sections = this.resources.spine.map((spineItem, index)=>{
            const { idref, linear, properties = [] } = spineItem;
            const item = this.resources.getItemByID(idref);
            if (!item) {
                console.warn(`Could not find item with ID "${idref}" in manifest`);
                return null;
            }
            return {
                id: item.href,
                load: ()=>this.#loader.loadItem(item),
                unload: ()=>this.#loader.unloadItem(item),
                createDocument: ()=>this.loadDocument(item),
                size: this.getSize(item.href),
                cfi: this.resources.cfis[index],
                linear,
                pageSpread: getPageSpread(properties),
                resolveHref: (href)=>resolveURL(href, item.href),
                mediaOverlay: item.mediaOverlay ? this.resources.getItemByID(item.mediaOverlay) : null
            };
        }).filter((s)=>s);
        const { navPath, ncxPath } = this.resources;
        if (navPath) try {
            const resolve = (url)=>resolveURL(url, navPath);
            const nav = parseNav(await this.#loadXML(navPath), resolve);
            this.toc = nav.toc;
            this.pageList = nav.pageList;
            this.landmarks = nav.landmarks;
        } catch (e) {
            console.warn(e);
        }
        if (!this.toc && ncxPath) try {
            const resolve = (url)=>resolveURL(url, ncxPath);
            const ncx = parseNCX(await this.#loadXML(ncxPath), resolve);
            this.toc = ncx.toc;
            this.pageList = ncx.pageList;
        } catch (e) {
            console.warn(e);
        }
        this.landmarks ??= this.resources.guide;
        const { metadata, rendition, media } = getMetadata(opf);
        this.metadata = metadata;
        this.rendition = rendition;
        this.media = media;
        this.dir = this.resources.pageProgressionDirection;
        const displayOptions = getDisplayOptions(await this.#loadXML('META-INF/com.apple.ibooks.display-options.xml') ?? await this.#loadXML('META-INF/com.kobobooks.display-options.xml'));
        if (displayOptions) {
            if (displayOptions.fixedLayout === 'true') this.rendition.layout ??= 'pre-paginated';
            if (displayOptions.openToSpread === 'false') this.sections.find((section)=>section.linear !== 'no').pageSpread ??= this.dir === 'rtl' ? 'left' : 'right';
        }
        return this;
    }
    async loadDocument(item) {
        const str = await this.loadText(item.href);
        return this.parser.parseFromString(str, item.mediaType);
    }
    getMediaOverlay() {
        return new MediaOverlay(this, this.#loadXML.bind(this));
    }
    resolveCFI(cfi) {
        return this.resources.resolveCFI(cfi);
    }
    resolveHref(href) {
        const [path, hash] = href.split('#');
        const item = this.resources.getItemByHref(decodeURI(path));
        if (!item) return null;
        const index = this.resources.spine.findIndex(({ idref })=>idref === item.id);
        const anchor = hash ? (doc)=>getHTMLFragment(doc, hash) : ()=>0;
        return {
            index,
            anchor
        };
    }
    splitTOCHref(href) {
        return href?.split('#') ?? [];
    }
    getTOCFragment(doc, id) {
        return doc.getElementById(id) ?? doc.querySelector(`[name="${CSS.escape(id)}"]`);
    }
    isExternal(uri) {
        return isExternal(uri);
    }
    async getCover() {
        const cover = this.resources?.cover;
        return cover?.href ? new Blob([
            await this.loadBlob(cover.href)
        ], {
            type: cover.mediaType
        }) : null;
    }
    async getCalibreBookmarks() {
        const txt = await this.loadText('META-INF/calibre_bookmarks.txt');
        const magic = 'encoding=json+base64:';
        if (txt?.startsWith(magic)) {
            const json = atob(txt.slice(magic.length));
            return JSON.parse(json);
        }
    }
    destroy() {
        this.#loader?.destroy();
    }
}

},{"./epubcfi.js":"5oxNx","@parcel/transformer-js/src/esmodule-helpers.js":"3Ha98"}],"c41dc":[function(require,module,exports,__globalThis) {
// length for context in excerpts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "search", ()=>search);
parcelHelpers.export(exports, "searchMatcher", ()=>searchMatcher);
const CONTEXT_LENGTH = 50;
const normalizeWhitespace = (str)=>str.replace(/\s+/g, ' ');
const makeExcerpt = (strs, { startIndex, startOffset, endIndex, endOffset })=>{
    const start = strs[startIndex];
    const end = strs[endIndex];
    const match = start === end ? start.slice(startOffset, endOffset) : start.slice(startOffset) + strs.slice(start + 1, end).join('') + end.slice(0, endOffset);
    const trimmedStart = normalizeWhitespace(start.slice(0, startOffset)).trimStart();
    const trimmedEnd = normalizeWhitespace(end.slice(endOffset)).trimEnd();
    const ellipsisPre = trimmedStart.length < CONTEXT_LENGTH ? '' : "\u2026";
    const ellipsisPost = trimmedEnd.length < CONTEXT_LENGTH ? '' : "\u2026";
    const pre = `${ellipsisPre}${trimmedStart.slice(-CONTEXT_LENGTH)}`;
    const post = `${trimmedEnd.slice(0, CONTEXT_LENGTH)}${ellipsisPost}`;
    return {
        pre,
        match,
        post
    };
};
const simpleSearch = function*(strs, query, options = {}) {
    const { locales = 'en', sensitivity } = options;
    const matchCase = sensitivity === 'variant';
    const haystack = strs.join('');
    const lowerHaystack = matchCase ? haystack : haystack.toLocaleLowerCase(locales);
    const needle = matchCase ? query : query.toLocaleLowerCase(locales);
    const needleLength = needle.length;
    let index = -1;
    let strIndex = -1;
    let sum = 0;
    do {
        index = lowerHaystack.indexOf(needle, index + 1);
        if (index > -1) {
            while(sum <= index)sum += strs[++strIndex].length;
            const startIndex = strIndex;
            const startOffset = index - (sum - strs[strIndex].length);
            const end = index + needleLength;
            while(sum <= end)sum += strs[++strIndex].length;
            const endIndex = strIndex;
            const endOffset = end - (sum - strs[strIndex].length);
            const range = {
                startIndex,
                startOffset,
                endIndex,
                endOffset
            };
            yield {
                range,
                excerpt: makeExcerpt(strs, range)
            };
        }
    }while (index > -1);
};
const segmenterSearch = function*(strs, query, options = {}) {
    const { locales = 'en', granularity = 'word', sensitivity = 'base' } = options;
    let segmenter, collator;
    try {
        segmenter = new Intl.Segmenter(locales, {
            usage: 'search',
            granularity
        });
        collator = new Intl.Collator(locales, {
            sensitivity
        });
    } catch (e) {
        console.warn(e);
        segmenter = new Intl.Segmenter('en', {
            usage: 'search',
            granularity
        });
        collator = new Intl.Collator('en', {
            sensitivity
        });
    }
    const queryLength = Array.from(segmenter.segment(query)).length;
    const substrArr = [];
    let strIndex = 0;
    let segments = segmenter.segment(strs[strIndex])[Symbol.iterator]();
    main: while(strIndex < strs.length){
        while(substrArr.length < queryLength){
            const { done, value } = segments.next();
            if (done) {
                // the current string is exhausted
                // move on to the next string
                strIndex++;
                if (strIndex < strs.length) {
                    segments = segmenter.segment(strs[strIndex])[Symbol.iterator]();
                    continue;
                } else break main;
            }
            const { index, segment } = value;
            // ignore formatting characters
            if (!/[^\p{Format}]/u.test(segment)) continue;
            // normalize whitespace
            if (/\s/u.test(segment)) {
                if (!/\s/u.test(substrArr[substrArr.length - 1]?.segment)) substrArr.push({
                    strIndex,
                    index,
                    segment: ' '
                });
                continue;
            }
            value.strIndex = strIndex;
            substrArr.push(value);
        }
        const substr = substrArr.map((x)=>x.segment).join('');
        if (collator.compare(query, substr) === 0) {
            const endIndex = strIndex;
            const lastSeg = substrArr[substrArr.length - 1];
            const endOffset = lastSeg.index + lastSeg.segment.length;
            const startIndex = substrArr[0].strIndex;
            const startOffset = substrArr[0].index;
            const range = {
                startIndex,
                startOffset,
                endIndex,
                endOffset
            };
            yield {
                range,
                excerpt: makeExcerpt(strs, range)
            };
        }
        substrArr.shift();
    }
};
const search = (strs, query, options)=>{
    const { granularity = 'grapheme', sensitivity = 'base' } = options;
    if (!Intl?.Segmenter || granularity === 'grapheme' && (sensitivity === 'variant' || sensitivity === 'accent')) return simpleSearch(strs, query, options);
    return segmenterSearch(strs, query, options);
};
const searchMatcher = (textWalker, opts)=>{
    const { defaultLocale, matchCase, matchDiacritics, matchWholeWords } = opts;
    return function*(doc, query) {
        const iter = textWalker(doc, function*(strs, makeRange) {
            for (const result of search(strs, query, {
                locales: doc.body.lang || doc.documentElement.lang || defaultLocale || 'en',
                granularity: matchWholeWords ? 'word' : 'grapheme',
                sensitivity: matchDiacritics && matchCase ? 'variant' : matchDiacritics && !matchCase ? 'accent' : !matchDiacritics && matchCase ? 'case' : 'base'
            })){
                const { startIndex, startOffset, endIndex, endOffset } = result.range;
                result.range = makeRange(startIndex, startOffset, endIndex, endOffset);
                yield result;
            }
        });
        for (const result of iter)yield result;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3Ha98"}],"f6bus":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TTS", ()=>TTS);
const NS = {
    XML: 'http://www.w3.org/XML/1998/namespace',
    SSML: 'http://www.w3.org/2001/10/synthesis'
};
const blockTags = new Set([
    'article',
    'aside',
    'audio',
    'blockquote',
    'caption',
    'details',
    'dialog',
    'div',
    'dl',
    'dt',
    'dd',
    'figure',
    'footer',
    'form',
    'figcaption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'li',
    'main',
    'math',
    'nav',
    'ol',
    'p',
    'pre',
    'section',
    'tr'
]);
const getLang = (el)=>{
    const x = el.lang || el?.getAttributeNS?.(NS.XML, 'lang');
    return x ? x : el.parentElement ? getLang(el.parentElement) : null;
};
const getAlphabet = (el)=>{
    const x = el?.getAttributeNS?.(NS.XML, 'lang');
    return x ? x : el.parentElement ? getAlphabet(el.parentElement) : null;
};
const getSegmenter = (lang = 'en', granularity = 'word')=>{
    const segmenter = new Intl.Segmenter(lang, {
        granularity
    });
    const granularityIsWord = granularity === 'word';
    return function*(strs, makeRange) {
        const str = strs.join('');
        let name = 0;
        let strIndex = -1;
        let sum = 0;
        for (const { index, segment, isWordLike } of segmenter.segment(str)){
            if (granularityIsWord && !isWordLike) continue;
            while(sum <= index)sum += strs[++strIndex].length;
            const startIndex = strIndex;
            const startOffset = index - (sum - strs[strIndex].length);
            const end = index + segment.length;
            if (end < str.length) while(sum <= end)sum += strs[++strIndex].length;
            const endIndex = strIndex;
            const endOffset = end - (sum - strs[strIndex].length);
            yield [
                (name++).toString(),
                makeRange(startIndex, startOffset, endIndex, endOffset)
            ];
        }
    };
};
const fragmentToSSML = (fragment, inherited)=>{
    const ssml = document.implementation.createDocument(NS.SSML, 'speak');
    const { lang } = inherited;
    if (lang) ssml.documentElement.setAttributeNS(NS.XML, 'lang', lang);
    const convert = (node, parent, inheritedAlphabet)=>{
        if (!node) return;
        if (node.nodeType === 3) return ssml.createTextNode(node.textContent);
        if (node.nodeType === 4) return ssml.createCDATASection(node.textContent);
        if (node.nodeType !== 1) return;
        let el;
        const nodeName = node.nodeName.toLowerCase();
        if (nodeName === 'foliate-mark') {
            el = ssml.createElementNS(NS.SSML, 'mark');
            el.setAttribute('name', node.dataset.name);
        } else if (nodeName === 'br') el = ssml.createElementNS(NS.SSML, 'break');
        else if (nodeName === 'em' || nodeName === 'strong') el = ssml.createElementNS(NS.SSML, 'emphasis');
        const lang = node.lang || node.getAttributeNS(NS.XML, 'lang');
        if (lang) {
            if (!el) el = ssml.createElementNS(NS.SSML, 'lang');
            el.setAttributeNS(NS.XML, 'lang', lang);
        }
        const alphabet = node.getAttributeNS(NS.SSML, 'alphabet') || inheritedAlphabet;
        if (!el) {
            const ph = node.getAttributeNS(NS.SSML, 'ph');
            if (ph) {
                el = ssml.createElementNS(NS.SSML, 'phoneme');
                if (alphabet) el.setAttribute('alphabet', alphabet);
                el.setAttribute('ph', ph);
            }
        }
        if (!el) el = parent;
        let child = node.firstChild;
        while(child){
            const childEl = convert(child, el, alphabet);
            if (childEl && el !== childEl) el.append(childEl);
            child = child.nextSibling;
        }
        return el;
    };
    convert(fragment.firstChild, ssml.documentElement, inherited.alphabet);
    return ssml;
};
const getFragmentWithMarks = (range, textWalker, granularity)=>{
    const lang = getLang(range.commonAncestorContainer);
    const alphabet = getAlphabet(range.commonAncestorContainer);
    const segmenter = getSegmenter(lang, granularity);
    const fragment = range.cloneContents();
    // we need ranges on both the original document (for highlighting)
    // and the document fragment (for inserting marks)
    // so unfortunately need to do it twice, as you can't copy the ranges
    const entries = [
        ...textWalker(range, segmenter)
    ];
    const fragmentEntries = [
        ...textWalker(fragment, segmenter)
    ];
    for (const [name, range] of fragmentEntries){
        const mark = document.createElement('foliate-mark');
        mark.dataset.name = name;
        range.insertNode(mark);
    }
    const ssml = fragmentToSSML(fragment, {
        lang,
        alphabet
    });
    return {
        entries,
        ssml
    };
};
const rangeIsEmpty = (range)=>!range.toString().trim();
function* getBlocks(doc) {
    let last;
    const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT);
    for(let node = walker.nextNode(); node; node = walker.nextNode()){
        const name = node.tagName.toLowerCase();
        if (blockTags.has(name)) {
            if (last) {
                last.setEndBefore(node);
                if (!rangeIsEmpty(last)) yield last;
            }
            last = doc.createRange();
            last.setStart(node, 0);
        }
    }
    if (!last) {
        last = doc.createRange();
        last.setStart(doc.body.firstChild ?? doc.body, 0);
    }
    last.setEndAfter(doc.body.lastChild ?? doc.body);
    if (!rangeIsEmpty(last)) yield last;
}
class ListIterator {
    #arr = [];
    #iter;
    #index = -1;
    #f;
    constructor(iter, f = (x)=>x){
        this.#iter = iter;
        this.#f = f;
    }
    current() {
        if (this.#arr[this.#index]) return this.#f(this.#arr[this.#index]);
    }
    first() {
        const newIndex = 0;
        if (this.#arr[newIndex]) {
            this.#index = newIndex;
            return this.#f(this.#arr[newIndex]);
        }
    }
    prev() {
        const newIndex = this.#index - 1;
        if (this.#arr[newIndex]) {
            this.#index = newIndex;
            return this.#f(this.#arr[newIndex]);
        }
    }
    next() {
        const newIndex = this.#index + 1;
        if (this.#arr[newIndex]) {
            this.#index = newIndex;
            return this.#f(this.#arr[newIndex]);
        }
        while(true){
            const { done, value } = this.#iter.next();
            if (done) break;
            this.#arr.push(value);
            if (this.#arr[newIndex]) {
                this.#index = newIndex;
                return this.#f(this.#arr[newIndex]);
            }
        }
    }
    find(f) {
        const index = this.#arr.findIndex((x)=>f(x));
        if (index > -1) {
            this.#index = index;
            return this.#f(this.#arr[index]);
        }
        while(true){
            const { done, value } = this.#iter.next();
            if (done) break;
            this.#arr.push(value);
            if (f(value)) {
                this.#index = this.#arr.length - 1;
                return this.#f(value);
            }
        }
    }
}
class TTS {
    #list;
    #ranges;
    #lastMark;
    #serializer = new XMLSerializer();
    constructor(doc, textWalker, highlight){
        this.doc = doc;
        this.highlight = highlight;
        this.#list = new ListIterator(getBlocks(doc), (range)=>{
            const { entries, ssml } = getFragmentWithMarks(range, textWalker);
            this.#ranges = new Map(entries);
            return [
                ssml,
                range
            ];
        });
    }
    #getMarkElement(doc, mark) {
        if (!mark) return null;
        return doc.querySelector(`mark[name="${CSS.escape(mark)}"`);
    }
    #speak(doc, getNode) {
        if (!doc) return;
        if (!getNode) return this.#serializer.serializeToString(doc);
        const ssml = document.implementation.createDocument(NS.SSML, 'speak');
        ssml.documentElement.replaceWith(ssml.importNode(doc.documentElement, true));
        let node = getNode(ssml)?.previousSibling;
        while(node){
            const next = node.previousSibling ?? node.parentNode?.previousSibling;
            node.parentNode.removeChild(node);
            node = next;
        }
        return this.#serializer.serializeToString(ssml);
    }
    start() {
        this.#lastMark = null;
        const [doc] = this.#list.first() ?? [];
        if (!doc) return this.next();
        return this.#speak(doc, (ssml)=>this.#getMarkElement(ssml, this.#lastMark));
    }
    resume() {
        const [doc] = this.#list.current() ?? [];
        if (!doc) return this.next();
        return this.#speak(doc, (ssml)=>this.#getMarkElement(ssml, this.#lastMark));
    }
    prev(paused) {
        this.#lastMark = null;
        const [doc, range] = this.#list.prev() ?? [];
        if (paused && range) this.highlight(range.cloneRange());
        return this.#speak(doc);
    }
    next(paused) {
        this.#lastMark = null;
        const [doc, range] = this.#list.next() ?? [];
        if (paused && range) this.highlight(range.cloneRange());
        return this.#speak(doc);
    }
    from(range) {
        this.#lastMark = null;
        const [doc] = this.#list.find((range_)=>range.compareBoundaryPoints(Range.END_TO_START, range_) <= 0);
        let mark;
        for (const [name, range_] of this.#ranges.entries())if (range.compareBoundaryPoints(Range.START_TO_START, range_) <= 0) {
            mark = name;
            break;
        }
        return this.#speak(doc, (ssml)=>this.#getMarkElement(ssml, mark));
    }
    setMark(mark) {
        const range = this.#ranges.get(mark);
        if (range) {
            this.#lastMark = mark;
            this.highlight(range.cloneRange());
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3Ha98"}],"dtr1O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BlobReader", ()=>ut);
parcelHelpers.export(exports, "BlobWriter", ()=>dt);
parcelHelpers.export(exports, "TextWriter", ()=>ft);
parcelHelpers.export(exports, "ZipReader", ()=>Ht);
parcelHelpers.export(exports, "configure", ()=>F);
const e = -2, t = -3, n = -5, i = [
    0,
    1,
    3,
    7,
    15,
    31,
    63,
    127,
    255,
    511,
    1023,
    2047,
    4095,
    8191,
    16383,
    32767,
    65535
], r = [
    96,
    7,
    256,
    0,
    8,
    80,
    0,
    8,
    16,
    84,
    8,
    115,
    82,
    7,
    31,
    0,
    8,
    112,
    0,
    8,
    48,
    0,
    9,
    192,
    80,
    7,
    10,
    0,
    8,
    96,
    0,
    8,
    32,
    0,
    9,
    160,
    0,
    8,
    0,
    0,
    8,
    128,
    0,
    8,
    64,
    0,
    9,
    224,
    80,
    7,
    6,
    0,
    8,
    88,
    0,
    8,
    24,
    0,
    9,
    144,
    83,
    7,
    59,
    0,
    8,
    120,
    0,
    8,
    56,
    0,
    9,
    208,
    81,
    7,
    17,
    0,
    8,
    104,
    0,
    8,
    40,
    0,
    9,
    176,
    0,
    8,
    8,
    0,
    8,
    136,
    0,
    8,
    72,
    0,
    9,
    240,
    80,
    7,
    4,
    0,
    8,
    84,
    0,
    8,
    20,
    85,
    8,
    227,
    83,
    7,
    43,
    0,
    8,
    116,
    0,
    8,
    52,
    0,
    9,
    200,
    81,
    7,
    13,
    0,
    8,
    100,
    0,
    8,
    36,
    0,
    9,
    168,
    0,
    8,
    4,
    0,
    8,
    132,
    0,
    8,
    68,
    0,
    9,
    232,
    80,
    7,
    8,
    0,
    8,
    92,
    0,
    8,
    28,
    0,
    9,
    152,
    84,
    7,
    83,
    0,
    8,
    124,
    0,
    8,
    60,
    0,
    9,
    216,
    82,
    7,
    23,
    0,
    8,
    108,
    0,
    8,
    44,
    0,
    9,
    184,
    0,
    8,
    12,
    0,
    8,
    140,
    0,
    8,
    76,
    0,
    9,
    248,
    80,
    7,
    3,
    0,
    8,
    82,
    0,
    8,
    18,
    85,
    8,
    163,
    83,
    7,
    35,
    0,
    8,
    114,
    0,
    8,
    50,
    0,
    9,
    196,
    81,
    7,
    11,
    0,
    8,
    98,
    0,
    8,
    34,
    0,
    9,
    164,
    0,
    8,
    2,
    0,
    8,
    130,
    0,
    8,
    66,
    0,
    9,
    228,
    80,
    7,
    7,
    0,
    8,
    90,
    0,
    8,
    26,
    0,
    9,
    148,
    84,
    7,
    67,
    0,
    8,
    122,
    0,
    8,
    58,
    0,
    9,
    212,
    82,
    7,
    19,
    0,
    8,
    106,
    0,
    8,
    42,
    0,
    9,
    180,
    0,
    8,
    10,
    0,
    8,
    138,
    0,
    8,
    74,
    0,
    9,
    244,
    80,
    7,
    5,
    0,
    8,
    86,
    0,
    8,
    22,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    118,
    0,
    8,
    54,
    0,
    9,
    204,
    81,
    7,
    15,
    0,
    8,
    102,
    0,
    8,
    38,
    0,
    9,
    172,
    0,
    8,
    6,
    0,
    8,
    134,
    0,
    8,
    70,
    0,
    9,
    236,
    80,
    7,
    9,
    0,
    8,
    94,
    0,
    8,
    30,
    0,
    9,
    156,
    84,
    7,
    99,
    0,
    8,
    126,
    0,
    8,
    62,
    0,
    9,
    220,
    82,
    7,
    27,
    0,
    8,
    110,
    0,
    8,
    46,
    0,
    9,
    188,
    0,
    8,
    14,
    0,
    8,
    142,
    0,
    8,
    78,
    0,
    9,
    252,
    96,
    7,
    256,
    0,
    8,
    81,
    0,
    8,
    17,
    85,
    8,
    131,
    82,
    7,
    31,
    0,
    8,
    113,
    0,
    8,
    49,
    0,
    9,
    194,
    80,
    7,
    10,
    0,
    8,
    97,
    0,
    8,
    33,
    0,
    9,
    162,
    0,
    8,
    1,
    0,
    8,
    129,
    0,
    8,
    65,
    0,
    9,
    226,
    80,
    7,
    6,
    0,
    8,
    89,
    0,
    8,
    25,
    0,
    9,
    146,
    83,
    7,
    59,
    0,
    8,
    121,
    0,
    8,
    57,
    0,
    9,
    210,
    81,
    7,
    17,
    0,
    8,
    105,
    0,
    8,
    41,
    0,
    9,
    178,
    0,
    8,
    9,
    0,
    8,
    137,
    0,
    8,
    73,
    0,
    9,
    242,
    80,
    7,
    4,
    0,
    8,
    85,
    0,
    8,
    21,
    80,
    8,
    258,
    83,
    7,
    43,
    0,
    8,
    117,
    0,
    8,
    53,
    0,
    9,
    202,
    81,
    7,
    13,
    0,
    8,
    101,
    0,
    8,
    37,
    0,
    9,
    170,
    0,
    8,
    5,
    0,
    8,
    133,
    0,
    8,
    69,
    0,
    9,
    234,
    80,
    7,
    8,
    0,
    8,
    93,
    0,
    8,
    29,
    0,
    9,
    154,
    84,
    7,
    83,
    0,
    8,
    125,
    0,
    8,
    61,
    0,
    9,
    218,
    82,
    7,
    23,
    0,
    8,
    109,
    0,
    8,
    45,
    0,
    9,
    186,
    0,
    8,
    13,
    0,
    8,
    141,
    0,
    8,
    77,
    0,
    9,
    250,
    80,
    7,
    3,
    0,
    8,
    83,
    0,
    8,
    19,
    85,
    8,
    195,
    83,
    7,
    35,
    0,
    8,
    115,
    0,
    8,
    51,
    0,
    9,
    198,
    81,
    7,
    11,
    0,
    8,
    99,
    0,
    8,
    35,
    0,
    9,
    166,
    0,
    8,
    3,
    0,
    8,
    131,
    0,
    8,
    67,
    0,
    9,
    230,
    80,
    7,
    7,
    0,
    8,
    91,
    0,
    8,
    27,
    0,
    9,
    150,
    84,
    7,
    67,
    0,
    8,
    123,
    0,
    8,
    59,
    0,
    9,
    214,
    82,
    7,
    19,
    0,
    8,
    107,
    0,
    8,
    43,
    0,
    9,
    182,
    0,
    8,
    11,
    0,
    8,
    139,
    0,
    8,
    75,
    0,
    9,
    246,
    80,
    7,
    5,
    0,
    8,
    87,
    0,
    8,
    23,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    119,
    0,
    8,
    55,
    0,
    9,
    206,
    81,
    7,
    15,
    0,
    8,
    103,
    0,
    8,
    39,
    0,
    9,
    174,
    0,
    8,
    7,
    0,
    8,
    135,
    0,
    8,
    71,
    0,
    9,
    238,
    80,
    7,
    9,
    0,
    8,
    95,
    0,
    8,
    31,
    0,
    9,
    158,
    84,
    7,
    99,
    0,
    8,
    127,
    0,
    8,
    63,
    0,
    9,
    222,
    82,
    7,
    27,
    0,
    8,
    111,
    0,
    8,
    47,
    0,
    9,
    190,
    0,
    8,
    15,
    0,
    8,
    143,
    0,
    8,
    79,
    0,
    9,
    254,
    96,
    7,
    256,
    0,
    8,
    80,
    0,
    8,
    16,
    84,
    8,
    115,
    82,
    7,
    31,
    0,
    8,
    112,
    0,
    8,
    48,
    0,
    9,
    193,
    80,
    7,
    10,
    0,
    8,
    96,
    0,
    8,
    32,
    0,
    9,
    161,
    0,
    8,
    0,
    0,
    8,
    128,
    0,
    8,
    64,
    0,
    9,
    225,
    80,
    7,
    6,
    0,
    8,
    88,
    0,
    8,
    24,
    0,
    9,
    145,
    83,
    7,
    59,
    0,
    8,
    120,
    0,
    8,
    56,
    0,
    9,
    209,
    81,
    7,
    17,
    0,
    8,
    104,
    0,
    8,
    40,
    0,
    9,
    177,
    0,
    8,
    8,
    0,
    8,
    136,
    0,
    8,
    72,
    0,
    9,
    241,
    80,
    7,
    4,
    0,
    8,
    84,
    0,
    8,
    20,
    85,
    8,
    227,
    83,
    7,
    43,
    0,
    8,
    116,
    0,
    8,
    52,
    0,
    9,
    201,
    81,
    7,
    13,
    0,
    8,
    100,
    0,
    8,
    36,
    0,
    9,
    169,
    0,
    8,
    4,
    0,
    8,
    132,
    0,
    8,
    68,
    0,
    9,
    233,
    80,
    7,
    8,
    0,
    8,
    92,
    0,
    8,
    28,
    0,
    9,
    153,
    84,
    7,
    83,
    0,
    8,
    124,
    0,
    8,
    60,
    0,
    9,
    217,
    82,
    7,
    23,
    0,
    8,
    108,
    0,
    8,
    44,
    0,
    9,
    185,
    0,
    8,
    12,
    0,
    8,
    140,
    0,
    8,
    76,
    0,
    9,
    249,
    80,
    7,
    3,
    0,
    8,
    82,
    0,
    8,
    18,
    85,
    8,
    163,
    83,
    7,
    35,
    0,
    8,
    114,
    0,
    8,
    50,
    0,
    9,
    197,
    81,
    7,
    11,
    0,
    8,
    98,
    0,
    8,
    34,
    0,
    9,
    165,
    0,
    8,
    2,
    0,
    8,
    130,
    0,
    8,
    66,
    0,
    9,
    229,
    80,
    7,
    7,
    0,
    8,
    90,
    0,
    8,
    26,
    0,
    9,
    149,
    84,
    7,
    67,
    0,
    8,
    122,
    0,
    8,
    58,
    0,
    9,
    213,
    82,
    7,
    19,
    0,
    8,
    106,
    0,
    8,
    42,
    0,
    9,
    181,
    0,
    8,
    10,
    0,
    8,
    138,
    0,
    8,
    74,
    0,
    9,
    245,
    80,
    7,
    5,
    0,
    8,
    86,
    0,
    8,
    22,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    118,
    0,
    8,
    54,
    0,
    9,
    205,
    81,
    7,
    15,
    0,
    8,
    102,
    0,
    8,
    38,
    0,
    9,
    173,
    0,
    8,
    6,
    0,
    8,
    134,
    0,
    8,
    70,
    0,
    9,
    237,
    80,
    7,
    9,
    0,
    8,
    94,
    0,
    8,
    30,
    0,
    9,
    157,
    84,
    7,
    99,
    0,
    8,
    126,
    0,
    8,
    62,
    0,
    9,
    221,
    82,
    7,
    27,
    0,
    8,
    110,
    0,
    8,
    46,
    0,
    9,
    189,
    0,
    8,
    14,
    0,
    8,
    142,
    0,
    8,
    78,
    0,
    9,
    253,
    96,
    7,
    256,
    0,
    8,
    81,
    0,
    8,
    17,
    85,
    8,
    131,
    82,
    7,
    31,
    0,
    8,
    113,
    0,
    8,
    49,
    0,
    9,
    195,
    80,
    7,
    10,
    0,
    8,
    97,
    0,
    8,
    33,
    0,
    9,
    163,
    0,
    8,
    1,
    0,
    8,
    129,
    0,
    8,
    65,
    0,
    9,
    227,
    80,
    7,
    6,
    0,
    8,
    89,
    0,
    8,
    25,
    0,
    9,
    147,
    83,
    7,
    59,
    0,
    8,
    121,
    0,
    8,
    57,
    0,
    9,
    211,
    81,
    7,
    17,
    0,
    8,
    105,
    0,
    8,
    41,
    0,
    9,
    179,
    0,
    8,
    9,
    0,
    8,
    137,
    0,
    8,
    73,
    0,
    9,
    243,
    80,
    7,
    4,
    0,
    8,
    85,
    0,
    8,
    21,
    80,
    8,
    258,
    83,
    7,
    43,
    0,
    8,
    117,
    0,
    8,
    53,
    0,
    9,
    203,
    81,
    7,
    13,
    0,
    8,
    101,
    0,
    8,
    37,
    0,
    9,
    171,
    0,
    8,
    5,
    0,
    8,
    133,
    0,
    8,
    69,
    0,
    9,
    235,
    80,
    7,
    8,
    0,
    8,
    93,
    0,
    8,
    29,
    0,
    9,
    155,
    84,
    7,
    83,
    0,
    8,
    125,
    0,
    8,
    61,
    0,
    9,
    219,
    82,
    7,
    23,
    0,
    8,
    109,
    0,
    8,
    45,
    0,
    9,
    187,
    0,
    8,
    13,
    0,
    8,
    141,
    0,
    8,
    77,
    0,
    9,
    251,
    80,
    7,
    3,
    0,
    8,
    83,
    0,
    8,
    19,
    85,
    8,
    195,
    83,
    7,
    35,
    0,
    8,
    115,
    0,
    8,
    51,
    0,
    9,
    199,
    81,
    7,
    11,
    0,
    8,
    99,
    0,
    8,
    35,
    0,
    9,
    167,
    0,
    8,
    3,
    0,
    8,
    131,
    0,
    8,
    67,
    0,
    9,
    231,
    80,
    7,
    7,
    0,
    8,
    91,
    0,
    8,
    27,
    0,
    9,
    151,
    84,
    7,
    67,
    0,
    8,
    123,
    0,
    8,
    59,
    0,
    9,
    215,
    82,
    7,
    19,
    0,
    8,
    107,
    0,
    8,
    43,
    0,
    9,
    183,
    0,
    8,
    11,
    0,
    8,
    139,
    0,
    8,
    75,
    0,
    9,
    247,
    80,
    7,
    5,
    0,
    8,
    87,
    0,
    8,
    23,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    119,
    0,
    8,
    55,
    0,
    9,
    207,
    81,
    7,
    15,
    0,
    8,
    103,
    0,
    8,
    39,
    0,
    9,
    175,
    0,
    8,
    7,
    0,
    8,
    135,
    0,
    8,
    71,
    0,
    9,
    239,
    80,
    7,
    9,
    0,
    8,
    95,
    0,
    8,
    31,
    0,
    9,
    159,
    84,
    7,
    99,
    0,
    8,
    127,
    0,
    8,
    63,
    0,
    9,
    223,
    82,
    7,
    27,
    0,
    8,
    111,
    0,
    8,
    47,
    0,
    9,
    191,
    0,
    8,
    15,
    0,
    8,
    143,
    0,
    8,
    79,
    0,
    9,
    255
], a = [
    80,
    5,
    1,
    87,
    5,
    257,
    83,
    5,
    17,
    91,
    5,
    4097,
    81,
    5,
    5,
    89,
    5,
    1025,
    85,
    5,
    65,
    93,
    5,
    16385,
    80,
    5,
    3,
    88,
    5,
    513,
    84,
    5,
    33,
    92,
    5,
    8193,
    82,
    5,
    9,
    90,
    5,
    2049,
    86,
    5,
    129,
    192,
    5,
    24577,
    80,
    5,
    2,
    87,
    5,
    385,
    83,
    5,
    25,
    91,
    5,
    6145,
    81,
    5,
    7,
    89,
    5,
    1537,
    85,
    5,
    97,
    93,
    5,
    24577,
    80,
    5,
    4,
    88,
    5,
    769,
    84,
    5,
    49,
    92,
    5,
    12289,
    82,
    5,
    13,
    90,
    5,
    3073,
    86,
    5,
    193,
    192,
    5,
    24577
], s = [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
], o = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    112,
    112
], l = [
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577
], c = [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
], u = 15;
function d() {
    let e, i, r, a, d, f;
    function h(e, i, s, o, l, c, h, w, _, b, p) {
        let m, g, y, x, k, v, S, z, A, U, D, E, T, F, O;
        U = 0, k = s;
        do r[e[i + U]]++, U++, k--;
        while (0 !== k);
        if (r[0] == s) return h[0] = -1, w[0] = 0, 0;
        for(z = w[0], v = 1; v <= u && 0 === r[v]; v++);
        for(S = v, z < v && (z = v), k = u; 0 !== k && 0 === r[k]; k--);
        for(y = k, z > k && (z = k), w[0] = z, F = 1 << v; v < k; v++, F <<= 1)if ((F -= r[v]) < 0) return t;
        if ((F -= r[k]) < 0) return t;
        for(r[k] += F, f[1] = v = 0, U = 1, T = 2; 0 != --k;)f[T] = v += r[U], T++, U++;
        k = 0, U = 0;
        do 0 !== (v = e[i + U]) && (p[f[v]++] = k), U++;
        while (++k < s);
        for(s = f[y], f[0] = k = 0, U = 0, x = -1, E = -z, d[0] = 0, D = 0, O = 0; S <= y; S++)for(m = r[S]; 0 != m--;){
            for(; S > E + z;){
                if (x++, E += z, O = y - E, O = O > z ? z : O, (g = 1 << (v = S - E)) > m + 1 && (g -= m + 1, T = S, v < O)) for(; ++v < O && !((g <<= 1) <= r[++T]);)g -= r[T];
                if (O = 1 << v, b[0] + O > 1440) return t;
                d[x] = D = b[0], b[0] += O, 0 !== x ? (f[x] = k, a[0] = v, a[1] = z, v = k >>> E - z, a[2] = D - d[x - 1] - v, _.set(a, 3 * (d[x - 1] + v))) : h[0] = D;
            }
            for(a[1] = S - E, U >= s ? a[0] = 192 : p[U] < o ? (a[0] = p[U] < 256 ? 0 : 96, a[2] = p[U++]) : (a[0] = c[p[U] - o] + 16 + 64, a[2] = l[p[U++] - o]), g = 1 << S - E, v = k >>> E; v < O; v += g)_.set(a, 3 * (D + v));
            for(v = 1 << S - 1; k & v; v >>>= 1)k ^= v;
            for(k ^= v, A = (1 << E) - 1; (k & A) != f[x];)x--, E -= z, A = (1 << E) - 1;
        }
        return 0 !== F && 1 != y ? n : 0;
    }
    function w(t) {
        let n;
        for(e || (e = [], i = [], r = new Int32Array(16), a = [], d = new Int32Array(u), f = new Int32Array(16)), i.length < t && (i = []), n = 0; n < t; n++)i[n] = 0;
        for(n = 0; n < 16; n++)r[n] = 0;
        for(n = 0; n < 3; n++)a[n] = 0;
        d.set(r.subarray(0, u), 0), f.set(r.subarray(0, 16), 0);
    }
    this.inflate_trees_bits = function(r, a, s, o, l) {
        let c;
        return w(19), e[0] = 0, c = h(r, 0, 19, 19, null, null, s, a, o, e, i), c == t ? l.msg = "oversubscribed dynamic bit lengths tree" : c != n && 0 !== a[0] || (l.msg = "incomplete dynamic bit lengths tree", c = t), c;
    }, this.inflate_trees_dynamic = function(r, a, u, d, f, _, b, p, m) {
        let g;
        return w(288), e[0] = 0, g = h(u, 0, r, 257, s, o, _, d, p, e, i), 0 != g || 0 === d[0] ? (g == t ? m.msg = "oversubscribed literal/length tree" : -4 != g && (m.msg = "incomplete literal/length tree", g = t), g) : (w(288), g = h(u, r, a, 0, l, c, b, f, p, e, i), 0 != g || 0 === f[0] && r > 257 ? (g == t ? m.msg = "oversubscribed distance tree" : g == n ? (m.msg = "incomplete distance tree", g = t) : -4 != g && (m.msg = "empty distance tree with lengths", g = t), g) : 0);
    };
}
d.inflate_trees_fixed = function(e, t, n, i) {
    return e[0] = 9, t[0] = 5, n[0] = r, i[0] = a, 0;
};
function f() {
    const n = this;
    let r, a, s, o, l = 0, c = 0, u = 0, d = 0, f = 0, h = 0, w = 0, _ = 0, b = 0, p = 0;
    function m(e, n, r, a, s, o, l, c) {
        let u, d, f, h, w, _, b, p, m, g, y, x, k, v, S, z;
        b = c.next_in_index, p = c.avail_in, w = l.bitb, _ = l.bitk, m = l.write, g = m < l.read ? l.read - m - 1 : l.end - m, y = i[e], x = i[n];
        do {
            for(; _ < 20;)p--, w |= (255 & c.read_byte(b++)) << _, _ += 8;
            if (u = w & y, d = r, f = a, z = 3 * (f + u), 0 !== (h = d[z])) for(;;){
                if (w >>= d[z + 1], _ -= d[z + 1], 16 & h) {
                    for(h &= 15, k = d[z + 2] + (w & i[h]), w >>= h, _ -= h; _ < 15;)p--, w |= (255 & c.read_byte(b++)) << _, _ += 8;
                    for(u = w & x, d = s, f = o, z = 3 * (f + u), h = d[z];;){
                        if (w >>= d[z + 1], _ -= d[z + 1], 16 & h) {
                            for(h &= 15; _ < h;)p--, w |= (255 & c.read_byte(b++)) << _, _ += 8;
                            if (v = d[z + 2] + (w & i[h]), w >>= h, _ -= h, g -= k, m >= v) S = m - v, m - S > 0 && 2 > m - S ? (l.win[m++] = l.win[S++], l.win[m++] = l.win[S++], k -= 2) : (l.win.set(l.win.subarray(S, S + 2), m), m += 2, S += 2, k -= 2);
                            else {
                                S = m - v;
                                do S += l.end;
                                while (S < 0);
                                if (h = l.end - S, k > h) {
                                    if (k -= h, m - S > 0 && h > m - S) do l.win[m++] = l.win[S++];
                                    while (0 != --h);
                                    else l.win.set(l.win.subarray(S, S + h), m), m += h, S += h, h = 0;
                                    S = 0;
                                }
                            }
                            if (m - S > 0 && k > m - S) do l.win[m++] = l.win[S++];
                            while (0 != --k);
                            else l.win.set(l.win.subarray(S, S + k), m), m += k, S += k, k = 0;
                            break;
                        }
                        if (64 & h) return c.msg = "invalid distance code", k = c.avail_in - p, k = _ >> 3 < k ? _ >> 3 : k, p += k, b -= k, _ -= k << 3, l.bitb = w, l.bitk = _, c.avail_in = p, c.total_in += b - c.next_in_index, c.next_in_index = b, l.write = m, t;
                        u += d[z + 2], u += w & i[h], z = 3 * (f + u), h = d[z];
                    }
                    break;
                }
                if (64 & h) return 32 & h ? (k = c.avail_in - p, k = _ >> 3 < k ? _ >> 3 : k, p += k, b -= k, _ -= k << 3, l.bitb = w, l.bitk = _, c.avail_in = p, c.total_in += b - c.next_in_index, c.next_in_index = b, l.write = m, 1) : (c.msg = "invalid literal/length code", k = c.avail_in - p, k = _ >> 3 < k ? _ >> 3 : k, p += k, b -= k, _ -= k << 3, l.bitb = w, l.bitk = _, c.avail_in = p, c.total_in += b - c.next_in_index, c.next_in_index = b, l.write = m, t);
                if (u += d[z + 2], u += w & i[h], z = 3 * (f + u), 0 === (h = d[z])) {
                    w >>= d[z + 1], _ -= d[z + 1], l.win[m++] = d[z + 2], g--;
                    break;
                }
            }
            else w >>= d[z + 1], _ -= d[z + 1], l.win[m++] = d[z + 2], g--;
        }while (g >= 258 && p >= 10);
        return k = c.avail_in - p, k = _ >> 3 < k ? _ >> 3 : k, p += k, b -= k, _ -= k << 3, l.bitb = w, l.bitk = _, c.avail_in = p, c.total_in += b - c.next_in_index, c.next_in_index = b, l.write = m, 0;
    }
    n.init = function(e, t, n, i, l, c) {
        r = 0, w = e, _ = t, s = n, b = i, o = l, p = c, a = null;
    }, n.proc = function(n, g, y) {
        let x, k, v, S, z, A, U, D = 0, E = 0, T = 0;
        for(T = g.next_in_index, S = g.avail_in, D = n.bitb, E = n.bitk, z = n.write, A = z < n.read ? n.read - z - 1 : n.end - z;;)switch(r){
            case 0:
                if (A >= 258 && S >= 10 && (n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, y = m(w, _, s, b, o, p, n, g), T = g.next_in_index, S = g.avail_in, D = n.bitb, E = n.bitk, z = n.write, A = z < n.read ? n.read - z - 1 : n.end - z, 0 != y)) {
                    r = 1 == y ? 7 : 9;
                    break;
                }
                u = w, a = s, c = b, r = 1;
            case 1:
                for(x = u; E < x;){
                    if (0 === S) return n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, n.inflate_flush(g, y);
                    y = 0, S--, D |= (255 & g.read_byte(T++)) << E, E += 8;
                }
                if (k = 3 * (c + (D & i[x])), D >>>= a[k + 1], E -= a[k + 1], v = a[k], 0 === v) {
                    d = a[k + 2], r = 6;
                    break;
                }
                if (16 & v) {
                    f = 15 & v, l = a[k + 2], r = 2;
                    break;
                }
                if (!(64 & v)) {
                    u = v, c = k / 3 + a[k + 2];
                    break;
                }
                if (32 & v) {
                    r = 7;
                    break;
                }
                return r = 9, g.msg = "invalid literal/length code", y = t, n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, n.inflate_flush(g, y);
            case 2:
                for(x = f; E < x;){
                    if (0 === S) return n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, n.inflate_flush(g, y);
                    y = 0, S--, D |= (255 & g.read_byte(T++)) << E, E += 8;
                }
                l += D & i[x], D >>= x, E -= x, u = _, a = o, c = p, r = 3;
            case 3:
                for(x = u; E < x;){
                    if (0 === S) return n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, n.inflate_flush(g, y);
                    y = 0, S--, D |= (255 & g.read_byte(T++)) << E, E += 8;
                }
                if (k = 3 * (c + (D & i[x])), D >>= a[k + 1], E -= a[k + 1], v = a[k], 16 & v) {
                    f = 15 & v, h = a[k + 2], r = 4;
                    break;
                }
                if (!(64 & v)) {
                    u = v, c = k / 3 + a[k + 2];
                    break;
                }
                return r = 9, g.msg = "invalid distance code", y = t, n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, n.inflate_flush(g, y);
            case 4:
                for(x = f; E < x;){
                    if (0 === S) return n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, n.inflate_flush(g, y);
                    y = 0, S--, D |= (255 & g.read_byte(T++)) << E, E += 8;
                }
                h += D & i[x], D >>= x, E -= x, r = 5;
            case 5:
                for(U = z - h; U < 0;)U += n.end;
                for(; 0 !== l;){
                    if (0 === A && (z == n.end && 0 !== n.read && (z = 0, A = z < n.read ? n.read - z - 1 : n.end - z), 0 === A && (n.write = z, y = n.inflate_flush(g, y), z = n.write, A = z < n.read ? n.read - z - 1 : n.end - z, z == n.end && 0 !== n.read && (z = 0, A = z < n.read ? n.read - z - 1 : n.end - z), 0 === A))) return n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, n.inflate_flush(g, y);
                    n.win[z++] = n.win[U++], A--, U == n.end && (U = 0), l--;
                }
                r = 0;
                break;
            case 6:
                if (0 === A && (z == n.end && 0 !== n.read && (z = 0, A = z < n.read ? n.read - z - 1 : n.end - z), 0 === A && (n.write = z, y = n.inflate_flush(g, y), z = n.write, A = z < n.read ? n.read - z - 1 : n.end - z, z == n.end && 0 !== n.read && (z = 0, A = z < n.read ? n.read - z - 1 : n.end - z), 0 === A))) return n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, n.inflate_flush(g, y);
                y = 0, n.win[z++] = d, A--, r = 0;
                break;
            case 7:
                if (E > 7 && (E -= 8, S++, T--), n.write = z, y = n.inflate_flush(g, y), z = n.write, A = z < n.read ? n.read - z - 1 : n.end - z, n.read != n.write) return n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, n.inflate_flush(g, y);
                r = 8;
            case 8:
                return y = 1, n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, n.inflate_flush(g, y);
            case 9:
                return y = t, n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, n.inflate_flush(g, y);
            default:
                return y = e, n.bitb = D, n.bitk = E, g.avail_in = S, g.total_in += T - g.next_in_index, g.next_in_index = T, n.write = z, n.inflate_flush(g, y);
        }
    }, n.free = function() {};
}
const h = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
];
function w(r, a) {
    const s = this;
    let o, l = 0, c = 0, u = 0, w = 0;
    const _ = [
        0
    ], b = [
        0
    ], p = new f;
    let m = 0, g = new Int32Array(4320);
    const y = new d;
    s.bitk = 0, s.bitb = 0, s.win = new Uint8Array(a), s.end = a, s.read = 0, s.write = 0, s.reset = function(e, t) {
        t && (t[0] = 0), 6 == l && p.free(e), l = 0, s.bitk = 0, s.bitb = 0, s.read = s.write = 0;
    }, s.reset(r, null), s.inflate_flush = function(e, t) {
        let i, r, a;
        return r = e.next_out_index, a = s.read, i = (a <= s.write ? s.write : s.end) - a, i > e.avail_out && (i = e.avail_out), 0 !== i && t == n && (t = 0), e.avail_out -= i, e.total_out += i, e.next_out.set(s.win.subarray(a, a + i), r), r += i, a += i, a == s.end && (a = 0, s.write == s.end && (s.write = 0), i = s.write - a, i > e.avail_out && (i = e.avail_out), 0 !== i && t == n && (t = 0), e.avail_out -= i, e.total_out += i, e.next_out.set(s.win.subarray(a, a + i), r), r += i, a += i), e.next_out_index = r, s.read = a, t;
    }, s.proc = function(n, r) {
        let a, f, x, k, v, S, z, A;
        for(k = n.next_in_index, v = n.avail_in, f = s.bitb, x = s.bitk, S = s.write, z = S < s.read ? s.read - S - 1 : s.end - S;;){
            let U, D, E, T, F, O, C, W;
            switch(l){
                case 0:
                    for(; x < 3;){
                        if (0 === v) return s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                        r = 0, v--, f |= (255 & n.read_byte(k++)) << x, x += 8;
                    }
                    switch(a = 7 & f, m = 1 & a, a >>> 1){
                        case 0:
                            f >>>= 3, x -= 3, a = 7 & x, f >>>= a, x -= a, l = 1;
                            break;
                        case 1:
                            U = [], D = [], E = [
                                []
                            ], T = [
                                []
                            ], d.inflate_trees_fixed(U, D, E, T), p.init(U[0], D[0], E[0], 0, T[0], 0), f >>>= 3, x -= 3, l = 6;
                            break;
                        case 2:
                            f >>>= 3, x -= 3, l = 3;
                            break;
                        case 3:
                            return f >>>= 3, x -= 3, l = 9, n.msg = "invalid block type", r = t, s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                    }
                    break;
                case 1:
                    for(; x < 32;){
                        if (0 === v) return s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                        r = 0, v--, f |= (255 & n.read_byte(k++)) << x, x += 8;
                    }
                    if ((~f >>> 16 & 65535) != (65535 & f)) return l = 9, n.msg = "invalid stored block lengths", r = t, s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                    c = 65535 & f, f = x = 0, l = 0 !== c ? 2 : 0 !== m ? 7 : 0;
                    break;
                case 2:
                    if (0 === v) return s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                    if (0 === z && (S == s.end && 0 !== s.read && (S = 0, z = S < s.read ? s.read - S - 1 : s.end - S), 0 === z && (s.write = S, r = s.inflate_flush(n, r), S = s.write, z = S < s.read ? s.read - S - 1 : s.end - S, S == s.end && 0 !== s.read && (S = 0, z = S < s.read ? s.read - S - 1 : s.end - S), 0 === z))) return s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                    if (r = 0, a = c, a > v && (a = v), a > z && (a = z), s.win.set(n.read_buf(k, a), S), k += a, v -= a, S += a, z -= a, 0 != (c -= a)) break;
                    l = 0 !== m ? 7 : 0;
                    break;
                case 3:
                    for(; x < 14;){
                        if (0 === v) return s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                        r = 0, v--, f |= (255 & n.read_byte(k++)) << x, x += 8;
                    }
                    if (u = a = 16383 & f, (31 & a) > 29 || (a >> 5 & 31) > 29) return l = 9, n.msg = "too many length or distance symbols", r = t, s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                    if (a = 258 + (31 & a) + (a >> 5 & 31), !o || o.length < a) o = [];
                    else for(A = 0; A < a; A++)o[A] = 0;
                    f >>>= 14, x -= 14, w = 0, l = 4;
                case 4:
                    for(; w < 4 + (u >>> 10);){
                        for(; x < 3;){
                            if (0 === v) return s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                            r = 0, v--, f |= (255 & n.read_byte(k++)) << x, x += 8;
                        }
                        o[h[w++]] = 7 & f, f >>>= 3, x -= 3;
                    }
                    for(; w < 19;)o[h[w++]] = 0;
                    if (_[0] = 7, a = y.inflate_trees_bits(o, _, b, g, n), 0 != a) return (r = a) == t && (o = null, l = 9), s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                    w = 0, l = 5;
                case 5:
                    for(; a = u, !(w >= 258 + (31 & a) + (a >> 5 & 31));){
                        let e, c;
                        for(a = _[0]; x < a;){
                            if (0 === v) return s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                            r = 0, v--, f |= (255 & n.read_byte(k++)) << x, x += 8;
                        }
                        if (a = g[3 * (b[0] + (f & i[a])) + 1], c = g[3 * (b[0] + (f & i[a])) + 2], c < 16) f >>>= a, x -= a, o[w++] = c;
                        else {
                            for(A = 18 == c ? 7 : c - 14, e = 18 == c ? 11 : 3; x < a + A;){
                                if (0 === v) return s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                                r = 0, v--, f |= (255 & n.read_byte(k++)) << x, x += 8;
                            }
                            if (f >>>= a, x -= a, e += f & i[A], f >>>= A, x -= A, A = w, a = u, A + e > 258 + (31 & a) + (a >> 5 & 31) || 16 == c && A < 1) return o = null, l = 9, n.msg = "invalid bit length repeat", r = t, s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                            c = 16 == c ? o[A - 1] : 0;
                            do o[A++] = c;
                            while (0 != --e);
                            w = A;
                        }
                    }
                    if (b[0] = -1, F = [], O = [], C = [], W = [], F[0] = 9, O[0] = 6, a = u, a = y.inflate_trees_dynamic(257 + (31 & a), 1 + (a >> 5 & 31), o, F, O, C, W, g, n), 0 != a) return a == t && (o = null, l = 9), r = a, s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                    p.init(F[0], O[0], g, C[0], g, W[0]), l = 6;
                case 6:
                    if (s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, 1 != (r = p.proc(s, n, r))) return s.inflate_flush(n, r);
                    if (r = 0, p.free(n), k = n.next_in_index, v = n.avail_in, f = s.bitb, x = s.bitk, S = s.write, z = S < s.read ? s.read - S - 1 : s.end - S, 0 === m) {
                        l = 0;
                        break;
                    }
                    l = 7;
                case 7:
                    if (s.write = S, r = s.inflate_flush(n, r), S = s.write, z = S < s.read ? s.read - S - 1 : s.end - S, s.read != s.write) return s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                    l = 8;
                case 8:
                    return r = 1, s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                case 9:
                    return r = t, s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
                default:
                    return r = e, s.bitb = f, s.bitk = x, n.avail_in = v, n.total_in += k - n.next_in_index, n.next_in_index = k, s.write = S, s.inflate_flush(n, r);
            }
        }
    }, s.free = function(e) {
        s.reset(e, null), s.win = null, g = null;
    }, s.set_dictionary = function(e, t, n) {
        s.win.set(e.subarray(t, t + n), 0), s.read = s.write = n;
    }, s.sync_point = function() {
        return 1 == l ? 1 : 0;
    };
}
const _ = 13, b = [
    0,
    0,
    255,
    255
];
function p() {
    const i = this;
    function r(t) {
        return t && t.istate ? (t.total_in = t.total_out = 0, t.msg = null, t.istate.mode = 7, t.istate.blocks.reset(t, null), 0) : e;
    }
    i.mode = 0, i.method = 0, i.was = [
        0
    ], i.need = 0, i.marker = 0, i.wbits = 0, i.inflateEnd = function(e) {
        return i.blocks && i.blocks.free(e), i.blocks = null, 0;
    }, i.inflateInit = function(t, n) {
        return t.msg = null, i.blocks = null, n < 8 || n > 15 ? (i.inflateEnd(t), e) : (i.wbits = n, t.istate.blocks = new w(t, 1 << n), r(t), 0);
    }, i.inflate = function(i, r) {
        let a, s;
        if (!i || !i.istate || !i.next_in) return e;
        const o = i.istate;
        for(r = 4 == r ? n : 0, a = n;;)switch(o.mode){
            case 0:
                if (0 === i.avail_in) return a;
                if (a = r, i.avail_in--, i.total_in++, 8 != (15 & (o.method = i.read_byte(i.next_in_index++)))) {
                    o.mode = _, i.msg = "unknown compression method", o.marker = 5;
                    break;
                }
                if (8 + (o.method >> 4) > o.wbits) {
                    o.mode = _, i.msg = "invalid win size", o.marker = 5;
                    break;
                }
                o.mode = 1;
            case 1:
                if (0 === i.avail_in) return a;
                if (a = r, i.avail_in--, i.total_in++, s = 255 & i.read_byte(i.next_in_index++), ((o.method << 8) + s) % 31 != 0) {
                    o.mode = _, i.msg = "incorrect header check", o.marker = 5;
                    break;
                }
                if (!(32 & s)) {
                    o.mode = 7;
                    break;
                }
                o.mode = 2;
            case 2:
                if (0 === i.avail_in) return a;
                a = r, i.avail_in--, i.total_in++, o.need = (255 & i.read_byte(i.next_in_index++)) << 24 & 4278190080, o.mode = 3;
            case 3:
                if (0 === i.avail_in) return a;
                a = r, i.avail_in--, i.total_in++, o.need += (255 & i.read_byte(i.next_in_index++)) << 16 & 16711680, o.mode = 4;
            case 4:
                if (0 === i.avail_in) return a;
                a = r, i.avail_in--, i.total_in++, o.need += (255 & i.read_byte(i.next_in_index++)) << 8 & 65280, o.mode = 5;
            case 5:
                return 0 === i.avail_in ? a : (a = r, i.avail_in--, i.total_in++, o.need += 255 & i.read_byte(i.next_in_index++), o.mode = 6, 2);
            case 6:
                return o.mode = _, i.msg = "need dictionary", o.marker = 0, e;
            case 7:
                if (a = o.blocks.proc(i, a), a == t) {
                    o.mode = _, o.marker = 0;
                    break;
                }
                if (0 == a && (a = r), 1 != a) return a;
                a = r, o.blocks.reset(i, o.was), o.mode = 12;
            case 12:
                return i.avail_in = 0, 1;
            case _:
                return t;
            default:
                return e;
        }
    }, i.inflateSetDictionary = function(t, n, i) {
        let r = 0, a = i;
        if (!t || !t.istate || 6 != t.istate.mode) return e;
        const s = t.istate;
        return a >= 1 << s.wbits && (a = (1 << s.wbits) - 1, r = i - a), s.blocks.set_dictionary(n, r, a), s.mode = 7, 0;
    }, i.inflateSync = function(i) {
        let a, s, o, l, c;
        if (!i || !i.istate) return e;
        const u = i.istate;
        if (u.mode != _ && (u.mode = _, u.marker = 0), 0 === (a = i.avail_in)) return n;
        for(s = i.next_in_index, o = u.marker; 0 !== a && o < 4;)i.read_byte(s) == b[o] ? o++ : o = 0 !== i.read_byte(s) ? 0 : 4 - o, s++, a--;
        return i.total_in += s - i.next_in_index, i.next_in_index = s, i.avail_in = a, u.marker = o, 4 != o ? t : (l = i.total_in, c = i.total_out, r(i), i.total_in = l, i.total_out = c, u.mode = 7, 0);
    }, i.inflateSyncPoint = function(t) {
        return t && t.istate && t.istate.blocks ? t.istate.blocks.sync_point() : e;
    };
}
function m() {}
m.prototype = {
    inflateInit (e) {
        const t = this;
        return t.istate = new p, e || (e = 15), t.istate.inflateInit(t, e);
    },
    inflate (t) {
        const n = this;
        return n.istate ? n.istate.inflate(n, t) : e;
    },
    inflateEnd () {
        const t = this;
        if (!t.istate) return e;
        const n = t.istate.inflateEnd(t);
        return t.istate = null, n;
    },
    inflateSync () {
        const t = this;
        return t.istate ? t.istate.inflateSync(t) : e;
    },
    inflateSetDictionary (t, n) {
        const i = this;
        return i.istate ? i.istate.inflateSetDictionary(i, t, n) : e;
    },
    read_byte (e) {
        return this.next_in[e];
    },
    read_buf (e, t) {
        return this.next_in.subarray(e, e + t);
    }
};
const g = 4294967295, y = 65535, x = 33639248, k = 101075792, v = 22, S = void 0, z = "undefined", A = "function";
class U {
    constructor(e){
        return class extends TransformStream {
            constructor(t, n){
                const i = new e(n);
                super({
                    transform (e, t) {
                        t.enqueue(i.append(e));
                    },
                    flush (e) {
                        const t = i.flush();
                        t && e.enqueue(t);
                    }
                });
            }
        };
    }
}
let D = 2;
try {
    typeof navigator != z && navigator.hardwareConcurrency && (D = navigator.hardwareConcurrency);
} catch (e) {}
const E = {
    chunkSize: 524288,
    maxWorkers: D,
    terminateWorkerTimeout: 5e3,
    useWebWorkers: !0,
    useCompressionStream: !0,
    workerScripts: S,
    CompressionStreamNative: typeof CompressionStream != z && CompressionStream,
    DecompressionStreamNative: typeof DecompressionStream != z && DecompressionStream
}, T = Object.assign({}, E);
function F(e) {
    const { baseURL: t, chunkSize: n, maxWorkers: i, terminateWorkerTimeout: r, useCompressionStream: a, useWebWorkers: s, Deflate: o, Inflate: l, CompressionStream: c, DecompressionStream: u, workerScripts: d } = e;
    if (O("baseURL", t), O("chunkSize", n), O("maxWorkers", i), O("terminateWorkerTimeout", r), O("useCompressionStream", a), O("useWebWorkers", s), o && (T.CompressionStream = new U(o)), l && (T.DecompressionStream = new U(l)), O("CompressionStream", c), O("DecompressionStream", u), d !== S) {
        const { deflate: e, inflate: t } = d;
        if ((e || t) && (T.workerScripts || (T.workerScripts = {})), e) {
            if (!Array.isArray(e)) throw new Error("workerScripts.deflate must be an array");
            T.workerScripts.deflate = e;
        }
        if (t) {
            if (!Array.isArray(t)) throw new Error("workerScripts.inflate must be an array");
            T.workerScripts.inflate = t;
        }
    }
}
function O(e, t) {
    t !== S && (T[e] = t);
}
const C = [];
for(let e = 0; e < 256; e++){
    let t = e;
    for(let e = 0; e < 8; e++)1 & t ? t = t >>> 1 ^ 3988292384 : t >>>= 1;
    C[e] = t;
}
class W {
    constructor(e){
        this.crc = e || -1;
    }
    append(e) {
        let t = 0 | this.crc;
        for(let n = 0, i = 0 | e.length; n < i; n++)t = t >>> 8 ^ C[255 & (t ^ e[n])];
        this.crc = t;
    }
    get() {
        return ~this.crc;
    }
}
class j extends TransformStream {
    constructor(){
        let e;
        const t = new W;
        super({
            transform (e, n) {
                t.append(e), n.enqueue(e);
            },
            flush () {
                const n = new Uint8Array(4);
                new DataView(n.buffer).setUint32(0, t.get()), e.value = n;
            }
        }), e = this;
    }
}
const M = {
    concat (e, t) {
        if (0 === e.length || 0 === t.length) return e.concat(t);
        const n = e[e.length - 1], i = M.getPartial(n);
        return 32 === i ? e.concat(t) : M._shiftRight(t, i, 0 | n, e.slice(0, e.length - 1));
    },
    bitLength (e) {
        const t = e.length;
        if (0 === t) return 0;
        const n = e[t - 1];
        return 32 * (t - 1) + M.getPartial(n);
    },
    clamp (e, t) {
        if (32 * e.length < t) return e;
        const n = (e = e.slice(0, Math.ceil(t / 32))).length;
        return t &= 31, n > 0 && t && (e[n - 1] = M.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)), e;
    },
    partial: (e, t, n)=>32 === e ? t : (n ? 0 | t : t << 32 - e) + 1099511627776 * e,
    getPartial: (e)=>Math.round(e / 1099511627776) || 32,
    _shiftRight (e, t, n, i) {
        for(void 0 === i && (i = []); t >= 32; t -= 32)i.push(n), n = 0;
        if (0 === t) return i.concat(e);
        for(let r = 0; r < e.length; r++)i.push(n | e[r] >>> t), n = e[r] << 32 - t;
        const r = e.length ? e[e.length - 1] : 0, a = M.getPartial(r);
        return i.push(M.partial(t + a & 31, t + a > 32 ? n : i.pop(), 1)), i;
    }
}, L = {
    bytes: {
        fromBits (e) {
            const t = M.bitLength(e) / 8, n = new Uint8Array(t);
            let i;
            for(let r = 0; r < t; r++)3 & r || (i = e[r / 4]), n[r] = i >>> 24, i <<= 8;
            return n;
        },
        toBits (e) {
            const t = [];
            let n, i = 0;
            for(n = 0; n < e.length; n++)i = i << 8 | e[n], 3 & ~n || (t.push(i), i = 0);
            return 3 & n && t.push(M.partial(8 * (3 & n), i)), t;
        }
    }
}, P = {
    sha1: class {
        constructor(e){
            const t = this;
            t.blockSize = 512, t._init = [
                1732584193,
                4023233417,
                2562383102,
                271733878,
                3285377520
            ], t._key = [
                1518500249,
                1859775393,
                2400959708,
                3395469782
            ], e ? (t._h = e._h.slice(0), t._buffer = e._buffer.slice(0), t._length = e._length) : t.reset();
        }
        reset() {
            const e = this;
            return e._h = e._init.slice(0), e._buffer = [], e._length = 0, e;
        }
        update(e) {
            const t = this;
            "string" == typeof e && (e = L.utf8String.toBits(e));
            const n = t._buffer = M.concat(t._buffer, e), i = t._length, r = t._length = i + M.bitLength(e);
            if (r > 9007199254740991) throw new Error("Cannot hash more than 2^53 - 1 bits");
            const a = new Uint32Array(n);
            let s = 0;
            for(let e = t.blockSize + i - (t.blockSize + i & t.blockSize - 1); e <= r; e += t.blockSize)t._block(a.subarray(16 * s, 16 * (s + 1))), s += 1;
            return n.splice(0, 16 * s), t;
        }
        finalize() {
            const e = this;
            let t = e._buffer;
            const n = e._h;
            t = M.concat(t, [
                M.partial(1, 1)
            ]);
            for(let e = t.length + 2; 15 & e; e++)t.push(0);
            for(t.push(Math.floor(e._length / 4294967296)), t.push(0 | e._length); t.length;)e._block(t.splice(0, 16));
            return e.reset(), n;
        }
        _f(e, t, n, i) {
            return e <= 19 ? t & n | ~t & i : e <= 39 ? t ^ n ^ i : e <= 59 ? t & n | t & i | n & i : e <= 79 ? t ^ n ^ i : void 0;
        }
        _S(e, t) {
            return t << e | t >>> 32 - e;
        }
        _block(e) {
            const t = this, n = t._h, i = Array(80);
            for(let t = 0; t < 16; t++)i[t] = e[t];
            let r = n[0], a = n[1], s = n[2], o = n[3], l = n[4];
            for(let e = 0; e <= 79; e++){
                e >= 16 && (i[e] = t._S(1, i[e - 3] ^ i[e - 8] ^ i[e - 14] ^ i[e - 16]));
                const n = t._S(5, r) + t._f(e, a, s, o) + l + i[e] + t._key[Math.floor(e / 20)] | 0;
                l = o, o = s, s = t._S(30, a), a = r, r = n;
            }
            n[0] = n[0] + r | 0, n[1] = n[1] + a | 0, n[2] = n[2] + s | 0, n[3] = n[3] + o | 0, n[4] = n[4] + l | 0;
        }
    }
}, R = {
    aes: class {
        constructor(e){
            const t = this;
            t._tables = [
                [
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                [
                    [],
                    [],
                    [],
                    [],
                    []
                ]
            ], t._tables[0][0][0] || t._precompute();
            const n = t._tables[0][4], i = t._tables[1], r = e.length;
            let a, s, o, l = 1;
            if (4 !== r && 6 !== r && 8 !== r) throw new Error("invalid aes key size");
            for(t._key = [
                s = e.slice(0),
                o = []
            ], a = r; a < 4 * r + 28; a++){
                let e = s[a - 1];
                (a % r == 0 || 8 === r && a % r == 4) && (e = n[e >>> 24] << 24 ^ n[e >> 16 & 255] << 16 ^ n[e >> 8 & 255] << 8 ^ n[255 & e], a % r == 0 && (e = e << 8 ^ e >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))), s[a] = s[a - r] ^ e;
            }
            for(let e = 0; a; e++, a--){
                const t = s[3 & e ? a : a - 4];
                o[e] = a <= 4 || e < 4 ? t : i[0][n[t >>> 24]] ^ i[1][n[t >> 16 & 255]] ^ i[2][n[t >> 8 & 255]] ^ i[3][n[255 & t]];
            }
        }
        encrypt(e) {
            return this._crypt(e, 0);
        }
        decrypt(e) {
            return this._crypt(e, 1);
        }
        _precompute() {
            const e = this._tables[0], t = this._tables[1], n = e[4], i = t[4], r = [], a = [];
            let s, o, l, c;
            for(let e = 0; e < 256; e++)a[(r[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
            for(let u = s = 0; !n[u]; u ^= o || 1, s = a[s] || 1){
                let a = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                a = a >> 8 ^ 255 & a ^ 99, n[u] = a, i[a] = u, c = r[l = r[o = r[u]]];
                let d = 16843009 * c ^ 65537 * l ^ 257 * o ^ 16843008 * u, f = 257 * r[a] ^ 16843008 * a;
                for(let n = 0; n < 4; n++)e[n][u] = f = f << 24 ^ f >>> 8, t[n][a] = d = d << 24 ^ d >>> 8;
            }
            for(let n = 0; n < 5; n++)e[n] = e[n].slice(0), t[n] = t[n].slice(0);
        }
        _crypt(e, t) {
            if (4 !== e.length) throw new Error("invalid aes block size");
            const n = this._key[t], i = n.length / 4 - 2, r = [
                0,
                0,
                0,
                0
            ], a = this._tables[t], s = a[0], o = a[1], l = a[2], c = a[3], u = a[4];
            let d, f, h, w = e[0] ^ n[0], _ = e[t ? 3 : 1] ^ n[1], b = e[2] ^ n[2], p = e[t ? 1 : 3] ^ n[3], m = 4;
            for(let e = 0; e < i; e++)d = s[w >>> 24] ^ o[_ >> 16 & 255] ^ l[b >> 8 & 255] ^ c[255 & p] ^ n[m], f = s[_ >>> 24] ^ o[b >> 16 & 255] ^ l[p >> 8 & 255] ^ c[255 & w] ^ n[m + 1], h = s[b >>> 24] ^ o[p >> 16 & 255] ^ l[w >> 8 & 255] ^ c[255 & _] ^ n[m + 2], p = s[p >>> 24] ^ o[w >> 16 & 255] ^ l[_ >> 8 & 255] ^ c[255 & b] ^ n[m + 3], m += 4, w = d, _ = f, b = h;
            for(let e = 0; e < 4; e++)r[t ? 3 & -e : e] = u[w >>> 24] << 24 ^ u[_ >> 16 & 255] << 16 ^ u[b >> 8 & 255] << 8 ^ u[255 & p] ^ n[m++], d = w, w = _, _ = b, b = p, p = d;
            return r;
        }
    }
}, B = {
    getRandomValues (e) {
        const t = new Uint32Array(e.buffer), n = (e)=>{
            let t = 987654321;
            const n = 4294967295;
            return function() {
                t = 36969 * (65535 & t) + (t >> 16) & n;
                return (((t << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & n) & n) / 4294967296 + .5) * (Math.random() > .5 ? 1 : -1);
            };
        };
        for(let i, r = 0; r < e.length; r += 4){
            const e = n(4294967296 * (i || Math.random()));
            i = 987654071 * e(), t[r / 4] = 4294967296 * e() | 0;
        }
        return e;
    }
}, I = {
    ctrGladman: class {
        constructor(e, t){
            this._prf = e, this._initIv = t, this._iv = t;
        }
        reset() {
            this._iv = this._initIv;
        }
        update(e) {
            return this.calculate(this._prf, e, this._iv);
        }
        incWord(e) {
            if (255 & ~(e >> 24)) e += 16777216;
            else {
                let t = e >> 16 & 255, n = e >> 8 & 255, i = 255 & e;
                255 === t ? (t = 0, 255 === n ? (n = 0, 255 === i ? i = 0 : ++i) : ++n) : ++t, e = 0, e += t << 16, e += n << 8, e += i;
            }
            return e;
        }
        incCounter(e) {
            0 === (e[0] = this.incWord(e[0])) && (e[1] = this.incWord(e[1]));
        }
        calculate(e, t, n) {
            let i;
            if (!(i = t.length)) return [];
            const r = M.bitLength(t);
            for(let r = 0; r < i; r += 4){
                this.incCounter(n);
                const i = e.encrypt(n);
                t[r] ^= i[0], t[r + 1] ^= i[1], t[r + 2] ^= i[2], t[r + 3] ^= i[3];
            }
            return M.clamp(t, r);
        }
    }
}, N = {
    importKey: (e)=>new N.hmacSha1(L.bytes.toBits(e)),
    pbkdf2 (e, t, n, i) {
        if (n = n || 1e4, i < 0 || n < 0) throw new Error("invalid params to pbkdf2");
        const r = 1 + (i >> 5) << 2;
        let a, s, o, l, c;
        const u = new ArrayBuffer(r), d = new DataView(u);
        let f = 0;
        const h = M;
        for(t = L.bytes.toBits(t), c = 1; f < (r || 1); c++){
            for(a = s = e.encrypt(h.concat(t, [
                c
            ])), o = 1; o < n; o++)for(s = e.encrypt(s), l = 0; l < s.length; l++)a[l] ^= s[l];
            for(o = 0; f < (r || 1) && o < a.length; o++)d.setInt32(f, a[o]), f += 4;
        }
        return u.slice(0, i / 8);
    },
    hmacSha1: class {
        constructor(e){
            const t = this, n = t._hash = P.sha1, i = [
                [],
                []
            ];
            t._baseHash = [
                new n,
                new n
            ];
            const r = t._baseHash[0].blockSize / 32;
            e.length > r && (e = (new n).update(e).finalize());
            for(let t = 0; t < r; t++)i[0][t] = 909522486 ^ e[t], i[1][t] = 1549556828 ^ e[t];
            t._baseHash[0].update(i[0]), t._baseHash[1].update(i[1]), t._resultHash = new n(t._baseHash[0]);
        }
        reset() {
            const e = this;
            e._resultHash = new e._hash(e._baseHash[0]), e._updated = !1;
        }
        update(e) {
            this._updated = !0, this._resultHash.update(e);
        }
        digest() {
            const e = this, t = e._resultHash.finalize(), n = new e._hash(e._baseHash[1]).update(t).finalize();
            return e.reset(), n;
        }
        encrypt(e) {
            if (this._updated) throw new Error("encrypt on already updated hmac called!");
            return this.update(e), this.digest(e);
        }
    }
}, V = typeof crypto != z && typeof crypto.getRandomValues == A, q = "Invalid password", H = "Invalid signature", K = "zipjs-abort-check-password";
function Z(e) {
    return V ? crypto.getRandomValues(e) : B.getRandomValues(e);
}
const G = 16, J = {
    name: "PBKDF2"
}, Q = Object.assign({
    hash: {
        name: "HMAC"
    }
}, J), X = Object.assign({
    iterations: 1e3,
    hash: {
        name: "SHA-1"
    }
}, J), Y = [
    "deriveBits"
], $ = [
    8,
    12,
    16
], ee = [
    16,
    24,
    32
], te = 10, ne = [
    0,
    0,
    0,
    0
], ie = typeof crypto != z, re = ie && crypto.subtle, ae = ie && typeof re != z, se = L.bytes, oe = R.aes, le = I.ctrGladman, ce = N.hmacSha1;
let ue = ie && ae && typeof re.importKey == A, de = ie && ae && typeof re.deriveBits == A;
class fe extends TransformStream {
    constructor({ password: e, rawPassword: t, signed: n, encryptionStrength: i, checkPasswordOnly: r }){
        super({
            start () {
                Object.assign(this, {
                    ready: new Promise((e)=>this.resolveReady = e),
                    password: be(e, t),
                    signed: n,
                    strength: i - 1,
                    pending: new Uint8Array
                });
            },
            async transform (e, t) {
                const n = this, { password: i, strength: a, resolveReady: s, ready: o } = n;
                i ? (await async function(e, t, n, i) {
                    const r = await _e(e, t, n, me(i, 0, $[t])), a = me(i, $[t]);
                    if (r[0] != a[0] || r[1] != a[1]) throw new Error(q);
                }(n, a, i, me(e, 0, $[a] + 2)), e = me(e, $[a] + 2), r ? t.error(new Error(K)) : s()) : await o;
                const l = new Uint8Array(e.length - te - (e.length - te) % G);
                t.enqueue(we(n, e, l, 0, te, !0));
            },
            async flush (e) {
                const { signed: t, ctr: n, hmac: i, pending: r, ready: a } = this;
                if (i && n) {
                    await a;
                    const s = me(r, 0, r.length - te), o = me(r, r.length - te);
                    let l = new Uint8Array;
                    if (s.length) {
                        const e = ye(se, s);
                        i.update(e);
                        const t = n.update(e);
                        l = ge(se, t);
                    }
                    if (t) {
                        const e = me(ge(se, i.digest()), 0, te);
                        for(let t = 0; t < te; t++)if (e[t] != o[t]) throw new Error(H);
                    }
                    e.enqueue(l);
                }
            }
        });
    }
}
class he extends TransformStream {
    constructor({ password: e, rawPassword: t, encryptionStrength: n }){
        let i;
        super({
            start () {
                Object.assign(this, {
                    ready: new Promise((e)=>this.resolveReady = e),
                    password: be(e, t),
                    strength: n - 1,
                    pending: new Uint8Array
                });
            },
            async transform (e, t) {
                const n = this, { password: i, strength: r, resolveReady: a, ready: s } = n;
                let o = new Uint8Array;
                i ? (o = await async function(e, t, n) {
                    const i = Z(new Uint8Array($[t])), r = await _e(e, t, n, i);
                    return pe(i, r);
                }(n, r, i), a()) : await s;
                const l = new Uint8Array(o.length + e.length - e.length % G);
                l.set(o, 0), t.enqueue(we(n, e, l, o.length, 0));
            },
            async flush (e) {
                const { ctr: t, hmac: n, pending: r, ready: a } = this;
                if (n && t) {
                    await a;
                    let s = new Uint8Array;
                    if (r.length) {
                        const e = t.update(ye(se, r));
                        n.update(e), s = ge(se, e);
                    }
                    i.signature = ge(se, n.digest()).slice(0, te), e.enqueue(pe(s, i.signature));
                }
            }
        }), i = this;
    }
}
function we(e, t, n, i, r, a) {
    const { ctr: s, hmac: o, pending: l } = e, c = t.length - r;
    let u;
    for(l.length && (t = pe(l, t), n = function(e, t) {
        if (t && t > e.length) {
            const n = e;
            (e = new Uint8Array(t)).set(n, 0);
        }
        return e;
    }(n, c - c % G)), u = 0; u <= c - G; u += G){
        const e = ye(se, me(t, u, u + G));
        a && o.update(e);
        const r = s.update(e);
        a || o.update(r), n.set(ge(se, r), u + i);
    }
    return e.pending = me(t, u), n;
}
async function _e(e, t, n, i) {
    e.password = null;
    const r = await async function(e, t, n, i, r) {
        if (!ue) return N.importKey(t);
        try {
            return await re.importKey(e, t, n, i, r);
        } catch (e) {
            return ue = !1, N.importKey(t);
        }
    }("raw", n, Q, !1, Y), a = await async function(e, t, n) {
        if (!de) return N.pbkdf2(t, e.salt, X.iterations, n);
        try {
            return await re.deriveBits(e, t, n);
        } catch (i) {
            return de = !1, N.pbkdf2(t, e.salt, X.iterations, n);
        }
    }(Object.assign({
        salt: i
    }, X), r, 8 * (2 * ee[t] + 2)), s = new Uint8Array(a), o = ye(se, me(s, 0, ee[t])), l = ye(se, me(s, ee[t], 2 * ee[t])), c = me(s, 2 * ee[t]);
    return Object.assign(e, {
        keys: {
            key: o,
            authentication: l,
            passwordVerification: c
        },
        ctr: new le(new oe(o), Array.from(ne)),
        hmac: new ce(l)
    }), c;
}
function be(e, t) {
    return t === S ? function(e) {
        if (typeof TextEncoder == z) {
            e = unescape(encodeURIComponent(e));
            const t = new Uint8Array(e.length);
            for(let n = 0; n < t.length; n++)t[n] = e.charCodeAt(n);
            return t;
        }
        return (new TextEncoder).encode(e);
    }(e) : t;
}
function pe(e, t) {
    let n = e;
    return e.length + t.length && (n = new Uint8Array(e.length + t.length), n.set(e, 0), n.set(t, e.length)), n;
}
function me(e, t, n) {
    return e.subarray(t, n);
}
function ge(e, t) {
    return e.fromBits(t);
}
function ye(e, t) {
    return e.toBits(t);
}
const xe = 12;
class ke extends TransformStream {
    constructor({ password: e, passwordVerification: t, checkPasswordOnly: n }){
        super({
            start () {
                Object.assign(this, {
                    password: e,
                    passwordVerification: t
                }), Ae(this, e);
            },
            transform (e, t) {
                const i = this;
                if (i.password) {
                    const t = Se(i, e.subarray(0, xe));
                    if (i.password = null, t[11] != i.passwordVerification) throw new Error(q);
                    e = e.subarray(xe);
                }
                n ? t.error(new Error(K)) : t.enqueue(Se(i, e));
            }
        });
    }
}
class ve extends TransformStream {
    constructor({ password: e, passwordVerification: t }){
        super({
            start () {
                Object.assign(this, {
                    password: e,
                    passwordVerification: t
                }), Ae(this, e);
            },
            transform (e, t) {
                const n = this;
                let i, r;
                if (n.password) {
                    n.password = null;
                    const t = Z(new Uint8Array(xe));
                    t[11] = n.passwordVerification, i = new Uint8Array(e.length + t.length), i.set(ze(n, t), 0), r = xe;
                } else i = new Uint8Array(e.length), r = 0;
                i.set(ze(n, e), r), t.enqueue(i);
            }
        });
    }
}
function Se(e, t) {
    const n = new Uint8Array(t.length);
    for(let i = 0; i < t.length; i++)n[i] = De(e) ^ t[i], Ue(e, n[i]);
    return n;
}
function ze(e, t) {
    const n = new Uint8Array(t.length);
    for(let i = 0; i < t.length; i++)n[i] = De(e) ^ t[i], Ue(e, t[i]);
    return n;
}
function Ae(e, t) {
    const n = [
        305419896,
        591751049,
        878082192
    ];
    Object.assign(e, {
        keys: n,
        crcKey0: new W(n[0]),
        crcKey2: new W(n[2])
    });
    for(let n = 0; n < t.length; n++)Ue(e, t.charCodeAt(n));
}
function Ue(e, t) {
    let [n, i, r] = e.keys;
    e.crcKey0.append([
        t
    ]), n = ~e.crcKey0.get(), i = Te(Math.imul(Te(i + Ee(n)), 134775813) + 1), e.crcKey2.append([
        i >>> 24
    ]), r = ~e.crcKey2.get(), e.keys = [
        n,
        i,
        r
    ];
}
function De(e) {
    const t = 2 | e.keys[2];
    return Ee(Math.imul(t, 1 ^ t) >>> 8);
}
function Ee(e) {
    return 255 & e;
}
function Te(e) {
    return 4294967295 & e;
}
const Fe = "deflate-raw";
class Oe extends TransformStream {
    constructor(e, { chunkSize: t, CompressionStream: n, CompressionStreamNative: i }){
        super({});
        const { compressed: r, encrypted: a, useCompressionStream: s, zipCrypto: o, signed: l, level: c } = e, u = this;
        let d, f, h = We(super.readable);
        a && !o || !l || (d = new j, h = Le(h, d)), r && (h = Me(h, s, {
            level: c,
            chunkSize: t
        }, i, n)), a && (o ? h = Le(h, new ve(e)) : (f = new he(e), h = Le(h, f))), je(u, h, ()=>{
            let e;
            a && !o && (e = f.signature), a && !o || !l || (e = new DataView(d.value.buffer).getUint32(0)), u.signature = e;
        });
    }
}
class Ce extends TransformStream {
    constructor(e, { chunkSize: t, DecompressionStream: n, DecompressionStreamNative: i }){
        super({});
        const { zipCrypto: r, encrypted: a, signed: s, signature: o, compressed: l, useCompressionStream: c } = e;
        let u, d, f = We(super.readable);
        a && (r ? f = Le(f, new ke(e)) : (d = new fe(e), f = Le(f, d))), l && (f = Me(f, c, {
            chunkSize: t
        }, i, n)), a && !r || !s || (u = new j, f = Le(f, u)), je(this, f, ()=>{
            if ((!a || r) && s) {
                const e = new DataView(u.value.buffer);
                if (o != e.getUint32(0, !1)) throw new Error(H);
            }
        });
    }
}
function We(e) {
    return Le(e, new TransformStream({
        transform (e, t) {
            e && e.length && t.enqueue(e);
        }
    }));
}
function je(e, t, n) {
    t = Le(t, new TransformStream({
        flush: n
    })), Object.defineProperty(e, "readable", {
        get: ()=>t
    });
}
function Me(e, t, n, i, r) {
    try {
        e = Le(e, new (t && i ? i : r)(Fe, n));
    } catch (i) {
        if (!t) return e;
        try {
            e = Le(e, new r(Fe, n));
        } catch (t) {
            return e;
        }
    }
    return e;
}
function Le(e, t) {
    return e.pipeThrough(t);
}
const Pe = "message", Re = "start", Be = "pull", Ie = "data", Ne = "close", Ve = "inflate";
class qe extends TransformStream {
    constructor(e, t){
        super({});
        const n = this, { codecType: i } = e;
        let r;
        i.startsWith("deflate") ? r = Oe : i.startsWith(Ve) && (r = Ce);
        let a = 0, s = 0;
        const o = new r(e, t), l = super.readable, c = new TransformStream({
            transform (e, t) {
                e && e.length && (s += e.length, t.enqueue(e));
            },
            flush () {
                Object.assign(n, {
                    inputSize: s
                });
            }
        }), u = new TransformStream({
            transform (e, t) {
                e && e.length && (a += e.length, t.enqueue(e));
            },
            flush () {
                const { signature: e } = o;
                Object.assign(n, {
                    signature: e,
                    outputSize: a,
                    inputSize: s
                });
            }
        });
        Object.defineProperty(n, "readable", {
            get: ()=>l.pipeThrough(c).pipeThrough(o).pipeThrough(u)
        });
    }
}
class He extends TransformStream {
    constructor(e){
        let t;
        super({
            transform: function n(i, r) {
                if (t) {
                    const e = new Uint8Array(t.length + i.length);
                    e.set(t), e.set(i, t.length), i = e, t = null;
                }
                i.length > e ? (r.enqueue(i.slice(0, e)), n(i.slice(e), r)) : t = i;
            },
            flush (e) {
                t && t.length && e.enqueue(t);
            }
        });
    }
}
let Ke = typeof Worker != z;
class Ze {
    constructor(e, { readable: t, writable: n }, { options: i, config: r, streamOptions: a, useWebWorkers: s, transferStreams: o, scripts: l }, c){
        const { signal: u } = a;
        return Object.assign(e, {
            busy: !0,
            readable: t.pipeThrough(new He(r.chunkSize)).pipeThrough(new Ge(t, a), {
                signal: u
            }),
            writable: n,
            options: Object.assign({}, i),
            scripts: l,
            transferStreams: o,
            terminate: ()=>new Promise((t)=>{
                    const { worker: n, busy: i } = e;
                    n ? (i ? e.resolveTerminated = t : (n.terminate(), t()), e.interface = null) : t();
                }),
            onTaskFinished () {
                const { resolveTerminated: t } = e;
                t && (e.resolveTerminated = null, e.terminated = !0, e.worker.terminate(), t()), e.busy = !1, c(e);
            }
        }), (s && Ke ? Xe : Qe)(e, r);
    }
}
class Ge extends TransformStream {
    constructor(e, { onstart: t, onprogress: n, size: i, onend: r }){
        let a = 0;
        super({
            async start () {
                t && await Je(t, i);
            },
            async transform (e, t) {
                a += e.length, n && await Je(n, a, i), t.enqueue(e);
            },
            async flush () {
                e.size = a, r && await Je(r, a);
            }
        });
    }
}
async function Je(e, ...t) {
    try {
        await e(...t);
    } catch (e) {}
}
function Qe(e, t) {
    return {
        run: ()=>(async function({ options: e, readable: t, writable: n, onTaskFinished: i }, r) {
                try {
                    const i = new qe(e, r);
                    await t.pipeThrough(i).pipeTo(n, {
                        preventClose: !0,
                        preventAbort: !0
                    });
                    const { signature: a, inputSize: s, outputSize: o } = i;
                    return {
                        signature: a,
                        inputSize: s,
                        outputSize: o
                    };
                } finally{
                    i();
                }
            })(e, t)
    };
}
function Xe(e, t) {
    const { baseURL: n, chunkSize: i } = t;
    if (!e.interface) {
        let r;
        try {
            r = function(e, t, n) {
                const i = {
                    type: "module"
                };
                let r, a;
                typeof e == A && (e = e());
                try {
                    r = new URL(e, t);
                } catch (t) {
                    r = e;
                }
                if (Ye) try {
                    a = new Worker(r);
                } catch (e) {
                    Ye = !1, a = new Worker(r, i);
                }
                else a = new Worker(r, i);
                return a.addEventListener(Pe, (e)=>(async function({ data: e }, t) {
                        const { type: n, value: i, messageId: r, result: a, error: s } = e, { reader: o, writer: l, resolveResult: c, rejectResult: u, onTaskFinished: d } = t;
                        try {
                            if (s) {
                                const { message: e, stack: t, code: n, name: i } = s, r = new Error(e);
                                Object.assign(r, {
                                    stack: t,
                                    code: n,
                                    name: i
                                }), f(r);
                            } else {
                                if (n == Be) {
                                    const { value: e, done: n } = await o.read();
                                    et({
                                        type: Ie,
                                        value: e,
                                        done: n,
                                        messageId: r
                                    }, t);
                                }
                                n == Ie && (await l.ready, await l.write(new Uint8Array(i)), et({
                                    type: "ack",
                                    messageId: r
                                }, t)), n == Ne && f(null, a);
                            }
                        } catch (s) {
                            et({
                                type: Ne,
                                messageId: r
                            }, t), f(s);
                        }
                        function f(e, t) {
                            e ? u(e) : c(t), l && l.releaseLock(), d();
                        }
                    })(e, n)), a;
            }(e.scripts[0], n, e);
        } catch (n) {
            return Ke = !1, Qe(e, t);
        }
        Object.assign(e, {
            worker: r,
            interface: {
                run: ()=>(async function(e, t) {
                        let n, i;
                        const r = new Promise((e, t)=>{
                            n = e, i = t;
                        });
                        Object.assign(e, {
                            reader: null,
                            writer: null,
                            resolveResult: n,
                            rejectResult: i,
                            result: r
                        });
                        const { readable: a, options: s, scripts: o } = e, { writable: l, closed: c } = function(e) {
                            let t;
                            const n = new Promise((e)=>t = e), i = new WritableStream({
                                async write (t) {
                                    const n = e.getWriter();
                                    await n.ready, await n.write(t), n.releaseLock();
                                },
                                close () {
                                    t();
                                },
                                abort: (t)=>e.getWriter().abort(t)
                            });
                            return {
                                writable: i,
                                closed: n
                            };
                        }(e.writable), u = et({
                            type: Re,
                            scripts: o.slice(1),
                            options: s,
                            config: t,
                            readable: a,
                            writable: l
                        }, e);
                        u || Object.assign(e, {
                            reader: a.getReader(),
                            writer: l.getWriter()
                        });
                        const d = await r;
                        u || await l.getWriter().close();
                        return await c, d;
                    })(e, {
                        chunkSize: i
                    })
            }
        });
    }
    return e.interface;
}
let Ye = !0, $e = !0;
function et(e, { worker: t, writer: n, onTaskFinished: i, transferStreams: r }) {
    try {
        let { value: n, readable: i, writable: a } = e;
        const s = [];
        if (n && (n.byteLength < n.buffer.byteLength ? e.value = n.buffer.slice(0, n.byteLength) : e.value = n.buffer, s.push(e.value)), r && $e ? (i && s.push(i), a && s.push(a)) : e.readable = e.writable = null, s.length) try {
            return t.postMessage(e, s), !0;
        } catch (n) {
            $e = !1, e.readable = e.writable = null, t.postMessage(e);
        }
        else t.postMessage(e);
    } catch (e) {
        throw n && n.releaseLock(), i(), e;
    }
}
let tt = [];
const nt = [];
let it = 0;
async function rt(e, t) {
    const { options: n, config: i } = t, { transferStreams: r, useWebWorkers: a, useCompressionStream: s, codecType: o, compressed: l, signed: c, encrypted: u } = n, { workerScripts: d, maxWorkers: f } = i;
    t.transferStreams = r || r === S;
    const h = !(l || c || u || t.transferStreams);
    return t.useWebWorkers = !h && (a || a === S && i.useWebWorkers), t.scripts = t.useWebWorkers && d ? d[o] : [], n.useCompressionStream = s || s === S && i.useCompressionStream, (await async function() {
        const n = tt.find((e)=>!e.busy);
        if (n) return at(n), new Ze(n, e, t, w);
        if (tt.length < f) {
            const n = {
                indexWorker: it
            };
            return it++, tt.push(n), new Ze(n, e, t, w);
        }
        return new Promise((n)=>nt.push({
                resolve: n,
                stream: e,
                workerOptions: t
            }));
    }()).run();
    function w(e) {
        if (nt.length) {
            const [{ resolve: t, stream: n, workerOptions: i }] = nt.splice(0, 1);
            t(new Ze(e, n, i, w));
        } else e.worker ? (at(e), function(e, t) {
            const { config: n } = t, { terminateWorkerTimeout: i } = n;
            Number.isFinite(i) && i >= 0 && (e.terminated ? e.terminated = !1 : e.terminateTimeout = setTimeout(async ()=>{
                tt = tt.filter((t)=>t != e);
                try {
                    await e.terminate();
                } catch (e) {}
            }, i));
        }(e, t)) : tt = tt.filter((t)=>t != e);
    }
}
function at(e) {
    const { terminateTimeout: t } = e;
    t && (clearTimeout(t), e.terminateTimeout = null);
}
const st = 65536, ot = "writable";
class lt {
    constructor(){
        this.size = 0;
    }
    init() {
        this.initialized = !0;
    }
}
class ct extends lt {
    get readable() {
        const e = this, { chunkSize: t = st } = e, n = new ReadableStream({
            start () {
                this.chunkOffset = 0;
            },
            async pull (i) {
                const { offset: r = 0, size: a, diskNumberStart: s } = n, { chunkOffset: o } = this;
                i.enqueue(await pt(e, r + o, Math.min(t, a - o), s)), o + t > a ? i.close() : this.chunkOffset += t;
            }
        });
        return n;
    }
}
class ut extends ct {
    constructor(e){
        super(), Object.assign(this, {
            blob: e,
            size: e.size
        });
    }
    async readUint8Array(e, t) {
        const n = this, i = e + t, r = e || i < n.size ? n.blob.slice(e, i) : n.blob;
        let a = await r.arrayBuffer();
        return a.byteLength > t && (a = a.slice(e, i)), new Uint8Array(a);
    }
}
class dt extends lt {
    constructor(e){
        super();
        const t = new TransformStream, n = [];
        e && n.push([
            "Content-Type",
            e
        ]), Object.defineProperty(this, ot, {
            get: ()=>t.writable
        }), this.blob = new Response(t.readable, {
            headers: n
        }).blob();
    }
    getData() {
        return this.blob;
    }
}
class ft extends dt {
    constructor(e){
        super(e), Object.assign(this, {
            encoding: e,
            utf8: !e || "utf-8" == e.toLowerCase()
        });
    }
    async getData() {
        const { encoding: e, utf8: t } = this, n = await super.getData();
        if (n.text && t) return n.text();
        {
            const t = new FileReader;
            return new Promise((i, r)=>{
                Object.assign(t, {
                    onload: ({ target: e })=>i(e.result),
                    onerror: ()=>r(t.error)
                }), t.readAsText(n, e);
            });
        }
    }
}
class ht extends ct {
    constructor(e){
        super(), this.readers = e;
    }
    async init() {
        const e = this, { readers: t } = e;
        e.lastDiskNumber = 0, e.lastDiskOffset = 0, await Promise.all(t.map(async (n, i)=>{
            await n.init(), i != t.length - 1 && (e.lastDiskOffset += n.size), e.size += n.size;
        })), super.init();
    }
    async readUint8Array(e, t, n = 0) {
        const i = this, { readers: r } = this;
        let a, s = n;
        -1 == s && (s = r.length - 1);
        let o = e;
        for(; o >= r[s].size;)o -= r[s].size, s++;
        const l = r[s], c = l.size;
        if (o + t <= c) a = await pt(l, o, t);
        else {
            const r = c - o;
            a = new Uint8Array(t), a.set(await pt(l, o, r)), a.set(await i.readUint8Array(e + r, t - r, n), r);
        }
        return i.lastDiskNumber = Math.max(s, i.lastDiskNumber), a;
    }
}
class wt extends lt {
    constructor(e, t = 4294967295){
        super();
        const n = this;
        let i, r, a;
        Object.assign(n, {
            diskNumber: 0,
            diskOffset: 0,
            size: 0,
            maxSize: t,
            availableSize: t
        });
        const s = new WritableStream({
            async write (t) {
                const { availableSize: s } = n;
                if (a) t.length >= s ? (await o(t.slice(0, s)), await l(), n.diskOffset += i.size, n.diskNumber++, a = null, await this.write(t.slice(s))) : await o(t);
                else {
                    const { value: s, done: o } = await e.next();
                    if (o && !s) throw new Error("Writer iterator completed too soon");
                    i = s, i.size = 0, i.maxSize && (n.maxSize = i.maxSize), n.availableSize = n.maxSize, await _t(i), r = s.writable, a = r.getWriter(), await this.write(t);
                }
            },
            async close () {
                await a.ready, await l();
            }
        });
        async function o(e) {
            const t = e.length;
            t && (await a.ready, await a.write(e), i.size += t, n.size += t, n.availableSize -= t);
        }
        async function l() {
            r.size = i.size, await a.close();
        }
        Object.defineProperty(n, ot, {
            get: ()=>s
        });
    }
}
async function _t(e, t) {
    if (!e.init || e.initialized) return Promise.resolve();
    await e.init(t);
}
function bt(e) {
    return Array.isArray(e) && (e = new ht(e)), e instanceof ReadableStream && (e = {
        readable: e
    }), e;
}
function pt(e, t, n, i) {
    return e.readUint8Array(t, n, i);
}
const mt = "\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xb6\xa7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xef\xee\xec\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xf2\xfb\xf9\xff\xd6\xdc\xa2\xa3\xa5\u20A7\u0192\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf\u2310\xac\xbd\xbc\xa1\xab\xbb\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xdf\u0393\u03C0\u03A3\u03C3\xb5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xb1\u2265\u2264\u2320\u2321\xf7\u2248\xb0\u2219\xb7\u221A\u207F\xb2\u25A0 ".split(""), gt = 256 == mt.length;
function yt(e, t) {
    return t && "cp437" == t.trim().toLowerCase() ? function(e) {
        if (gt) {
            let t = "";
            for(let n = 0; n < e.length; n++)t += mt[e[n]];
            return t;
        }
        return (new TextDecoder).decode(e);
    }(e) : new TextDecoder(t).decode(e);
}
const xt = "filename", kt = "rawFilename", vt = "comment", St = "rawComment", zt = "uncompressedSize", At = "compressedSize", Ut = "offset", Dt = "diskNumberStart", Et = "lastModDate", Tt = "rawLastModDate", Ft = "lastAccessDate", Ot = "rawLastAccessDate", Ct = "creationDate", Wt = "rawCreationDate", jt = [
    xt,
    kt,
    At,
    zt,
    Et,
    Tt,
    vt,
    St,
    Ft,
    Ct,
    Ut,
    Dt,
    Dt,
    "internalFileAttribute",
    "externalFileAttribute",
    "msDosCompatible",
    "zip64",
    "encrypted",
    "version",
    "versionMadeBy",
    "zipCrypto",
    "directory",
    "bitFlag",
    "signature",
    "filenameUTF8",
    "commentUTF8",
    "compressionMethod",
    "extraField",
    "rawExtraField",
    "extraFieldZip64",
    "extraFieldUnicodePath",
    "extraFieldUnicodeComment",
    "extraFieldAES",
    "extraFieldNTFS",
    "extraFieldExtendedTimestamp"
];
class Mt {
    constructor(e){
        jt.forEach((t)=>this[t] = e[t]);
    }
}
const Lt = "File format is not recognized", Pt = "Zip64 extra field not found", Rt = "Compression method not supported", Bt = "Split zip file", It = "utf-8", Nt = "cp437", Vt = [
    [
        zt,
        g
    ],
    [
        At,
        g
    ],
    [
        Ut,
        g
    ],
    [
        Dt,
        y
    ]
], qt = {
    [y]: {
        getValue: tn,
        bytes: 4
    },
    [g]: {
        getValue: nn,
        bytes: 8
    }
};
class Ht {
    constructor(e, t = {}){
        Object.assign(this, {
            reader: bt(e),
            options: t,
            config: T
        });
    }
    async *getEntriesGenerator(e = {}) {
        const t = this;
        let { reader: n } = t;
        const { config: i } = t;
        if (await _t(n), n.size !== S && n.readUint8Array || (n = new ut(await new Response(n.readable).blob()), await _t(n)), n.size < v) throw new Error(Lt);
        n.chunkSize = function(e) {
            return Math.max(e.chunkSize, 64);
        }(i);
        const r = await async function(e, t, n, i, r) {
            const a = new Uint8Array(4);
            !function(e, t, n) {
                e.setUint32(t, n, !0);
            }(rn(a), 0, t);
            const s = i + r;
            return await o(i) || await o(Math.min(s, n));
            async function o(t) {
                const r = n - t, s = await pt(e, r, t);
                for(let e = s.length - i; e >= 0; e--)if (s[e] == a[0] && s[e + 1] == a[1] && s[e + 2] == a[2] && s[e + 3] == a[3]) return {
                    offset: r + e,
                    buffer: s.slice(e, e + i).buffer
                };
            }
        }(n, 101010256, n.size, v, 1048560);
        if (!r) throw 134695760 == tn(rn(await pt(n, 0, 4))) ? new Error(Bt) : new Error("End of central directory not found");
        const a = rn(r);
        let s = tn(a, 12), o = tn(a, 16);
        const l = r.offset, c = en(a, 20), u = l + v + c;
        let d = en(a, 4);
        const f = n.lastDiskNumber || 0;
        let h = en(a, 6), w = en(a, 8), _ = 0, b = 0;
        if (o == g || s == g || w == y || h == y) {
            const e = rn(await pt(n, r.offset - 20, 20));
            if (117853008 == tn(e, 0)) {
                o = nn(e, 8);
                let t = await pt(n, o, 56, -1), i = rn(t);
                const a = r.offset - 20 - 56;
                if (tn(i, 0) != k && o != a) {
                    const e = o;
                    o = a, _ = o - e, t = await pt(n, o, 56, -1), i = rn(t);
                }
                if (tn(i, 0) != k) throw new Error("End of Zip64 central directory locator not found");
                d == y && (d = tn(i, 16)), h == y && (h = tn(i, 20)), w == y && (w = nn(i, 32)), s == g && (s = nn(i, 40)), o -= s;
            }
        }
        if (o >= n.size && (_ = n.size - o - s - v, o = n.size - s - v), f != d) throw new Error(Bt);
        if (o < 0) throw new Error(Lt);
        let p = 0, m = await pt(n, o, s, h), z = rn(m);
        if (s) {
            const e = r.offset - s;
            if (tn(z, p) != x && o != e) {
                const t = o;
                o = e, _ += o - t, m = await pt(n, o, s, h), z = rn(m);
            }
        }
        const A = r.offset - o - (n.lastDiskOffset || 0);
        if (s != A && A >= 0 && (s = A, m = await pt(n, o, s, h), z = rn(m)), o < 0 || o >= n.size) throw new Error(Lt);
        const U = Qt(t, e, "filenameEncoding"), D = Qt(t, e, "commentEncoding");
        for(let r = 0; r < w; r++){
            const a = new Kt(n, i, t.options);
            if (tn(z, p) != x) throw new Error("Central directory header not found");
            Zt(a, z, p + 6);
            const s = Boolean(a.bitFlag.languageEncodingFlag), o = p + 46, l = o + a.filenameLength, c = l + a.extraFieldLength, u = en(z, p + 4), d = !0, f = m.subarray(o, l), h = en(z, p + 32), g = c + h, y = m.subarray(c, g), k = s, v = s, A = d && !(16 & ~$t(z, p + 38)), E = tn(z, p + 42) + _;
            Object.assign(a, {
                versionMadeBy: u,
                msDosCompatible: d,
                compressedSize: 0,
                uncompressedSize: 0,
                commentLength: h,
                directory: A,
                offset: E,
                diskNumberStart: en(z, p + 34),
                internalFileAttribute: en(z, p + 36),
                externalFileAttribute: tn(z, p + 38),
                rawFilename: f,
                filenameUTF8: k,
                commentUTF8: v,
                rawExtraField: m.subarray(l, c)
            });
            const T = Qt(t, e, "decodeText") || yt, F = k ? It : U || Nt, O = v ? It : D || Nt;
            let C = T(f, F);
            C === S && (C = yt(f, F));
            let W = T(y, O);
            W === S && (W = yt(y, O)), Object.assign(a, {
                rawComment: y,
                filename: C,
                comment: W,
                directory: A || C.endsWith("/")
            }), b = Math.max(E, b), await Gt(a, a, z, p + 6), a.zipCrypto = a.encrypted && !a.extraFieldAES;
            const j = new Mt(a);
            j.getData = (e, t)=>a.getData(e, j, t), p = g;
            const { onprogress: M } = e;
            if (M) try {
                await M(r + 1, w, new Mt(a));
            } catch (e) {}
            yield j;
        }
        const E = Qt(t, e, "extractPrependedData"), T = Qt(t, e, "extractAppendedData");
        return E && (t.prependedData = b > 0 ? await pt(n, 0, b) : new Uint8Array), t.comment = c ? await pt(n, l + v, c) : new Uint8Array, T && (t.appendedData = u < n.size ? await pt(n, u, n.size - u) : new Uint8Array), !0;
    }
    async getEntries(e = {}) {
        const t = [];
        for await (const n of this.getEntriesGenerator(e))t.push(n);
        return t;
    }
    async close() {}
}
class Kt {
    constructor(e, t, n){
        Object.assign(this, {
            reader: e,
            config: t,
            options: n
        });
    }
    async getData(e, t, n = {}) {
        const i = this, { reader: r, offset: a, diskNumberStart: s, extraFieldAES: o, compressionMethod: l, config: c, bitFlag: u, signature: d, rawLastModDate: f, uncompressedSize: h, compressedSize: w } = i, _ = t.localDirectory = {}, b = rn(await pt(r, a, 30, s));
        let p = Qt(i, n, "password"), m = Qt(i, n, "rawPassword");
        const g = Qt(i, n, "passThrough");
        if (p = p && p.length && p, m = m && m.length && m, o && 99 != o.originalCompressionMethod) throw new Error(Rt);
        if (0 != l && 8 != l && !g) throw new Error(Rt);
        if (67324752 != tn(b, 0)) throw new Error("Local file header not found");
        Zt(_, b, 4), _.rawExtraField = _.extraFieldLength ? await pt(r, a + 30 + _.filenameLength, _.extraFieldLength, s) : new Uint8Array, await Gt(i, _, b, 4, !0), Object.assign(t, {
            lastAccessDate: _.lastAccessDate,
            creationDate: _.creationDate
        });
        const y = i.encrypted && _.encrypted && !g, x = y && !o;
        if (g || (t.zipCrypto = x), y) {
            if (!x && o.strength === S) throw new Error("Encryption method not supported");
            if (!p && !m) throw new Error("File contains encrypted entry");
        }
        const k = a + 30 + _.filenameLength + _.extraFieldLength, v = w, z = r.readable;
        Object.assign(z, {
            diskNumberStart: s,
            offset: k,
            size: v
        });
        const U = Qt(i, n, "signal"), D = Qt(i, n, "checkPasswordOnly");
        D && (e = new WritableStream), e = function(e) {
            e.writable === S && typeof e.next == A && (e = new wt(e)), e instanceof WritableStream && (e = {
                writable: e
            });
            const { writable: t } = e;
            return t.size === S && (t.size = 0), e instanceof wt || Object.assign(e, {
                diskNumber: 0,
                diskOffset: 0,
                availableSize: 1 / 0,
                maxSize: 1 / 0
            }), e;
        }(e), await _t(e, g ? w : h);
        const { writable: E } = e, { onstart: T, onprogress: F, onend: O } = n, C = {
            options: {
                codecType: Ve,
                password: p,
                rawPassword: m,
                zipCrypto: x,
                encryptionStrength: o && o.strength,
                signed: Qt(i, n, "checkSignature") && !g,
                passwordVerification: x && (u.dataDescriptor ? f >>> 8 & 255 : d >>> 24 & 255),
                signature: d,
                compressed: 0 != l && !g,
                encrypted: i.encrypted && !g,
                useWebWorkers: Qt(i, n, "useWebWorkers"),
                useCompressionStream: Qt(i, n, "useCompressionStream"),
                transferStreams: Qt(i, n, "transferStreams"),
                checkPasswordOnly: D
            },
            config: c,
            streamOptions: {
                signal: U,
                size: v,
                onstart: T,
                onprogress: F,
                onend: O
            }
        };
        let W = 0;
        try {
            ({ outputSize: W } = await rt({
                readable: z,
                writable: E
            }, C));
        } catch (e) {
            if (!D || e.message != K) throw e;
        } finally{
            const e = Qt(i, n, "preventClose");
            E.size += W, e || E.locked || await E.getWriter().close();
        }
        return D ? S : e.getData ? e.getData() : E;
    }
}
function Zt(e, t, n) {
    const i = e.rawBitFlag = en(t, n + 2), r = !(1 & ~i), a = tn(t, n + 6);
    Object.assign(e, {
        encrypted: r,
        version: en(t, n),
        bitFlag: {
            level: (6 & i) >> 1,
            dataDescriptor: !(8 & ~i),
            languageEncodingFlag: !(2048 & ~i)
        },
        rawLastModDate: a,
        lastModDate: Xt(a),
        filenameLength: en(t, n + 22),
        extraFieldLength: en(t, n + 24)
    });
}
async function Gt(e, t, n, i, r) {
    const { rawExtraField: a } = t, s = t.extraField = new Map, o = rn(new Uint8Array(a));
    let l = 0;
    try {
        for(; l < a.length;){
            const e = en(o, l), t = en(o, l + 2);
            s.set(e, {
                type: e,
                data: a.slice(l + 4, l + 4 + t)
            }), l += 4 + t;
        }
    } catch (e) {}
    const c = en(n, i + 4);
    Object.assign(t, {
        signature: tn(n, i + 10),
        uncompressedSize: tn(n, i + 18),
        compressedSize: tn(n, i + 14)
    });
    const u = s.get(1);
    u && (!function(e, t) {
        t.zip64 = !0;
        const n = rn(e.data), i = Vt.filter(([e, n])=>t[e] == n);
        for(let r = 0, a = 0; r < i.length; r++){
            const [s, o] = i[r];
            if (t[s] == o) {
                const i = qt[o];
                t[s] = e[s] = i.getValue(n, a), a += i.bytes;
            } else if (e[s]) throw new Error(Pt);
        }
    }(u, t), t.extraFieldZip64 = u);
    const d = s.get(28789);
    d && (await Jt(d, xt, kt, t, e), t.extraFieldUnicodePath = d);
    const f = s.get(25461);
    f && (await Jt(f, vt, St, t, e), t.extraFieldUnicodeComment = f);
    const h = s.get(39169);
    h ? (!function(e, t, n) {
        const i = rn(e.data), r = $t(i, 4);
        Object.assign(e, {
            vendorVersion: $t(i, 0),
            vendorId: $t(i, 2),
            strength: r,
            originalCompressionMethod: n,
            compressionMethod: en(i, 5)
        }), t.compressionMethod = e.compressionMethod;
    }(h, t, c), t.extraFieldAES = h) : t.compressionMethod = c;
    const w = s.get(10);
    w && (!function(e, t) {
        const n = rn(e.data);
        let i, r = 4;
        try {
            for(; r < e.data.length && !i;){
                const t = en(n, r), a = en(n, r + 2);
                1 == t && (i = e.data.slice(r + 4, r + 4 + a)), r += 4 + a;
            }
        } catch (e) {}
        try {
            if (i && 24 == i.length) {
                const n = rn(i), r = n.getBigUint64(0, !0), a = n.getBigUint64(8, !0), s = n.getBigUint64(16, !0);
                Object.assign(e, {
                    rawLastModDate: r,
                    rawLastAccessDate: a,
                    rawCreationDate: s
                });
                const o = Yt(r), l = Yt(a), c = {
                    lastModDate: o,
                    lastAccessDate: l,
                    creationDate: Yt(s)
                };
                Object.assign(e, c), Object.assign(t, c);
            }
        } catch (e) {}
    }(w, t), t.extraFieldNTFS = w);
    const _ = s.get(21589);
    _ && (!function(e, t, n) {
        const i = rn(e.data), r = $t(i, 0), a = [], s = [];
        n ? (1 & ~r || (a.push(Et), s.push(Tt)), 2 & ~r || (a.push(Ft), s.push(Ot)), 4 & ~r || (a.push(Ct), s.push(Wt))) : e.data.length >= 5 && (a.push(Et), s.push(Tt));
        let o = 1;
        a.forEach((n, r)=>{
            if (e.data.length >= o + 4) {
                const a = tn(i, o);
                t[n] = e[n] = new Date(1e3 * a);
                const l = s[r];
                e[l] = a;
            }
            o += 4;
        });
    }(_, t, r), t.extraFieldExtendedTimestamp = _);
    const b = s.get(6534);
    b && (t.extraFieldUSDZ = b);
}
async function Jt(e, t, n, i, r) {
    const a = rn(e.data), s = new W;
    s.append(r[n]);
    const o = rn(new Uint8Array(4));
    o.setUint32(0, s.get(), !0);
    const l = tn(a, 1);
    Object.assign(e, {
        version: $t(a, 0),
        [t]: yt(e.data.subarray(5)),
        valid: !r.bitFlag.languageEncodingFlag && l == tn(o, 0)
    }), e.valid && (i[t] = e[t], i[t + "UTF8"] = !0);
}
function Qt(e, t, n) {
    return t[n] === S ? e.options[n] : t[n];
}
function Xt(e) {
    const t = (4294901760 & e) >> 16, n = 65535 & e;
    try {
        return new Date(1980 + ((65024 & t) >> 9), ((480 & t) >> 5) - 1, 31 & t, (63488 & n) >> 11, (2016 & n) >> 5, 2 * (31 & n), 0);
    } catch (e) {}
}
function Yt(e) {
    return new Date(Number(e / BigInt(1e4) - BigInt(116444736e5)));
}
function $t(e, t) {
    return e.getUint8(t);
}
function en(e, t) {
    return e.getUint16(t, !0);
}
function tn(e, t) {
    return e.getUint32(t, !0);
}
function nn(e, t) {
    return Number(e.getBigUint64(t, !0));
}
function rn(e) {
    return new DataView(e.buffer);
}
F({
    Inflate: function(e) {
        const t = new m, i = e && e.chunkSize ? Math.floor(2 * e.chunkSize) : 131072, r = new Uint8Array(i);
        let a = !1;
        t.inflateInit(), t.next_out = r, this.append = function(e, s) {
            const o = [];
            let l, c, u = 0, d = 0, f = 0;
            if (0 !== e.length) {
                t.next_in_index = 0, t.next_in = e, t.avail_in = e.length;
                do {
                    if (t.next_out_index = 0, t.avail_out = i, 0 !== t.avail_in || a || (t.next_in_index = 0, a = !0), l = t.inflate(0), a && l === n) {
                        if (0 !== t.avail_in) throw new Error("inflating: bad input");
                    } else if (0 !== l && 1 !== l) throw new Error("inflating: " + t.msg);
                    if ((a || 1 === l) && t.avail_in === e.length) throw new Error("inflating: bad input");
                    t.next_out_index && (t.next_out_index === i ? o.push(new Uint8Array(r)) : o.push(r.subarray(0, t.next_out_index))), f += t.next_out_index, s && t.next_in_index > 0 && t.next_in_index != u && (s(t.next_in_index), u = t.next_in_index);
                }while (t.avail_in > 0 || 0 === t.avail_out);
                return o.length > 1 ? (c = new Uint8Array(f), o.forEach(function(e) {
                    c.set(e, d), d += e.length;
                })) : c = o[0] ? new Uint8Array(o[0]) : new Uint8Array, c;
            }
        }, this.flush = function() {
            t.inflateEnd();
        };
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3Ha98"}],"eYr8X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTOCView", ()=>createTOCView);
const createSVGElement = (tag)=>document.createElementNS('http://www.w3.org/2000/svg', tag);
const createExpanderIcon = ()=>{
    const svg = createSVGElement('svg');
    svg.setAttribute('viewBox', '0 0 13 10');
    svg.setAttribute('width', '13');
    svg.setAttribute('height', '13');
    const polygon = createSVGElement('polygon');
    polygon.setAttribute('points', '2 1, 12 1, 7 9');
    svg.append(polygon);
    return svg;
};
const createTOCItemElement = (list, map, onclick)=>{
    let count = 0;
    const makeID = ()=>`toc-element-${count++}`;
    const createItem = ({ label, href, subitems }, depth = 0)=>{
        const a = document.createElement(href ? 'a' : 'span');
        a.innerText = label;
        a.setAttribute('role', 'treeitem');
        a.tabIndex = -1;
        a.style.paddingInlineStart = `${(depth + 1) * 24}px`;
        list.push(a);
        if (href) {
            if (!map.has(href)) map.set(href, a);
            a.href = href;
            a.onclick = (event)=>{
                event.preventDefault();
                onclick(href);
            };
        } else a.onclick = (event)=>a.firstElementChild?.onclick(event);
        const li = document.createElement('li');
        li.setAttribute('role', 'none');
        li.append(a);
        if (subitems?.length) {
            a.setAttribute('aria-expanded', 'false');
            const expander = createExpanderIcon();
            expander.onclick = (event)=>{
                event.preventDefault();
                event.stopPropagation();
                const expanded = a.getAttribute('aria-expanded');
                a.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');
            };
            a.prepend(expander);
            const ol = document.createElement('ol');
            ol.id = makeID();
            ol.setAttribute('role', 'group');
            a.setAttribute('aria-owns', ol.id);
            ol.replaceChildren(...subitems.map((item)=>createItem(item, depth + 1)));
            li.append(ol);
        }
        return li;
    };
    return createItem;
};
const createTOCView = (toc, onclick)=>{
    const $toc = document.createElement('ol');
    $toc.setAttribute('role', 'tree');
    const list = [];
    const map = new Map();
    const createItem = createTOCItemElement(list, map, onclick);
    $toc.replaceChildren(...toc.map((item)=>createItem(item)));
    const isTreeItem = (item)=>item?.getAttribute('role') === 'treeitem';
    const getParents = function*(el) {
        for(let parent = el.parentNode; parent !== $toc; parent = parent.parentNode){
            const item = parent.previousElementSibling;
            if (isTreeItem(item)) yield item;
        }
    };
    let currentItem, currentVisibleParent;
    $toc.addEventListener('focusout', ()=>{
        if (!currentItem) return;
        // reset parent focus from last time
        if (currentVisibleParent) currentVisibleParent.tabIndex = -1;
        // if current item is visible, let it have the focus
        if (currentItem.offsetParent) {
            currentItem.tabIndex = 0;
            return;
        }
        // current item is hidden; give focus to the nearest visible parent
        for (const item of getParents(currentItem))if (item.offsetParent) {
            item.tabIndex = 0;
            currentVisibleParent = item;
            break;
        }
    });
    const setCurrentHref = (href)=>{
        if (currentItem) {
            currentItem.removeAttribute('aria-current');
            currentItem.tabIndex = -1;
        }
        const el = map.get(href);
        if (!el) {
            currentItem = list[0];
            currentItem.tabIndex = 0;
            return;
        }
        for (const item of getParents(el))item.setAttribute('aria-expanded', 'true');
        el.setAttribute('aria-current', 'page');
        el.tabIndex = 0;
        // el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        currentItem = el;
    };
    const acceptNode = (node)=>isTreeItem(node) && node.offsetParent ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    const iter = document.createTreeWalker($toc, 1, {
        acceptNode
    });
    const getIter = (current)=>(iter.currentNode = current, iter);
    for (const el of list)el.addEventListener('keydown', (event)=>{
        let stop = false;
        const { currentTarget, key } = event;
        switch(key){
            case ' ':
            case 'Enter':
                currentTarget.click();
                stop = true;
                break;
            case 'ArrowDown':
                getIter(currentTarget).nextNode()?.focus();
                stop = true;
                break;
            case 'ArrowUp':
                getIter(currentTarget).previousNode()?.focus();
                stop = true;
                break;
            case 'ArrowLeft':
                if (currentTarget.getAttribute('aria-expanded') === 'true') currentTarget.setAttribute('aria-expanded', 'false');
                else getParents(currentTarget).next()?.value?.focus();
                stop = true;
                break;
            case 'ArrowRight':
                if (currentTarget.getAttribute('aria-expanded') === 'true') getIter(currentTarget).nextNode()?.focus();
                else if (currentTarget.getAttribute('aria-owns')) currentTarget.setAttribute('aria-expanded', 'true');
                stop = true;
                break;
            case 'Home':
                list[0].focus();
                stop = true;
                break;
            case 'End':
                {
                    const last = list[list.length - 1];
                    if (last.offsetParent) last.focus();
                    else getIter(last).previousNode()?.focus();
                    stop = true;
                    break;
                }
        }
        if (stop) {
            event.preventDefault();
            event.stopPropagation();
        }
    });
    return {
        element: $toc,
        setCurrentHref
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3Ha98"}],"ioQIV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMenu", ()=>createMenu);
const createMenuItemRadioGroup = (label, arr, onclick)=>{
    const group = document.createElement('ul');
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', label);
    const map = new Map();
    const select = (value)=>{
        onclick(value);
        const item = map.get(value);
        for (const child of group.children)child.setAttribute('aria-checked', child === item ? 'true' : 'false');
    };
    for (const [label, value] of arr){
        const item = document.createElement('li');
        item.setAttribute('role', 'menuitemradio');
        item.innerText = label;
        item.onclick = ()=>select(value);
        map.set(value, item);
        group.append(item);
    }
    return {
        element: group,
        select
    };
};
const createMenu = (arr)=>{
    const groups = {};
    const element = document.createElement('ul');
    element.setAttribute('role', 'menu');
    const hide = ()=>element.classList.remove('show');
    const hideAnd = (f)=>(...args)=>(hide(), f(...args));
    for (const { name, label, type, items, onclick } of arr){
        const widget = type === 'radio' ? createMenuItemRadioGroup(label, items, hideAnd(onclick)) : null;
        if (name) groups[name] = widget;
        element.append(widget.element);
    }
    // TODO: keyboard events
    window.addEventListener('blur', ()=>hide());
    window.addEventListener('click', (e)=>{
        if (!element.parentNode.contains(e.target)) hide();
    });
    return {
        element,
        groups
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3Ha98"}],"c810w":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("5oxNx"));

},{"5oxNx":"5oxNx"}]},["dZ9vL","37obo"], "37obo", "parcelRequire94c2")

//# sourceMappingURL=reader.2496a5b2.js.map
