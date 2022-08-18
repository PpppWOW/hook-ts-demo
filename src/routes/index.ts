// 导入路由组件
import Home from '../views/Home'
import About from '../views/About'
// 导入路由管理工具
import {RouteConfig} from 'react-router-config'
import TodoList from "../TodoList";

const routes:RouteConfig = [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/about',
        exact:true,
        component:About
    },
    {
        path: '/todoList',
        exact: true,
        component: TodoList
    }
]

export default routes;