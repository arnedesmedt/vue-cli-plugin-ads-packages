const { execSync } = require('child_process');
const fs = require('fs');

module.exports = (api, options, rootOptions) => {
    api.onCreateComplete(() => {
        if(api.hasPlugin('eslint')) {
            const path = api.resolve('./');
            let files = ['tailwind.config.js', 'postcss.config.js'];
            files.filter(file => fs.existsSync(path + '/' + file));

            execSync(
                'npm run lint ' + files.join(' '),
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
