'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav className="flex items-center justify-between py-6 px-4 sm:px-8 font-jost text-base">
			{/* Left side */}
			<div className="flex items-center space-x-6">
				<Link href="/" className="hover:text-gray-500 transition">
					Home
				</Link>
			</div>

			{/* Right side for desktop */}
			<div className="hidden sm:flex items-center space-x-4">
				<Link href="https://github.com/dms909" target="_blank" rel="noopener noreferrer">
					<Image
						src="/github-mark.png"
						width={24}
						height={24}
						alt="GitHub"
						className="opacity-80 hover:opacity-100 transition"
					/>
				</Link>
				<Link href="https://www.linkedin.com/in/dylan-smith-0b4a60126/" target="_blank" rel="noopener noreferrer">
					<Image
						src="/ln.png"
						width={24}
						height={24}
						alt="LinkedIn"
						className="opacity-80 hover:opacity-100 transition"
					/>
				</Link>
			</div>

			{/* Hamburger icon for mobile */}
			<button onClick={toggleMenu} className="sm:hidden text-2xl">
				{menuOpen ? '✖' : '☰'}
			</button>

			{/* Mobile dropdown menu */}
			{menuOpen && (
				<div className="absolute top-20 left-0 w-full bg-white text-center py-4 space-y-4 sm:hidden">
					<Link href="/" className="block hover:text-gray-500" onClick={toggleMenu}>Home</Link>
					<a href="https://github.com/dms909" className="block hover:text-gray-500" target="_blank">GitHub</a>
					<a href="https://www.linkedin.com/in/dylan-smith-0b4a60126/" className="block hover:text-gray-500" target="_blank">LinkedIn</a>
				</div>
			)}
		</nav>
	);
}

