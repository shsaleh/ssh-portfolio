'use client';

import { useEffect, useState } from "react";

// todo define colors to tailwind colors
const color = {
    ERROR: 'bg-red-700',
    WARNING: 'bg-orange-700',
    SUCCESS: 'bg-green-700',
}
export type ToastPropsType = {
    message: string,
    duration?: number,
    type: 'ERROR' | 'SUCCESS' | 'WARNING',
    show?: boolean
    onHide?: () => void
}

//todo show multiple toast at the same time
export default function Toast({ message, duration = 3000, type = 'SUCCESS', show = false, onHide }: ToastPropsType) {

    const [showToast, setShowToast] = useState(false)
    useEffect(() => {
        setShowToast(show)
        if (show) {
            setTimeout(() => {
                setShowToast(false)
                if (onHide) {
                    onHide()
                }
            }, duration);
        }

        return () => {

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show])

    return (
        <div className={`p-2 rounded-sm w-max fixed bottom-2 transition-all duration-250 ease-in-out ${color[type]} ${showToast ? 'left-2' : '-left-full'}`}>
            {message}
        </div>
    )
}