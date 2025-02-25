'use client';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout(props) {
	const {children} = props;
	return (
		<Box
			sx={{ backgroundColor: 'primary.main', background: 'url(/img/bg.png)' }}
			className="flex flex-row lg:p-10 lg:px-20 items-center justify-center min-h-screen justify-center bg-no-repeat bg-cover!"
		>
			<Card
				className={'flex flex-1 p-0 rounded-3xl! border-0!'}
				classes={{ root: 'p-0 rounded-3xl! bg-transparent' }}
				sx={{ backgroundColor: (theme) => `rgba(${theme.vars.palette.primary.mainChannel} / 0.8)` }}
			>
				<CardContent
					className={'flex flex-col flex-1 rounded-3xl'}
					sx={{
						p: 0,
						'&:last-child': {
							pb: 0
						}
					}}
				>
					<Box className={'flex flex-1 p-0 pb-0'}>
						{/* Left Section */}
						<Box
							className="md:w-1/2  flex-col p-8 hidden md:flex"
						>
							<Box>
								<IconButton
									sx={{ color: 'background.paper' }}
									size="large"
                                    component={Link}
                                    href="/"
								>
									<CloseIcon fontSize="inherit" />
								</IconButton>
							</Box>

							<Box className="flex-1 flex flex-col justify-center items-center ">
								<Image
									src="/img/logo.png"
									width={80}
									height={80}
									alt="logo"
									className=""
								/>
								<Typography
									variant="subtitle2"
									color="background.default"
								>
									Software
								</Typography>
								<Typography
									variant="h4"
									color="background.default"
									className="my-4!"
								>
									Welcome back
								</Typography>
								<Typography
									variant="body2"
									color="background.default"
								>
									Please login to continue
								</Typography>
							</Box>
						</Box>

						{/* Right Section */}
						<Box
							className="md:w-1/2 flex flex-col justify-center items-center py-20"
							sx={{ backgroundColor: 'background.paper' }}
						>
							{children}
						</Box>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
}
