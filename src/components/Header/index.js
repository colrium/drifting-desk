import { Fragment, cloneElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem';
import SettingsIcon from '@mui/icons-material/Settings';

const navItems = [
	{
		href: '/',
		label: 'Feature'
	},
	{
		href: '/#pricing',
		label: 'Pricing'
	},
	{
		href: '/#news-and-events',
		label: 'News & events'
	},
	{
		href: '/#contact',
		label: 'Contact'
	}
];
function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined
	});

	return children
		? cloneElement(children, {
				elevation: trigger ? 0 : 0,
				sx: {
					background: (theme) => (trigger ? `rgba(${theme.vars.palette.primary.mainChannel} / 0.8)` : 'transparent')
				}
		  })
		: null;
}


export default function Header(props) {
	return (
		<Fragment>
			<ElevationScroll {...props}>
				<AppBar>
					<Toolbar>
						<Container>
							<Box className="flex gap-4  items-center">
								<Image
									src="/img/logo-alt.png"
									width={36}
									height={32}
									alt="logo"
								/>
								{/* <Box className="flex-1"></Box> */}

								<Box className="hidden lg:flex gap-4 px-8 flex-1  justify-end">
									{navItems.map(({ href, label }, i) => (
										<NavItem
											label={label}
											href={href}
											key={i}
										/>
									))}
								</Box>
								<Box className="flex gap-4 p-4 justify-end">
									<Button
										color="background.paper"
										className="rounded-full! capitalize"
										variant="text"
										component={Link}
										href="/auth/login"
									>
										Login
									</Button>

									<Button
										color="secondary"
										className="rounded-full! capitalize"
										variant="contained"
										component={Link}
										href="/auth/login"
										sx={{
											color: 'background.paper'
										}}
									>
										Register
									</Button>
									<IconButton
										color="background.paper"
										sx={{
											color: 'background.paper'
										}}
									>
										<SettingsIcon />
									</IconButton>
								</Box>
							</Box>
						</Container>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar />
		</Fragment>
	);
}
