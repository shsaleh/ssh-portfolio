'use client';
import axios from "axios";
import { FormEvent, useState } from "react";
import TextField from "./customs/textField";
import TextArea from "./customs/TextArea";
import Btn from "./customs/btn";
import Toast, { ToastPropsType } from "./customs/toast";

export function ContactForm() {
    const [submitloading, setSubmitLoading] = useState(false)
    const [toast, setToast] = useState<ToastPropsType>({
        message: '',
        show: false,
        type: 'SUCCESS'
    })
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitLoading(true)
        let data = new FormData(e.currentTarget);
        var object: any = {};
        data.forEach((value, key) => object[key] = value);
        axios.post('/api/sendEmail', object).then(res => {
            setToast({
                message: 'The email has been successfully sent.',
                show: true,
                type: 'SUCCESS'
            })
        }).catch(error => {
            console.log(error);

            setToast({
                message: 'Sending the email encountered an error.',
                show: true,
                type: 'ERROR'
            })
        }).finally(() => {
            setSubmitLoading(false)
        })
    }
    return (
        <div className=" flex flex-col md:justify-center">
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
            <Toast message={toast.message} type={toast.type} show={toast.show} onHide={() => {
                setToast({ ...toast, show: false })
            }} />
        </div>
    );
}