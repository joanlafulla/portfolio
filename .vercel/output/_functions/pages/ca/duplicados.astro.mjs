import { c as createComponent, a as createAstro, r as renderComponent, b as renderScript, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_iE4Xfp6e.mjs';
import 'kleur/colors';
/* empty css                                            */
import { a as $$Layout, b as $$Loading, c as $$Topbar, d as $$Main, u as useTranslations, e as $$Footer2 } from '../../chunks/Footer2_BQlsr-kw.mjs';
import { $ as $$HeaderDefault } from '../../chunks/Header_default_DxRZffVP.mjs';
import { $ as $$ItemProduct } from '../../chunks/ItemProduct_c0eAS3iK.mjs';
import { i as inseparables, g as gemelos, d as duplicados1, a as duplicados3, b as duplicados2_small, c as duplicados2, e as duplicados4 } from '../../chunks/duplicados_4_CX0er-iz.mjs';
/* empty css                                         */
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Duplicados = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Duplicados;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(currentLang);
  const pageTitle = "Contactar amb anuncis Duplicats: del pain a l'oportunitat";
  const pageDescription = "Una proposta per convertir un pain dusuaris en una oportunitat de negoci.";
  const pageKeywords = "UX, UI, Fotocasa, apps nativas";
  const pageAuthor = "Joan Lafulla";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": pageAuthor, "data-astro-cid-2gf7vgcd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Loading", $$Loading, { "data-astro-cid-2gf7vgcd": true })} ${renderComponent($$result2, "Topbar", $$Topbar, { "cluePosition": "50%", "data-astro-cid-2gf7vgcd": true })} ${renderComponent($$result2, "Header", $$HeaderDefault, { "data-astro-cid-2gf7vgcd": true })} ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-2gf7vgcd": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section id="duplicados" data-astro-cid-2gf7vgcd> <div class="duplicados_contenedor_1" data-astro-cid-2gf7vgcd> <div class="duplicados_content_1" data-astro-cid-2gf7vgcd> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("duplicados.row1.title"), "description": translateLabels("duplicados.row1.body"), "class": "row-1", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row", "textAlign": "left", "justifyImages": "center", "textDirection": "column", "data-astro-cid-2gf7vgcd": true }, { "default": ($$result4) => renderTemplate` <div class="inseparables" data-astro-cid-2gf7vgcd> <img${addAttribute(inseparables.src, "src")} alt="Cartel de la película Inseparables - Dead Ringers, de David Cronenberg" class="img-large-isolate" data-astro-cid-2gf7vgcd> </div> <div class="gemelos" data-astro-cid-2gf7vgcd> <picture data-astro-cid-2gf7vgcd> <source media="(max-width: 680px)"${addAttribute(gemelos.src, "srcset")} data-astro-cid-2gf7vgcd> <img${addAttribute(gemelos.src, "src")} alt="Cartel de la película Los gemelos golpean dos veces - TWins, de Ivan Reitman" class="img-large-picture gemelos" data-astro-cid-2gf7vgcd> </picture> </div> ` })} </div> </div> <div class="duplicados_contenedor_2" data-astro-cid-2gf7vgcd> <div class="duplicados_content_2" data-astro-cid-2gf7vgcd> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("duplicados.row2.title"), "description": translateLabels("duplicados.row2.body"), "class": "row-2", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row-reverse", "textAlign": "left", "justifyImages": "center", "textDirection": "column", "data-astro-cid-2gf7vgcd": true }, { "default": ($$result4) => renderTemplate` <picture data-astro-cid-2gf7vgcd> <source media="(max-width: 680px)"${addAttribute(duplicados1.src, "srcset")} data-astro-cid-2gf7vgcd> <img${addAttribute(duplicados1.src, "src")} alt="Ejemplo ficticio de dos anuncios duplicados en Fotocasa" class="img-large-picture" data-astro-cid-2gf7vgcd> </picture> ` })} </div> </div> <div class="duplicados_contenedor_3" data-astro-cid-2gf7vgcd> <div class="duplicados_content_3" data-astro-cid-2gf7vgcd> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("duplicados.row3.title"), "description": translateLabels("duplicados.row3.body"), "class": "row-3", "imgWidth": "55%", "imgWidthMobile": "45%", "flexDirection": "row", "textAlign": "left", "justifyImages": "center", "textDirection": "column", "data-astro-cid-2gf7vgcd": true }, { "default": ($$result4) => renderTemplate` <img${addAttribute(duplicados3.src, "src")} alt="Formulario de contacto de Fotocasa" class="img-large-isolate" data-astro-cid-2gf7vgcd> <picture data-astro-cid-2gf7vgcd> <source media="(max-width: 680px)"${addAttribute(duplicados2_small.src, "srcset")} data-astro-cid-2gf7vgcd> <img${addAttribute(duplicados2.src, "src")} alt="Pantalla en la que se da la opción al usuario de contactar con anuncios duplicados" class="img-large-picture" data-astro-cid-2gf7vgcd> </picture> ` })} </div> </div> <div class="duplicados_contenedor_4" data-astro-cid-2gf7vgcd> <div class="duplicados_content_4" data-astro-cid-2gf7vgcd> ${renderComponent($$result3, "ItemProduct", $$ItemProduct, { "title": translateLabels("duplicados.row4.title"), "description": translateLabels("duplicados.row4.body"), "class": "row-4", "imgWidth": "45%", "imgWidthMobile": "55%", "flexDirection": "row-reverse", "textAlign": "left", "justifyImages": "center", "colorText": "var(--white)", "textDirection": "column", "data-astro-cid-2gf7vgcd": true }, { "default": ($$result4) => renderTemplate` <img${addAttribute(duplicados4.src, "src")} alt="Imagen de los protagonistas de la película Los gemelos golpean dos veces" class="img-large-isolate" data-astro-cid-2gf7vgcd> ` })} </div> </div> </section> ` })} ${renderComponent($$result2, "Footer2", $$Footer2, { "bgColor": "var(--yellow)", ",": true, "textColor": "var(--dark-brown)", ",": true, "barraColor": "var(--dark-brown)", ",": true, "template": "brown", "data-astro-cid-2gf7vgcd": true })} ` })}  ${renderScript($$result, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/duplicados.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/duplicados.astro", void 0);

const $$file = "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/duplicados.astro";
const $$url = "/ca/duplicados";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Duplicados,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
