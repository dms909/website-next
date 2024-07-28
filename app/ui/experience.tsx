import WorkSection from "./misc/work-section";
import pfg from "../../public/pfg.png";
import hyvee from "../../public/hyvee.jpg";
import isu from "../../public/iowastateu_logo.jpg";
import { principalExperience } from "./utils/experience/principalExperience";
import { hyveeExperience } from "./utils/experience/hyveeExperience";
import { isuExperience } from "./utils/experience/isuExperience";

export default function Experience() {
	return (
		<div>
			<h3 className="text-2xl font-medium">Where I've Worked</h3>
			<WorkSection
				source={pfg}
				altText="Principal Financial Group Logo"
				content={principalExperience}
			/>
			<WorkSection
				source={hyvee}
				altText="Hy-Vee Logo"
				content={hyveeExperience}
			/>
			<WorkSection
				source={isu}
				altText="Iowa State University Logo"
				content={isuExperience}
			/>
		</div>
	);
}
