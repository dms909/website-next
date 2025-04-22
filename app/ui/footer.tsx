import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full px-4 sm:px-8 py-12 text-sm text-neutral-500">
			<div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
				<p>Dylan Smith</p>

				<div className="flex gap-4">
					<a
						href="mailto:dylan1999.smith@gmail.com"
						className="hover:text-neutral-800 transition"
					>
						Email
					</a>
					<a
						href="https://github.com/dms909"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-neutral-800 transition"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/dylan-smith-0b4a60126/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-neutral-800 transition"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</footer>
	);
}
