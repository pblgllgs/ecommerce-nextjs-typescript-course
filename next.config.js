const {withFrameworkConfig} = require("./framework/common/config");

/** @type {import('next').NextConfig} */
const nextConfig = withFrameworkConfig({
    reactStrictMode: true,
    framework:{
        name: "shopify",
    },
    // i18n: {
    //     locales: ['en', 'es'],
    //     defaultLocale: 'en',
    // },
});

module.exports = nextConfig;

console.log("next.config.js",JSON.stringify(nextConfig,null,2));
