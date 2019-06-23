import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css';


class Childtwo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.colorChange("red")}
                    style={{ backgroundColor: "red" }} >Red</button>
                <button onClick={() => this.props.colorChange("white")}
                    style={{ backgroundColor: "white" }}>White</button>
                <button onClick={() => this.props.colorChange("green")}
                    style={{ backgroundColor: "green" }}>Green</button>
                <button onClick={() => this.props.colorChange("yellow")}
                    style={{ backgroundColor: "yellow" }}> yellow </button>
                <button onClick={() => this.props.colorChange("maroon")}
                    style={{ backgroundColor: "maroon" }} > Maroon</button>
            </div>

        )
    }
};
export default Childtwo;