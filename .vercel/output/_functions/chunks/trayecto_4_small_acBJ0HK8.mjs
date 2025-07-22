import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderScript, d as renderTemplate } from './astro/server_iE4Xfp6e.mjs';
import 'kleur/colors';
import { u as useTranslations, g as getRelativeLocaleUrl, $ as $$ButtonNavigation } from './Footer2_BQlsr-kw.mjs';
/* empty css                            */

const $$Astro = createAstro();
const $$HeaderTrayecto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderTrayecto;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(currentLang);
  return renderTemplate`${maybeRenderHead()}<header class="navigation-default" data-astro-cid-uuerkdhs> <nav data-astro-cid-uuerkdhs> ${renderComponent($$result, "Button", $$ButtonNavigation, { "size": "56px", "backgroundColor": "rgba(246,221,0,1)", "backgroundColorHover": "rgba(246,221,0,0.5)", "color": "var(--text)", "href": getRelativeLocaleUrl(currentLang, "/"), "data-astro-cid-uuerkdhs": true }, { "default": ($$result2) => renderTemplate`<span class="material-symbols-outlined" data-astro-cid-uuerkdhs>arrow_back</span> ${translateLabels("go.home")}` })} </nav> </header> <section id="trayecto" data-astro-cid-uuerkdhs> <div class="trayecto_contenedor_1" data-astro-cid-uuerkdhs> <div class="trayecto_content_1" data-astro-cid-uuerkdhs> <div class="trayecto_content_1_content" data-astro-cid-uuerkdhs> <h1 data-astro-cid-uuerkdhs>${translateLabels("trayecto.row1.title")}</h1> <p data-astro-cid-uuerkdhs>${translateLabels("trayecto.row1.body")}</p> </div> </div> </div> </section>  ${renderScript($$result, "/Users/joan.lafulla/Desktop/portfolio/app/src/layouts/Header_trayecto.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joan.lafulla/Desktop/portfolio/app/src/layouts/Header_trayecto.astro", void 0);

const trayecto_1_large = new Proxy({"src":"/_astro/trayecto_1_large.cSxrO0b9.png","width":282,"height":580,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/trayecto/trayecto_1_large.png";
							}
							
							return target[name];
						}
					});

const trayecto_2_large = new Proxy({"src":"/_astro/trayecto_2_large.CMndYWGF.png","width":283,"height":609,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/trayecto/trayecto_2_large.png";
							}
							
							return target[name];
						}
					});

const trayecto_2_small = new Proxy({"src":"/_astro/trayecto_2_small.Bp_FS5C1.png","width":282,"height":340,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/trayecto/trayecto_2_small.png";
							}
							
							return target[name];
						}
					});

const trayecto_3_large = new Proxy({"src":"/_astro/trayecto_3_large.DHYnBAvh.png","width":360,"height":745,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/trayecto/trayecto_3_large.png";
							}
							
							return target[name];
						}
					});

const trayecto_4_large = new Proxy({"src":"/_astro/trayecto_4_large.CKiHjsuO.png","width":360,"height":745,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/trayecto/trayecto_4_large.png";
							}
							
							return target[name];
						}
					});

const trayecto_4_small = new Proxy({"src":"/_astro/trayecto_4_small.EtsFYnZl.png","width":282,"height":340,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/trayecto/trayecto_4_small.png";
							}
							
							return target[name];
						}
					});

export { $$HeaderTrayecto as $, trayecto_2_small as a, trayecto_2_large as b, trayecto_4_small as c, trayecto_4_large as d, trayecto_3_large as e, trayecto_1_large as t };
