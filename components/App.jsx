import React from "react";
import AddTask from "./AddTask.jsx";
import ListTasks from "./ListTasks.jsx";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        }
    }

    handleItemAdd(item) {
        let items = this.state.todoItems;

        this.setState({
            todoItems: items.concat(item)
        });
    }
    
    handleItemDoneStateChange(index, isDone) {
        let items = this.state.todoItems;

        //If done, remove item from list
        if(isDone) {
            console.log(items);
            items.splice(index, 1);
            console.log(items);

            this.setState({
                todoItems: items
            });
        }
    }

    render() {

        return (<div>
                    <h1 className="text-center">TODO LIST</h1>
                    <AddTask itemAddHandler={(item) => this.handleItemAdd(item)} />
                    <ListTasks tasks={this.state.todoItems} handleItemDoneStateChange={(index, isDone) => this.handleItemDoneStateChange(index, isDone)}/>
                </div>);
    }
}