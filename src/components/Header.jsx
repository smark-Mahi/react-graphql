import React, { useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_Note, GET_NOTES } from "../graphql/queries";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const userInfo = jwtDecode(localStorage.getItem("token")) || "";

  function logoutHandler() {
    localStorage.removeItem("token");
    navigate("/auth");
  }

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const [addNote] = useMutation(ADD_Note, {
    variables: { title, detail },
    refetchQueries: [GET_NOTES, "getNotes"],
    // update(cache, { data: { addNote } }) {
    //   console.log(cache.data.data, "cache", cache);
    //   const { notes } = cache.readQuery({
    //     query: GET_NOTES,
    //   });
    //   console.log("query", notes, addNote);
    //   cache.writeQuery({
    //     query: GET_NOTES,
    //     data: {
    //       notes: [...notes, addNote],
    //     },
    //   });
    // },
  });

  function saveNoteHandler(e) {
    e.preventDefault();
    if (title && detail) {
      addNote(title, detail);
    } else {
      alert("please fill in all feilds");
    }
    setDetail("");
    setTitle("");
    setOpen(!open);
  }

  return (
    <div className="header">
      <div>
        <p>
          <Link to="/">𝔪𝔦𝔫𝔡 𝔠𝔞𝔰𝔱𝔩𝔢&nbsp;</Link>
        </p>
        <div className="next-div">
          {userInfo?.username ? (
            <div className="avatar" onClick={logoutHandler}>
              <p>{userInfo?.username[0]}</p>
            </div>
          ) : (
            <p>
              <Link to="/auth">Login</Link>
            </p>
          )}
          <p
            onClick={() => setOpen(!open)}
            className={`${open ? "cross-opened" : "cross-notopen"}`}
          >
            +
          </p>
        </div>
      </div>
      <div className={`addNoteContainer ${open ? "opened" : "notopen"}`}>
        <form onSubmit={saveNoteHandler}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="detail">Detail</label>
            <input
              type="text"
              placeholder="Enter details"
              id="detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>
          <input type="submit" disabled={!title || !detail} />
        </form>
      </div>
    </div>
  );
};

export default Header;
