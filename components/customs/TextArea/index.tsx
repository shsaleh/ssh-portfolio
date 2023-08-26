'use client';
import { TextareaHTMLAttributes, useContext } from "react";
import { formContext } from '../form';

type TextFieldPropsType = TextareaHTMLAttributes<{}>
export default function TextArea(props: TextFieldPropsType & { Required?: boolean, rules?: { [key: string]: (value: string) => string | boolean } }) {
    const context = useContext(formContext)
    if (context) {
        const { register, formState } = context;
        return (
            <>
                <textarea {...(props.name && register(props.name, {
                    required: props.Required,
                    ...(props.rules && { validate: props.rules }),
                }))} {...props} className={" p-2 bg-white rounded-sm bg-opacity-0 focus:bg-opacity-10 outline-2 outline-sky-600 outline transition-all ease-in-out duration-150 w-full " + props.className} ></textarea>
                <span className='whitespace-pre'>{props.name && formState.errors[props.name]?.message as string} </span>
            </>
        )
    } else {
        throw new Error('context is null')
    }
}