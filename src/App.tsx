import Article from "./Article";
import Counter from "./Counter";
import TextInput from "./TextInput";
import UseReducer from "./UseReducer";
import TodoList from "./TodoList";
// 引入路由导航栏
import Navbar from "./views/NavBar";

// export class App extends Component {
//   render() {
//     return (
//         <div>
//           {/*<Article title={"仙逆"} content={"这是一个...."}/>*/}
//           {/*<Counter/>*/}
//           {/*<TextInput/>*/}
//           {/*<UseReducer x={2}/>*/}
//             <Navbar/>
//         </div>
//     );
//   }
// }


// 引入routes组件
import routes from "./routes";
// 引入包管理工具
import { renderRoutes, RouteConfig } from "react-router-config";


// function App() {
//     return (
//         <div className="App">
//             <Navbar />
//
//             {/* 设置routes的类型为RouteConfig[]，否则报错 */}
//             {renderRoutes(routes as RouteConfig[])}
//         </div>
//     );
// }
import React from "react";
import "./App.css";
import {Button} from "antd";
import Antd from "./antd/Antd";


const App: React.FC = () => (
    // <div className={"App"}>
    //     <Button type={"primary"}>Button</Button>
    // </div>
    <div>
        <Antd/>
    </div>
)

export default App;

// import React, { useContext } from 'react'
// import Example from "./MixStateAndDispatch";
//
// const ColorContext = React.createContext<string>('')
//
// const App = () => {
//     return (
//         <ColorContext.Provider value='#1890ff'>
//             <Example/>
//             <Father/>
//         </ColorContext.Provider>
//     )
// }
//
// const Father = () => {
//     return (
//         <Child />
//     )
// }
//
// const Child = () => {
//     const color = useContext(ColorContext)
//     return (
//         <div style={{ backgroundColor: color }}>Background color is: { color }</div>
//     )
// }
//
// export default App;
