import WorkSection from "./misc/work-section";
import pfg from "../../public/pfg.png";
import hyvee from "../../public/hyvee.png";
import isu from "../../public/iowastateu_logo.jpg";
import { principalExperience } from "./utils/text/principalExperience";
import { hyveeExperience } from "./utils/text/hyveeExperience";
import { isuExperience } from "./utils/text/isuExperience";

export default function Experience() {
	return (
		<div>
			<h3 className="text-2xl font-medium">Where I've Worked</h3>
			<WorkSection
				source={pfg}
                imgWidth={622}
                imgHeight={622}
				altText="Principal Financial Group Logo"
				content={principalExperience}
			/>
			<WorkSection
				source={hyvee}
                imgWidth={500}
                imgHeight={500}
				altText="Hy-Vee Logo"
				content={hyveeExperience}
			/>
			<WorkSection
				source={isu}
                imgWidth={595}
                imgHeight={595}
				altText="Iowa State University Logo"
				content={isuExperience}
			/>
		</div>
	);
}
