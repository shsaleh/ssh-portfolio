'use client';
import React, { InputHTMLAttributes, useContext } from "react";
import { formContext } from '../form';

type TextFieldPropsType = InputHTMLAttributes<{}>
export default function TextField(props: TextFieldPropsType & { Required?: boolean, rules?: { [key: string]: (value: string) => string | boolean } }) {
    const context = useContext(formContext)
    if (context) {
        const { register, formState } = context;
        return (
            <>
                <div className={props.className}>
                    <input {...(props.name && register(props.name, {
                        required: props.Required,
                        ...(props.rules && { validate: props.rules }),
                    }))} {...props} className={"w-full p-2 bg-white rounded-sm bg-opacity-0 focus:bg-opacity-10 outline-2 outline-sky-600 outline transition-all ease-in-out duration-150"} />
                    <span className='whitespace-pre'>{props.name && formState.errors[props.name]?.message as string} </span>
                </div>
            </>
        );
    } else {
        throw new Error('context is null')
    }
}