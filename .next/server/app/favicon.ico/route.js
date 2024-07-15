"use strict";
(() => {
var exports = {};
exports.id = 7155;
exports.ids = [7155];
exports.modules = {

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 22890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(20514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("AAABAAEAEBAAAAEAIADEAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAotJREFUeJyVkltIk2Ecxi0oQoSCqAisQInqwu4soaAgpCSoG828UJK6mGSoEEtFKcnqIkoqScNDF4YuNbdh07ncPOzTdt78jvvcxmZuc5vbNDDDPDx9ExGsBvmHB96L9/fj5Xn/CQnbmBvZ2anbuf8nfExIj5Dk7UB7hOwNR6OJoXCkQzgn/TfMcI5DvNubWiQSJbu9IZnbG2jYkJ4WsiMu+P2pPCVSKamhKM7j0NmJ7j5tSKm1wEA5MzcE++LCkQrJvUB+/TxZ2jBD0RyMtCva267yS2SauUjlp/Gll4Oi5bejO/8NV30s8OXWrbDny6HKLFthaBpmxgWtdIQfOlEIa8Z92DMfwZ3zYmKuaSjxL0FA1KT2XKnF4NE8SFNywAoC/YRDCI+H4vJ5Ze+wTyfTDvGXH+8GkL4Ffn+p7kDLGfFCe0ZFtP/ITbyuebcQExBmO/SkE/LPKpipSUx6/BAK9fiC0awtgo4CiV6VVgRVci4UJwtR19K1plQTPy02GjqrPVYgbJwHjNMLx9QMPL7ZVX8oempToHhi+qWoNaIxqxH1jd2zbTI1pAPEYrt0IDxC6FZir2FoBhTnAuvywvktgCl/+NqmoLP42WxXUXFQnHY9/FwkXvog12DMzGDEQEFFWLwmG5NkI9k3gmSNYezgXNOkazq4a1NQfbZkNX9/FW4drERbyZ1Ia/cA9DYO42YWowZ6WaMj19fXSnGpJMOX0rz78JYO+h7kLfaU3Yat+jg0bVXB5k4lCCMFw4QdXy0stEZaHnd5YrP45Zx+afgiPM3pXGtXH2IC9ZgFVmYSRlKQWFkQJuZCXMGP/oyrTsVdc2unYh2OpX9YD9rugo1xwETywm9wr/7F/gbMda/2Ln5CGAAAAABJRU5ErkJggg==", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=F%3A%5CProject%5CWorking%20Project%5Cunicorn%5Cunicorn%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "export"
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!F:\\Project\\Working Project\\unicorn\\unicorn\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,4218], () => (__webpack_exec__(22890)));
module.exports = __webpack_exports__;

})();