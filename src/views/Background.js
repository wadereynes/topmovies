import React, { Component } from 'react'
import styles from "../assets/js/styles"
import background from "../assets/img/background.png";

class Background extends Component {
  constructor(props){
    super(props)
    this.state = {backgroundImage: false}
  }

  componentDidMount(){
    // top 5 movies for background
    this.setState({backgroundImage : this.props.feed.length>4 ? 
    this.props.feed[Math.round(Math.random()*4)][0]["im:image"][2]["label"] : ""})
  }
  render(){
    return(
      <div 
        className="shower column is-12" 
        style={{...styles.shower,backgroundImage: `url(${background})`}}>
      </div>
    )
  }
}

export default Background