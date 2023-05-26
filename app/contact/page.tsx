
import { ContactForm } from "@/components/contactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
}

export default function ContactPage() {
  return (
    <div className="h-screen md:h-[80vh] ">
      <div className="mx-auto w-max ">
        <h1 className="text-3xl">Contact Me</h1>
      </div>
      <ContactForm />
    </div>
  )
}


