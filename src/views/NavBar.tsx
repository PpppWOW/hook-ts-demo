import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper">
                <div className="list">
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href={'/about'}>About</a></li>
                        <li><a href={"/todoList"}>TODOList</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar