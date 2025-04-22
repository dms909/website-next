'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const darkMode = localStorage.getItem('darkMode');
		if (darkMode === 'true') {
			setDarkMode(true);
			document.documentElement.classList.add('dark');
		}
	}, []);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const toggleDarkMode = () => {
		setDarkMode((prev) => {
			const newMode = !prev;
			localStorage.setItem('darkMode', newMode.toString());
			document.documentElement.classList.toggle('dark', newMode);
			return newMode;
		});
	};

	return (
		<nav className="flex items-center justify-between py-6 px-4 sm:px-8 font-jost text-base">
			<div className="flex items-center space-x-6">
				<Link href="/" className="hover:text-gray-500 transition">
					Home
				</Link>
				<Link href="/blog" className="hover:text-gray-500 transition">
					Blog
				</Link>
			</div>

			<div className="hidden sm:flex items-center space-x-4">
				<Link href="https://github.com/dms909" target="_blank" rel="noopener noreferrer">
					<Image
						src="/github-mark.png"
						width={24}
						height={24}
						alt="GitHub"
						className="opacity-80 hover:opacity-100 transition dark:invert"
					/>
				</Link>
				<Link href="https://www.linkedin.com/in/dylan-smith-0b4a60126/" target="_blank" rel="noopener noreferrer">
					<Image
						src="/ln.png"
						width={24}
						height={24}
						alt="LinkedIn"
						className="opacity-80 hover:opacity-100 transition dark:invert"
					/>
				</Link>

				<button
					onClick={toggleDarkMode}
					className="ml-4 px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
				>
					{darkMode ? '☀️' : '🌙'}
				</button>
			</div>

			<button onClick={toggleMenu} className="sm:hidden text-2xl">
				{menuOpen ? '✖' : '☰'}
			</button>

			{menuOpen && (
				<div className="absolute top-20 left-0 w-full bg-white dark:bg-black text-center py-4 space-y-4 sm:hidden">
					<Link href="/" className="block hover:text-gray-500" onClick={toggleMenu}>Home</Link>
					<a href="https://github.com/dms909" className="block hover:text-gray-500" target="_blank">GitHub</a>
					<a href="https://www.linkedin.com/in/dylan-smith-0b4a60126/" className="block hover:text-gray-500" target="_blank">LinkedIn</a>
					<button onClick={toggleDarkMode} className="block w-full text-center hover:text-gray-500">
						{darkMode ? 'Light Mode' : 'Dark Mode'}
					</button>
				</div>
			)}
		</nav>
	);
}
