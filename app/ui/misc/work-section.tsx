import Image, { StaticImageData } from "next/image";

type WorkSectionType = {
	source: StaticImageData;
	imgWidth: number;
	imgHeight: number;
	altText: string;
	content: {
		titles: string[];
		body: string;
	};
};

export default function WorkSection({
	source,
	imgWidth,
	imgHeight,
	altText,
	content,
}: WorkSectionType) {
	return (
		<div className="flex bg-white shadow-xl p-4 my-4">
			<div className="mr-4">
				<Image
					src={source}
					width={imgWidth}
					height={imgHeight}
					alt={altText}
				/>
			</div>
			<ul className="ml-6 list-disc text-lightGray w-full">
				{content.titles.map((title) => (
					<li className="text-lg font-medium before:">
						<span className="text-black">{title}</span>
					</li>
				))}
			</ul>
			<p>{content.body}</p>
		</div>
	);
}
