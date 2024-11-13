import { C as Cart, P as Products, u as useHead, _ as __nuxt_component_0, a as __nuxt_component_1 } from './product_component-AZIwiFs9.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useFetch } from './fetch-BABrbEfB.mjs';
import { _ as _export_sfc } from './server.mjs';
import '@unhead/shared';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';

const url = "https://fakestoreapi.com/products";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    Cart();
    let { products, setProducts, toggle_select, addProduct } = Products();
    let { data: products_data } = ([__temp, __restore] = withAsyncContext(() => useFetch(url, "$bu75UxfZCP")), __temp = await __temp, __restore(), __temp);
    products_data = products_data.value.map((product) => ({ ...product, selected: false }));
    if (!products.value.length) {
      for (let i = 0; i < products_data.length; i++) {
        addProduct(products_data[i]);
      }
    }
    useHead({
      title: "Nuxt 3 Store App | store",
      meta: [
        { "name": "description", "content": "This is the store Ppage of Nuxt 3 Store App" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cart_component = __nuxt_component_0;
      const _component_product_component = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_cart_component, null, null, _parent));
      _push(`<div class="container" data-v-bbdf3538><!--[-->`);
      ssrRenderList(unref(products), (p) => {
        _push(`<div class="product" data-v-bbdf3538>`);
        _push(ssrRenderComponent(_component_product_component, { product: p }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/store/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bbdf3538"]]);

export { index as default };
//# sourceMappingURL=index-oRUNTUfm.mjs.map
