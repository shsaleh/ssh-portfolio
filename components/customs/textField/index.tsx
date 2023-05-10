import React, { InputHTMLAttributes } from "react";

type TextFieldPropsType = InputHTMLAttributes<{}>
export default function TextField(props: TextFieldPropsType) {
    return (
        <>
            <input {...props} className={" p-2 bg-white rounded-sm bg-opacity-0 focus:bg-opacity-10 outline-2 outline-sky-600 outline transition-all ease-in-out duration-150 w-full " + props.className} />
        </>
    );
}