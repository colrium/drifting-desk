"use client";
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
import LoginForm from './LoginForm';
import Head from 'next/head';


export default function Login({title}) {
	
	return (
		<Box className="flex flex-col items-center justify-center justify-center">
		<Head>
			<title>Login</title>
		</Head>
			<Box className="flex gap-4 w-full items-center">
				<Box className="flex flex-col flex-1 gap-4 py-4 flex-1!">
					<Typography variant="h5">Login</Typography>
					<Box
						className="w-12 h-2 rounded-full"
						sx={{ backgroundColor: 'primary.dark' }}
					/>
				</Box>
				<Button
					variant="text"
					className="rounded-full!"
					component={Link}
					href="/auth/register"
					endIcon={<ArrowForwardIcon />}
				>
					Create new account
				</Button>
			</Box>

			<Box className="flex  w-full items-center mt-6">
				<LoginForm />
			</Box>
		</Box>
	);
}

Login.defaulProps={
	title: 'Login'
}