module.exports = (api, options, rootOptions) => {
    if (options.packages.includes('purgeCSS')) {
        api.extendPackage({
            devDependencies: {
                '@fullhuman/postcss-purgecss': 'latest',
            },
        });
    }
};
