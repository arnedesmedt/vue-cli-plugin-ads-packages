const tailwind = require('./tailwind');
const fontAwesome = require('./font_awesome');
const purgeCSS = require('./purgecss');
const postcss = require('./postcss');
const packageStyles = require('./package_styles');
const prettierPackageJson = require('./prettier_package_json');
const eslintConfigAds = require('./eslint_config_ads');
const lint = require('./lint');

module.exports = (api, options, rootOptions) => {
    if (! options.packages) {
        options.packages = [];
    }

    tailwind(api, options, rootOptions);
    fontAwesome(api, options, rootOptions);
    purgeCSS(api, options, rootOptions);
    postcss(api, options, rootOptions);
    packageStyles(api, options, rootOptions);
    prettierPackageJson(api, options, rootOptions);
    eslintConfigAds(api, options, rootOptions);
    lint(api, options, rootOptions);

};
