import { _ as __nuxt_component_0 } from './nav_component-BBMfNQtQ.mjs';
import { computed, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
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
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "store",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const routePath = computed(() => {
      let path = route.path.replace(/^\//, "");
      return path === "" ? "Home" : path;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nav_component = __nuxt_component_0;
      _push(`<!--[-->`);
      if (unref(routePath)) {
        _push(ssrRenderComponent(_component_nav_component, { routePath: unref(routePath) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-fac7d41f>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Layouts/store.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const store = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fac7d41f"]]);

export { store as default };
//# sourceMappingURL=store-xig1DCN0.mjs.map
