'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	cssVariables: true,
	typography: {
		fontFamily: 'var(--font-roboto)'
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				variant: 'contained',
				className: 'rounded-full'
			}
		}
	},
	palette: {
		primary: {
			main: '#6A1B9A',
			light: '#E1BEE7',
			dark: '#6A1B9A'
		},
		secondary: {
			main: '#8BC34A',
			light: '#DCEDC8',
			dark: '#558B2F'
		},
		google: {
			main: '#DB4437'
		},
		github: {
			main: '#2b3137'
		},
		facebook: {
			main: '#4267B2'
		},
		twitter: {
			main: '#00BCD4'
		}
	}
});

export default theme;
