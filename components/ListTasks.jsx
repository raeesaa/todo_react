import React from "react";
import Task from "./Task.jsx";

export default class ListTasks extends React.Component {
    
    handleItemDoneStateChange(index, isDone) {
        this.props.handleItemDoneStateChange(index, isDone);
    }
    
    render() {
        const tasks = this.props.tasks.map((task, index) => {
            return (<Task key={index} index={index} value={task} handleDoneStateChange={(isDone) => this.handleItemDoneStateChange(index, isDone)}/>)
        });

        return(<ul className="list-group">{tasks}</ul>)
    }
}