import React, {Component} from 'react';
import "./display.css";

class Display extends Component {
    render(){
    	return(
    		<div className="display">
    		  {this.props.data}
    		</div>
    	)
    }
}

export default Display