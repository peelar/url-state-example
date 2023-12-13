import type { CodegenConfig } from "@graphql-codegen/cli";
import { env } from "./env";

const config: CodegenConfig = {
  overwrite: true,
  schema: env.SALEOR_API_URL,
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-document-nodes"],
    },
  },
};

export default config;
