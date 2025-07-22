import { c as createComponent, a as createAstro, r as renderComponent, b as renderScript, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_BqnpntHy.mjs';
import 'kleur/colors';
/* empty css                                            */
import { a as $$Layout, b as $$Loading, c as $$Topbar, d as $$Main, u as useTranslations, e as $$Footer2 } from '../../chunks/Footer2_0JUnMB6y.mjs';
import { $ as $$HeaderTrayecto, t as trayecto_1_large, a as trayecto_2_small, b as trayecto_2_large, c as trayecto_4_small, d as trayecto_4_large, e as trayecto_3_large } from '../../chunks/trayecto_4_small_COcrReS7.mjs';
import { $ as $$ItemProduct } from '../../chunks/ItemProduct_Bntk2cyo.mjs';
/* empty css                                       */
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Trayecto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Trayecto;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(currentLang);
  const pageTitle = "Explorant la cerca per temps de trajecte a Fotocasa";
  const pageDescription = "La nova funcionalitat de cerca per trajecte permet als usuaris de Fotocasa obtenir resultats a partir d\u201Fun punt d\u201Finter\xE8s (una direcci\xF3), un mitj\xE0 de transport (a peu, amb cotxe, transport p\xFAblic...) i un temps de despla\xE7ament (de 10 a 60 min).";
  const pageKeywords = "UX, UI, Fotocasa, html, css, javascript, blog, cine";
  const pageAuthor = "Joan Lafulla";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": pageAuthor, "class": "overflow-x-hidden", "data-astro-cid-43mt27uw": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Loading", $$Loading, { "data-astro-cid-43mt27uw": true })} ${renderComponent($$result2, "Topbar", $$Topbar, { "cluePosition": "60%", "data-astro-cid-43mt27uw": true })} ${renderComponent($$result2, "Header", $$HeaderTrayecto, { "data-astro-cid-43mt27uw": true })} ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-43mt27uw": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="trayecto_contenedor_2" data-astro-cid-43mt27uw> <div class="trayecto_content_2" data-astro-cid-43mt27uw> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("trayecto.row2.title"), "description": translateLabels("trayecto.row2.body"), "class": "row-2", "imgWidth": "50%", "imgWidthMobile": "45%", "flexDirection": "row", "textAlign": "left", "colorText": "var(--text)", "justifyImages": "center", "textDirection": "column", "data-astro-cid-43mt27uw": true }, { "default": ($$result4) => renderTemplate` <img${addAttribute(trayecto_1_large.src, "src")} alt="La búsqueda por tiempo de trayecto como nueva forma de búsqueda en Fotocasa" class="img-large-isolate" data-astro-cid-43mt27uw> <picture data-astro-cid-43mt27uw> <source media="(max-width: 680px)"${addAttribute(trayecto_2_small.src, "srcset")} data-astro-cid-43mt27uw> <img${addAttribute(trayecto_2_large.src, "src")} alt="Pantalla en la que se muestra la búsqueda por tiempo de trayecto" class="img-large-picture" data-astro-cid-43mt27uw> </picture> ` })} </div> </div> <div class="trayecto_contenedor_3" data-astro-cid-43mt27uw> <div class="trayecto_content_3" data-astro-cid-43mt27uw> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("trayecto.row3.title"), "description": translateLabels("trayecto.row3.body"), "class": "row-3", "imgWidth": "50%", "imgWidthMobile": "45%", "flexDirection": "row-reverse", "textAlign": "left", "colorText": "var(--text)", "justifyImages": "center", "textDirection": "column", "data-astro-cid-43mt27uw": true }, { "default": ($$result4) => renderTemplate` <picture data-astro-cid-43mt27uw> <source media="(max-width: 680px)"${addAttribute(trayecto_4_small.src, "srcset")} data-astro-cid-43mt27uw> <img${addAttribute(trayecto_4_large.src, "src")} alt="Pantalla en la que se muestra una opción de doble búsqueda por trayecto" class="img-large-picture" data-astro-cid-43mt27uw> </picture> <img${addAttribute(trayecto_3_large.src, "src")} alt="Resultado de una doble búsqueda por tiempo de trayecto" class="img-large-isolate" data-astro-cid-43mt27uw> ` })} </div> </div> ` })} ${renderComponent($$result2, "Footer2", $$Footer2, { "bgColor": "var(--dark-brown)", ",": true, "textColor": "var(--yellow)", ",": true, "barraColor": "var(--yellow)", ",": true, "template": "yellow", "data-astro-cid-43mt27uw": true })} ` })}  ${renderScript($$result, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/trayecto.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/trayecto.astro", void 0);

const $$file = "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/trayecto.astro";
const $$url = "/ca/trayecto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Trayecto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
