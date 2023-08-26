import Link from "next/link";

export default function MainHeader() {

    return (
        <header className="flex md:justify-between pt-5 h-[10vh] justify-center ">
            <section className="hidden md:block">
                <h1 className="">Saleh</h1>
            </section>
            <nav>
                <ul className="flex gap-5 ">
                    <li className="hover:text-sky-800 transition-all ease-out duration-150">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-sky-800 transition-all ease-out duration-150">
                        <Link href="/about" prefetch={false}>About</Link>
                    </li>
                    <li className="hover:text-sky-800 transition-all ease-out duration-150">
                        <Link href="/skills">Skills</Link>
                    </li>
                    <li className="hover:text-sky-800 transition-all ease-out duration-150">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="hover:text-sky-800 transition-all ease-out duration-150">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}