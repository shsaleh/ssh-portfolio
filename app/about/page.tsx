import Image from "next/image";
import profileImage from "@/public/assets/profile.jpg";
import Link from "next/link";
import Btn from "@/components/customs/btn";

export default function about() {
    return (
        <div className="md:h-[80vh] flex items-center justify-center flex-col-reverse md:flex-row-reverse space-y-5 md:space-y-0">
            <section className="md:w-2/3 space-y-2 md:space-y-5 md:text-left text-center flex flex-col items-center md:items-start">
                <h1 className="md:text-5xl text-2xl">i&apos;m Saleh Shokouhi</h1>
                <h2 className="md:text-xl text-sky-400">Full Stack Web Developer</h2>
                <p>I started this career 4 years ago when I faced some difficulties in my previous career as an electrical engineer. I love being an engineer and I have a passion for all engineering majors. However, in my country, being an electrical engineer is very challenging due to a poor workspace culture, an inadequate education system, and low salary. Therefore, I made the decision to switch my career to software engineering. This way, I could learn coding on my own and work with the best colleagues I have ever had.</p>
                <p>I have worked for several companies and have experience in building various types of web applications. These include online shops, marketplaces, crypto trading platforms, and more.</p>
                <div className="flex flex-col md:flex-row gap-3 md:mt-10">
                    <Link href="/skills"><Btn className="w-[300px]">My Skills</Btn></Link>
                    <Link href="/projects"><Btn className="w-[300px]">My Projects</Btn></Link>
                    <Link href="/contact"><Btn className="w-[300px]">Contact Me</Btn></Link>
                </div>
            </section>
            <section className="md:w-1/3 md:flex-row flex-col flex justify-center items-center">
                <div className="block rounded-full overflow-hidden  border-sky-800 w-[80%] h-[80%] ">
                    <Image
                        src={profileImage}
                        alt="Picture of the author"
                    />
                </div>
            </section>
        </div>
    )
}