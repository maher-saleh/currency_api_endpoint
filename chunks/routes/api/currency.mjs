import { c as defineEventHandler, r as readBody, u as useRuntimeConfig } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';

const currency = defineEventHandler(async (event) => {
  const { base_currency, target_currency } = await readBody(event);
  const { currency_api_key } = useRuntimeConfig();
  if (!base_currency || !target_currency) {
    return { status: 400, message: "Missing required query parameters" };
  }
  const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?base=${base_currency}&currencies=${target_currency}&apikey=${currency_api_key}`);
  return data;
});

export { currency as default };
//# sourceMappingURL=currency.mjs.map
