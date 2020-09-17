import React,{useEffect} from "react";
import "./SearchPage.css";
import { useStateValue } from "../utils/StateProvider";
// import useGoogleSearch from "../utils/useGoogleSearch";
import { Link } from "react-router-dom";
// import Google from "../assets/google.png";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { actionTypes } from "../utils/reducer";

// import GoogleResponse from "../utils/googleResponse";

const SearchPage = () => {
  const [{ term,data ,...rest}, dispatch] = useStateValue();
  // useGoogleSearch(term);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_GOOGLE_CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          if (!result.error && result.searchInformation.totalResults!=='0') {
            dispatch({type:actionTypes.SET_DATA,
            payload:result})
          }
          else {
            dispatch({
              type:actionTypes.SET_ERROR
            })
          }
         
         
        })
        .catch((err) => {
            console.log(err)
        });
    };
    fetchData();
  }, [term,dispatch]);


  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/google">
          <img src={"https://firebasestorage.googleapis.com/v0/b/react-f6828.appspot.com/o/google-clone%2Fgoogle.png?alt=media&token=01c781e4-cdef-466c-b4ca-ad1442ecb976"} alt="google logo" className="searchPage__logo" />
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
          {rest.loading && <h3>loading</h3>}
          {!rest.loading && data &&  data ? (
            data?.items.map((item, index) => (
              <div key={index} className="searchPage__result">
                <a
                  href={item.link}
                  // target="blank"
                  className="searchPage__resultLink"
                >
                  {/* {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="searchPage__resultImage"
                        src={
                          item.pagemap?.cse_image?.length > 0 &&
                          item.pagemap?.cse_image[0]?.src
                        }
                      />
                    )} */}

                  {item.displayLink}
                </a>
                <a
                  href={item.link}
                  // target="blank"
                  className="searchPage__resultTitle "
                >
                  <h2 className="searchPage__resultLinkTitle">{item.title}</h2>
                </a>
                <p className="searchPage__resultSnippet">{item.snippet}</p>
              </div>
            ))
          ) : (
            <>
              {!rest.loading && rest.error && (
              <>
              <p>
                Daily quota for google searches exceeded. Try again tomorrow
              </p>
              <br />
              <p>
                Quota exceeded for quota metric 'Queries' and limit 'Queries per
                day' of service 'customsearch.googleapis.com' for consumer
                'project_number:619471531282'
              </p>
              </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
