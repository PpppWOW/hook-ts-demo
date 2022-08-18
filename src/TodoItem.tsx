import React, {Component} from 'react';
import {ITodoItem} from "./TodoList";
import {TaskStatus} from "./TodoList";

interface props {
    index: number
    item: ITodoItem

    addList(): void

    handleStart(index: number): void

    handleDelete(index: number): void
}

const TodoItem: React.FC<props> = ({index, item, addList, handleDelete, handleStart}) => {

    return (
        <div>
            <div>{item.taskName}</div>
            <div>
                {item.status === TaskStatus.PENDING && <span>待开始</span>}
                {item.status === TaskStatus.IN_PROGRESS && <span>进行中</span>}
                {item.status === TaskStatus.COMPLETED && <span>已完成</span>}
            </div>
            <div>
                {item.status === TaskStatus.PENDING && (
                    <button onClick={() => handleStart(index)}>开始</button>
                )}
                {/*{item.status===TaskStatus.IN_PROGRESS && (*/}
                {/*    <button className={styles.btn} onClick={()=>handleComplete(index)}>完成</button>*/}
                {/*)}*/}
                <button onClick={() => handleDelete(index)}>删除</button>
            </div>
        </div>
    );

}

export default TodoItem