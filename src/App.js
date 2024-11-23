// import Card from "./components/card/card";

import { Box, keyframes } from "@mui/material";
import { makeStyles } from "@mui/styles";

function App({ isActive }) {
  const classes = useStyles();
  //////////////////////
  const opacityChange = keyframes`
  0% {
    opacity: 0;

  }
  25% {
    opacity: 0.3;
    
  }
  50% {
    opacity:0.5;
  
  }
  75% {
    opacity: 0.7;
    
  }
  100% {
    opacity: 1;
  
  }
`;
  //////////width//////
  const widthChange = keyframes`
0% {
  width: 0;

}
25% {
  width: 22px;
  
}
50% {
  width: 44px;

}
75% {
   width: 66px;
  
}
100% {
    width: 100px;

}
`;

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // transform: "translate(-50%,-50%)",
      }}
    >
      <Box className={classes.mainContainer}>
        <Box
          sx={{
            animation: isActive ? `${opacityChange} 0.8s infinite` : "none",
            animationDelay: "0s",
            transform: isActive ? `${widthChange}` : "none",
          }}
          className={`${classes.one} ${classes.all}`}
        ></Box>
        <Box
          sx={{
            animation: isActive ? `${opacityChange} 0.8s infinite` : "none",
            animationDelay: "0.1s",
            width: isActive ? `${widthChange}` : "none",
          }}
          className={`${classes.two} ${classes.all}`}
        ></Box>
        <Box
          sx={{
            animation: isActive ? `${opacityChange} 0.8s infinite` : "none",
            animationDelay: "0.2s",
            width: isActive ? `${widthChange}` : "none",
          }}
          className={`${classes.three} ${classes.all}`}
        ></Box>
        <Box
          sx={{
            animation: isActive ? `${opacityChange} 0.8s infinite` : "none",
            animationDelay: "0.3s",
            width: isActive ? `${widthChange}` : "none",
          }}
          className={`${classes.four} ${classes.all}`}
        ></Box>
        <Box
          sx={{
            animation: isActive ? `${opacityChange} 0.8s infinite` : "none",
            animationDelay: "0.4s",
            width: isActive ? `${widthChange}` : "none",
          }}
          className={`${classes.five} ${classes.all}`}
        ></Box>
        <Box
          sx={{
            animation: isActive ? `${opacityChange} 0.8s infinite` : "none",
            animationDelay: "0.5s",
            width: isActive ? `${widthChange}` : "none",
          }}
          className={`${classes.six} ${classes.all}`}
        ></Box>
        <Box
          sx={{
            animation: isActive ? `${opacityChange} 0.8s infinite` : "none",
            animationDelay: "0.6s",
            width: isActive ? `${widthChange}` : "none",
          }}
          className={`${classes.seven} ${classes.all}`}
        ></Box>
        <Box
          sx={{
            animation: isActive ? `${opacityChange} 0.8s infinite` : "none",
            animationDelay: "0.7s",
            width: isActive ? `${widthChange}` : "none",
          }}
          className={`${classes.eight} ${classes.all}`}
        ></Box>
      </Box>
    </Box>
  );
}

export default App;
const useStyles = makeStyles((theme) => ({
  all: {
    height: "16px !important",
    position: "absolute",
    width: "6px",
    borderRadius: "10px",
    transition: "width 2s ease-in-out",
    backgroundColor: "black",
  },

  two: {
    transform: "translate(182%, 33%) rotate(45deg)",
  },
  three: {
    transform: "translate(231%, 103%) rotate(90deg)",
  },

  four: {
    transform: "translate(172%, 173%) rotate(134deg)",
  },
  five: {
    transform: "translate(0%, 200%) rotate(180deg)",
  },
  six: {
    transform: "translate(-183%, 176%) rotate(225deg)",
  },
  seven: {
    transform: "translate(-231%, 103%) rotate(270deg)",
  },
  eight: {
    transform: "translate(-181%, 33%) rotate(315deg)",
  },
}));
