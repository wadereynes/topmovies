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
    alignItems: "center",
    justifyContent: "center",
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