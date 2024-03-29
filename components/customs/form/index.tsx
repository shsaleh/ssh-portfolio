'use client';
import React, { FormHTMLAttributes } from "react";
import { createContext } from 'react';
import { UseFormReturn, useForm } from "react-hook-form";
type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>

export const formContext = createContext<AtLeast<UseFormReturn, 'register' | 'formState'> | null>(null);
export default function Form(props: FormHTMLAttributes<{}> & { handleSubmit: Function }) {
    const { children } = props
    const {
        register,
        handleSubmit,
        formState,
    } = useForm();
    return (
        <formContext.Provider value={{ register, formState }}>
            <form {...props} onSubmit={handleSubmit((d) => props.handleSubmit(d))}>
                {children}
            </form>
        </formContext.Provider>
    )
}