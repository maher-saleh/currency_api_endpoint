import { c as defineEventHandler, u as useRuntimeConfig } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';

const currencies = defineEventHandler(async (event) => {
  const { currency_api_key } = useRuntimeConfig();
  const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currency_api_key}`);
  return data;
});

export { currencies as default };
//# sourceMappingURL=currencies.mjs.map
