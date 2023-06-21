import { skills } from "@/app/skills/page"
import SkillCard from "./skillCard"

export default function ProjectCard() {
    const projects = [
        {
            name: 'tamuk.ir',
            link: 'https://biz.tamuk.ir/',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae asperiores, animi eius voluptatem sunt ullam? Vitae vero provident mollitia autem, tempora, alias natus explicabo, soluta veritatis qui deserunt consequuntur.',
            tools: [skills['react.js'], skills['vue.js'], skills['nuxt.js']],
            number: 1
        },
        {
            name: 'tsgco.ir',
            link: 'https://tsgco.ir/',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae asperiores, animi eius voluptatem sunt ullam? Vitae vero provident mollitia autem, tempora, alias natus explicabo, soluta veritatis qui deserunt consequuntur.',
            tools: [skills['vue.js'], skills['nuxt.js']],
            number: 2
        }
    ]

    return (
        <div >
            <div className="flex gap-4 flex-wrap justify-center lg:justify-normal">
                {projects.map(project => {
                    return (
                        <div key={project.number} className="border border-solid border-sky-500  rounded-2xl max-w-lg">
                            <div className="p-5">
                                <h2 className="underline mb-2"><a className="hover:text-sky-500" href={project.link} target="_blank" rel='nofollow'>{project.name}</a></h2>
                                <p>{project.description}</p>
                            </div>
                            <div className=" border-t-2 border-solid border-sky-500"></div>
                            <div className="flex justify-center gap-2 p-3">{
                                project.tools.map(tool => {
                                    return (
                                        <div key={tool.number + 'skills' + project.number}>
                                            <SkillCard image={tool.image} size="80px" />
                                        </div>
                                    )
                                })
                            }</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}