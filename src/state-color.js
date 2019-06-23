import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css';
import Props from "./props"
import Childone from "./child-one"
import Childtwo from "./childtwo";

class Scolor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            background: "white",
        }
    }

    ChangeColor = (a) => {
        this.setState({
            background:a
        })
    }


    render() {
        return (
            // <div>
            //     <div ClassName="width" style={{ backgroundColor: this.state.background }} >
            //         State Color
            //     </div>

            //     <div>
            //         <button onClick={() => this.ChangeColor("red")}
            //             style={{ backgroundColor: "red" }} >Red</button>
            //         <button onClick={() => this.ChangeColor("white")}
            //          style={{ backgroundColor: "white" }}>White</button>
            //         <button onClick={() => this.ChangeColor("green")}
            //          style={{ backgroundColor: "green" }}>Green</button>
            //         <button onClick={() => this.ChangeColor("yellow")}
            //          style={{ backgroundColor: "yellow" }}> yellow </button>
            //         <button onClick={() => this.ChangeColor("maroon")}
            //          style={{ backgroundColor: "maroon" }} > Maroon</button>
            //     </div>

            //     <Props color={this.state.background} />
            // </div>
        
        <div className="App" >
            <div>
                Parent Component
            </div>

            <Childone color={this.state.background}/>
            <Childtwo colorChange={this.ChangeColor}/>
        </div>
        
        
        
            );
    }

};

export default Scolor