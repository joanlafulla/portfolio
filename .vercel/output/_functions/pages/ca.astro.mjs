import { c as createComponent, a as createAstro, r as renderComponent, b as renderScript, d as renderTemplate } from '../chunks/astro/server_BGO4U_p6.mjs';
import 'kleur/colors';
/* empty css                                         */
import { u as useTranslations, a as $$Layout, b as $$Loading, c as $$Topbar, d as $$Main, e as $$Footer2 } from '../chunks/Footer2_wRsYNBUe.mjs';
import { $ as $$Header, a as $$Mywork, b as $$Experience, c as $$Skills, d as $$Quotes } from '../chunks/Quotes_DOGbG6TK.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(currentLang);
  const pageTitle = "Joan Lafulla - UX/UI Designer";
  const pageDescription = "UX/UI Designer amb seu a Barcelona, Espanya. Creant dissenys centrats en l'usuari que s\xF3n funcionals i visualment atractius.";
  const pageKeywords = "UX, UI, Design, Joan Lafulla";
  const pageAuthor = "Joan Lafulla";
  const headerText = translateLabels("home.claim");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": pageAuthor }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Loading", $$Loading, {})} ${renderComponent($$result2, "Topbar", $$Topbar, { "cluePosition": "20%" })} ${renderComponent($$result2, "Header", $$Header, { "headerText": headerText })} ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Mywork", $$Mywork, {})} ${renderComponent($$result3, "Experience", $$Experience, {})} ${renderComponent($$result3, "Skills", $$Skills, {})} ${renderComponent($$result3, "Quotes", $$Quotes, {})} ` })} ${renderComponent($$result2, "Footer2", $$Footer2, { "bgColor": "var(--yellow)", ",": true, "textColor": "var(--dark-brown)", ",": true, "barraColor": "var(--dark-brown)", ",": true, "template": "brown" })} ` })} ${renderScript($$result, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/index.astro", void 0);

const $$file = "/Users/joan.lafulla/Desktop/portfolio/app/src/pages/ca/index.astro";
const $$url = "/ca";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
