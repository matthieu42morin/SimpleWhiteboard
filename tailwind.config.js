import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{html,svelte,js,ts}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		},
		colors: {
			'orange': '#ff7849',
			'green-dark': '#49AB81',
			'green-light': '#6FCB9F',
			'red-dark': '#e61414',
			'red-light': '#FF647E',
			'primary-yellow': '#FFBF00',
			'yellow-secondary': '#FFE066',
			'blue-dark': '#110042',
			'blue-primary': '#4263EB',
			'blue-light': '#96DDFF',
			black: '#000000',
			white: '#FFFFFF',
			'off-white': '#F7F7F7',
			'grey-dark': '#8E8E93',
			'grey-primary': '#C7C7CC',
			'grey-light': '#E5E5EA'
		},
		fontFamily: {
			sans: ['Source Sans Pro', 'sans-serif'],
			redacted: ['Redacted Script', 'redacted']
		}
	},
	plugins: [
		plugin(function ({ addComponents, addUtilities }) {
			addComponents({});
			addUtilities({
				'.display-1': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 600,
					fontSize: '64px',
					lineHeight: '72px',
					letterSpacing: '-0.25px'
				},
				'.display-2': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 600,
					fontSize: '48px',
					lineHeight: '56px'
				},
				'.display-3': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 600,
					fontSize: '40px',
					lineHeight: '48px'
				},
				'.h-2': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 600,
					fontSize: '28px',
					lineHeight: '36px'
				},
				'.h-3': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 600,
					fontSize: '24px',
					lineHeight: '32px'
				},
				'.title-1': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 600,
					fontSize: '24px',
					lineHeight: '30px',
					letterSpacing: '0.5px'
				},
				'.title-2': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 600,
					fontSize: '16px',
					lineHeight: '24px',
					letterSpacing: '0.2px'
				},

				'.title-3': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 600,
					fontSize: '14px',
					lineHeight: '20px',
					letterSpacing: '0.16px'
				},
				'.label-1': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 600,
					fontSize: '18px',
					lineHeight: '28px',
					letterSpacing: '0.2px'
				},
				'.label-2': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 600,
					fontSize: '16px',
					lineHeight: '24px',
					letterSpacing: '0.4px'
				},

				'.label-3': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 600,
					fontSize: '14px',
					lineHeight: '20px',
					letterSpacing: '0.6px'
				},
				'.body-1': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 400,
					fontSize: '16px',
					lineHeight: '24px'
				},

				'.body-2': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 400,
					fontSize: '14px',
					lineHeight: '20px',
					letterSpacing: '0.08px'
				},
				'.body-3': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 400,
					fontSize: '12px',
					lineHeight: '16px',
					letterSpacing: '0.2px'
				},
				'.overline': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 400,
					fontSize: '12px',
					lineHeight: '16px',
					letterSpacing: '0.8px',
					textTransform: 'uppercase'
				},

				'.caption': {
					fontFamily: 'Source Sans Pro',
					fontStyle: 'normal',
					fontWeight: 400,
					fontSize: '12px',
					lineHeight: '16px',
					letterSpacing: '0.5px'
				},

				'.redacted-1': {
					fontFamily: 'Redacted Script',
					fontStyle: 'normal',
					fontWeight: 400,
					fontSize: '16px',
					lineHeight: '24px'
				},
				'.redacted-2': {
					fontFamily: 'Redacted Script',
					fontStyle: 'normal',
					fontWeight: 400,
					fontSize: '14px',
					lineHeight: '20px',
					letterSpacing: '0.08px'
				},

				'.redacted-3': {
					fontFamily: 'Redacted Script',
					fontStyle: 'normal',
					fontWeight: 400,
					fontSize: '12px',
					lineHeight: '16px',
					letterSpacing: '0.2px'
				}
			});
		})
	],
	darkMode: 'class'
};
