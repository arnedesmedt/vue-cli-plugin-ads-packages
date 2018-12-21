const { execSync } = require('child_process');

module.exports = (api, options) => {
    api.onCreateComplete(() => {
        if(api.hasPlugin('eslint')) {
            api.render('./template/.eslintignore', {
                tailwindcss: options.packages.includes('tailwindcss'),
            });

            execSync(
                './node_modules/.bin/vue-cli-service lint .',
                {
                    stdio: [
                        0,
                        'ignore',
                        2,
                    ],
                    cwd: api.resolve('./'),
                }
            );
        }

        if (api.hasPlugin('prettier-package-json')) {
            execSync(
                './node_modules/.bin/prettier-package-json --write --tab-width=4 ./package.json',
                {
                    stdio: [
                        0,
                        'ignore',
                        2,
                    ],
                    cwd: api.resolve('./'),
                }
            );
        }
    });
};
