import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Modal from "./Modal"
import styles from "../assets/js/styles"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
    { width: 1366, itemsToShow: 6 },
  ];

  class MovieCarousel extends Component{
    constructor(props){
      super(props)
      this.state = {modalIsActive : false, showingMovies: false, modalData:{title:"", cover:"",href:"" , movieId: "", price: "", releaseDate: "", summary: ""}}
      this.showModal = this.showModal.bind(this)
      this.hideModal = this.hideModal.bind(this)
      this.showMovies = this.showMovies.bind(this)
    }
  
    componentDidMount(){
      window.addEventListener("resize", _=>{
        if(window.innerWidth<769){
          this.hideModal()
        }
      })
    }
    
    showModal(title,cover,href,movieId, price,releaseDate, summary){
      this.setState({modalIsActive : true, modalData:{title: title, cover: cover, href: href, movieId: movieId, price: price, releaseDate: releaseDate, summary: summary}})
      document.querySelector(".searchStatus").classList.add("noOverFlow")
      document.querySelector(".topNav").classList.add("modalUp")
    }
   
    hideModal(){
      this.setState({modalIsActive : false, showingMovies: false})
      document.querySelector(".searchStatus").classList.remove("noOverFlow")
      document.querySelector(".topNav").classList.remove("modalUp")
    }
  
    showMovies(){
      this.setState({showingMovies : !this.state.showingMovies})
    }
  
    render(){
      return(
      <div className={"has-background-black searchStatus " + (this.props.active ? "active" : "")} style={{...styles.pane,...styles.fadeIn}}>
          
        <div className="column is-12">
            <div className='carouselItem'>
                <Carousel breakPoints={breakPoints} pagination={false} itemPadding={[10, 30]}>
                    {           
                    this.props.feed.length>0 ?
                    Object.keys(this.props.feed).map(e=>{
                    let feed = this.props.feed[e][0]
                    let movieId = feed["id"]["attributes"]["im:id"]
                    return (
                        
                        <Item  
                        name={feed["im:name"]["label"]} 
                        artist={feed["im:artist"]["label"]} 
                        key={e} 
                        pos={this.props.feed[e][1]} 
                        cover={feed["im:image"][2]["label"]} 
                        summary={feed["summary"]["label"]} 
                        showModal={this.showModal} 
                        movieId={movieId}
                        price={feed["im:price"]["label"]} 
                        title={feed["title"]["label"]}
                        releaseDate={feed["im:releaseDate"]["attributes"]["label"]}
                        favId={window.favs.hasFav(movieId) ? movieId : false} 
                        bindFavs={this.props.bindFavs}/>
                        
                        )
                        
                    }) :<div className="itemBox has-text-centered">
                        Sorry, but I couln't find the movie you're looking for <i className="fas fa-sad-cry is-size-5"></i>
                        </div>
                    }
                </Carousel>
            </div>
        </div>
        
        {this.state.modalIsActive ?
          <Modal 
            active={this.state.modalIsActive} 
            showMovies={this.showMovies} 
            showingMovies={this.state.showingMovies}
            data={this.state.modalData}
            hideModal={this.hideModal}/> : null}
      </div>
      )
    }
  }
  
  export default MovieCarousel
