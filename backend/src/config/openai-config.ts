import { Configuration } from "openai";

export const configureOpenAI = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPEN_AI_ORGANIZATION_ID,
  });

  return config;
};

console.log("OpenAI configurado y listo para usarse 🚀");