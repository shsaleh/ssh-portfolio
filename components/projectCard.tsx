import SkillCard from "./skillCard"

export default function ProjectCard() {

    return (
        <div>
            <div>
                <span>tamuk.ir</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae asperiores, animi eius voluptatem sunt ullam? Vitae vero provident mollitia autem, tempora, alias natus explicabo, soluta veritatis qui deserunt consequuntur.</p>
                <div className="mt-2">{
                    Array.from(Array(10).keys()).map(key => {
                        return (
                            <div key={key}>
                                <SkillCard image="/assets/icons/reactjs-icon.png" size="80px" />
                            </div>
                        )
                    })
                }</div>
            </div>
        </div>
    )

}