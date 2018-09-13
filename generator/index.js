
const tailwind = require('./tailwind');
const fontAwesome = require('./font_awesome');
const postcss = require('./postcss');
const packageStyles = require('./package_styles');

module.exports = (api, options, rootOptions) => {
    tailwind(api, options, rootOptions);
    fontAwesome(api, options, rootOptions);
    postcss(api, options, rootOptions);
    packageStyles(api, options, rootOptions);
};
