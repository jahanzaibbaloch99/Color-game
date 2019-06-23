import React, {Component} from "react";
import ReactDOM from "react-dom";
import './App.css';




class Props extends React.Component{
    constructor (props){
        super(props)
    }

    render(){
        return(
            <div>
               <div style={{ backgroundColor: this.props.color }} className="width" >
                   Props Color
                </div> 

               
             </div>
        );
    }
    
};

export default Props