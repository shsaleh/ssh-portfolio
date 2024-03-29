
import Image from "next/image";
import Link from "next/link";
import profileImage from "../public/assets/profile.jpg";
import Btn from "@/components/customs/btn";
export const metadata = {
  title: "home",
}

export default  function Home() {
  return (
    <div className=" flex flex-col gap-5 md:gap-0 pb-5 md:pb-0 h-full">
      <div className="md:h-full md:flex items-center justify-center md:flex-row-reverse space-y-5 md:space-y-0">
        <section className="md:w-1/3 md:flex-row flex-col flex justify-center items-center">
          <div className="block rounded-full overflow-hidden  border-sky-800 w-[80%] h-[80%] ">
            <Image
              src={profileImage}
              alt="Picture of the author"
            />
          </div>
        </section>
        <section className="md:w-2/3 space-y-5  md:text-left text-center flex flex-col items-center md:items-start">
          <h1 className="md:text-5xl text-2xl">Hi, i&apos;m Saleh Shokouhi</h1>
          <h2 className="md:text-xl text-sky-400">Full Stack Web Developer</h2>
          <p>With over four years of experience in web development, I am a self-taught professional skilled in crafting dynamic web applications using popular front-end technologies like Vue and React. My proven track record includes effectively leading small teams of mid-level and junior developers. My knowledge of Git, Git flow, and agile methodologies enables me to work efficiently and collaboratively within development teams. Furthermore, I have a proficient understanding of back-end technologies, including NestJS, MySQL, RabbitMQ, and more.</p>
          <div className="flex flex-col md:flex-row gap-5">
            <Link href="/contact"><Btn className="w-full">Contact Me</Btn></Link>
           <a href="/assets/saleh-shokouhi.pdf" target="_blank"> <Btn outlined>Download My Resume ( pdf )</Btn></a>
          </div>
        </section>
      </div>

    </div>
  )
}
