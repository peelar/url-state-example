import { cacheExchange, createClient, fetchExchange } from "urql";
import { API_URL } from "./const";

const url = API_URL;

export const client = createClient({
  url,
  exchanges: [cacheExchange, fetchExchange],
});
