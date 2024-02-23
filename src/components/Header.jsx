import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div>
        <p>
          SimpleNotes&nbsp;<span>App</span>
        </p>
        <div className="next-div">
          <p>
            <Link to="/auth">Login</Link>
          </p>
          <p
            onClick={() => setOpen(!open)}
            className={`${open ? "cross-opened" : "cross-notopen"}`}
          >
            +
          </p>
        </div>
      </div>
      <div className={`addNoteContainer ${open ? "opened" : "notopen"}`}>
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Enter title" id="title" />
          </div>
          <div>
            <label htmlFor="comming soon">comming soon</label>
            <input type="text" placeholder="Enter" id="comming soon" />
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Header;
