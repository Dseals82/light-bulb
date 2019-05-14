import React, { Component } from 'react';
import LightBulb from './LightBulb';
import {choice} from './helpers';
import './Room.css'


class Room extends Component{
  // static defaultProps = {
  //   lightswitch: [
  //     {on: 'on', imgSrc:"http://pluspng.com/img-png/light-bulb-png-hd-light-bulb-light-bulb-light-bulb-png-image-260.jpg"},
  //     {off: 'off', imgSrc:"http://pluspng.com/img-png/light-bulb-png-hd-light-bulb-light-bulb-light-bulb-png-image-260.jpg97"}
  //   ]
  // }
  constructor(props){
    super(props);
    this.state = {
      isOn:"http://clipart-library.com/images/pi7rqaAxT.jpg",
      isOff:"http://pluspng.com/img-png/light-bulb-png-hd-light-bulb-light-bulb-light-bulb-png-image-260.jpg"
    }
    this.handleClick = this.handleClick.bind(this);
    this.flipSwitchOff = this.flipSwitchOff.bind(this);
  }
  flipSwitch(){
    // const lightState = choice(this.props.lightswitch);
    this.setState(st=>{
      return{
        isOn: "https://freepngimg.com/thumb/bulb/4-yellow-light-bulb-png-image.png",
        isOff: "http://clipart-library.com/images/pi7rqaAxT.jpg"

      }

    })

  }
  flipSwitchOff(){
    // const lightState = choice(this.props.lightswitch);
    this.setState(st=>{
      return{
        isOn: "http://clipart-library.com/images/pi7rqaAxT.jpg",
        isOff: "https://freepngimg.com/thumb/bulb/4-yellow-light-bulb-png-image.png"


      }

    })

  }

  handleClick(){
    this.flipSwitch();
  }

  render(){
    return(
      <div className="Room">
      <h1>Light Bulb</h1>
      { this.state.isOn ? <LightBulb info={this.state.isOn} /> : <LightBulb info={this.state.isOff} />}
      <button className="btn-on" onClick={this.handleClick}>On</button>
      <button className="btn-off" onClick={this.flipSwitchOff}>off</button>
      </div>
    );
  }
}





export default Room;
