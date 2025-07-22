import { c as createComponent, a as createAstro, e as defineStyleVars, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, u as unescapeHTML, g as renderSlot, d as renderTemplate } from './astro/server_iE4Xfp6e.mjs';
/* empty css                                 */
import 'clsx';

const $$Astro = createAstro();
const $$ItemProduct = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ItemProduct;
  const { title, description, flexDirection, textAlign, imgWidth, imgWidthMobile, colorText, justifyImages, textDirection, imgSupport, imgSupportAlt, imgSupportClass } = Astro2.props;
  const { class: className, ...rest } = Astro2.props;
  const $$definedVars = defineStyleVars([{ flexDirection, textAlign, imgWidth, imgWidthMobile, colorText, justifyImages, textDirection }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["item-product", className], "class:list")}${spreadAttributes(rest)} data-astro-cid-qq65wpal${addAttribute($$definedVars, "style")}> <div class="item-product-text" data-astro-cid-qq65wpal${addAttribute($$definedVars, "style")}> ${imgSupport && renderTemplate`<img${addAttribute(imgSupport.src, "src")}${addAttribute(imgSupportAlt, "alt")}${addAttribute(imgSupportClass, "class")} data-astro-cid-qq65wpal${addAttribute($$definedVars, "style")}>`} <h1 data-astro-cid-qq65wpal${addAttribute($$definedVars, "style")}>${title}</h1> <div class="item-product-text-content" data-astro-cid-qq65wpal${addAttribute($$definedVars, "style")}>${unescapeHTML(description)}</div> </div> <div class="item-product-images" data-astro-cid-qq65wpal${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/Users/joan.lafulla/Desktop/portfolio/app/src/components/ItemProduct.astro", void 0);

export { $$ItemProduct as $ };
