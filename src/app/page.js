import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
		<div className="flex items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col flex-1 relative">
				
				<Banner />
				{/* Stats Section */}
				<Stats />
				{/* Features Section */}
				{/* <Features /> */}

				{/* Pricing Section */}
				{/* <Pricing /> */}
			</main>
		</div>
  );
}
