import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

import tailwindTypography from "@tailwindcss/typography";
import flowbitePlugin from "flowbite/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [tailwindTypography, flowbitePlugin],
};
export default config;
