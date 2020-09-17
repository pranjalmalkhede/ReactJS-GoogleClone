import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";
// import Google from "../assets/google.gif";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          {/* <Link>About</Link>
          <Link>Store</Link> */}
        </div>
        <div className="home__headerRight">
          <Link>Gmail</Link>
          <Link>Images</Link>
          <AppsIcon />
          <Avatar src="https://firebasestorage.googleapis.com/v0/b/react-f6828.appspot.com/o/google-clone%2Fpranjal.png?alt=media&token=e6895478-754c-4022-bd51-2664b7091a1d" alt="pranjal malkhede" />
        </div>
      </div>

      <div className="home__body"> 
        <img src={'https://firebasestorage.googleapis.com/v0/b/react-f6828.appspot.com/o/google-clone%2Fgoogle.gif?alt=media&token=6512a2a1-1954-4043-9015-493f6044bd3d'} alt="google logo"/>
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
