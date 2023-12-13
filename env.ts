import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

export const env = {
  SALEOR_API_URL: process.env.SALEOR_API_URL,
};
