import Image, { StaticImageData } from "next/image";

type WorkSectionType = {
	source: StaticImageData;
	altText: string;
	content: {
		titles: string[];
		body: string;
	};
};

export default function WorkSection({
	source,
	altText,
	content,
}: WorkSectionType) {
	return (
		<div className="flex bg-white shadow-xl p-4 my-4">
			<div className="mr-4">
				<Image src={source} width={100} height={100} alt={altText} />
			</div>
			<div>
				<div className="flex">
					<ul className="ml-6 list-disc text-lightGray w-full">
						{content.titles.map((title) => (
							<li className="text-lg font-medium before:">
								<span className="text-black">{title}</span>
							</li>
						))}
					</ul>
					<p>{content.body}</p>
				</div>
			</div>
		</div>
	);
}
