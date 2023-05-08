import React from "react";

type TextFieldPropsType = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};
export default function TextField(props: TextFieldPropsType) {
    return (
        <>
            <input {...props} className={"text-black p-1 rounded-sm focus:outline-2 focus:outline-sky-600 outline transition-all ease-in-out duration-150 w-full" + props.className} />
        </>
    );
}