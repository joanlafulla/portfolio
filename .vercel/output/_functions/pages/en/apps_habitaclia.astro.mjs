import { c as createComponent, a as createAstro, r as renderComponent, b as renderScript, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_iE4Xfp6e.mjs';
import 'kleur/colors';
/* empty css                                            */
import { a as $$Layout, b as $$Loading, c as $$Topbar, d as $$Main, u as useTranslations, e as $$Footer2 } from '../../chunks/Footer2_BQlsr-kw.mjs';
import { $ as $$HeaderDefault } from '../../chunks/Header_default_DxRZffVP.mjs';
import { $ as $$ItemProduct } from '../../chunks/ItemProduct_c0eAS3iK.mjs';
import { h as hb1, a as hb2, b as hb5, c as hb4, d as hb3_small, e as hb3, r as reviews, v as valoraciones } from '../../chunks/valoraciones_30P4XAIw.mjs';
/* empty css                                              */
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$AppsHabitaclia = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AppsHabitaclia;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(currentLang);
  const pageTitle = "Habitaclia native apps";
  const pageDescription = "UX/UI design of Habitaclia's native apps.";
  const pageKeywords = "UX, UI, Fotocasa, apps nativas";
  const pageAuthor = "Joan Lafulla";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": pageAuthor, "data-astro-cid-ososhiqk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Loading", $$Loading, { "data-astro-cid-ososhiqk": true })} ${renderComponent($$result2, "Topbar", $$Topbar, { "cluePosition": "50%", "data-astro-cid-ososhiqk": true })} ${renderComponent($$result2, "Header", $$HeaderDefault, { "data-astro-cid-ososhiqk": true })} ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-ososhiqk": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section id="apps_fotocasa" data-astro-cid-ososhiqk> <div class="apps_fotocasa_contenedor" data-astro-cid-ososhiqk> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("appsHB.row1.title"), "description": translateLabels("appsHB.row1.body"), "class": "row-1", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row-reverse", "textAlign": "left", "justifyImages": "center", "textDirection": "column", "data-astro-cid-ososhiqk": true }, { "default": ($$result4) => renderTemplate` <img${addAttribute(hb1.src, "src")} alt="Habitaclia App - screen de inicio o Home" class="img-large-isolate" data-astro-cid-ososhiqk> <picture data-astro-cid-ososhiqk> <source media="(max-width: 680px)"${addAttribute(hb2.src, "srcset")} data-astro-cid-ososhiqk> <img${addAttribute(hb2.src, "src")} alt="Habitaclia App - detalle de un anuncio" class="img-large-picture" data-astro-cid-ososhiqk> </picture> ` })} ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("appsHB.row2.title"), "description": translateLabels("appsHB.row2.body"), "class": "row-2", "imgWidth": "50%", "imgWidthMobile": "40%", "flexDirection": "row", "textAlign": "left", "justifyImages": "center", "textDirection": "column", "data-astro-cid-ososhiqk": true }, { "default": ($$result4) => renderTemplate` <picture data-astro-cid-ososhiqk> <source media="(max-width: 680px)"${addAttribute(hb5.src, "srcset")} data-astro-cid-ososhiqk> <img${addAttribute(hb5.src, "src")} alt="Habitaclia App - detalle de un anuncio" class="img-large-picture" data-astro-cid-ososhiqk> </picture> ` })} ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("appsHB.row3.title"), "description": translateLabels("appsHB.row3.body"), "class": "row-3", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row-reverse", "textAlign": "left", "justifyImages": "center", "textDirection": "column", "data-astro-cid-ososhiqk": true }, { "default": ($$result4) => renderTemplate` <img${addAttribute(hb4.src, "src")} alt="Habitaclia App - screen de inicio o Home" class="img-large-isolate" data-astro-cid-ososhiqk> <picture data-astro-cid-ososhiqk> <source media="(max-width: 680px)"${addAttribute(hb3_small.src, "srcset")} data-astro-cid-ososhiqk> <img${addAttribute(hb3.src, "src")} alt="Habitaclia App - detalle de un anuncio" class="img-large-picture" data-astro-cid-ososhiqk> </picture> ` })} ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("appsHB.row4.title"), "description": translateLabels("appsHB.row4.body"), "class": "row-4", "imgWidth": "55%", "imgWidthMobile": "50%", "flexDirection": "row", "textAlign": "left", "textDirection": "column", "data-astro-cid-ososhiqk": true }, { "default": ($$result4) => renderTemplate` <div class="markets" data-astro-cid-ososhiqk> <img${addAttribute(reviews.src, "src")} alt="Habitaclia App - screen de inicio o Home" data-astro-cid-ososhiqk> <img${addAttribute(valoraciones.src, "src")} alt="Habitaclia App - screen de inicio o Home" data-astro-cid-ososhiqk> </div> ` })} </div> </section> ` })} ${renderComponent($$result2, "Footer2", $$Footer2, { "bgColor": "var(--dark-brown)", ",": true, "textColor": "var(--yellow)", ",": true, "barraColor": "var(--yellow)", ",": true, "template": "yellow", "data-astro-cid-ososhiqk": true })} ` })}  ${renderScript($$result, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/en/apps_habitaclia.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/en/apps_habitaclia.astro", void 0);

const $$file = "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/en/apps_habitaclia.astro";
const $$url = "/en/apps_habitaclia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AppsHabitaclia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
