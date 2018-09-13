module.exports = {
    plugins: {
        autoprefixer: {},
        <% if (tailwindcss) { %>tailwindcss: './tailwind.config.js',<% } %>
        'postcss-import': {},
        'postcss-url': {},
    },
};
