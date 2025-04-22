export default function Greeting() {
	return (
		<section className="my-24 px-4 sm:px-8">
			<div className="flex items-center gap-3">
				<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-800">
					Hey, I'm Dylan
				</h1>
				<span className="text-4xl sm:text-5xl animate-wiggle">👋</span>
			</div>

			<p className="text-lg sm:text-xl mt-6 text-gray-700">
				I'm a software engineer based in Des Moines, Iowa, with a
				passion for continuous learning and building meaningful digital
				experiences.
			</p>

			<p className="mt-6 text-neutral-700">
				Currently, I'm a Software Engineer II at Principal Financial
				Group, where I contribute to the UI development of
				customer-facing applications and maintain backend services
				related to payments and billing domains.
			</p>

			<p className="mt-6 text-neutral-700">
				Outside of work, I enjoy watching horror films, exploring new
				music, attending concerts, and hanging out with my two cats.
			</p>

			<p className="text-lg sm:text-xl mt-4 underline underline-offset-4 text-blue-600 hover:text-blue-800 transition">
				<a href="mailto:dylan1999.smith@gmail.com">
					Feel free to contact me!
				</a>
			</p>
		</section>
	);
}
