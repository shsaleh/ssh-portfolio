import React from "react";
import Link from "next/link";
interface propsType {
  className?: string;
}
export class MainMenu extends React.Component<propsType> {
  state: { menu: Array<{ title: string; url: string }> } = {
    menu: [
      { title: "Projects ", url: "/projects" },
      { title: "Blog ", url: "/blog" },
      { title: "About Me ", url: "/About-Me" },
      { title: "Contact Information ", url: "/Contact-Information" },
    ],
  };
  constructor(props: propsType) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className}>
        <ul className="flex ">
          {this.state.menu.map((item, index) => (
            <li className="me-5" key={index + "mainMenu"}>
              <Link href={item.url}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
