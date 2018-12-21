module.exports = (api, options) => {
    if (options.packages.includes('fontAwesome')) {
        api.extendPackage({
            dependencies: {
                '@fortawesome/fontawesome-free': '*',
            },
        });
    }
};
