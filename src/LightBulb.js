import React, { Component } from 'react';
import './LightBulb.css'



class LightBulb extends Component{
  render(){
    return(
      <div className="LightBulb">
      <img src={this.props.info} />
      </div>
    );
  }
}



export default LightBulb;
