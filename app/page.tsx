import Image from "next/image";
import Link from "next/link";
import profileImage from "../public/assets/profile.jpg";

export default function Home() {
  return (
    <div className=" flex flex-col gap-5 md:gap-0">
      <div className="md:h-[80vh] md:flex items-center justify-center md:flex-row-reverse space-y-5 md:space-y-0">
        <section className="md:w-1/3 md:flex-row flex-col flex justify-center items-center">
          <div className="block rounded-full overflow-hidden  border-sky-800 w-[80%] h-[80%] ">
            <Image
              src={profileImage}
              alt="Picture of the author"
            />
          </div>
        </section>
        <section className="md:w-2/3 space-y-5  md:text-left text-justify flex flex-col items-center md:items-start">
          <h1 className="md:text-5xl text-2xl">Hi, i&apos;m Saleh Shokouhi</h1>
          <h2 className="md:text-xl text-sky-400">Full Stack Web Developer</h2>
          <p>With over four years of experience in web development, I am a self-taught professional skilled in crafting dynamic web applications using popular front-end technologies like Vue and React. My proven track record includes effectively leading small teams of mid-level and junior developers. My knowledge of Git, Git flow, and agile methodologies enables me to work efficiently and collaboratively within development teams. Furthermore, I have a proficient understanding of back-end technologies, including NestJS, MySQL, RabbitMQ, and more.</p>
          <div className="flex flex-col md:flex-row gap-5">
            <Link href="/contact"><button className="bg-sky-800 text-white px-5 py-2 rounded-md hover:bg-sky-900">Contact Me</button></Link>
            <button className="border border-sky-800 text-sky-800 px-5 py-2 rounded-md hover:border-sky-900 hover:text-sky-900">Download My Resume ( pdf )</button>
          </div>
        </section>
      </div>
      <div className="md:h-[10vh] flex gap-3 justify-center md:justify-start items-center md:items-start ">
        <a href="#" target="_blank" className="rounded-full border-2 border-sky-800 text-center px-3 h-10 flex items-center justify-center hover:bg-sky-800 transition-all duration-150" >
          <span >linkedin</span>
        </a>
        <a href="#" target="_blank" className="rounded-full border-2 border-sky-800 text-center px-3 h-10 flex items-center justify-center hover:bg-sky-800 transition-all duration-150" >
          <span >github</span>
        </a>
        <a href="#" target="_blank" className="rounded-full border-2 border-sky-800 text-center px-3 h-10 flex items-center justify-center hover:bg-sky-800 transition-all duration-150" >
          <span >stackoverflow</span>
        </a>
      </div>
    </div>
  )
}
