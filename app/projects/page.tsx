import ProjectCard, { Tproject } from "@/components/projectCard";
import { skills } from "@/app/skills/page"
import SkillCard from "@/components/skillCard"

export default function ProjectsPage() {
    const projects: Array<Tproject & { number: number }> = [
        {
            name: 'tamuk.ir',
            link: 'https://biz.tamuk.ir/',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae asperiores, animi eius voluptatem sunt ullam? Vitae vero provident mollitia autem, tempora, alias natus explicabo, soluta veritatis qui deserunt consequuntur.',
            skills: [skills['react.js'], skills['vue.js'], skills['nuxt.js']],
            number: 1
        },
        {
            name: 'tsgco.ir',
            link: 'https://tsgco.ir/',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae asperiores, animi eius voluptatem sunt ullam? Vitae vero provident mollitia autem, tempora, alias natus explicabo, soluta veritatis qui deserunt consequuntur.',
            skills: [skills['vue.js'], skills['nuxt.js']],
            number: 2
        },
        {
            name: 'tsgco.ir',
            link: 'https://tsgco.ir/',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae asperiores, animi eius voluptatem sunt ullam? Vitae vero provident mollitia autem, tempora, alias natus explicabo, soluta veritatis qui deserunt consequuntur.',
            skills: [skills['vue.js'], skills['nuxt.js']],
            number: 2
        },
        {
            name: 'tsgco.ir',
            link: 'https://tsgco.ir/',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae asperiores, animi eius voluptatem sunt ullam? Vitae vero provident mollitia autem, tempora, alias natus explicabo, soluta veritatis qui deserunt consequuntur.',
            skills: [skills['vue.js'], skills['nuxt.js']],
            number: 2
        },
        {
            name: 'tsgco.ir',
            link: 'https://tsgco.ir/',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae asperiores, animi eius voluptatem sunt ullam? Vitae vero provident mollitia autem, tempora, alias natus explicabo, soluta veritatis qui deserunt consequuntur.',
            skills: [skills['vue.js'], skills['nuxt.js']],
            number: 2
        },
        {
            name: 'tsgco.ir',
            link: 'https://tsgco.ir/',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae asperiores, animi eius voluptatem sunt ullam? Vitae vero provident mollitia autem, tempora, alias natus explicabo, soluta veritatis qui deserunt consequuntur.',
            skills: [skills['vue.js'], skills['nuxt.js']],
            number: 2
        },
        {
            name: 'tsgco.ir',
            link: 'https://tsgco.ir/',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae asperiores, animi eius voluptatem sunt ullam? Vitae vero provident mollitia autem, tempora, alias natus explicabo, soluta veritatis qui deserunt consequuntur.',
            skills: [skills['vue.js'], skills['nuxt.js']],
            number: 2
        },
    ]
    return (
        <div>
            <div className="h-[80vh] overflow-y-scroll">
                <div className="grid grid-cols-3 gap-4 py-4 ">
                    {
                        projects.map(project => (
                            <div className="justify-self-start" key={project.number + 'projects'}>
                                <ProjectCard name={project.name} description={project.description}
                                    link={project.link} skills={project.skills} skillsSize="30px" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}