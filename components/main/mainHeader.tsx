import React from "react";
import { MainMenu } from "./mainMenu";
import Link from "next/link";

export default class MainHeader extends React.Component {

  state={
    name:'I AM jane doe',
    title:'full stack web developer'
  }
  render() {
    return (
      <section className="text-white h-56 sm:h-[400px] md:h-[500px]  lg:h-screen">
        <div className=" absolute w-full  ">
          <img
          
            className="xl:object-fill xl:w-screen xl:h-screen"
            src={
              "/images/thisisengineering-raeng-64YrPKiguAE-unsplash1920-1080.png"
            }
            alt="Picture of the author"
          />
          <div className="w-full absolute top-0  h-full flex z-0">
            <div className="w-1/3 h-full opacity-70 bg-black"></div>
            <div className="w-2/3 h-full opacity-70 bg-gradient-to-r from-black"></div>
          </div>
        </div>
        <div className="relative z-10 flex sm:px-14 px-3 pt-11 justify-between">
          <MainMenu />
          <span>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </span>
        </div>

        <div className="flex items-center h-5/6 ps-16 sm:ps-18 ">
          <div className="relative z-10 ">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl">
                {this.state.name.toLocaleUpperCase()}
              </h1>
              <h2 className="text-xs sm:text-xl lg:text-3xl mt-4">
               {this.state.title.toLocaleUpperCase()}
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
