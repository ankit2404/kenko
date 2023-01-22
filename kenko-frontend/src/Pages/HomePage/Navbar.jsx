import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const { loggedIn } = useStateContext();

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={`homenav-container ${nav ? "solid-nav" : ""}`}>
      <div className="homenav-row">
        <div className="homenav-logo">
          <Link to="/">Kenko</Link>
        </div>
        <div className="homenav-controls SMN_effect-14">
          <a href="/">Home</a>
          <a href="/">Services</a>
          <a href="/">About</a>
          {!loggedIn ? (
            <Link to="/login">Login/Signup</Link>
          ) : (
            <button
              className="bg-teal-400 text-white p-2 rounded mt-2 ml-2"
              onClick={() => navigate("/dashboard/home")}
            >
              Go to Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
