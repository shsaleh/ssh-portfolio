'use client';
import axios from "axios";
import { FormEvent, useState } from "react";
import TextField from "./customs/textField";
import TextArea from "./customs/TextArea";
import Btn from "./customs/btn";
import Toast, { ToastPropsType } from "./customs/toast";
import Form from "./customs/form";
import { checkNumber } from "@/app/utils/formRules";

export function ContactForm() {
    const [submitloading, setSubmitLoading] = useState(false)
    const [toast, setToast] = useState<ToastPropsType>({
        message: '',
        show: false,
        type: 'SUCCESS'
    })
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
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
            <Form method="post" handleSubmit={sendEmail} className="flex flex-col gap-2  items-center md:w-1/2 mx-auto mt-10">
                <div className="flex w-full gap-2">
                    <TextField className="w-full" Required placeholder="Name" name="name" />
                    <TextField className="w-full" Required placeholder="email" name="email" />
                </div>
                <div className="flex w-full gap-2">
                    <TextField className="w-full" placeholder="subject" name="subject" />
                    <TextField className="w-full" Required rules={
                        {
                            number: checkNumber
                        }
                    } placeholder="Mobile Number" name="mobile" />
                </div>
                <TextArea placeholder="text" rows={5} name="text" />
                <Btn type="submit" loading={submitloading} className="w-full mt-2">Submit</Btn>
            </Form>
            <Toast message={toast.message} type={toast.type} show={toast.show} onHide={() => {
                setToast({ ...toast, show: false })
            }} />
        </div>
    );
}