import {AddTask} from "../AddTask/AddTask";
import {TaskList} from "../TaskList/TaskList";
import React from "react";


export const MainTaskList: React.FC =()=>{



    return(
        <>
            <AddTask />
            <h1> Входящие</h1>
            <TaskList flag={false}/>
            <h1> Выполненные</h1>
            <TaskList flag={true}/>

        </>
    )
}