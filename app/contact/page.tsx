import TextField from "@/components/customs/textField";

export default function ContactPage() {
  return (
    <div className=" h-screen md:h-auto">
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia labore, at molestiae placeat ullam maiores consectetur omnis cumque ipsum fuga laborum cum ex magnam, porro animi quod facilis repellendus?</p>
     <div className="flex flex-col gap-5  items-center md:w-1/2 mx-auto mt-10">
     <TextField label="Name" placeholder="Name" className="" />
      <TextField label="Company" placeholder="Company" className="" />
      <TextField label="Mobile Number" placeholder="Mobile Number" className="" />
      <button className="bg-sky-600 text-white p-2 rounded-sm w-full">Submit</button>
     </div>
    </div>
  );
}