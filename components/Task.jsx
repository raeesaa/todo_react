import React from "react";

export default class Task extends React.Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.props.handleDoneStateChange(event.target.checked);
    }

    render() {
        return (<li className="list-group-item">
                    <input
                    name="isDone"
                    type="checkbox"
                    checked={false}
                    onChange={this.handleInputChange} />
                    <span className="margin-left-5">{this.props.value}</span>
                </li>);
    }
}