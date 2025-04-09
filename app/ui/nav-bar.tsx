import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
	return (
		<nav className="py-8 font-jost sm:flex sm:flex-row sm:items-center sm:justify-between">
			<div className="hidden text-xl sm:flex sm:flex-row sm:gap-x-16 fontsiz">
				<Link className="" href="/">
					Home
				</Link>
			</div>

			<div className="hidden sm:flex sm:flex-row sm:gap-x-16">
				<Link className="" href="https://github.com/dms909">
					<Image
						src="/github-mark.png"
						width={40}
						height={40}
						alt={'empty'}
					/>
				</Link>
				<Link className="" href="https://www.linkedin.com/in/dylan-smith-0b4a60126/">
				<Image
						src="/ln.png"
						width={40}
						height={40}
						alt={'empty'}
					/>
				</Link>
			</div>
		</nav>
	);
}
