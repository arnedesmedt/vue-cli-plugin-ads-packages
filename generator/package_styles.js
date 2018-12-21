module.exports = (api, options) => {
    api.render('./template/styles', {
        tailwindcss: options.packages.includes('tailwindcss'),
        fontAwesome: options.packages.includes('fontAwesome'),
    });
};
