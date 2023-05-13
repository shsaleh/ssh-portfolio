import TextArea from "@/components/customs/TextArea";
import TextField from "@/components/customs/textField";

export default function ContactPage() {
  return (
    <div className=" h-screen md:h-[80vh]  flex flex-col  md:justify-center">
      <div className="mx-auto w-max">
      <h1 className="text-3xl">Contact Me</h1>
      </div>
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