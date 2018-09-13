const { execSync } = require('child_process');

const tailwind = require('./tailwind');
const fontAwesome = require('./font_awesome');
const postcss = require('./postcss');
const packageStyles = require('./package_styles');

module.exports = (api, options, rootOptions) => {
    tailwind(api, options, rootOptions);
    fontAwesome(api, options, rootOptions);
    postcss(api, options, rootOptions);
    packageStyles(api, options, rootOptions);

    api.onCreateComplete(() => {
        if(api.hasPlugin('eslint')) {
            execSync(
                'npm run lint',
                {
                    stdio: [
                        0,
                        'ignore',
                        2,
                    ],
                }
            );
        }
    });
};
