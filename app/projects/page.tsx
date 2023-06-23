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
                <div className="flex gap-4 flex-wrap justify-center ">
                    {
                        projects.map(project => (
                            <ProjectCard key={project.number + 'projects'} name={project.name} description={project.description}
                                link={project.link} skills={project.skills} skillsSize="50px" />
                        ))
                    }
                </div>
            </div>
        </div>
    )

}