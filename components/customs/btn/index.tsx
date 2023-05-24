'use client';
import React from "react";
import { Spinner } from "../spinner";

export default function Btn(props: React.ButtonHTMLAttributes<{}> & { outlined?: boolean, loading?: boolean }) {
    return (
        <>
            <button  {...props} className={'bg-sky-600 text-white p-2 rounded-sm active:bg-sky-800 transition-all duration-75 ease-in-out text-center '
                + (props.outlined ? 'bg-transparent border border-sky-800 text-sky-800 px-5 py-2 rounded-md hover:border-sky-900 hover:text-sky-900 ' : ' ')
                + (props.loading ? 'flex justify-center' : ' ')
                + props.className} >
                {props.loading ? <Spinner /> : props.children}
            </button>
        </>
    )
}