import InputBox from "../components/InputBox";
import signup from "../public/signup.jpg";
import lock from "../public/lock.jpg";
import gmail from "../public/gmail.png";
import usericon from "../public/usericon.png";
import Button from "../components/Button";
import login from "../public/login.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [state, setState] = useState("signIn");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPopUp, setShowPopUp] = useState("no");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let payload = new FormData();
  async function signInHandler(e) {
    e.preventDefault();
    if (!username && !password) {
      setShowPopUp("yes");
    }
    try {
      if (username && password) {
        payload.append("username", username);
        payload.append("password", password);
        const resp = await axios.post(
          "https://ark.iarmours.com/mind-castle-gql/api/auth/login",
          payload
        );
        console.log(resp);
        window.localStorage.setItem("token", resp.data.access_token);
        setUserName("");
        setPassword("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.detail);
      setShowPopUp("yes");
    }
  }

  async function signUpHandler(e) {
    e.preventDefault();
    if (!username && !password && !email && !confirmPassword) {
      setShowPopUp("yes");
    }
    const resp = await axios.post(
      "https://ark.iarmours.com/mind-castle-gql/api/auth/signup",
      {
        username,
        email,
        password,
      }
    );
    console.log(resp);
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  useEffect(() => {
    const clear = setTimeout(() => {
      setShowPopUp("no");
    }, 3000);
    return () => {
      clearTimeout(clear);
    };
  }, [showPopUp]);

  return (
    <div
      className={`auth-container ${state === "signIn" ? "signIn" : "signUp"}`}
    >
      <div className={`pop-up ${showPopUp}`}>
        <p>{error || "All feilds are mandatory "}</p>
      </div>
      <div className={`content-container `}>
        <div className={`${state === "signIn" ? "signIn" : "signUp"}`}>
          <form
            action=""
            className="sign-up"
            style={{
              opacity: `${state === "signUp" ? 1 : 0}`,
              zIndex: `${state === "signUp" ? 2 : 1}`,
            }}
            onSubmit={(e) => signUpHandler(e)}
          >
            <h2>sign Up</h2>
            <InputBox
              icon={<img src={usericon} />}
              type="User Name"
              val={username}
              setVal={setUserName}
            />
            <InputBox
              icon={<img src={gmail} />}
              type="Email"
              val={email}
              setVal={setEmail}
            />
            <InputBox
              icon={<img src={lock} />}
              type="Password"
              val={password}
              setVal={setPassword}
            />
            <InputBox
              icon={<img src={lock} />}
              type="Confirm Password"
              val={confirmPassword}
              setVal={setConfirmPassword}
            />
            <Button
              borderr=""
              text="signup"
              setState={setState}
              changeTo="signIn"
            />
          </form>
          <form
            action=""
            className="sign-in"
            style={{
              opacity: `${state === "signIn" ? 1 : 0}`,
              zIndex: `${state === "signUp" ? 1 : 2}`,
            }}
            onSubmit={(e) => signInHandler(e)}
          >
            <h2>sign In</h2>
            <InputBox
              icon={<img src={usericon} />}
              type="User Name"
              val={username}
              setVal={setUserName}
            />

            <InputBox
              icon={<img src={lock} />}
              type="Password"
              val={password}
              setVal={setPassword}
            />

            <Button borderr="" text="signin" />
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
              text="signup"
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
              text="signin"
            />
          </div>

          <img src={signup} alt="signup-image" className="person signins" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
