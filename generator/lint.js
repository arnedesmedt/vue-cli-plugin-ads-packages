const { execSync } = require('child_process');

module.exports = (api, options, rootOptions) => {
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
                    cwd: api.resolve('./'),
                }
            );
        }

        if (api.hasPlugin('prettier-package-json')) {
            execSync(
                'npm run package-lint',
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
