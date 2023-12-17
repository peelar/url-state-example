import type { CodegenConfig } from "@graphql-codegen/cli";
import { env } from "./env";

const config: CodegenConfig = {
  overwrite: true,
  schema: env.SALEOR_API_URL,
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "src/generated/graphql/": {
      preset: "client",

      presetConfig: {
        dedupeFragments: true,
      },
      plugins: [],
    },
  },
};

export default config;
