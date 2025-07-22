import { c as createComponent, a as createAstro, r as renderComponent, b as renderScript, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_iE4Xfp6e.mjs';
import 'kleur/colors';
/* empty css                                            */
import { a as $$Layout, b as $$Loading, c as $$Topbar, d as $$Main, u as useTranslations, e as $$Footer2 } from '../../chunks/Footer2_BQlsr-kw.mjs';
import { $ as $$HeaderDefault } from '../../chunks/Header_default_DxRZffVP.mjs';
import { $ as $$ItemProduct } from '../../chunks/ItemProduct_c0eAS3iK.mjs';
import { b as bigplus, d as dark_1_small, a as dark_1, c as dark_3_large, e as dark_2_small, f as dark_2_large, g as dark_4_small, h as dark_4 } from '../../chunks/bigplus_N_tjMGk3.mjs';
/* empty css                                       */
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Darkblob = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Darkblob;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(currentLang);
  const pageTitle = "DarkBlobCine.com - Una proposta per als amants del cinema";
  const pageDescription = "Disseny UX/UI i programaci\xF3 d'un bloc dedicat a la nostra passi\xF3 pel cinema.";
  const pageKeywords = "UX, UI, Fotocasa, html, css, javascript, blog, cine";
  const pageAuthor = "Joan Lafulla";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": pageAuthor, "class": "overflow-x-hidden", "data-astro-cid-b22yiljo": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Loading", $$Loading, { "data-astro-cid-b22yiljo": true })} ${renderComponent($$result2, "Topbar", $$Topbar, { "cluePosition": "30%", "data-astro-cid-b22yiljo": true })} ${renderComponent($$result2, "Header", $$HeaderDefault, { "data-astro-cid-b22yiljo": true })} ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-b22yiljo": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section id="darkblob" data-astro-cid-b22yiljo> <img${addAttribute(bigplus.src, "src")} alt="Logo de DarkBlobCine.com" class="bigplus" data-astro-cid-b22yiljo> <div class="darkblob_contenedor_1" data-astro-cid-b22yiljo> <div class="darkblob_content_1" data-astro-cid-b22yiljo> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("dark.row1.title"), "description": translateLabels("dark.row1.body"), "class": "row-1", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row", "textAlign": "left", "colorText": "var(--white)", "justifyImages": "center", "textDirection": "column", "data-astro-cid-b22yiljo": true }, { "default": ($$result4) => renderTemplate` <picture data-astro-cid-b22yiljo> <source media="(max-width: 680px)"${addAttribute(dark_1_small.src, "srcset")} data-astro-cid-b22yiljo> <img${addAttribute(dark_1.src, "src")} alt="Página de inicio del blog darkblobcine.com" class="img-large-extra" data-astro-cid-b22yiljo> </picture> ` })} </div> </div> <div class="darkblob_contenedor_2" data-astro-cid-b22yiljo> <div class="darkblob_content_2" data-astro-cid-b22yiljo> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("dark.row2.title"), "description": translateLabels("dark.row2.body"), "class": "row-2", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row-reverse", "textAlign": "left", "colorText": "var(--text)", "justifyImages": "center", "textDirection": "column", "data-astro-cid-b22yiljo": true }, { "default": ($$result4) => renderTemplate` <img${addAttribute(dark_3_large.src, "src")} alt="Ficha de una película en DarkBlobcine.com" class="img-large-isolate" data-astro-cid-b22yiljo> <picture data-astro-cid-b22yiljo> <source media="(max-width: 680px)"${addAttribute(dark_2_small.src, "srcset")} data-astro-cid-b22yiljo> <img${addAttribute(dark_2_large.src, "src")} alt="Ficha de una película en DarkBlobcine.com" class="img-large-picture" data-astro-cid-b22yiljo> </picture> ` })} </div> </div> <div class="darkblob_contenedor_3" data-astro-cid-b22yiljo> <div class="darkblob_content_3" data-astro-cid-b22yiljo> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("dark.row3.title"), "description": translateLabels("dark.row3.body"), "class": "row-3", "flexDirection": "column-reverse", "textAlign": "left", "colorText": "var(--text)", "justifyImages": "center", "textDirection": "row", "data-astro-cid-b22yiljo": true }, { "default": ($$result4) => renderTemplate` <picture data-astro-cid-b22yiljo> <source media="(max-width: 680px)"${addAttribute(dark_4_small.src, "srcset")} data-astro-cid-b22yiljo> <img${addAttribute(dark_4.src, "src")} alt="Detalle de la página de inicio de darkblobcine.com" class="img-large-isolate" data-astro-cid-b22yiljo> </picture> ` })} </div> </div> </section> ` })} ${renderComponent($$result2, "Footer2", $$Footer2, { "bgColor": "var(--dark-brown)", ",": true, "textColor": "var(--yellow)", ",": true, "barraColor": "var(--yellow)", ",": true, "template": "yellow", "data-astro-cid-b22yiljo": true })} ` })}  ${renderScript($$result, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/darkblob.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/darkblob.astro", void 0);

const $$file = "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/darkblob.astro";
const $$url = "/ca/darkblob";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Darkblob,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
