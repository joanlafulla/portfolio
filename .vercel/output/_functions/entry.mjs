import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { c as createExports } from './chunks/entrypoint_D5Z8yPHS.mjs';
import { manifest } from './manifest_BjzwQyYR.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/apps_fotocasa.astro.mjs');
const _page2 = () => import('./pages/apps_habitaclia.astro.mjs');
const _page3 = () => import('./pages/ca/apps_fotocasa.astro.mjs');
const _page4 = () => import('./pages/ca/apps_habitaclia.astro.mjs');
const _page5 = () => import('./pages/ca/darkblob.astro.mjs');
const _page6 = () => import('./pages/ca/duplicados.astro.mjs');
const _page7 = () => import('./pages/ca/system.astro.mjs');
const _page8 = () => import('./pages/ca/trayecto.astro.mjs');
const _page9 = () => import('./pages/ca.astro.mjs');
const _page10 = () => import('./pages/darkblob.astro.mjs');
const _page11 = () => import('./pages/duplicados.astro.mjs');
const _page12 = () => import('./pages/en/apps_fotocasa.astro.mjs');
const _page13 = () => import('./pages/en/apps_habitaclia.astro.mjs');
const _page14 = () => import('./pages/en/darkblob.astro.mjs');
const _page15 = () => import('./pages/en/duplicados.astro.mjs');
const _page16 = () => import('./pages/en/system.astro.mjs');
const _page17 = () => import('./pages/en/trayecto.astro.mjs');
const _page18 = () => import('./pages/en.astro.mjs');
const _page19 = () => import('./pages/system.astro.mjs');
const _page20 = () => import('./pages/trayecto.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/apps_fotocasa.astro", _page1],
    ["src/pages/apps_habitaclia.astro", _page2],
    ["src/pages/ca/apps_fotocasa.astro", _page3],
    ["src/pages/ca/apps_habitaclia.astro", _page4],
    ["src/pages/ca/darkblob.astro", _page5],
    ["src/pages/ca/duplicados.astro", _page6],
    ["src/pages/ca/system.astro", _page7],
    ["src/pages/ca/trayecto.astro", _page8],
    ["src/pages/ca/index.astro", _page9],
    ["src/pages/darkblob.astro", _page10],
    ["src/pages/duplicados.astro", _page11],
    ["src/pages/en/apps_fotocasa.astro", _page12],
    ["src/pages/en/apps_habitaclia.astro", _page13],
    ["src/pages/en/darkblob.astro", _page14],
    ["src/pages/en/duplicados.astro", _page15],
    ["src/pages/en/system.astro", _page16],
    ["src/pages/en/trayecto.astro", _page17],
    ["src/pages/en/index.astro", _page18],
    ["src/pages/system.astro", _page19],
    ["src/pages/trayecto.astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e5d571d5-f906-46e6-ac5f-b9005a69bb43",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
