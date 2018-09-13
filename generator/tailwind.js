const { execSync } = require('child_process');

module.exports = (api, options, rootOptions) => {
    if (options.packages.includes('tailwindcss')) {
        api.extendPackage({
            devDependencies: {
                tailwindcss: '*',
            },
        });

        api.onCreateComplete(() => {
            execSync(
                './node_modules/.bin/tailwind init tailwind.config.js',
                {
                    stdio: [
                        0,
                        'ignore',
                        2,
                    ],
                }
            );
        });

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
    }
};
