'use client';
import React from "react";

export default function Btn(props: React.ButtonHTMLAttributes<{}> & { outlined?: boolean }) {
    return (
        <>
            <button  {...props} className={'bg-sky-600 text-white p-2 rounded-sm active:bg-sky-800 transition-all duration-75 ease-in-out ' + (props.outlined ? 'bg-transparent border border-sky-800 text-sky-800 px-5 py-2 rounded-md hover:border-sky-900 hover:text-sky-900 ' : ' ') + props.className}></button>
        </>
    )
}