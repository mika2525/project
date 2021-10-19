import React from "react";
import "./style.css";

var divStyle = {
  color: 'black',
  height: '50px',
  width: '100px',
  backgroundColor: "white",  
};


class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '20'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);      
    }  
    handleChange(event) {    this.setState({value: event.target.value});  }    
    handleSubmit(event) {    
    event.preventDefault();
    }  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>            
            <select style={divStyle} value={this.state.value} onChange={this.handleChange}>              
              <option value="20">20</option>
              <option value="10">10</option>
              <option value="8">8</option>
              <option value="6">6</option>
            </select>
          </label>         
        </form>
      );
    }
  }
export default FlavorForm;