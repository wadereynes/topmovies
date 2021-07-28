const styles  = {
  container: {
    position: "relative",
  },
  pane: {
    overflowX: "hidden",
    MozUserSelect:"none",
    WebkitUserSelect:"none",
    userSelect:"none",
    width:'100%',
  },
  flexy:{
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width:'100%',
  },
  topNav:{
    position: "absolute",
    top: 0,
    width: "100%",
    justifyContent: "flex-start",
    padding: "1rem"
  },
  box:{
    padding: "1rem 0",
    position: "relative"
  },
  boxTitle:{
    cursor: "pointer",
    marginBottom: 0,
    '&:hover': {
      color: '#E50914',
    },
  },
  mainlogo: {
    fontSize: '35px',
  },
  favs:{
    position: "absolute",
    bottom: "0.5rem",
    right: "0.5rem",
    display: "none"
  },
  shower:{
    position: "relative",
    top: '-6px',
    left: 0,
    width: "100%",
    height: "800px",
    backgroundSize:"100%", 
    backgroundPosition: "bottom center",
    backgroundRepeat:'no-repeat',
  },
  orangeOne:{
    fontFamily: "1rem !important",
    fontSize: "2.5rem",
  },
  featuredTitle: {
    fontSize: '40px',
    margin: '0 0 0 7%',
  },
  entranceText:{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "1.6rem",
    verticalAlign: "middle"
  },
  fadeIn:{
    animation: "fadeIn 0.3s forwards", 
    WebkitAnimation: "fadeIn 0.3s forwards"
  },
  
}

export default styles