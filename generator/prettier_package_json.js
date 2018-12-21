module.exports = (api, options) => {
    if (options.packages.includes('prettierPackageJson')) {
        api.extendPackage({
            devDependencies: {
                'prettier-package-json': '*',
            },
        });
    }
};
