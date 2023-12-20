/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                transparent: 'tranparent',
                current: 'currentColor',
                'calm': {
                    DEFAULT : '#3277ab',
                    50: '#f3f7fc',
                    100: '#e7f0f7',
                    200: '#c9deee',
                    300: '#c9deee',
                    400: '#62a3ce',
                    500: '#3e88b9',
                    600: '#3277ab',
                    700: '#26577e',
                    800: '#234b69',
                    900: '#223f58',
                    950: '#16293b'
                }
            }
        }
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: []
    }
}