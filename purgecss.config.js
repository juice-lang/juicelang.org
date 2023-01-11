module.exports = {
    // These are the files that Purgecss will search through
    content: ["./_site/**/*.html", "./_site/**/*.php"],

    // These are the stylesheets that will be subjected to the purge
    css: ["./_site/assets/css/*.css"],
    safelist: {
        standard: ["uk-dark", "uk-light", /^uk-animation-/, /^uk-offcanvas/],
        deep: [/^uk-icon/]
    },
    defaultExtractor: content => content.match(/[\w-/:@]+(?<!:)/g) || []
};
