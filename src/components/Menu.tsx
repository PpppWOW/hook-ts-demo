import React, {Component, useState} from 'react';
import {Menu, MenuProps} from "antd";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';

const list: ItemType[] = [
    {label: "菜单一", key: 1},
    {label: "菜单二", key: 2},
    {
        label: "菜单三",
        key: 3,
        children: [{label: "子菜单", key: "3-1"}]
    }
]

const items: MenuProps["items"] = [
    {label: "Navigation One", key: "mail", icon: <AppstoreOutlined/>},
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined/>,
        disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined/>,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ]
    },
    {
        key: "alipay",
        label: (<a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>)

    }

]


const MenuTest: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    return <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items}/>;
}

export default MenuTest;