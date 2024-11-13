import { _ as __nuxt_component_0 } from './nav_component-BBMfNQtQ.mjs';
import { computed, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useRoute } from './server.mjs';
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
  __name: "default",
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
      _push(`<div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BbCQoBJ-.mjs.map
