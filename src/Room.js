import React, { Component } from 'react';
import LightBulb from './LightBulb';
import './Room.css'


class Room extends Component{

  constructor(props){
    super(props);
    this.state = {
      isOn:"http://clipart-library.com/images/pi7rqaAxT.jpg",
      isOff:"http://pluspng.com/img-png/light-bulb-png-hd-light-bulb-light-bulb-light-bulb-png-image-260.jpg"
    }
    this.flipSwitchOn = this.flipSwitchOn.bind(this);
    this.flipSwitchOff = this.flipSwitchOff.bind(this);
  }
  
  flipSwitchOn(){
    this.setState(st=>{
      return{
        isOn: "https://freepngimg.com/thumb/bulb/4-yellow-light-bulb-png-image.png",
        isOff: "http://clipart-library.com/images/pi7rqaAxT.jpg"
      };
    });
  }
  flipSwitchOff(){
    this.setState(st=>{
      return{
        isOn: "http://clipart-library.com/images/pi7rqaAxT.jpg",
        isOff: "https://freepngimg.com/thumb/bulb/4-yellow-light-bulb-png-image.png"
      };
    });
  }


  render(){
    return(
      <div className="Room">
      <h1>Light Bulb</h1>
      { this.state.isOn ? <LightBulb info={this.state.isOn} /> : <LightBulb info={this.state.isOff} />}
      <button className="btn-on" onClick={this.flipSwitchOn}>On</button>
      <button className="btn-off" onClick={this.flipSwitchOff}>off</button>
      </div>
    );
  }
}





export default Room;
