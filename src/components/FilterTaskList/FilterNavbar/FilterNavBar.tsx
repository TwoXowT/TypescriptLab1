import React from "react";
import {TaskList} from "../../TaskList/TaskList";


export const FilterNavbar: React.FC = () => {

    return (
        <>
            <h1> Current task</h1>
            <TaskList flag={false}/>
            <h1> Done task</h1>
            <TaskList flag={true}/>
        </>
    )
}