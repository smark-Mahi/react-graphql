import noesbackground from "../public/noteshero.webp";

const HeroSection = () => {
  return (
    <div className="bgImage">
      <img src={noesbackground} alt="noesbackground" />
      <div>
        <h1>Simple Notes App</h1>
        <p>
          Save, Secure And <span>Easy.</span>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
