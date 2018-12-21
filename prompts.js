module.exports = [
    {
        name: 'packages',
        message: 'Install and configure the following packages: ',
        type: 'checkbox',
        choices: [
            {
                name: 'tailwindcss',
                value: 'tailwindcss',
            },
            {
                name: 'font awesome',
                value: 'fontAwesome',
            },
            {
                name: 'purge css',
                value: 'purgeCSS',
            },
            {
                name: 'prettier package.json',
                value: 'prettierPackageJson',
            },
        ],
        default: [
            'tailwindcss',
            'fontAwesome',
            'purgeCSS',
            'prettierPackageJson',
        ],
    },
];
