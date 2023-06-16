import Image from "next/image";
export type TskillsCart = { size: string, image: string, name?: string }
export default function SkillCard({ size, image, name }: TskillsCart) {
    return (
        <div className={"bg-white p-3 rounded-full flex flex-col text-center justify-center items-center hover:scale-110 transition-all duration-200"} style={{ width: size, height: size }}>
            <div className="relative w-2/3 h-2/3">
                <Image src={image} fill={true} alt={"skills icon"} />
            </div>
            <span className="text-black">{name}</span>
        </div>
    )
}