
import { ContactForm } from "@/components/contactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
}

export default function ContactPage() {
  return (
    <div className="h-[82vh] md:h-full flex flex-col md:justify-center gap-5">
      <div className="mx-auto w-max ">
        <h1 className="text-3xl">Contact Me</h1>
      </div>
      <div className="md:mb-20">
      <ContactForm />
      </div>
    </div>
  )
}


