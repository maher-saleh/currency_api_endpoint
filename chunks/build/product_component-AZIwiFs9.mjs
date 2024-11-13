import { ref, watchEffect, watch, getCurrentInstance, toRef, isRef, useSSRContext, mergeProps, unref } from 'vue';
import { i as injectHead, r as resolveUnrefHeadInput, a as useNuxtApp, _ as _export_sfc } from './server.mjs';
import { composableNames } from '@unhead/shared';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';

function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const Cart = () => {
  const cart = useState("cart", () => []);
  const addToCart = (item) => {
    cart.value.push(item);
  };
  const removeFromCart = (item) => {
    const index = cart.value.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  };
  return { cart, addToCart, removeFromCart };
};
const _sfc_main$1 = {
  __name: "cart_component",
  __ssrInlineRender: true,
  setup(__props) {
    const { cart, addToCart, removeFromCart } = Cart();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "cart" }, _attrs))} data-v-cee1f85b><i class="material-icons" data-v-cee1f85b>shopping_cart</i> (${ssrInterpolate(unref(cart).length)}) </button>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart/cart_component.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cee1f85b"]]);
const Products = () => {
  let products = useState("products", () => []);
  const setProducts = (items) => {
    products = items;
  };
  const toggle_select = (product) => {
    product.selected = !product.selected;
  };
  const addProduct = (product) => {
    products.value.push(product);
  };
  const getProduct = (id) => {
    const item = products.value.filter((product) => product.id == id).map((product) => ({ ...product }));
    return item;
  };
  return { products, setProducts, toggle_select, addProduct, getProduct };
};
const _sfc_main = {
  __name: "product_component",
  __ssrInlineRender: true,
  props: ["product"],
  emits: ["itemSelect", "itemDeselect"],
  setup(__props, { emit: __emit }) {
    Cart();
    Products();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-43eba729><img${ssrRenderAttr("src", __props.product.image)} alt="{{ product.title }}" data-v-43eba729><p data-v-43eba729>${ssrInterpolate(__props.product.title)}</p><p data-v-43eba729><b data-v-43eba729>Price: </b>$${ssrInterpolate(__props.product.price)}</p><button class="${ssrRenderClass({ selected: __props.product.selected })}" data-v-43eba729>`);
      if (__props.product.selected) {
        _push(`<i class="material-icons" data-v-43eba729>clear</i>`);
      } else {
        _push(`<i class="material-icons" data-v-43eba729>add_shopping_cart</i>`);
      }
      _push(`<span data-v-43eba729>${ssrInterpolate(__props.product.selected ? "Remove from Cart" : "Add to Cart")}</span></button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product/product_component.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43eba729"]]);

export { Cart as C, Products as P, __nuxt_component_0 as _, __nuxt_component_1 as a, useHead as u };
//# sourceMappingURL=product_component-AZIwiFs9.mjs.map
