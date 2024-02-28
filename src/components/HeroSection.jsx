import { useEffect, useState } from "react";
import noesbackground from "../public/noteshero.webp";
import searchIcon from "../public/search-icon.png";
import useDebounce from "../Hooks/useDebounce";
import { useGlobalContext } from "../Hooks/getStatesGlobally";

const HeroSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [addSearchValue, setAddSearchValue] = useState("");
  const { setGetSearchKey } = useGlobalContext();

  //Hooks
  const searchKey = useDebounce(
    addSearchValue,
    setAddSearchValue,
    searchValue,
    1000
  );

  //Functions
  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    setGetSearchKey(searchKey);
  }, [searchKey]);

  console.log(searchKey, "key");
  return (
    <div className="bgImage">
      <img src={noesbackground} alt="noesbackground" />
      <div>
        <h1>Simple Notes App</h1>
        <p>
          Save, Secure And <span>Easy.</span>
        </p>
        <div className="searchContainer">
          <div className="search-icon">
            <img src={searchIcon} alt="search" />
          </div>
          <div className="searchInput">
            <input
              type="text"
              placeholder="find your note..."
              value={searchValue}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
