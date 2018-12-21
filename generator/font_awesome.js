module.exports = (api, options, rootOptions) => {
    if (options.packages.includes('fontAwesome')) {
        api.extendPackage({
            dependencies: {
                '@fortawesome/fontawesome-free': '*',
            },
        });
    }
};
