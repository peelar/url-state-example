import { loadEnvConfig } from "@next/env";
import { z } from "zod";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const envSchema = z.object({
  SALEOR_API_URL: z.string(),
});

export const env = envSchema.parse(process.env);
