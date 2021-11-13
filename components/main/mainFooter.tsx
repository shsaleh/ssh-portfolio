import React from "react";

export default class MainFooter extends React.Component {
    state = {
        github: 'https://github.com/shsaleh/ssh-portfolio',
        email: 'pgulf.611@gmail.com',
        tell: '09355839880'
    }

    render() {
        return (
            <footer>

                <div className="flex justify-center xl:justify-between flex-wrap py-7">
                    <div className="w-2/3 min-w-max text-center xl:text-start">
                        <span>GitHub : </span>
                        <span className="text-link">{this.state.github}</span>
                    </div>
                    <div className="flex justify-between w-1/3 min-w-max">
                        <span className="min-w-max">Email : {this.state.email}</span>
                        <span className="min-w-max">Tell : {this.state.tell}</span>
                    </div>
                </div>
            </footer>
        )
    }
}