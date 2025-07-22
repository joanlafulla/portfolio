import { c as createComponent, a as createAstro, r as renderComponent, b as renderScript, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_BqnpntHy.mjs';
import 'kleur/colors';
/* empty css                                            */
import { a as $$Layout, b as $$Loading, c as $$Topbar, d as $$Main, u as useTranslations, e as $$Footer2 } from '../../chunks/Footer2_0JUnMB6y.mjs';
import { $ as $$HeaderDefault } from '../../chunks/Header_default_Cy9HIGBM.mjs';
import { $ as $$ItemProduct } from '../../chunks/ItemProduct_Bntk2cyo.mjs';
import { s as system_1_small, a as system_1, p as panotLogo, b as system_2, c as system_3_small, d as system_3, e as system_4 } from '../../chunks/panot_logo_BYuVoerr.mjs';
/* empty css                                     */
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$System = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$System;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(currentLang);
  const pageTitle = "Creating a Multi-Theme Design System in Figma";
  const pageDescription = "A Design System that streamlines the design process, facilitates cross-team collaboration, and maintains consistency across our products.";
  const pageKeywords = "UX, UI, Fotocasa, html, css, javascript, blog, cine";
  const pageAuthor = "Joan Lafulla";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": pageAuthor, "class": "overflow-x-hidden", "data-astro-cid-pbmh6z74": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Loading", $$Loading, { "data-astro-cid-pbmh6z74": true })} ${renderComponent($$result2, "Topbar", $$Topbar, { "cluePosition": "30%", "data-astro-cid-pbmh6z74": true })} ${renderComponent($$result2, "Header", $$HeaderDefault, { "data-astro-cid-pbmh6z74": true })} ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-pbmh6z74": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section id="system" data-astro-cid-pbmh6z74> <div class="system_contenedor_1" data-astro-cid-pbmh6z74> <div class="system_content_1" data-astro-cid-pbmh6z74> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("system.row1.title"), "description": translateLabels("system.row1.body"), "class": "row-1", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row", "textAlign": "left", "colorText": "var(--text)", "justifyImages": "center", "textDirection": "column", "data-astro-cid-pbmh6z74": true }, { "default": ($$result4) => renderTemplate` <picture data-astro-cid-pbmh6z74> <source media="(max-width: 680px)"${addAttribute(system_1_small.src, "srcset")} data-astro-cid-pbmh6z74> <img${addAttribute(system_1.src, "src")} alt="Variables de diseño en Figma" class="img-large-extra" data-astro-cid-pbmh6z74> </picture> ` })} </div> </div> <div class="system_contenedor_2" data-astro-cid-pbmh6z74> <div class="system_content_2" data-astro-cid-pbmh6z74> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("system.row2.title"), "description": translateLabels("system.row2.body"), "imgSupport": panotLogo, "imgSupportAlt": "Logo de Panot, el sistema de dise\xF1o de Fotocasa y Habitaclia", "imgSupportClass": "img_support_small", "class": "row-2", "imgWidth": "50%", "imgWidthMobile": "45%", "flexDirection": "row-reverse", "textAlign": "left", "colorText": "var(--text)", "justifyImages": "center", "textDirection": "column", "data-astro-cid-pbmh6z74": true }, { "default": ($$result4) => renderTemplate` <img${addAttribute(system_2.src, "src")} alt="La Home de Habitaclia con el sistema de diseño de Panot aplicado." class="img-large-isolate" data-astro-cid-pbmh6z74> <picture data-astro-cid-pbmh6z74> <source media="(max-width: 680px)"${addAttribute(system_3_small.src, "srcset")} data-astro-cid-pbmh6z74> <img${addAttribute(system_3.src, "src")} alt="La Home de Fotocasa con el sistema de diseño de Panot aplicado." class="img-large-picture" data-astro-cid-pbmh6z74> </picture> ` })} </div> </div> <div class="system_contenedor_3" data-astro-cid-pbmh6z74> <div class="system_content_3" data-astro-cid-pbmh6z74> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("system.row3.title"), "description": translateLabels("system.row3.body"), "class": "row-3", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row", "textAlign": "left", "colorText": "var(--white)", "justifyImages": "center", "textDirection": "column", "data-astro-cid-pbmh6z74": true }, { "default": ($$result4) => renderTemplate` <picture data-astro-cid-pbmh6z74> <source media="(max-width: 680px)"${addAttribute(system_4.src, "srcset")} data-astro-cid-pbmh6z74> <img${addAttribute(system_4.src, "src")} alt="Ejemplos de tokens de diseño de Panot" class="img-large-isolate" data-astro-cid-pbmh6z74> </picture> ` })} </div> </div> </section> ` })} ${renderComponent($$result2, "Footer2", $$Footer2, { "bgColor": "var(--yellow)", ",": true, "textColor": "var(--dark-brown)", ",": true, "barraColor": "var(--dark-brown)", ",": true, "template": "brown", "data-astro-cid-pbmh6z74": true })} ` })}  ${renderScript($$result, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/en/system.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/en/system.astro", void 0);

const $$file = "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/en/system.astro";
const $$url = "/en/system";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$System,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
