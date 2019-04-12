const { execSync } = require('child_process');
const fs = require('fs');
const configFile = 'tailwind.config.js';

module.exports = (api, options) => {
    if (options.packages.includes('tailwindcss')) {
        api.extendPackage({
            devDependencies: {
                tailwindcss: '^1.0.0-beta.4',
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
