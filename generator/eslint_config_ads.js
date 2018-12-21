module.exports = (api, options, rootOptions) => {
    if (api.hasPlugin('eslint')) {
        api.extendPackage({
            devDependencies: {
                'eslint-config-ads': '*',
            },
        });
    }
};
