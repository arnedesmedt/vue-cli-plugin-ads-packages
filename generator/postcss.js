module.exports = (api, options) => {
    api.extendPackage({
        devDependencies: {
            'postcss-import': '*',
            'postcss-url': '*',
        },
    });

    api.render('./template/postcss', {
        tailwindcss: options.packages.includes('tailwindcss'),
        purgeCSS: options.packages.includes('purgeCSS'),
    });
};
