module.exports = {
    theme: {
        container: {
         //   padding: '1.2rem',
            padding: '19.2px',
            screens: {
                sm: "100%",
                md: "100%",
                lg: "1280px",
                xl: "1280px"
             }
        },
        extend: {
            spacing: {
                px: '1px',
                '0': '0',
                '0-1': '0.2rem',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '7': '1.7rem',
                '8': '2rem',
                '9': '2.2rem',
                '10': '2.5rem', 
                '11': '2.7rem', 
                '12': '3rem',
                '13': '3.4rem',
                '14': '3.6rem',
                '15': '3.8rem',
                '16': '4rem',
                '19': '4.7rem',
                '20': '5rem',
                '21': '5.3rem',
                '23': '5.79rem',
                '24': '6rem',
                '25': '6.4rem',
                '26': '7rem',
                '27': '7.8rem',
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
                '60': '17.5rem', 
                '61': '18rem',
                '62': '18.5rem',
                '66': '19rem',
                '67': '20.5rem',
                '75': '30.68rem',
            }, 
            colors: {
                link: {
                    'default': '#152268',
                    'hover': '#152268',
                },
                transparent: 'transparent',
                black: '#414042',
                title:'#58595b',
                white: '#fff',
                url:'#152268',  
                primary: { 
                    500: '#61c5d3', 
                },
                secondary: { 
                    500: '#fd7752',  
                },
                third: { 
                    500: '#172069', 
                },
                fourth:{
                    500:'#FF5A39'
                }
            }, 
            fontSize: {
                xxs: '0.675rem',
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '2xl': '1.5rem',
                '2xl-1': '1.78rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
                '6xl-1': '67.29px',
                 // leading como participar
                '4xlp1': '2.50rem',
                '4xlp2': '2.60rem',
                '5xlp1': '3.40rem',
                //Blog posts
                'bt-xl':'39.86px',  
                'bc-xl':'29.89px', 
                //Blog singular
                'bp-xl':'21.92px', 

 

                
            },
            lineHeight: {
                tighter: '1.125',
                tighter1: '1.180'
            }, 
            maxWidth: {
                xs: '20rem',
                sm: '24rem',
                md: '28rem',
                lg: '32rem',
                xl: '36rem',
                '2xl': '42rem',
                '3xl': '48rem',
                '4xl': '56rem',
                '4xl-1': '60rem',
                '5xl': '64rem',
                '6xl': '72rem',
                'modal': '66rem', 
                //blog posts 
                'blog-image':'510.457px',
                'blog-post': '1098.826px',
                'blog-content': '619.902px', 
               // Blog singular
                'blog-body':'1000.23px',
                'blog-wide': '65rem',
                'blog-full': '69rem',
                

                full: '100%',
            },
            fontFamily: { 
                roboto: 'roboto',    
            }
        },
        screens: {
            xs: '460px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            maxs: {'max': '460px'},
            maxsm: {'max': '640px'},
            maxmd: {'max': '768px'},
            maxlg: {'max': '1023px'},
            maxl:  {'max': '1280px'}
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
