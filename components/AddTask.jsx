import React from "react";

//Controlled component for input element that will be used for adding task
export default class AddTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoItem: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    changeHandler(event) {
        this.setState({
            todoItem: event.target.value
        });
    }

    clickHandler(event) {
        const todoItem = this.state.todoItem;
        if (todoItem && todoItem.trim()) {
            this.props.itemAddHandler(todoItem);
            //Set todoItem in state to null when add button is clicked
            this.setState({
                todoItem: ''
            });
        }
    }

    render() {
        return (<div className="form-group row">
            <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Please add task!"
                    value={this.state.todoItem}
                    onChange={this.changeHandler}
                />
            </div>
            <div className="col-sm-2">
                <a
                    href="#"
                    className="btn btn-default"
                    onClick={this.clickHandler}>Add</a>
            </div>
        </div>);
    }

}
