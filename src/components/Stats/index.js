'use client';
import { useEffect, useState } from 'react';

export default function Stats() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('/api/users')
			.then((res) => res.json())
			.then((data) => setUsers(data.results));
	}, []);

	console.log('users', users);
	return (
		<section className="text-center py-12 bg-white">
			<div className="container mx-auto flex flex-wrap justify-center gap-12">
				<div className="text-purple-700 font-bold text-xl">
					12 Month <span className="block text-gray-600 font-normal">Free Trial</span>
				</div>
				<div className="text-purple-700 font-bold text-xl">
					+80M <span className="block text-gray-600 font-normal">Active Users</span>
				</div>
				<div className="text-purple-700 font-bold text-xl">
					+180K <span className="block text-gray-600 font-normal">Providers</span>
				</div>
			</div>
		</section>
	);
}
