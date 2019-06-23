import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css';
import Childtwo from "./childtwo"

class Childone extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <div className="width">
                Childone componenet

                <div style={{backgroundColor:this.props.color}}>
                    Color
                </div>
            </div>
            </div>
            
            
            
        )
    }
};
export default Childone;