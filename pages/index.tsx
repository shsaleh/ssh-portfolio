import React from "react";
import MainHeader from "components/main/mainHeader";
export default class Home extends React.Component {
  render() {
    return (
      <>
        <MainHeader />
        <section className="my-16 mx-32">
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
            facere quae similique quos, debitis inventore? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptas amet reiciendis hic
            temporibus id, animi fugit dolore eius odit error ullam consequatur
            possimus cumque cupiditate, quaerat, unde earum distinctio atque.F
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            sed rem fugiat repellat rerum ad amet repudiandae animi obcaecati
            dolor doloremque veniam, atque veritatis est accusamus
            exercitationem corrupti ipsum non! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Eos hic perspiciatis incidunt
            necessitatibus voluptas consectetur quas architecto iste dolor.
            Possimus, tenetur animi accusamus harum similique ipsa praesentium
            voluptates deserunt cumque.
          </p>
        </section>
      </>
    );
  }
}
