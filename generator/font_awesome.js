module.exports = (api, options, rootOptions) => {
    if (options.packages.includes('fontAwesome')) {
        api.extendPackage({
            devDependencies: {
                'font-awesome': '*',
            },
        });
    }
};
