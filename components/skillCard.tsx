import Image from "next/image";
export type Tskills = { image: string, name?: string, type?: SKILL_CARD_TYPES }
export enum SKILL_CARD_TYPES {
    ROUNDED = 'ROUNDED',
    SIMPLE = 'SIMPLE'
}
export type TskillsCard = Tskills & { size: string, type?: SKILL_CARD_TYPES }

export default function SkillCard({ size, image, name, type = SKILL_CARD_TYPES.ROUNDED }: TskillsCard) {
    return (
        <div className={` ${type === SKILL_CARD_TYPES.ROUNDED ? 'rounded-full bg-white p-3' : ''} flex flex-col text-center justify-center items-center hover:scale-110 transition-all duration-200`} style={{ width: size, height: size }}>
            <div className={`${name ? 'w-2/3 h-2/3' : 'w-full h-full'} relative `}>
                <Image src={image} fill={true} alt={"skills icon"} />
            </div>
            <span className={`${type === SKILL_CARD_TYPES.ROUNDED ? 'text-gray-900' : ' '}`}>{name}</span>
        </div>
    )
}