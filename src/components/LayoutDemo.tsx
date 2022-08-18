import React, {Component, useState} from 'react';
import {Layout, Menu, MenuProps} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {ItemType} from "antd/es/menu/hooks/useItems";

const items: ItemType[] = [
    {
        key: "first",
        label: "标题一",
        disabled: true
    },
    {
      key: "second",
      label: "标题二"
    },
    {
        key: "third",
        label: "标题三",
        children: [
            {
                key: "third-first",
                label: "子标题一"
            }
        ]
    }
]

const list: MenuProps["items"] = []



const LayoutDemo = () => {
    const [current, setCurrent] = useState("first")
    // MenuProps["onClick"] 等价于  MenuProps.onClick()
    const onClick: MenuProps["onClick"] = e => {
        setCurrent(e.key)
    }

    return(
        <>
            <Layout>
                <Header>
                    Header
                </Header>
                <Sider>
                    导航栏
                    <Menu items={items} onClick={onClick} selectedKeys={[current]}/>
                </Sider>
                <Content>
                    内容
                </Content>
            </Layout>


        </>
    )
}

export default LayoutDemo;