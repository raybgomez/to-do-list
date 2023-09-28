/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/output.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/output.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\\n*/\\n\\n/*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\n\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box;\\n  /* 1 */\\n  border-width: 0;\\n  /* 2 */\\n  border-style: solid;\\n  /* 2 */\\n  border-color: #e5e7eb;\\n  /* 2 */\\n}\\n\\n::before,\\n::after {\\n  --tw-content: '';\\n}\\n\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user's configured `sans` font-family by default.\\n5. Use the user's configured `sans` font-feature-settings by default.\\n*/\\n\\nhtml {\\n  line-height: 1.5;\\n  /* 1 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */\\n  -moz-tab-size: 4;\\n  /* 3 */\\n  -o-tab-size: 4;\\n  tab-size: 4;\\n  /* 3 */\\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\";\\n  /* 4 */\\n  font-feature-settings: normal;\\n  /* 5 */\\n}\\n\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\n\\nbody {\\n  margin: 0;\\n  /* 1 */\\n  line-height: inherit;\\n  /* 2 */\\n}\\n\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\n\\nhr {\\n  height: 0;\\n  /* 1 */\\n  color: inherit;\\n  /* 2 */\\n  border-top-width: 1px;\\n  /* 3 */\\n}\\n\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr:where([title]) {\\n  -webkit-text-decoration: underline dotted;\\n  text-decoration: underline dotted;\\n}\\n\\n/*\\nRemove the default font size and weight for headings.\\n*/\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\n\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/*\\n1. Use the user's configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */\\n}\\n\\n/*\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\n\\ntable {\\n  text-indent: 0;\\n  /* 1 */\\n  border-color: inherit;\\n  /* 2 */\\n  border-collapse: collapse;\\n  /* 3 */\\n}\\n\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  /* 1 */\\n  font-size: 100%;\\n  /* 1 */\\n  font-weight: inherit;\\n  /* 1 */\\n  line-height: inherit;\\n  /* 1 */\\n  color: inherit;\\n  /* 1 */\\n  margin: 0;\\n  /* 2 */\\n  padding: 0;\\n  /* 3 */\\n}\\n\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\n\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n  -webkit-appearance: button;\\n  /* 1 */\\n  background-color: transparent;\\n  /* 2 */\\n  background-image: none;\\n  /* 2 */\\n}\\n\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\n\\n:-moz-focusring {\\n  outline: auto;\\n}\\n\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\n\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\n\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type='search'] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  outline-offset: -2px;\\n  /* 2 */\\n}\\n\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */\\n}\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\n\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nlegend {\\n  padding: 0;\\n}\\n\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\n\\ntextarea {\\n  resize: vertical;\\n}\\n\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user's configured gray 400 color.\\n*/\\n\\ninput::-moz-placeholder,\\ntextarea::-moz-placeholder {\\n  opacity: 1;\\n  /* 1 */\\n  color: #9ca3af;\\n  /* 2 */\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1;\\n  /* 1 */\\n  color: #9ca3af;\\n  /* 2 */\\n}\\n\\n/*\\nSet the default cursor for buttons.\\n*/\\n\\nbutton,\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\n\\n/*\\nMake sure disabled buttons don't get the pointer cursor.\\n*/\\n\\n:disabled {\\n  cursor: default;\\n}\\n\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\n\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block;\\n  /* 1 */\\n  vertical-align: middle;\\n  /* 2 */\\n}\\n\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\n\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n/* Make elements with the HTML hidden attribute stay hidden by default */\\n\\n[hidden] {\\n  display: none;\\n}\\n\\n*,\\n::before,\\n::after {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x: ;\\n  --tw-pan-y: ;\\n  --tw-pinch-zoom: ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal: ;\\n  --tw-slashed-zero: ;\\n  --tw-numeric-figure: ;\\n  --tw-numeric-spacing: ;\\n  --tw-numeric-fraction: ;\\n  --tw-ring-inset: ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur: ;\\n  --tw-brightness: ;\\n  --tw-contrast: ;\\n  --tw-grayscale: ;\\n  --tw-hue-rotate: ;\\n  --tw-invert: ;\\n  --tw-saturate: ;\\n  --tw-sepia: ;\\n  --tw-drop-shadow: ;\\n  --tw-backdrop-blur: ;\\n  --tw-backdrop-brightness: ;\\n  --tw-backdrop-contrast: ;\\n  --tw-backdrop-grayscale: ;\\n  --tw-backdrop-hue-rotate: ;\\n  --tw-backdrop-invert: ;\\n  --tw-backdrop-opacity: ;\\n  --tw-backdrop-saturate: ;\\n  --tw-backdrop-sepia: ;\\n}\\n\\n::backdrop {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x: ;\\n  --tw-pan-y: ;\\n  --tw-pinch-zoom: ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal: ;\\n  --tw-slashed-zero: ;\\n  --tw-numeric-figure: ;\\n  --tw-numeric-spacing: ;\\n  --tw-numeric-fraction: ;\\n  --tw-ring-inset: ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur: ;\\n  --tw-brightness: ;\\n  --tw-contrast: ;\\n  --tw-grayscale: ;\\n  --tw-hue-rotate: ;\\n  --tw-invert: ;\\n  --tw-saturate: ;\\n  --tw-sepia: ;\\n  --tw-drop-shadow: ;\\n  --tw-backdrop-blur: ;\\n  --tw-backdrop-brightness: ;\\n  --tw-backdrop-contrast: ;\\n  --tw-backdrop-grayscale: ;\\n  --tw-backdrop-hue-rotate: ;\\n  --tw-backdrop-invert: ;\\n  --tw-backdrop-opacity: ;\\n  --tw-backdrop-saturate: ;\\n  --tw-backdrop-sepia: ;\\n}\\n\\n.fixed {\\n  position: fixed;\\n}\\n\\n.absolute {\\n  position: absolute;\\n}\\n\\n.relative {\\n  position: relative;\\n}\\n\\n.left-1\\\\/2 {\\n  left: 50%;\\n}\\n\\n.top-1\\\\/4 {\\n  top: 25%;\\n}\\n\\n.z-10 {\\n  z-index: 10;\\n}\\n\\n.mx-auto {\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.block {\\n  display: block;\\n}\\n\\n.flex {\\n  display: flex;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.h-10 {\\n  height: 2.5rem;\\n}\\n\\n.h-5 {\\n  height: 1.25rem;\\n}\\n\\n.min-h-screen {\\n  min-height: 100vh;\\n}\\n\\n.w-10 {\\n  width: 2.5rem;\\n}\\n\\n.w-5 {\\n  width: 1.25rem;\\n}\\n\\n.w-full {\\n  width: 100%;\\n}\\n\\n.max-w-sm {\\n  max-width: 24rem;\\n}\\n\\n.flex-1 {\\n  flex: 1 1 0%;\\n}\\n\\n.-translate-x-1\\\\/2 {\\n  --tw-translate-x: -50%;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n\\n.translate-y-1\\\\/3 {\\n  --tw-translate-y: 33.333333%;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n\\n.flex-col {\\n  flex-direction: column;\\n}\\n\\n.items-center {\\n  align-items: center;\\n}\\n\\n.justify-center {\\n  justify-content: center;\\n}\\n\\n.gap-2 {\\n  gap: 0.5rem;\\n}\\n\\n.gap-3 {\\n  gap: 0.75rem;\\n}\\n\\n.gap-5 {\\n  gap: 1.25rem;\\n}\\n\\n.gap-1 {\\n  gap: 0.25rem;\\n}\\n\\n.space-y-3> :not([hidden])~ :not([hidden]) {\\n  --tw-space-y-reverse: 0;\\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\\n}\\n\\n.rounded-full {\\n  border-radius: 9999px;\\n}\\n\\n.rounded-lg {\\n  border-radius: 0.5rem;\\n}\\n\\n.bg-slate-50 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(248 250 252 / var(--tw-bg-opacity));\\n  border-bottom-width: medium;\\n  border-bottom-color: black;\\n}\\n\\n.bg-white {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\\n}\\n\\n.bg-zinc-800 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(39 39 42 / var(--tw-bg-opacity));\\n}\\n\\n.bg-green-600 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\\n}\\n\\n.bg-red-500 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\\n}\\n\\n.bg-slate-400 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(148 163 184 / var(--tw-bg-opacity));\\n}\\n\\n.p-3 {\\n  padding: 0.75rem;\\n}\\n\\n.p-5 {\\n  padding: 1.25rem;\\n}\\n\\n.p-6 {\\n  padding: 1.5rem;\\n}\\n\\n.p-4 {\\n  padding: 1rem;\\n}\\n\\n.pb-1 {\\n  padding-bottom: 0.25rem;\\n}\\n\\n.pb-5 {\\n  padding-bottom: 1.25rem;\\n}\\n\\n.tasks.text-left.pb-5 {\\n  display: flex;\\n  justify-content: center;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.task {\\n  padding: 2px\\n}\\n\\n[type=\\\"checkbox\\\"]:checked+label {\\n  opacity: 0.5;\\n  text-decoration: line-through\\n}\\n\\n.pt-10 {\\n  padding-top: 2.5rem;\\n}\\n\\n.pt-5 {\\n  padding-top: 1.25rem;\\n}\\n\\n.pb-3 {\\n  padding-bottom: 0.75rem;\\n}\\n\\n.pt-3 {\\n  padding-top: 0.75rem;\\n}\\n\\n.text-center {\\n  text-align: center;\\n}\\n\\n.align-middle {\\n  vertical-align: middle;\\n}\\n\\n.text-2xl {\\n  font-size: 1.5rem;\\n  line-height: 2rem;\\n}\\n\\n.text-sm {\\n  font-size: 0.875rem;\\n  line-height: 1.25rem;\\n}\\n\\n.text-lg {\\n  font-size: 1.125rem;\\n  line-height: 1.75rem;\\n}\\n\\n.font-semibold {\\n  font-weight: 600;\\n}\\n\\n.text-white {\\n  --tw-text-opacity: 1;\\n  color: rgb(255 255 255 / var(--tw-text-opacity));\\n}\\n\\n.opacity-75 {\\n  opacity: 0.75;\\n}\\n\\n.shadow-lg {\\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\n\\n.outline-none {\\n  outline: 2px solid transparent;\\n  outline-offset: 2px;\\n}\\n\\n.outline-2 {\\n  outline-width: 2px;\\n}\\n\\n.outline-zinc-800 {\\n  outline-color: #27272a;\\n}\\n\\n.ring-1 {\\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\\n}\\n\\n.ring-slate-900\\\\/5 {\\n  --tw-ring-color: rgb(15 23 42 / 0.05);\\n}\\n\\ndiv#popupProject {\\n  border-width: medium;\\n}\\n\\n.duration-300 {\\n  transition-duration: 300ms;\\n}\\n\\n.duration-100 {\\n  transition-duration: 100ms;\\n}\\n\\n.ease-in-out {\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n}\\n\\nbutton.newProjectBtn {\\n  background: rgba(47, 255, 85, 0.749)\\n}\\n\\nli {\\n  cursor: pointer;\\n}\\n\\n.hover\\\\:rotate-180:hover {\\n  --tw-rotate: 180deg;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n\\n.hover\\\\:rotate-\\\\[360deg\\\\]:hover {\\n  --tw-rotate: 360deg;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n\\n.hover\\\\:scale-125:hover {\\n  --tw-scale-x: 1.25;\\n  --tw-scale-y: 1.25;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n\\n@keyframes ping {\\n\\n  75%,\\n  100% {\\n    transform: scale(2);\\n    opacity: 0;\\n  }\\n}\\n\\n.hover\\\\:animate-ping:hover {\\n  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\\n}\\n\\n.hover\\\\:bg-yellow-300:hover {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(253 224 71 / var(--tw-bg-opacity));\\n}\\n\\n.hover\\\\:shadow-lg:hover {\\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\n\\n.hover\\\\:ring-1:hover {\\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\\n}\\n\\n.hover\\\\:ring-yellow-300:hover {\\n  --tw-ring-opacity: 1;\\n  --tw-ring-color: rgb(253 224 71 / var(--tw-ring-opacity));\\n}\\n\\n@media (min-width: 640px) {\\n  .sm\\\\:flex-row {\\n    flex-direction: row;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./dist/output.css?./node_modules/css-loader/dist/cjs.js");

        /***/
}),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

        eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

        /***/
}),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

        eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

        /***/
}),

/***/ "./dist/output.css":
/*!*************************!*\
  !*** ./dist/output.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./output.css */ \"./node_modules/css-loader/dist/cjs.js!./dist/output.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./dist/output.css?");

        /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

        eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

        /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

        eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

        /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

        eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

        /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

        eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

        /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

        eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

        /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

        eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

        /***/
}),

/***/ "./src/Modules/app.js":
/*!****************************!*\
  !*** ./src/Modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ \"./src/Modules/objects.js\");\n\n// For storage when creating new list items - Key:value\nconst LOCAL_STORAGE_LIST_KEY = 'tasks.lists'\nconst LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'tasks.selectedListID'\n\nlet selectedListID = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []; // This is a storage array OF OBJECTS that asK for an id and a name - this is the list of project titles which will display in the sidebar under 'projects'. Or it will display an empty array.\n\nconst tasksContainer = document.querySelector('[data-tasks]');\nconst listsContainer = document.querySelector('[data-lists]');\nconst newListForm = document.querySelector('[data-new-list-form]');\nconst newListInput = document.querySelector('[data-new-list-input]');\nconst deleteButton = document.querySelector('[data-delete-button]');\nconst listDisplayContainer = document.querySelector('[data-display-container]');\nconst listTitleElement = document.querySelector('[data-list-title]');\nconst clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]')\nconst newTaskForm = document.querySelector('[data-new-task-form]');\nconst newTaskInput = document.querySelector('[data-new-task-input]');\nconst taskTemplate = document.getElementById('task-template');\n\n\n// This will save that the task that is checked when page refreshed\ntasksContainer.addEventListener('click', e => {\n    if (e.target.tagName.toLowerCase() === 'input') {\n        const selectedList = lists.find(list => list.id === selectedListID)\n        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)\n        selectedTask.complete = e.target.checked\n        save()\n    }\n})\n\nlistsContainer.addEventListener('click', e => {\n    if (e.target.tagName.toLowerCase() === 'li') {\n        selectedListID = e.target.dataset.listId\n        saveAndRender()\n    }\n})\n\n// This will create a new task item onto the list\nnewTaskForm.addEventListener('submit', e => {\n    e.preventDefault();\n    const taskName = newTaskInput.value;\n    if (taskName == null || taskName === '') return\n    const task = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(taskName);\n    newTaskInput.value = null;\n    const selectedList = lists.find(list => list.id === selectedListID)\n    selectedList.tasks.push(task)\n    saveAndRender()\n})\n\n// Whenever you submit a title on the project form, this will push the new title into the lists array as an object with a unique date id, name and tasks array\nnewListForm.addEventListener('submit', e => {\n    e.preventDefault();\n    const listName = newListInput.value;\n    if (listName == null || listName === '') return\n    const list = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.createList)(listName);\n    newListInput.value = null;\n    lists.push(list);\n    saveAndRender()\n})\n\nclearCompleteTasksButton.addEventListener('click', () => {\n    const selectedList = lists.find(list => list.id === selectedListID)\n    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)\n    saveAndRender()\n})\n\n// This will activate the delete button by creating a new list. New list is a product of a filtered list that doesn't include the selected list item with selectedListID\ndeleteButton.addEventListener('click', () => {\n    lists = lists.filter(list => list.id !== selectedListID);\n    selectedListID = null;\n    saveAndRender()\n})\n\n// This will save newly created project lists and tasks to local storage so that items don't disappear after refreshing the page.\nfunction save() {\n    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))\n    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListID)\n}\n\n// This will call the save and render function to save lists data and create new list data once the form is submitted.\nfunction saveAndRender() {\n    save();\n    render()\n}\n\nfunction render() {\n    renderLists()\n    const selectedList = lists.find(list => list.id === selectedListID)\n    if (selectedListID == null) {\n        listDisplayContainer.style.display = 'none'\n    } else {\n        listDisplayContainer.style.display = ''\n        listTitleElement.innerHTML = selectedList.name\n        clearElement(tasksContainer)\n        renderTasks(selectedList)\n    }\n}\n\n// This will display tasks within each project\nfunction renderTasks(selectedList) {\n    selectedList.tasks.forEach(task => {\n        // The below variable makes it so we don't have to write out each task checkbox in javascript, but rather duplicate a pre-written template in HTML to pass on to the webpage.\n        const taskElement = document.importNode(taskTemplate.content, true)\n        const checkBox = taskElement.querySelector('input')\n        checkBox.id = task.id\n        checkBox.checked = task.complete\n        const label = taskElement.querySelector('label')\n        label.htmlFor = task.id\n        label.append(task.name)\n        tasksContainer.appendChild(taskElement)\n    })\n}\n\n// This will ensure that a newly created project item will remain even when the page is refreshed.\nfunction renderLists() {\n    clearElement(listsContainer);\n    lists.forEach(list => {\n        const listElement = document.createElement('li');\n        listElement.dataset.listId = list.id;\n        listElement.className = \"list-name flex gap-5 ease-in-out duration-300  group rounded-lg p-3 bg-white hover:shadow-lg hover: ring-slate-900/5 hover:ring-1 hover:cursor-pointer\";\n        listElement.innerText = list.name;\n        if (list.id === selectedListID) {\n            listElement.className = 'active-list font-semibold flex gap-5 p-3';\n        }\n        listsContainer.appendChild(listElement)\n    })\n}\n// This will clear the project list if there are any old lists from beforehand\nfunction clearElement(element) {\n    while (element.firstChild) {\n        element.removeChild(element.firstChild)\n    }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/Modules/app.js?");

        /***/
}),

/***/ "./src/Modules/form.js":
/*!*****************************!*\
  !*** ./src/Modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form)\n/* harmony export */ });\n\n//Create Variables, this is for the create projects button\n\nfunction form() {\n\n    const newProjectBtn = document.querySelector(\".newProjectBtn\");\n    const closeProjectBtn = document.querySelector(\".projBtnCancel\");\n    const createProjectBtn = document.querySelector(\".projBtnSubmit\");\n\n    newProjectBtn.addEventListener(\"click\", addProject);\n    closeProjectBtn.addEventListener(\"click\", closeForm);\n    createProjectBtn.addEventListener('click', closeForm)\n\n    function addProject() {\n        document.getElementById(\"popupProject\").style.display = \"block\";\n    }\n    function closeForm() {\n        document.getElementById(\"popupProject\").style.display = \"none\";\n    }\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/Modules/form.js?");

        /***/
}),

/***/ "./src/Modules/objects.js":
/*!********************************!*\
  !*** ./src/Modules/objects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createList\": () => (/* binding */ createList),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\n\n\n// THIS IS AN OBJECT. This will add a unique date id, name, and incomplete array to each new task title added to the Tasks list\nfunction createTask(name) {\n    return {\n        id: Date.now().toString(),\n        name: name,\n        complete: false,\n    }\n}\n\n// THIS IS AN OBJECT. This will add a unique date id, name, and open tasks array to each new project title added to the lists array above\nfunction createList(name) {\n    return {\n        id: Date.now().toString(),\n        name: name,\n        tasks: [],\n    }\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/Modules/objects.js?");

        /***/
}),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/app.js */ \"./src/Modules/app.js\");\n/* harmony import */ var _Modules_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/form.js */ \"./src/Modules/form.js\");\n/* harmony import */ var _dist_output_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/output.css */ \"./dist/output.css\");\n\n\n\n\n(0,_Modules_app_js__WEBPACK_IMPORTED_MODULE_0__.render)()\n;(0,_Modules_form_js__WEBPACK_IMPORTED_MODULE_1__.form)()\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

        /***/
})

    /******/
});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
}
        /******/
}
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
    /******/
})();
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})()
  ;