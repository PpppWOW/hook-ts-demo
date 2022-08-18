import React, {Component} from 'react';
import {Divider} from "antd";
import Article from "../Article";

class Layout extends Component {
    render() {
        return (
            <>
                <p>这是一段话</p>
                <Divider type={"horizontal"}/>
                <p>这是二段话</p>
                <Divider dashed={true} orientation={"right"} orientationMargin={50}>text</Divider>
                <p>这是三段话</p>
                <Divider/>
                <p>这是四段话</p>
            </>
        );
    }
}

export default Layout;