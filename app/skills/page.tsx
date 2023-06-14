import SkillCard, { TskillsCart } from "@/components/skillCard";

export default function SkillsPage() {
    const size = '150px'
    const skills: Array<TskillsCart & { number: number }> = [
        {
            number: 1,
            image: '/assets/icons/nextjs-icon.png',
            name: "next.js",
            size
        },
        {
            number: 1,
            image: "/assets/icons/nestjs.png",
            name: "nest.js",
            size
        },
    ]
    return (
        <section>
            <div className="flex gap-5">
                {
                    skills.map((item, index) => {
                        return (
                            <div key={item.number}>
                                <SkillCard size={size} image={item.image} name={item.name} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}