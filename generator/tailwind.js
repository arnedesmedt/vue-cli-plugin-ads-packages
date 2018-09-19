const { execSync } = require('child_process');
const fs = require('fs');
const configFile = 'tailwind.config.js';

module.exports = (api, options, rootOptions) => {
    if (options.packages.includes('tailwindcss')) {
        api.extendPackage({
            devDependencies: {
                tailwindcss: '*',
            },
        });

        api.onCreateComplete(() => {
            const path = api.resolve('./');
            if (!fs.existsSync(path + '/' + configFile)) {
                execSync(
                    './node_modules/.bin/tailwind init ' + configFile,
                    {
                        stdio: [
                            0,
                            'ignore',
                            2,
                        ],
                        cwd: path,
                    }
                );
            }
        });
    }
};
