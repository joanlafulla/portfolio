import { c as createComponent, a as createAstro, r as renderComponent, b as renderScript, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_BGO4U_p6.mjs';
import 'kleur/colors';
/* empty css                                            */
import { a as $$Layout, b as $$Loading, c as $$Topbar, d as $$Main, u as useTranslations, e as $$Footer2 } from '../../chunks/Footer2_wRsYNBUe.mjs';
import { $ as $$HeaderDefault } from '../../chunks/Header_default_B06w9fRV.mjs';
import { $ as $$ItemProduct } from '../../chunks/ItemProduct_GcxBB-vK.mjs';
import { s as system_1_small, a as system_1, p as panotLogo, b as system_2, c as system_3_small, d as system_3, e as system_4 } from '../../chunks/panot_logo_Bnz6xB2o.mjs';
/* empty css                                     */
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$System = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$System;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(currentLang);
  const pageTitle = "Creant un Design System multi tema a Figma";
  const pageDescription = "Un Design System que optimitza el proc\xE9s de disseny, facilita la col\xB7laboraci\xF3 entre equips i mant\xE9 la coher\xE8ncia als nostres productes.";
  const pageKeywords = "UX, UI, Fotocasa, html, css, javascript, blog, cine";
  const pageAuthor = "Joan Lafulla";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": pageAuthor, "class": "overflow-x-hidden", "data-astro-cid-mdwcsxio": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Loading", $$Loading, { "data-astro-cid-mdwcsxio": true })} ${renderComponent($$result2, "Topbar", $$Topbar, { "cluePosition": "30%", "data-astro-cid-mdwcsxio": true })} ${renderComponent($$result2, "Header", $$HeaderDefault, { "data-astro-cid-mdwcsxio": true })} ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-mdwcsxio": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section id="system" data-astro-cid-mdwcsxio> <div class="system_contenedor_1" data-astro-cid-mdwcsxio> <div class="system_content_1" data-astro-cid-mdwcsxio> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("system.row1.title"), "description": translateLabels("system.row1.body"), "class": "row-1", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row", "textAlign": "left", "colorText": "var(--text)", "justifyImages": "center", "textDirection": "column", "data-astro-cid-mdwcsxio": true }, { "default": ($$result4) => renderTemplate` <picture data-astro-cid-mdwcsxio> <source media="(max-width: 680px)"${addAttribute(system_1_small.src, "srcset")} data-astro-cid-mdwcsxio> <img${addAttribute(system_1.src, "src")} alt="Variables de diseño en Figma" class="img-large-extra" data-astro-cid-mdwcsxio> </picture> ` })} </div> </div> <div class="system_contenedor_2" data-astro-cid-mdwcsxio> <div class="system_content_2" data-astro-cid-mdwcsxio> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("system.row2.title"), "description": translateLabels("system.row2.body"), "imgSupport": panotLogo, "imgSupportAlt": "Logo de Panot, el sistema de dise\xF1o de Fotocasa y Habitaclia", "imgSupportClass": "img_support_small", "class": "row-2", "imgWidth": "50%", "imgWidthMobile": "45%", "flexDirection": "row-reverse", "textAlign": "left", "colorText": "var(--text)", "justifyImages": "center", "textDirection": "column", "data-astro-cid-mdwcsxio": true }, { "default": ($$result4) => renderTemplate` <img${addAttribute(system_2.src, "src")} alt="La Home de Habitaclia con el sistema de diseño de Panot aplicado." class="img-large-isolate" data-astro-cid-mdwcsxio> <picture data-astro-cid-mdwcsxio> <source media="(max-width: 680px)"${addAttribute(system_3_small.src, "srcset")} data-astro-cid-mdwcsxio> <img${addAttribute(system_3.src, "src")} alt="La Home de Fotocasa con el sistema de diseño de Panot aplicado." class="img-large-picture" data-astro-cid-mdwcsxio> </picture> ` })} </div> </div> <div class="system_contenedor_3" data-astro-cid-mdwcsxio> <div class="system_content_3" data-astro-cid-mdwcsxio> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("system.row3.title"), "description": translateLabels("system.row3.body"), "class": "row-3", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row", "textAlign": "left", "colorText": "var(--white)", "justifyImages": "center", "textDirection": "column", "data-astro-cid-mdwcsxio": true }, { "default": ($$result4) => renderTemplate` <picture data-astro-cid-mdwcsxio> <source media="(max-width: 680px)"${addAttribute(system_4.src, "srcset")} data-astro-cid-mdwcsxio> <img${addAttribute(system_4.src, "src")} alt="Ejemplos de tokens de diseño de Panot" class="img-large-isolate" data-astro-cid-mdwcsxio> </picture> ` })} </div> </div> </section> ` })} ${renderComponent($$result2, "Footer2", $$Footer2, { "bgColor": "var(--yellow)", ",": true, "textColor": "var(--dark-brown)", ",": true, "barraColor": "var(--dark-brown)", ",": true, "template": "brown", "data-astro-cid-mdwcsxio": true })} ` })}  ${renderScript($$result, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/system.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/system.astro", void 0);

const $$file = "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/system.astro";
const $$url = "/ca/system";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$System,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
