import React from "react";
import Image from "next/image";
export default class MainHeader extends React.Component {
  render() {
    return (
      <section>
        <div className="flex">
          <div className="">
            <h2> I AM</h2>
            <h1>SALEH SHOKOUHI</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <Image
              src={"/images/imagePlaceholder.png"}
              width={800}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
    );
  }
}
