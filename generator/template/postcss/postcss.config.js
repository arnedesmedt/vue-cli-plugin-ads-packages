module.exports = {
    plugins: {
        autoprefixer: {},
        <% if (tailwindcss) { %>tailwindcss: './tailwind.config.js',<% } %>
        <% if (purgeCSS) { %>'@fullhuman/postcss-purgecss': {
            content: ['./src/**/*.vue'],
            whitelistPatterns: [],
        },<% } %>
        'postcss-import': {},
        'postcss-url': {},
    },
};
