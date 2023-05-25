'use client';
import TextArea from "@/components/customs/TextArea";
import Btn from "@/components/customs/btn";
import TextField from "@/components/customs/textField";
import axios from "axios";
import { Metadata } from "next";
import { FormEvent, useState } from "react";

export const metadata: Metadata = {
  title: "contact",
}
function ContactPage() {
  const [submitloading, setSubmitLoading] = useState(false)
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitLoading(true)
    let data = new FormData(e.currentTarget);
    var object: any = {};
    data.forEach((value, key) => object[key] = value);
    axios.post('/api/sendEmail', object).then(res => {

    }).finally(() => {
      setSubmitLoading(false)
    })
  }
  return (
    <div className=" h-screen md:h-[80vh] flex flex-col md:justify-center">
      <div className="mx-auto w-max">
        <h1 className="text-3xl">Contact Me</h1>
      </div>
      <form method="post" onSubmit={sendEmail} className="flex flex-col gap-5  items-center md:w-1/2 mx-auto mt-10">
        <div className="flex w-full gap-2">
          <TextField placeholder="Name" name="name" />
          <TextField placeholder="email" name="email" />
        </div>
        <div className="flex w-full gap-2">
          <TextField placeholder="subject" name="subject" />
          <TextField placeholder="Mobile Number" name="mobile" />
        </div>
        <TextArea placeholder="text" rows={5} name="text" />
        <Btn loading={submitloading} className="w-full">Submit</Btn>
      </form>
    </div>
  );
}

export default ContactPage