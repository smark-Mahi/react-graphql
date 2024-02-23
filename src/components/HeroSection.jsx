import noesbackground from "../public/noteshero.webp";
import searchIcon from "../public/search-icon.png";

const HeroSection = () => {
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
            <input type="text" placeholder="find your note..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
