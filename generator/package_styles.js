module.exports = (api, options, rootOptions) => {
    api.render('./template/styles', {
        tailwindcss: options.packages.includes('tailwindcss'),
        fontAwesome: options.packages.includes('fontAwesome'),
    });
};
