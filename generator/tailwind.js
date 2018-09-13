const { execSync } = require('child_process');

module.exports = (api, options, rootOptions) => {
    if (options.packages.includes('tailwindcss')) {
        api.extendPackage({
            devDependencies: {
                tailwindcss: '*',
            },
        });

        // TODO: Solve running this script on vue create
        api.onCreateComplete(() => {
            execSync(
                './node_modules/.bin/tailwind init tailwind.config.js',
                {
                    stdio: [
                        0,
                        'ignore',
                        2,
                    ],
                    cwd: api.resolve('./'),
                }
            );
        });
    }
};
