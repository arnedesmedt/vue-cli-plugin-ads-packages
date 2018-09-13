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
        ],
        default: [
            'tailwindcss',
            'fontAwesome',
        ],
    },
];
