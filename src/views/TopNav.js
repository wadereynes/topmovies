import React, { Component } from 'react'
import styles from "../assets/js/styles"

class TopNav extends Component {
  render() {
    return(
     
      <div style={{...styles.flexy,...styles.fadeIn,...styles.topNav,backgroundColor: this.props.active ? "rgba(10,10,10,0.95)" : ""}} className="topNav">
        {
          this.props.active ? 
          <Input 
            searhPaneToggler={this.props.searhPaneToggler} 
            value={this.props.value} 
            search={this.props.search}/>
          :
        
          <NormalMode 
            showFavs={this.props.showFavs} 
            searhPaneToggler={this.props.searhPaneToggler} 
            favMode={this.props.favMode}/>
            
        }
      </div>
     
    )
  }
}


const NormalMode=props=>{
  const [isActive, setisActive] = React.useState(false)
  return(
  

    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item text-logo monoton-font has-text-danger' style={styles.mainlogo}>
            Topmovies
        </a>

        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger has-text-danger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
             <button onClick={props.showFavs} className="button has-text-white is-white has-background-danger marginMe navbar-item">
      <span>My List</span>
       <span className="icon is-small">
      <i className="fas fa-heart has-text-white"></i>
     </span>
      </button>

      <button onClick={props.searhPaneToggler} className="button is-white marginMe navbar-item">
       <i className="fas fa-search has-text-danger"></i>
       </button>
          </div>
        </div>
      </div>
    </nav>
 
    
  )
}


const Input=props=>{
  return(
    <div className="column is-4 is-offset-4">
      <div className="field has-addons">
            
        <div className="control is-expanded">
          <input value={props.value} onChange={props.search} className="input is-danger has-text-danger has-background-black" type="text" placeholder=""/>
        </div>
        <div className="control">
          <button onClick={props.searhPaneToggler} className="button is-danger has-text-white">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopNav