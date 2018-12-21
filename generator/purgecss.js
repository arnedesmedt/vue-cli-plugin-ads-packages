module.exports = (api, options) => {
    if (options.packages.includes('purgeCSS')) {
        api.extendPackage({
            devDependencies: {
                '@fullhuman/postcss-purgecss': '*',
            },
        });
    }
};
