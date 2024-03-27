import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="py-8 font-jost sm:flex sm:flex-row sm:items-center sm:justify-between">
			<div className="hidden sm:flex sm:flex-row sm:gap-x-16">
				<Link className="" href="/">
					Home
				</Link>
				<Link className="" href="/">
					About me
				</Link>
			</div>

			<div className="hidden sm:flex sm:flex-row sm:gap-x-16">
				<Link className="" href="/">
					GitHub
				</Link>
				<Link className="" href="/">
					LinkedIn
				</Link>
			</div>
		</nav>
	);
}
