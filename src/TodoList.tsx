import {useEffect, useState} from "react";
import {stringify} from "querystring";
import TodoItem from "./TodoItem";

export enum TaskStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"

}


export interface ITodoItem {
    taskName: string,
    status: TaskStatus
}

export const TodoList = () =>{
    const getTask = () => {
        const taskList = localStorage.getItem("taskList")
        if (taskList) {
            return JSON.parse(taskList)
        }
        return []
    }

    const [list, setList] =  useState<Array<ITodoItem>>([]);
    const [inputValue, setValue] = useState<string>("");

    const saveTask = (item: ITodoItem[]) => {
        if (item) {
            localStorage.setItem("taskList", JSON.stringify(item))
        }
    }

    const addList = () => {
        if (!inputValue.trim()) {
            return alert("输入不能为空")
        }
        let newList: ITodoItem[] = list;
        newList.push({
            taskName: inputValue,
            status: TaskStatus.PENDING
        })
        updateList(newList)
        setValue("")
    }

    const handleStart = (index: number) => {
        let newList: ITodoItem[] = list;
        newList = newList.map((item, ind) => {
            if (ind === index) {
                return {
                    ...item,
                    status: TaskStatus.IN_PROGRESS
                }
            }
            return item
        })
        updateList(newList)
    }

    const handleDelete = (index: number) => {
        let [...newList] = list;
        newList.splice(index,1)
        updateList(newList)
    }



    const updateList = (item: ITodoItem[]) => {
        setList(item);
        saveTask(item)
    }

    // 初始化todoList
    useEffect(() => {
        const list = getTask()
        setList(list)
    },[])


    return(
        <div>
            <h1>TODO LIST</h1>
            <div>
                <input inputMode={"text"} value={inputValue} placeholder={"输入任务名"} onChange={(e)=>setValue(e.target.value)}/>
                <button onClick={addList}>添加</button>
            </div>
            <div>
                {
                    list.map((i, ind) => {
                        return <TodoItem index={ind} item={i} addList={addList} handleDelete={handleDelete} handleStart={handleStart}/>
                    })
                }
            </div>
        </div>
    )



}

export default TodoList