'use client';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Checkbox, TextField } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function RegisterForm() {
	const theme = useTheme();

	// console.log('theme', theme)
	return (
		<Box className="flex flex-row items-center justify-center justify-center">
			<Box
				className="flex flex-col justify-center items-center "
				sx={{ backgroundColor: 'background.paper' }}
			>
				<Box className="flex  w-full  items-center justify-center flex-row gap-6 mt-6">
					<Button
						startIcon={<FacebookIcon />}
						color="facebook"
						variant="contained"
						// size="small"
						className="rounded-full! px-4!"
						disableElevation
						sx={{
							color: 'background.default',
							fontSize: '0.7rem'
						}}
					>
						Facebook
					</Button>
					<Button
						startIcon={<TwitterIcon />}
						color="twitter"
						variant="contained"
						// size="small"
						className="rounded-full! px-4!"
						disableElevation
						sx={{
							color: 'background.default',
							fontSize: '0.7rem'
						}}
					>
						Twitter
					</Button>
					<Button
						startIcon={<GoogleIcon />}
						color="google"
						variant="contained"
						// size="small"
						className="rounded-full! px-4!"
						disableElevation
						sx={{
							color: 'background.default',
							fontSize: '0.7rem'
						}}
					>
						Google
					</Button>
				</Box>

				<div className="mt-6 w-full max-w-sm">
					<Box className="flex items-center gap-4 my-8">
						<hr className="flex-grow border-t border-gray-300 max-w-32" />
						<span className="text-gray-500 text-sm">Or register with email</span>
						<hr className="flex-grow border-t border-gray-300" />
					</Box>

					<TextField
						type="text"
						placeholder="Name"
						label="Name"
						className="mb-8! w-full"
						size="small"
						color="secondary"
					/>
					<TextField
						type="email"
						placeholder="Email"
						label="Email"
						className="mb-8! w-full"
						size="small"
						color="secondary"
					/>
					<Box className="flex items-center gap-2">
						<TextField
							type="password"
							placeholder="Password"
							label="Password"
							className="mb-8! w-full"
							size="small"
							color="secondary"
						/>

						<TextField
							type="password"
							placeholder="Repeat Password"
							label="Repeat Password"
							className="mb-8! w-full"
							size="small"
							color="secondary"
						/>
					</Box>

					<div className="flex items-center mt-4">
						<FormGroup className="flex-1">
							<FormControlLabel
								control={
									<Checkbox
										defaultChecked
										color="secondary"
										id="remember"
									/>
								}
								label={
									<Box>
										<Typography>I have read and accepted the terms of</Typography>
										<Typography color="secondary">Service and Privacy policy*</Typography>
									</Box>
								}
							/>
						</FormGroup>

						<Button
							variant="contained"
							color="secondary"
							className="rounded-full! "
							sx={{ color: 'background.paper' }}
						>
							Continue
						</Button>
					</div>
				</div>
			</Box>
		</Box>
	);
}

