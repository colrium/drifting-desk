"use client";
import { Box, Button, IconButton, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useSelector } from 'react-redux';
import Header from '../Header';

export default function Banner() {
	const darkMode = useSelector((ss) => ss.theme.darkMode);
	const themeMode = darkMode? 'dark' : 'light' 
	return (
		<Box
			component="section"
			// className="relative bg-gradient-to-r from-purple-700 to-purple-900 flex flex-col items-center min-h-screen"
			className="relative flex flex-col items-center min-h-screen pt-8 bg-cover! bg-no-repeat!"
			sx={{ background: 'url(/img/bg.png)' }}
		>
			<Header className="w-full" />
			<Box className="relative py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center flex-1">
				<Box className="lg:w-1/2 text-center lg:text-left">
					<Typography
						className="mb-6!"
						color="background.paper"
						variant="h3"
					>
						Sed Imperdiet Enim li Vitae <span className="font-bold">Viverra Justo</span>
					</Typography>
					<Typography
						color="background.paper"
						className="mb-6! text-lg"
					>
						Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis.
					</Typography>
					<Box className="flex gap-4 justify-center lg:justify-start">
						<Box className="flex gap-4 justify-center lg:justify-start">
							<Button
								className="rounded-full!"
								variant="text"
								startIcon={<PlayArrowIcon />}
								sx={{
									color: "background.paper"
								}}
							>
								WATCH VIDEO
							</Button>
						</Box>
						<Button
							color="secondary"
							className="rounded-full!"
							variant="contained"
							sx={{
								color: 'background.paper'
							}}
						>
							GET STARTED
						</Button>
					</Box>
				</Box>
				<Box className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
					<div className="relative w-full max-w-md lg:max-w-lg">
						<img
							src="/img/illustration.png"
							alt="Dashboard Preview"
							className="w-full rounded-lg transform rotate-4"
						/>
					</div>
				</Box>
			</Box>
			<Box className="absolute bottom-0 transform flex flex-col h-1/2 w-full">
				<img
					src={`img/${themeMode}/decoration.png`}
					alt="decoration"
					className="w-full h-full"
				/>				
			</Box>
		</Box>
	);
}
