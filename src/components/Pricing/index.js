import { Button } from "@mui/material";

export default function Pricing() {
	return (
		<section className="py-12 bg-gray-100">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold text-gray-800">Pricing & Plan</h2>
				<div className="mt-8 grid md:grid-cols-3 gap-8">
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-bold">Basic</h3>
						<p className="text-gray-600 mt-2">Free</p>
						<Button color="success" className="mt-4 text-whiterounded-full">Get Started</Button>
					</div>
					<div className="bg-purple-700 text-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-bold">Best Value</h3>
						<p className="mt-2">$24</p>
						<Button
							className="mt-4 rounded-full"
							variant="text"
						>
							Choose Plan
						</Button>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-bold">Enterprise</h3>
						<p className="text-gray-600 mt-2">$99</p>
						<Button className="mt-4 bg-purple-700 text-white">Try Now</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
