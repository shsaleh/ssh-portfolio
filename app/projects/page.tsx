import ProjectCard, { Tproject } from "@/components/projectCard";
import { skills } from "@/app/skills/page"
import SkillCard from "@/components/skillCard"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "projects",
  }
export default function ProjectsPage() {
    const projects: Array<Tproject & { number: number }> = [
        {
            name: 'tamuk.ir',
            link: 'https://biz.tamuk.ir/',
            description: `This website is a marketplace that connects suppliers and factory owners, providing a supply chain of raw materials for factories. The main website is built with React, while the admin dashboard is built with Nuxt and Vuetify.`,
            skills: [skills['react.js'], skills['vue.js'], skills['nuxt.js'], skills['vuetify.js'], skills['CSS'], skills['HTML']],
            number: 1
        },
        {
            name: 'tsgco.ir',
            link: 'https://tsgco.ir/',
            description: `A website to introduce TSG company and its products. One of the best features of this website is dynamic multilanguage support, where the admin can add languages and translate content. This project is built with Nuxt and Vuetify.`,
            skills: [skills['vue.js'], skills['nuxt.js'], skills['vuetify.js'], skills['CSS'], skills['HTML']],
            number: 2
        },
        {
            name: 'salehShokouhi.ir',
            link: 'http://salehShokouhi.ir',
            description: 'This is my personal portfolio website, built with Next.js. This project is open source, and you can find the source code on my GitHub page.',
            skills: [skills['react.js'], skills['next.js'], skills['tailwind.css'], skills['CSS'], skills['HTML']],
            number: 2
        },
        {
            name: 'Crypto trading paltform',
            link: '#',
            description: `On this platform, users can trade cryptocurrencies. Some of the features include a list of cryptocurrencies and their live prices, a market depth for each token, and a history of user trades, including active trades and confirmed trades, multi language , among others.\n
            Due to the confidentiality agreement I have signed, I am unable to reveal the specific website and company names.`,
            skills: [skills['vue.js'], skills['nuxt.js'], skills['vuetify.js'], skills['CSS'], skills['HTML']],
            number: 2
        },
        {
            name: 'Crypto trading paltform (clients dashboard)',
            link: '#',
            description: `This is the client dashboard, where clients can register and upload their documents, such as identification and bank account documents. Additionally, clients can contact support through a ticketing system. Some other features include the ability for clients to view their wallets and balances, as well as make deposits and withdrawals. this project also support multi language.\n
            Due to the confidentiality agreement I have signed, I am unable to reveal the specific website and company names.`,
            skills: [skills['vue.js'], skills['bootstrap.css'], skills['CSS'], skills['HTML']],
            number: 2
        },
        {
            name: 'Crypto trading paltform (admins dashboard)',
            link: '#',
            description: `This is the admin dashboard, which comprises several sections including customer management, document management, reports (displaying data in tables and charts), configurations, and operators management (roles/permissions), among others.\n
            Due to the confidentiality agreement I have signed, I am unable to reveal the specific website and company names.`,
            skills: [skills['vue.js'], skills['bootstrap.css'], skills['CSS'], skills['HTML']],
            number: 2
        },
        {
            name: 'Crypto trading paltform (live data stream)',
            link: 'https://tsgco.ir/',
            description: `A Node.js/NestJS service that provides live data such as client trade history, client wallets, market depth, and more via WebSocket. This project connects to other services through APIs and RabbitMQ\n
            Due to the confidentiality agreement I have signed, I am unable to reveal the specific website and company names.`,
            skills: [skills['node.js'], skills['nest.js'], skills['mysql'], skills['rabbitMQ']],
            number: 2
        },
        {
            name: 'Crypto trading paltform (Cryptocurrency live prices)',
            link: 'https://tsgco.ir/',
            description: `A Node.js/NestJS service that connects to Binance through WebSocket and provides real-time cryptocurrency prices via WebSocket.\n
            Due to the confidentiality agreement I have signed, I am unable to reveal the specific website and company names.`,
            skills: [skills['node.js'], skills['nest.js'], skills['mysql']],
            number: 2
        },
    ]
    return (
        <div>
            <div className="h-[80vh] overflow-y-scroll">
                <div className="grid lg:grid-cols-3 gap-4 p-4  ">
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