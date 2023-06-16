import SkillCard, { TskillsCart } from "@/components/skillCard";


export enum SKILLS_GROUP {
    LANGUAGES = 'LANGUAGES',
    LIBRARIES = 'LIBRARIES',
    FRAMEWORKS = 'FRAMEWORKS',
    TOOLS = 'TOOLS',
    DATABASES = 'DATABASES',

}
export default function SkillsPage() {
    const size = '150px'
    const skills: Array<TskillsCart & { number: number, group: SKILLS_GROUP }> = [
        {
            number: 3,
            image: '/assets/icons/nextjs-icon.png',
            name: "next.js",
            size,
            group: SKILLS_GROUP.FRAMEWORKS
        },
        {
            number:8,
            image: "/assets/icons/css-icon.png",
            name: "CSS",
            size,
            group: SKILLS_GROUP.LANGUAGES
        },
        {
            number: 15,
            image: "/assets/icons/git-icon.png",
            name: "git",
            size,
            group: SKILLS_GROUP.TOOLS
        },
        {
            number: 16,
            image: "/assets/icons/gitflow-icon.png",
            name: "git flow",
            size,
            group: SKILLS_GROUP.TOOLS
        },
        {
            number: 9,
            image: "/assets/icons/html-icon.png",
            name: "HTML",
            size,
            group: SKILLS_GROUP.LANGUAGES
        },
        {
            number: 1,
            image: "/assets/icons/javascript-icon.png",
            name: "javaScript",
            size,
            group: SKILLS_GROUP.LANGUAGES
        },
        {
            number: 14,
            image: "/assets/icons/mongodb-icon.png",
            name: "mongoDB",
            size,
            group: SKILLS_GROUP.DATABASES
        },
        {
            number: 13,
            image: "/assets/icons/mysql-icon.png",
            name: "mysql",
            size,
            group: SKILLS_GROUP.DATABASES
        },
        {
            number: 10,
            image: "/assets/icons/nodejs-icon.png",
            name: "node.js",
            size,
            group: SKILLS_GROUP.TOOLS
        },
        {
            number: 11,
            image: "/assets/icons/nestjs-icon.png",
            name: "nest.js",
            size,
            group: SKILLS_GROUP.TOOLS
        },
        {
            number: 7,
            image: "/assets/icons/tailwind-icon.png",
            name: "tailwind css",
            size,
            group: SKILLS_GROUP.TOOLS
        },
        {
            number: 5,
            image: "/assets/icons/nuxtjs-icon.png",
            name: "nuxt.js",
            size,
            group: SKILLS_GROUP.FRAMEWORKS
        },
        {
            number: 12,
            image: "/assets/icons/rabbitmq-icon.png",
            name: "rabbitMQ",
            size,
            group: SKILLS_GROUP.TOOLS
        },
        {
            number: 2,
            image: "/assets/icons/reactjs-icon.png",
            name: "react.js",
            size,
            group: SKILLS_GROUP.LIBRARIES
        },
        {
            number: 6,
            image: "/assets/icons/vuetifyjs-icon.png",
            name: "vuetify.js",
            size,
            group: SKILLS_GROUP.FRAMEWORKS
        },
        {
            number: 17,
            image: "/assets/icons/scrum-icon.png",
            name: "scrum",
            size,
            group: SKILLS_GROUP.TOOLS
        },
        {
            number: 4,
            image: "/assets/icons/vuejs-icon.png",
            name: "vue.js",
            size,
            group: SKILLS_GROUP.FRAMEWORKS
        },
    ]
    return (
        <section className="w-full h-full flex justify-center items-center">
            <div className="flex gap-5 w-full flex-wrap justify-center">
                {
                    skills.sort((a, b) => a.number - b.number).map((item, index) => {
                        return (
                            <div key={item.number}>
                                <SkillCard size={size} image={item.image} name={item.name} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}