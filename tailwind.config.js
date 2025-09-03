/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			primary: {
  				'25': '#FAFCFF',
  				'50': '#F0F9FF',
  				'100': '#E0F2FE',
  				'200': '#BAE6FD',
  				'300': '#7DD3FC',
  				'400': '#38BDF8',
  				'500': '#0EA5E9',
  				'600': '#0284C7',
  				'700': '#0369A1',
  				'800': '#075985',
  				'900': '#0C4A6E',
  				'950': '#082F49',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			neutral: {
  				'25': '#FCFCFD',
  				'50': '#F9FAFB',
  				'100': '#F2F4F7',
  				'200': '#E4E7EC',
  				'300': '#D0D5DD',
  				'400': '#98A2B3',
  				'500': '#667085',
  				'600': '#475467',
  				'700': '#344054',
  				'800': '#1D2939',
  				'900': '#101828',
  				'950': '#0C111D'
  			},
  			success: {
  				'25': '#F6FEF9',
  				'50': '#ECFDF3',
  				'100': '#D1FAE5',
  				'200': '#A7F3D0',
  				'300': '#6EE7B7',
  				'400': '#34D399',
  				'500': '#10B981',
  				'600': '#059669',
  				'700': '#047857',
  				'800': '#065F46',
  				'900': '#064E3B',
  				'950': '#022C22',
  				DEFAULT: '#059669',
  				foreground: '#FFFFFF'
  			},
  			warning: {
  				'25': '#FEFCF0',
  				'50': '#FEF7C0',
  				'100': '#FEEE95',
  				'200': '#FEE25A',
  				'300': '#FED52D',
  				'400': '#EAB308',
  				'500': '#CA8A04',
  				'600': '#A16207',
  				'700': '#854D0E',
  				'800': '#713F12',
  				'900': '#5A2E0A',
  				'950': '#4C1D05',
  				DEFAULT: '#CA8A04',
  				foreground: '#FFFFFF'
  			},
  			error: {
  				'25': '#FEF3F2',
  				'50': '#FEE4E2',
  				'100': '#FECDCA',
  				'200': '#FDA29B',
  				'300': '#F97066',
  				'400': '#F04438',
  				'500': '#E53E3E',
  				'600': '#D92D20',
  				'700': '#B91C1C',
  				'800': '#991B1B',
  				'900': '#7F1D1D',
  				'950': '#5F1212',
  				DEFAULT: '#D92D20',
  				foreground: '#FFFFFF'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			none: '0px',
  			xs: '4px',
  			sm: 'calc(var(--radius) - 4px)',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			xl: '28px',
  			xxl: '32px',
  			full: '9999px',
  			DEFAULT: '8px'
  		},
  		spacing: {
  			'0': '0px',
  			'1': '4px',
  			'2': '8px',
  			'3': '12px',
  			'4': '16px',
  			'5': '20px',
  			'6': '24px',
  			'8': '32px',
  			'10': '40px',
  			'12': '48px',
  			'16': '64px',
  			'20': '80px',
  			'24': '96px',
  			'32': '128px',
  			'40': '160px',
  			'48': '192px',
  			'56': '224px',
  			'64': '256px',
  			'80': '320px',
  			'96': '384px',
  			'120': '480px',
  			'140': '560px',
  			'160': '640px',
  			'180': '720px',
  			'192': '768px',
  			'256': '1024px',
  			'320': '1280px',
  			'360': '1440px',
  			'400': '1600px',
  			'480': '1920px',
  			'0.5': '2px'
  		},
  		fontSize: {
  			'display-2xl': [
  				'72px',
  				{
  					lineHeight: '90px',
  					fontWeight: '400'
  				}
  			],
  			'display-xl': [
  				'60px',
  				{
  					lineHeight: '72px',
  					fontWeight: '400'
  				}
  			],
  			'display-lg': [
  				'48px',
  				{
  					lineHeight: '60px',
  					fontWeight: '400'
  				}
  			],
  			'display-md': [
  				'36px',
  				{
  					lineHeight: '44px',
  					fontWeight: '400'
  				}
  			],
  			'display-sm': [
  				'30px',
  				{
  					lineHeight: '38px',
  					fontWeight: '400'
  				}
  			],
  			'display-xs': [
  				'24px',
  				{
  					lineHeight: '32px',
  					fontWeight: '400'
  				}
  			],
  			'heading-xl': [
  				'30px',
  				{
  					lineHeight: '38px',
  					fontWeight: '600'
  				}
  			],
  			'heading-lg': [
  				'24px',
  				{
  					lineHeight: '32px',
  					fontWeight: '600'
  				}
  			],
  			'heading-md': [
  				'20px',
  				{
  					lineHeight: '28px',
  					fontWeight: '600'
  				}
  			],
  			'heading-sm': [
  				'18px',
  				{
  					lineHeight: '28px',
  					fontWeight: '600'
  				}
  			],
  			'heading-xs': [
  				'16px',
  				{
  					lineHeight: '24px',
  					fontWeight: '600'
  				}
  			],
  			'body-xl': [
  				'20px',
  				{
  					lineHeight: '30px',
  					fontWeight: '400'
  				}
  			],
  			'body-lg': [
  				'18px',
  				{
  					lineHeight: '28px',
  					fontWeight: '400'
  				}
  			],
  			'body-md': [
  				'16px',
  				{
  					lineHeight: '24px',
  					fontWeight: '400'
  				}
  			],
  			'body-sm': [
  				'14px',
  				{
  					lineHeight: '20px',
  					fontWeight: '400'
  				}
  			],
  			'body-xs': [
  				'12px',
  				{
  					lineHeight: '18px',
  					fontWeight: '400'
  				}
  			]
  		},
  		fontFamily: {
  			outfit: [
  				'Outfit',
  				'sans-serif'
  			]
  		},
  		fontWeight: {
  			thin: '100',
  			extralight: '200',
  			light: '300',
  			regular: '400',
  			medium: '500',
  			semibold: '600',
  			bold: '700',
  			extrabold: '800',
  			black: '900'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
