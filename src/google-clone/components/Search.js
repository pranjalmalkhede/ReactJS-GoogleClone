import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import MicIcon from "../assets/micIcon.svg";
import { useStateValue } from "../utils/StateProvider";
import { actionTypes } from "../utils/reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    if (input.trim() !== "") {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      });
      history.push("/google/search");
    }
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          autoFocus={!hideButtons}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <img src={MicIcon} className="search__micicon" />
        {/* <MicIcon  /> */}
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
