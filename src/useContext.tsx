import React, {useContext} from "react";

export const ColorContext = React.createContext({color: '#1890ff'})
const {color} = useContext(ColorContext)