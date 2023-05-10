import { TextareaHTMLAttributes } from "react";

type TextFieldPropsType = TextareaHTMLAttributes<{}>
export default function TextArea(props: TextFieldPropsType) {
    return (
        <>
            <textarea {...props} className={" p-2 bg-white rounded-sm bg-opacity-0 focus:bg-opacity-10 outline-2 outline-sky-600 outline transition-all ease-in-out duration-150 w-full " + props.className} ></textarea>
        </>
    );
}