import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderScript, d as renderTemplate } from './astro/server_BGO4U_p6.mjs';
import 'kleur/colors';
import { g as getRelativeLocaleUrl, $ as $$ButtonNavigation, u as useTranslations } from './Footer2_wRsYNBUe.mjs';
/* empty css                                 */

const $$Astro = createAstro();
const $$HeaderDefault = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderDefault;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(currentLang);
  return renderTemplate`${maybeRenderHead()}<header class="navigation-default" data-astro-cid-mqdy45g2> <nav data-astro-cid-mqdy45g2> ${renderComponent($$result, "Button", $$ButtonNavigation, { "size": "56px", "backgroundColor": "rgba(246,221,0,1)", "backgroundColorHover": "rgba(246,221,0,0.5)", "color": "var(--text)", "href": getRelativeLocaleUrl(currentLang, "/"), "data-astro-cid-mqdy45g2": true }, { "default": ($$result2) => renderTemplate`<span class="material-symbols-outlined" data-astro-cid-mqdy45g2>arrow_back</span> ${translateLabels("go.home")}` })} </nav> </header> ${renderScript($$result, "/Users/joan.lafulla/Desktop/portfolio/app/src/layouts/Header_default.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/joan.lafulla/Desktop/portfolio/app/src/layouts/Header_default.astro", void 0);

export { $$HeaderDefault as $ };
