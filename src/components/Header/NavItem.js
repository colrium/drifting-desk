'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';

const NavItem = ({ href = '/', label = '#' }) => {
	const pathname = usePathname();
	const active = pathname === href;
	return (
		<Button
			variant="text"
			component={Link}
			href={href}
			color="background.paper"
			className="flex flex-col items-center capitalize relative"
			sx={{
				'& :after': {
					backgroundColor: active ? 'background.paper' : 'transparent',
					height: (theme) => theme.spacing(active ? 2 : 0),
					width: (theme) => theme.spacing(3)
				}
			}}
		>
			{label}
			{/* <Typography
				variant="subtitle2"
				className="capitalize"
			>
				{label}
			</Typography> */}
			{/*active && (
				<Box
					className="w-4 h-2 rounded-full"
					sx={{ background: (theme) => theme.palette.background.paper }}
				></Box>
			)*/}
		</Button>
	);
};
export default NavItem;
