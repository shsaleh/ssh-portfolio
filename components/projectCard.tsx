import SkillCard, { Tskills } from "./skillCard"

export type Tproject = {
    name: string
    link: string
    description: string
    skills: Array<Tskills>
}

export type TprojectCard = Tproject & {
    skillsSize: string
}
export default function ProjectCard({ name, link, description, skills, skillsSize }: TprojectCard) {


    return (
        <div className="border border-solid border-sky-500  rounded-2xl max-w-sm">
            <div className="p-5">
                <h2 className="underline mb-2"><a className="hover:text-sky-500" href={link} target="_blank" rel='nofollow'>{name}</a></h2>
                <p>{description}</p>
            </div>
            <div className=" border-t-2 border-solid border-sky-500"></div>
            <div className="flex justify-center gap-2 p-3">{
                skills.map(skill => {
                    return (
                        <div key={skill.name + 'skills' + name}>
                            <SkillCard image={skill.image} size={skillsSize} />
                        </div>
                    )
                })
            }</div>
        </div>
    )

}