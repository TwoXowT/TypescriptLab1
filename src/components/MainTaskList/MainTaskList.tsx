import {AddTask} from "../AddTask/AddTask";
import {TaskList} from "../TaskList/TaskList";
import React from "react";


export const MainTaskList: React.FC =()=>{



    return(
        <>
            <AddTask />
            <h1> Current task</h1>
            <TaskList flag={false}/>
            <h1> Done task</h1>
            <TaskList flag={true}/>

        </>
    )
}