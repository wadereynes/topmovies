import React from 'react'

import styles from "../assets/js/styles"

const Modal = props=>{
  let hideModal = props.hideModal
  let data = props.data
  return(
    <div className="modal is-active" style={styles.fadeIn}>
    <div className="modal-background" onClick={hideModal}></div>
      <div className="modal-content" style={{maxWidth:"420px", borderRadius:"4px", overflowX: "hidden"}}>
        <div className="card">
          {!props.showingMovies ? 
          <div className="card-content">
            <p className="title has-text-black">
              {data.title}
            </p>
            <img src={data.cover} alt="" style={{display: "block",minWidth: "172px", margin: "20px auto", ...styles.fadeIn}}/>
            <p className="has-text-centered help">
            <b>Released</b> <br/> {data.releaseDate} <br/>
            <b> Summary</b> <br/> {data.summary}
            </p>
          </div>:
          <div className="card-content">
            <p className="title has-text-black">
              {data.title}
            </p>
            
          </div>}
          <div className="card-footer">
            <a href={data.href} target="_blank" className="card-footer-item has-text-dark">
              Buy for {data.price}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal