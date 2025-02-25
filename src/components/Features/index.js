import { Button } from "@mui/material";

export default function Features() {
	return (
		<section className="py-12">
			<div className="container mx-auto px-6 lg:px-20">
				<div className="grid md:grid-cols-2 gap-12">
					<div>
						<h2 className="text-2xl font-semibold text-purple-700">Vivamus sit amet interdum</h2>
						<p className="mt-4 text-gray-600">
							Vivamus et luctus mauris. Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.
						</p>
						<Button className="mt-4 bg-purple-700 text-white px-6 py-2 rounded-full">Learn More</Button>
					</div>
					<div>
						<img
							src="/feature1.png"
							alt="Feature 1"
							className="rounded-lg shadow-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
