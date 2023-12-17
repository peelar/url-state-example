import { API_URL } from "./src/const";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: API_URL,
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
