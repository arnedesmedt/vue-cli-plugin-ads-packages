module.exports = (api) => {
    if (api.hasPlugin('eslint')) {
        api.extendPackage({
            devDependencies: {
                'eslint-config-ads': '*',
            },
        });
    }
};
