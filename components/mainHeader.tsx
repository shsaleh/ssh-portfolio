"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
    const path = usePathname()
    const menu = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'About',
            link: '/about',
        },
        {
            name: 'Skills',
            link: '/skills',
        },
        {
            name: 'Projects',
            link: '/projects',
        },
        {
            name: 'Contact',
            link: '/contact',
        }
    ]

    return (
        <header className="flex md:justify-between pt-5 h-[10vh] justify-center ">
            <section className="hidden md:block">
                <h1 className="">Saleh</h1>
            </section>
            <nav>
                <ul className="flex gap-5 ">
                    {menu.map(item => (
                        <li key={item.name + 'mainMenu'} className="hover:text-sky-800 transition-all ease-out duration-150">
                            <Link href={item.link}>{item.name}</Link>
                            <div className={path == item.link ? "border" : ""}></div>
                        </li>
                    ))
                    }
                </ul>
            </nav>
        </header>
    )
}