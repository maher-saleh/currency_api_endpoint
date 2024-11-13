import { useSSRContext, ref, unref, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$2 = {
  __name: "autocomplete",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(__props, { emit: __emit }) {
    const query = ref("");
    ref([]);
    const filteredResults = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "autocomplete-container" }, _attrs))} data-v-048c81a7><input type="text"${ssrRenderAttr("value", unref(query))} placeholder="Select..." data-v-048c81a7>`);
      if (unref(filteredResults).length && unref(query)) {
        _push(`<ul class="autocomplete-list" data-v-048c81a7><!--[-->`);
        ssrRenderList(unref(filteredResults), (item, index2) => {
          _push(`<li class="autocomplete-item" data-v-048c81a7>${ssrInterpolate(item.Name)} - (${ssrInterpolate(item.Code)}) </li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/autocomplete.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-048c81a7"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader-container" }, _attrs))} data-v-67364365><div class="lds-ripple" data-v-67364365><div data-v-67364365></div><div data-v-67364365></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/loader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-67364365"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currencies = ref([]);
    ref(true);
    ref(null);
    const exchange_error = ref("");
    const base_input = ref("");
    const target_input = ref("");
    const status = ref("idle");
    const displayedResponse = ref([]);
    const exchange_rate = ref("");
    const fetching = ref("");
    function handle_base_currency_value_change(event) {
      base_input.value = event;
    }
    function handle_target_currency_value_change(event) {
      target_input.value = event;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_autocomplete = __nuxt_component_0;
      const _component_loader = __nuxt_component_1;
      _push(`<!--[--><div class="controls" data-v-d8bfc6ed><button class="fetch_all" data-v-d8bfc6ed>Currency Rates</button><button class="fetch_one" data-v-d8bfc6ed>Exchange Rate</button></div>`);
      if (unref(fetching) == "exchange_rate") {
        _push(`<div class="exchange_div" data-v-d8bfc6ed><div class="currency base" data-v-d8bfc6ed><label data-v-d8bfc6ed>Base Currency</label>`);
        _push(ssrRenderComponent(_component_autocomplete, {
          class: "",
          items: unref(currencies),
          onValueChanged: ($event) => handle_base_currency_value_change($event)
        }, null, _parent));
        _push(`</div><div class="currency target" data-v-d8bfc6ed><label data-v-d8bfc6ed>Target Currency</label>`);
        _push(ssrRenderComponent(_component_autocomplete, {
          class: "",
          items: unref(currencies),
          onValueChanged: ($event) => handle_target_currency_value_change($event)
        }, null, _parent));
        _push(`</div><div class="currency button" data-v-d8bfc6ed><button class="exchange_button" data-v-d8bfc6ed>Get Exchange Rate</button></div><div class="currency rate" data-v-d8bfc6ed>`);
        if (unref(exchange_rate) && unref(status) == "idle") {
          _push(`<p class="exchange_rate" data-v-d8bfc6ed>${ssrInterpolate(unref(exchange_rate).value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(exchange_error)) {
          _push(`<p class="error" data-v-d8bfc6ed>${ssrInterpolate(unref(exchange_error))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(status) == "loading") {
        _push(ssrRenderComponent(_component_loader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(status) == "idle" && unref(fetching) == "all_rates") {
        _push(`<div class="data" data-v-d8bfc6ed><!--[-->`);
        ssrRenderList(unref(displayedResponse), (value, key, index2) => {
          _push(`<span class="${ssrRenderClass([{ "odd-class": index2 % 2 !== 0 }, "pill"])}" data-v-d8bfc6ed><span class="code" data-v-d8bfc6ed>${ssrInterpolate(value["code"])}</span><span class="value" data-v-d8bfc6ed>${ssrInterpolate(value["value"])}</span></span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/currency/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d8bfc6ed"]]);

export { index as default };
//# sourceMappingURL=index-D5_gZzGB.mjs.map
