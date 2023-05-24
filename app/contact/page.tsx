import TextArea from "@/components/customs/TextArea";
import Btn from "@/components/customs/btn";
import TextField from "@/components/customs/textField";
export const metadata = {
  title: "contact",
}
export default function ContactPage() {
  return (
    <div className=" h-screen md:h-[80vh] flex flex-col md:justify-center">
      <div className="mx-auto w-max">
        <h1 className="text-3xl">Contact Me</h1>
      </div>
      <div className="flex flex-col gap-5  items-center md:w-1/2 mx-auto mt-10">
        <div className="flex w-full gap-2">
          <TextField placeholder="Name" />
          <TextField placeholder="email" />
        </div>
        <div className="flex w-full gap-2">
          <TextField placeholder="subject" />
          <TextField placeholder="Mobile Number" />
        </div>
        <TextArea placeholder="text" rows={5} />
        <Btn className=" w-full">Submit</Btn>
      </div>
    </div>
  );
}