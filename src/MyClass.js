import React, {Component} from "react";
import Button from "./button";

class MyClass extends Component {
    state={
        name:"Nil"
    }

    handleClick = e => {
        this.setState({name:"Nilesh"});
    };
    render() {
        return (
            <div>
                <Button myFunction={this.handleClick}/>
                <div>{this.props.greeting}</div>
                <div>{this.state.name}</div>
            </div>
        );
    }
}

export default MyClass;