/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./{components,api,constants,lib,services,types}/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#dbe890",
                "navy-custom": "#152328",
                "apple-grey": "#F5F5F7",
            },
            fontFamily: {
                "sans": ["DM Sans", "sans-serif"],
                "heading": ["Plus Jakarta Sans", "sans-serif"]
            },
            borderRadius: {
                "apple": "40px",
                "apple-sm": "24px",
            },
            boxShadow: {
                'bento': '0 2px 4px rgba(0,0,0,0.01), 0 10px 40px rgba(0,0,0,0.03)',
                'bento-hover': '0 40px 80px rgba(21, 35, 40, 0.08)',
                'premium': '0 30px 60px -12px rgba(0, 0, 0, 0.12)',
                'glow': '0 0 40px rgba(219, 232, 144, 0.3)',
            },
            keyframes: {
                'float-diagonal': {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(-4deg)' },
                    '50%': { transform: 'translate(15px, -25px) rotate(-1deg)' },
                },
                'float-alt': {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(2deg)' },
                    '50%': { transform: 'translate(-15px, 20px) rotate(5deg)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.3', transform: 'scale(1) translate(0, 0)' },
                    '50%': { opacity: '0.6', transform: 'scale(1.05) translate(20px, 10px)' },
                },
                'scroll-x': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(50px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'zoom-in': {
                    '0%': { opacity: '0', transform: 'scale(0.92)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                'slide-in-left': {
                    '0%': { opacity: '0', transform: 'translateX(-40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'slide-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'scroll-modern': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-33.33%)' },
                }
            },
            animation: {
                'float-diagonal': 'float-diagonal 14s ease-in-out infinite',
                'float-alt': 'float-alt 16s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 10s ease-in-out infinite',
                'scroll-x': 'scroll-x 80s linear infinite',
                'fade-up': 'fade-up 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'zoom-in': 'zoom-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-in-left': 'slide-in-left 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-in-right': 'slide-in-right 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'scroll-modern': 'scroll-modern 10s linear infinite',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
