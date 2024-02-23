import InputBox from "../components/InputBox";
import signup from "../public/signup.jpg";
import lock from "../public/lock.jpg";
import gmail from "../public/gmail.png";
import usericon from "../public/usericon.png";
import Button from "../components/Button";
import login from "../public/login.jpg";
import { useState } from "react";
const Auth = () => {
  const [state, setState] = useState("signIn");
  return (
    <div
      className={`auth-container ${state === "signIn" ? "signIn" : "signUp"}`}
    >
      <div className={`content-container `}>
        <div className={`${state === "signIn" ? "signIn" : "signUp"}`}>
          <form
            action=""
            className="sign-up"
            style={{ opacity: `${state === "signUp" ? 1 : 0}` }}
          >
            <h2>sign Up</h2>
            <InputBox icon={<img src={usericon} />} type="User Name" />
            <InputBox icon={<img src={gmail} />} type="Email" />
            <InputBox icon={<img src={lock} />} type="Password" />
            <InputBox icon={<img src={lock} />} type="Confirm Password" />
            <Button borderr="" />
          </form>
          <form
            action=""
            className="sign-in"
            style={{ opacity: `${state === "signIn" ? 1 : 0}` }}
          >
            <h2>sign In</h2>
            <InputBox icon={<img src={usericon} />} type="User Name" />

            <InputBox icon={<img src={lock} />} type="Password" />

            <Button borderr="" />
          </form>
        </div>
      </div>
      <div className="image-container">
        <div className={`sign-in-image ${state !== "signIn" && "signup"}`}>
          <div>
            <h3>New here?</h3>
            <p>Do you want to sign up?</p>
            <Button
              borderr="btn-border"
              setState={setState}
              changeTo="signUp"
            />
          </div>
          <img src={login} alt="signup-image" className="person" />
        </div>
        <div className={`sign-up-image ${state !== "signUp" && "signin"}`}>
          <div>
            <h3>One of us</h3>
            <p>Did you already sign in?</p>
            <Button
              borderr="btn-border"
              setState={setState}
              changeTo="signIn"
            />
          </div>

          <img src={signup} alt="signup-image" className="person signins" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
