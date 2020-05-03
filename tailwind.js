module.exports = {
    theme: {
        container: {
            padding: '1.2rem',
        },
        extend: {
            spacing: {
                px: '1px',
                '0': '0',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem', 
                '12': '3rem',
                '13': '3.4rem',
                '14': '3.6rem',
                '15': '3.8rem',
                '16': '4rem',
                '20': '5rem',
                '24': '6rem',
                '26': '7rem',
                '32': '8rem',
                '33': '9.4rem',
                '34': '9.6rem',
                '35': '9.8rem',
                '40': '10rem',
                '41': '10.2rem',
                '42': '11.2rem', 
                '44': '11.4rem',
                '45': '11.5rem',
                '46': '11.563rem',
                '48': '12rem',
                '50': '13rem',
                '52': '13.2rem',
                '53': '13.4rem',
                '54': '13.6rem',
                '55': '13.8rem',
                '56': '14rem',
                '57': '15rem',
                '58': '16rem',
                '59': '17rem',
                '60': '18rem',
                '64': '16rem',
                '65': '18rem',
                '66': '19rem',
            },
            colors: {
                link: {
                    'default': '#3182ce',
                    'hover': '#63b3ed',
                },
                transparent: 'transparent',
                black: '#000',
                white: '#fff',
                primary: {
                    100: '#FDF8B9',
                    200: '#FCF48B',
                    300: '#FBF05C',
                    400: '#FAEC2E',
                    500: '#FAE800',
                    600: '#CDBE00',
                    700: '#A09400',
                    800: '#726A00',
                    900: '#454000',
                },
                secondary: {
                    100: '#AFADAD',
                    200: '#878485',
                    300: '#5F5C5C',
                    400: '#373334',
                    500: '#231F20',
                    600: '#1D1A1B',
                    700: '#171415',
                    800: '#100F0F',
                    900: '#0A0909',
                }
            }, 
            fontSize: {
                xxs: '0.675rem',
            },
            lineHeight: {
                tighter: '1.125',
            }, 
            fontFamily: {
                // sans: [
                //     '-apple-system',
                //     'BlinkMacSystemFont',
                //     '"Segoe UI"',
                //     'Roboto',
                //     '"Helvetica Neue"',
                //     'Arial',
                //     '"Noto Sans"',
                //     'sans-serif',
                //     '"Apple Color Emoji"',
                //     '"Segoe UI Emoji"',
                //     '"Segoe UI Symbol"',
                //     '"Noto Color Emoji"',
                // ],
                // serif: [
                //     'Georgia',
                //     'Cambria',
                //     '"Times New Roman"',
                //     'Times',
                //     'serif',
                // ],
                mono: [
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    '"Liberation Mono"',
                    '"Courier New"',
                    'monospace',
                ],
                roboto: [
                    '"Roboto"',
                    'sans-serif'
                ] 
            }
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            maxsm: {'max': '640px'},
            maxmd: { 'max': '768px'},
            maxlg: {'max': '1023px'},
            maxl: {'max': '1280px'}
        }
        
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited'],
    },
    plugins: [
        ({addUtilities}) => {
            const utils = {
                '.translate-x-half': {
                    transform: 'translateX(50%)',
                },
            };
            addUtilities(utils, ['responsive'])
        }
    ]
};
