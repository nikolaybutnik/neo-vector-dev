const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        // Optional: Add global SCSS imports here
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
})
