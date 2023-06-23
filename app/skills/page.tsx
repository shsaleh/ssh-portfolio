import SkillCard, { TskillsCard } from "@/components/skillCard";
export enum SKILLS_GROUP {
    LANGUAGES = 'LANGUAGES',
    LIBRARIES = 'LIBRARIES',
    FRAMEWORKS = 'FRAMEWORKS',
    TOOLS = 'TOOLS',
    DATABASES = 'DATABASES',

}

const size = '150px'
export const skills: { [key: string]: TskillsCard & { number: number, group: SKILLS_GROUP } } = {
    "next.js": {
        "number": 3,
        "image": "/assets/icons/nextjs-icon.png",
        "name": "next.js",
        "size": size,
        "group": SKILLS_GROUP.FRAMEWORKS
    },
    "CSS": {
        "number": 8,
        "image": "/assets/icons/css-icon.png",
        "name": "CSS",
        "size": size,
        "group": SKILLS_GROUP.LANGUAGES
    },
    "git": {
        "number": 15,
        "image": "/assets/icons/git-icon.png",
        "name": "git",
        "size": size,
        "group": SKILLS_GROUP.TOOLS
    },
    "git flow": {
        "number": 16,
        "image": "/assets/icons/gitflow-icon.png",
        "name": "git flow",
        "size": size,
        "group": SKILLS_GROUP.TOOLS
    },
    "HTML": {
        "number": 9,
        "image": "/assets/icons/html-icon.png",
        "name": "HTML",
        "size": size,
        "group": SKILLS_GROUP.LANGUAGES
    },
    "javaScript": {
        "number": 1,
        "image": "/assets/icons/javascript-icon.png",
        "name": "javaScript",
        "size": size,
        "group": SKILLS_GROUP.LANGUAGES
    },
    "mongoDB": {
        "number": 14,
        "image": "/assets/icons/mongodb-icon.png",
        "name": "mongoDB",
        "size": size,
        "group": SKILLS_GROUP.DATABASES
    },
    "mysql": {
        "number": 13,
        "image": "/assets/icons/mysql-icon.png",
        "name": "mysql",
        "size": size,
        "group": SKILLS_GROUP.DATABASES
    },
    "node.js": {
        "number": 10,
        "image": "/assets/icons/nodejs-icon.png",
        "name": "node.js",
        "size": size,
        "group": SKILLS_GROUP.TOOLS
    },
    "nest.js": {
        "number": 11,
        "image": "/assets/icons/nestjs-icon.png",
        "name": "nest.js",
        "size": size,
        "group": SKILLS_GROUP.TOOLS
    },
    "tailwind css": {
        "number": 7,
        "image": "/assets/icons/tailwind-icon.png",
        "name": "tailwind css",
        "size": size,
        "group": SKILLS_GROUP.TOOLS
    },
    "nuxt.js": {
        "number": 5,
        "image": "/assets/icons/nuxtjs-icon.png",
        "name": "nuxt.js",
        "size": size,
        "group": SKILLS_GROUP.FRAMEWORKS
    },
    "rabbitMQ": {
        "number": 12,
        "image": "/assets/icons/rabbitmq-icon.png",
        "name": "rabbitMQ",
        "size": size,
        "group": SKILLS_GROUP.TOOLS
    },
    "react.js": {
        "number": 2,
        "image": "/assets/icons/reactjs-icon.png",
        "name": "react.js",
        "size": size,
        "group": SKILLS_GROUP.LIBRARIES
    },
    "vuetify.js": {
        "number": 6,
        "image": "/assets/icons/vuetifyjs-icon.png",
        "name": "vuetify.js",
        "size": size,
        "group": SKILLS_GROUP.FRAMEWORKS
    },
    "scrum": {
        "number": 17,
        "image": "/assets/icons/scrum-icon.png",
        "name": "scrum",
        "size": size,
        "group": SKILLS_GROUP.TOOLS
    },
    "vue.js": {
        "number": 4,
        "image": "/assets/icons/vuejs-icon.png",
        "name": "vue.js",
        "size": size,
        "group": SKILLS_GROUP.FRAMEWORKS
    }
}

export default function SkillsPage() {
    return (
        <section className="w-full h-full flex justify-center items-center">
            <div className="flex gap-5 w-full flex-wrap justify-center">
                {
                    Object.keys(skills).sort((a, b) => skills[a].number - skills[b].number).map((item, index) => {
                        return (
                            <div key={skills[item].number}>
                                <SkillCard size={size} image={skills[item].image} name={skills[item].name} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}