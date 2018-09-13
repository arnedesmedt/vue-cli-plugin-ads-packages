module.exports = (api, options, rootOptions) => {
    api.extendPackage({
        devDependencies: {
            'postcss-import': '*',
            'postcss-url': '*',
        },
    });

    api.render('./template/postcss', {
        tailwindcss: options.packages.includes('tailwindcss'),
    });
};
