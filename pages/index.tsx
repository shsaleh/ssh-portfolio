import React from "react";
import MainHeader from "components/main/mainHeader";
export default class Home extends React.Component {
  state = {
    projects: [
      { title: "proj 1", desc: "proj 1 desc", img: "" },
      { title: "proj 2", desc: "proj 2 desc", img: "" },
      { title: "proj 3", desc: "proj 3 desc", img: "" },
      { title: "proj 3", desc: "proj 3 desc", img: "" },
      { title: "proj 3", desc: "proj 3 desc", img: "" },
      { title: "proj 3", desc: "proj 3 desc", img: "" },
    ],
    programmingLnags: [
      { title: "javascript", percentage: 90 },
      { title: "PHP", percentage: 80 },
      { title: "Nodejs", percentage: 55 },
      { title: "Mysql", percentage: 75 },
      { title: "MongoDB", percentage: 57 },
    ],
  };
  render() {
    return (
      <>
        <MainHeader />
        <div className="md:mx-32 mx-16 text-textColor">
          <section className="my-16 ">
            <div className="flex items-center">
              <h2 className="text-5xl mb-5 font-bold  flex-shrink-0 me-5 align-middle">
                My story
              </h2>
              <div className="border-t-2 border-gray-300 w-full"></div>
            </div>
            <p className="text-2xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              maxime saepe adipisci perspiciatis, quia, mollitia tempore
              reprehenderit temporibus sunt aliquam suscipit sint esse quaerat
              facere quae similique quos, debitis inventore? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Voluptas amet reiciendis
              hic temporibus id, animi fugit dolore eius odit error ullam
              consequatur possimus cumque cupiditate, quaerat, unde earum
              distinctio atque.F Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Impedit sed rem fugiat repellat rerum ad amet
              repudiandae animi obcaecati dolor doloremque veniam, atque
              veritatis est accusamus exercitationem corrupti ipsum non! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Eos hic
              perspiciatis incidunt necessitatibus voluptas consectetur quas
              architecto iste dolor. Possimus, tenetur animi accusamus harum
              similique ipsa praesentium voluptates deserunt cumque.
            </p>
          </section>
          <section className="my-16">
            <div className="flex items-center mb-5">
              <h2 className="text-5xl mb-5 font-bold  flex-shrink-0 me-5 align-middle">
                Projects
              </h2>
              <div className="border-t-2 border-gray-300 w-full "></div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 w-full">
              {this.state.projects.map((proj, item) => {
                return (
                  <div
                    key={item + "proj"}
                    className="z-20 grid bg-local bg-contain w-full bg-no-repeat group  "
                  >
                    <div className="bg-gray-100 opacity-70 transition-all duration-500 ease-in-out col-start-1  row-start-1 z-10 place-self-end w-full overflow-hidden h-0 px-8 group-hover:py-8 group-hover:h-28">
                      <h1>{proj.title}</h1>
                      <p>{proj.desc}</p>
                      <div className="max-h-full h-auto"></div>
                    </div>
                    <img
                      className="z-0 col-start-1 row-start-1"
                      src={proj.img ? proj.img : "/images/imagePlaceholder.png"}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </section>
          <section>
            <div className="flex items-center mb-5">
              <h2 className="text-5xl mb-5 font-bold  flex-shrink-0 me-5 align-middle">
                programming langs
              </h2>
              <div className="border-t-2 border-gray-300 w-full"></div>
            </div>
            <div>
              <ul className="">
                {this.state.programmingLnags.map((item, index) => {
                  return (
                    <li
                      key={index + "programmingLang"}
                      className="grid grid-cols-3 items-center my-3 w-full text-3xl"
                    >
                      <span>{item.title}</span>
                      <div className="col-start-2 overflow-hidden rounded-lg col-end-5 h-3 mt-2 border-2 border-gray-400">
                        <div
                          className={`bg-gradient-to-r from-blue-500 to-green-400 rounded-lg h-full`}
                          style={{
                            width: item.percentage + "%",
                          }}
                        ></div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </>
    );
  }
}
