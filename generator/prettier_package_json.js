module.exports = (api, options, rootOptions) => {
    if (options.packages.includes('prettierPackageJson')) {
        api.extendPackage({
            devDependencies: {
                'prettier-package-json': '*',
            },
        });
    }
};
