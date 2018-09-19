const tailwind = require('./tailwind');
const fontAwesome = require('./font_awesome');
const postcss = require('./postcss');
const packageStyles = require('./package_styles');
const lint = require('./lint');

module.exports = (api, options, rootOptions) => {
    if (! options.packages) {
        options.packages = [];
    }

    tailwind(api, options, rootOptions);
    fontAwesome(api, options, rootOptions);
    postcss(api, options, rootOptions);
    packageStyles(api, options, rootOptions);
    lint(api, options, rootOptions);
};
