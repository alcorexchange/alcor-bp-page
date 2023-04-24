// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  css: ["@/assets/styles/style.scss"],
  components: [{ path: "~/components", pathPrefix: false }],
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:math";
            @import "@/assets/styles/_variables.scss";
          `,
        },
      },
    },
  },
});
