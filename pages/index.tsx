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
  };
  render() {
    return (
      <>
        <MainHeader />
        <div className="md:mx-32 mx-16">
          <section className="my-16 ">
            <div className="flex items-center">
              <h2 className="text-5xl mb-5 font-bold text-textColor flex-shrink-0 me-5 align-middle">
                My story
              </h2>
              <div className="border-t-2 border-gray-300 w-full"></div>
            </div>
            <p className="text-2xl text-textColor">
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
              <h2 className="text-5xl mb-5 font-bold text-textColor flex-shrink-0 me-5 align-middle">
                Projects
              </h2>
              <div className="border-t-2 border-gray-300 w-full "></div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 w-full">
              {this.state.projects.map((proj) => {
                return (
                  <div className="z-20 grid bg-local bg-contain w-full bg-no-repeat group  ">
                    <div className="bg-gray-100 opacity-70 transition-all duration-500 ease-in-out col-start-1  row-start-1 z-10 place-self-end w-full overflow-hidden h-0 px-8 group-hover:py-8 group-hover:h-28">
                      <h1>{proj.title}</h1>
                      <p>{proj.desc}</p>
                      <div className="max-h-full h-auto"></div>
                    </div>
                    <img
                      className="z-0 col-start-1 row-start-1"
                      src={proj.img?proj.img:"/images/imagePlaceholder.png"}
                      alt=""
                    />
                  </div>
                );
              })}

           
            </div>
          </section>
        </div>
      </>
    );
  }
}
