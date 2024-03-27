import WorkSection from "./misc/work-section";
import pfg from '../../public/pfg.png';
import hyvee from '../../public/hyvee.jpg'

const principalExperience = {
    header: 'Software Engineer I',
    body: 'tbd'
}

export default function Experience() {
    return(
        <div>
            <h3 className="text-2xl font-medium">Where I've Worked</h3>
            <WorkSection source={pfg} altText="Principal Financial Group Logo" content={principalExperience}/>
            <WorkSection source={hyvee} altText="Principal Financial Group Logo" content={principalExperience}/>
            <WorkSection source={pfg} altText="Principal Financial Group Logo" content={principalExperience}/>
        </div>
    )
}