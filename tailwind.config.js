/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.tsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                custom: ["CustomFont", "Silom", "sans-serif"],
            },
        },
    },
    plugins: [],
};
