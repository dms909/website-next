import Image, { StaticImageData } from "next/image";

type WorkSectionType = {
	source: StaticImageData;
	altText: string;
	content: {
        header: string;
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
				<Image
					src={source}
					width={100}
					height={100}
					alt="Principal Financial Group Logo"
				/>
			</div>
			<div>
				<h4 className="text-lg font-medium">{content.header}</h4>
			</div>
		</div>
	);
}
