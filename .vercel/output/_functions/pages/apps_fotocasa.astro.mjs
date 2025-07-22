import { c as createComponent, a as createAstro, r as renderComponent, b as renderScript, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_BGO4U_p6.mjs';
import 'kleur/colors';
/* empty css                                         */
import { a as $$Layout, b as $$Loading, c as $$Topbar, d as $$Main, u as useTranslations, e as $$Footer2 } from '../chunks/Footer2_wRsYNBUe.mjs';
import { $ as $$HeaderDefault } from '../chunks/Header_default_B06w9fRV.mjs';
import { $ as $$ItemProduct } from '../chunks/ItemProduct_GcxBB-vK.mjs';
import { f as fc1, a as fc2, b as fc3_small, c as fc3, d as fc4, e as fc5_small, g as fc5, h as googlePlay, i as appStore } from '../chunks/google_play_D2U0pUgT.mjs';
/* empty css                                         */
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$AppsFotocasa = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AppsFotocasa;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(currentLang);
  const pageTitle = "Apps nativas de Fotocasa";
  const pageDescription = "Dise\xF1o UX/UI de las Apps nativas de Fotocasa.";
  const pageKeywords = "UX, UI, Fotocasa, apps nativas";
  const pageAuthor = "Joan Lafulla";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": pageAuthor, "data-astro-cid-ad7fdfvh": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Loading", $$Loading, { "data-astro-cid-ad7fdfvh": true })} ${renderComponent($$result2, "Topbar", $$Topbar, { "cluePosition": "50%", "data-astro-cid-ad7fdfvh": true })} ${renderComponent($$result2, "Header", $$HeaderDefault, { "data-astro-cid-ad7fdfvh": true })} ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-ad7fdfvh": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section id="apps_fotocasa" data-astro-cid-ad7fdfvh> <div class="apps_fotocasa_contenedor" data-astro-cid-ad7fdfvh> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("appsFC.row1.title"), "description": translateLabels("appsFC.row1.body"), "class": "row-1", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row-reverse", "textAlign": "left", "justifyImages": "center", "textDirection": "column", "data-astro-cid-ad7fdfvh": true }, { "default": ($$result4) => renderTemplate` <img${addAttribute(fc1.src, "src")} alt="Fotocasa App - screen de inicio o Home" class="img-large-picture" data-astro-cid-ad7fdfvh> <img${addAttribute(fc2.src, "src")} alt="Fotocasa App - detalle de un anuncio" class="img-large-isolate" data-astro-cid-ad7fdfvh> ` })} ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("appsFC.row2.title"), "description": translateLabels("appsFC.row2.body"), "class": "row-2", "imgWidth": "50%", "imgWidthMobile": "40%", "flexDirection": "row", "textAlign": "left", "justifyImages": "center", "textDirection": "column", "data-astro-cid-ad7fdfvh": true }, { "default": ($$result4) => renderTemplate` <picture data-astro-cid-ad7fdfvh> <source media="(max-width: 680px)"${addAttribute(fc3_small.src, "srcset")} data-astro-cid-ad7fdfvh> <img${addAttribute(fc3.src, "src")} alt="Fotocasa App - detalle de un anuncio" class="img-large-picture" data-astro-cid-ad7fdfvh> </picture> ` })} ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("appsFC.row3.title"), "description": translateLabels("appsFC.row3.body"), "class": "row-3", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row-reverse", "textAlign": "left", "justifyImages": "center", "textDirection": "column", "data-astro-cid-ad7fdfvh": true }, { "default": ($$result4) => renderTemplate` <img${addAttribute(fc4.src, "src")} alt="Fotocasa App - screen de inicio o Home" class="img-large-isolate" data-astro-cid-ad7fdfvh> <picture data-astro-cid-ad7fdfvh> <source media="(max-width: 680px)"${addAttribute(fc5_small.src, "srcset")} data-astro-cid-ad7fdfvh> <img${addAttribute(fc5.src, "src")} alt="Fotocasa App - detalle de un anuncio" class="img-large-picture" data-astro-cid-ad7fdfvh> </picture> ` })} ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("appsFC.row4.title"), "description": translateLabels("appsFC.row4.body"), "class": "row-4", "imgWidth": "55%", "imgWidthMobile": "50%", "flexDirection": "row", "textAlign": "left", "textDirection": "column", "data-astro-cid-ad7fdfvh": true }, { "default": ($$result4) => renderTemplate` <div class="markets" data-astro-cid-ad7fdfvh> <img${addAttribute(googlePlay.src, "src")} alt="4.6 de valoración, con 187K reseñas, de la App de Fotocasa en Google Play" data-astro-cid-ad7fdfvh> <img${addAttribute(appStore.src, "src")} alt="4.5 de valoración, 143K reseñas, de la App de Fotocasa en la App Store" data-astro-cid-ad7fdfvh> </div> ` })} </div> </section> ` })} ${renderComponent($$result2, "Footer2", $$Footer2, { "bgColor": "var(--dark-brown)", ",": true, "textColor": "var(--yellow)", ",": true, "barraColor": "var(--yellow)", ",": true, "template": "yellow", "data-astro-cid-ad7fdfvh": true })} ` })}  ${renderScript($$result, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/apps_fotocasa.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/apps_fotocasa.astro", void 0);

const $$file = "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/apps_fotocasa.astro";
const $$url = "/apps_fotocasa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AppsFotocasa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
