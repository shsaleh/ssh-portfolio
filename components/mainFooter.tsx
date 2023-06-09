

export default function MainFooter() {
    return (
        <div className="flex items-center md:h-[10vh] justify-between">
            <div className=" flex gap-3 justify-center md:justify-start items-center md:items-start ">
                <a href="https://www.linkedin.com/in/saleh-shokouhi-b7870418b/" target="_blank" className="rounded-full border-2 border-sky-800 text-center px-3 h-10 flex items-center justify-center hover:bg-sky-800 transition-all duration-150" >
                    <span >linkedin</span>
                </a>
                <a href="https://github.com/shsaleh" target="_blank" className="rounded-full border-2 border-sky-800 text-center px-3 h-10 flex items-center justify-center hover:bg-sky-800 transition-all duration-150" >
                    <span >github</span>
                </a>
                <a href="https://stackoverflow.com/users/5728565/saleh-shokouhi" target="_blank" className="rounded-full border-2 border-sky-800 text-center px-3 h-10 flex items-center justify-center hover:bg-sky-800 transition-all duration-150" >
                    <span >stackoverflow</span>
                </a>
            </div>
            <div>
                <span className="underline underline-offset-8 hover:text-sky-500">sh.saleh.312@gmail.com</span>
            </div>
        </div>
    )
}