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
            keyframes: {
                flow: {
                    "0%": {
                        transform: "translateX(-100%)",
                    },
                    "100%": {
                        transform: "translateX(0%)",
                    },
                },
            },
            animation: {
                "flow-left": "flow 0.3s linear",
            },
        },
    },
    plugins: [],
};
