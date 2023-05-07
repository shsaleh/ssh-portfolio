import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="h-[80vh] md:flex items-center justify-center md:flex-row-reverse">
      <section className="w-1/3 md:flex justify-center items-center">
          <div className="rounded-full overflow-hidden  border-sky-800 w-[300px] h-[300px]">
            <Image
              src="/assets/profile.jpg"
              alt="Picture of the author"
              width={300}
              height={300}
            />
          </div>
        </section>
        <section className="w-2/3 space-y-5">
          <h1 className="text-5xl">Hi, i'm Saleh Shokouhi</h1>
          <h2 className="text-3xl">Full Stack Web Developer</h2>
          <p>With over four years of experience in web development, I am a self-taught professional skilled in crafting dynamic web applications using popular front-end technologies like Vue and React. My proven track record includes effectively leading small teams of mid-level and junior developers. My knowledge of Git, Git flow, and agile methodologies enables me to work efficiently and collaboratively within development teams. Furthermore, I have a proficient understanding of back-end technologies, including NestJS, MySQL, RabbitMQ, and more.</p>
          <div className="flex">
            <button className="bg-sky-800 text-white px-5 py-2 rounded-md hover:bg-sky-900">Contact Me</button>
            <div className="mx-2"></div>
            <button className="border border-sky-800 text-sky-800 px-5 py-2 rounded-md hover:border-sky-900 hover:text-sky-900">Download My Resume ( pdf )</button>
          </div>
        </section>
      </div>
      <div className="h-[10vh] flex gap-3">
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
