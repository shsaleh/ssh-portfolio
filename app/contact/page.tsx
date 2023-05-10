import TextArea from "@/components/customs/TextArea";
import TextField from "@/components/customs/textField";

export default function ContactPage() {
  return (
    <div className=" h-screen md:h-auto">
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia labore, at molestiae placeat ullam maiores consectetur omnis cumque ipsum fuga laborum cum ex magnam, porro animi quod facilis repellendus?</p>
      <div className="flex flex-col gap-5  items-center md:w-1/2 mx-auto mt-10">
        <div className="flex w-full gap-2">
          <TextField placeholder="Name" className="" />
          <TextField placeholder="email" className="" />
        </div>
        <div className="flex w-full gap-2">
          <TextField placeholder="subject" className="" />
          <TextField placeholder="Mobile Number" className="" />
        </div>
        <TextArea className="" rows={5} />
        <button className="bg-sky-600 text-white p-2 rounded-sm w-full">Submit</button>
      </div>
    </div>
  );
}