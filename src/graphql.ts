import { cacheExchange, createClient, fetchExchange } from "urql";
import { env } from "../env";

const url = env.SALEOR_API_URL;

export const client = createClient({
  url,
  exchanges: [cacheExchange, fetchExchange],
});
