import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../utils/StateProvider";
import useGoogleSearch from "../utils/useGoogleSearch";
import { Link } from "react-router-dom";
import Google from "../assets/google.png";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GoogleResponse from "../utils/googleResponse";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/google">
          <img src={Google} className="searchPage__logo" />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link>All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link>News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link>Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link>Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link>Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link>More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results ">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results{" "}
            {data?.searchInformation.formattedSearchTime}
            seconds for {term}
          </p>

          {data ? (
            data?.items.map((item, index) => (
              <div key={index} className="searchPage__result">
                <a href={item.link} className="searchPage__resultLink">
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="searchPage__resultImage"
                        src={
                          item.pagemap?.cse_image?.length > 0 &&
                          item.pagemap?.cse_image[0]?.src
                        }
                      />
                    )}

                  {item.displayLink}
                </a>
                <a href={item.link} className="searchPage__resultTitle ">
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage__resultSnippet">{item.snippet}</p>
              </div>
            ))
          ) : (
            <p>
              Quota exceeded for quota metric 'Queries' and limit 'Queries per
              day' of service 'customsearch.googleapis.com' for consumer
              'project_number:619471531282'
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
