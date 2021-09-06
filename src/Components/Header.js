import React from "react";
import "../styles/header.scss";
import { useHistory, useLocation } from "react-router-dom";
function Header({setQuery}) {
  const history = useHistory();
  const goTo = (page) => () => {
    history.push("/"+page)
  }
  const location = useLocation();
  const inputPlaceholder = location.pathname === '/' ? "Discover Projects..." : "Search Features...";
  const search = (event) => {
    if (event.key === 'Enter') {
      setQuery(event.target.value)
    }
  }
  return (
    <div className="header_div">
      <div className="header_container">
        <header className="header">
          <div className="nav">
            <div onClick={goTo('')} className="logo">
              <img src="../logo512.png" alt="" />
            </div>
            <div className="search_box">
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.383 10.347a5.796 5.796 0 1 1 .965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 1 0 0-8.863 4.432 4.432 0 0 0 0 8.863z"
                    fill="#BBB"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                placeholder={inputPlaceholder}
                onKeyPress={search}
              />
            </div>
            <div className="links">
              <ul>
                <li onClick={goTo('new')}>Submit Project</li>
                <li onClick={goTo('feature-hunt')}>RoadMap</li>
                <li onClick={goTo('feedback')}>Feedback</li>
              </ul>
            </div>
          </div>
          <div className="auth_button">
            <button onClick={goTo('login')} className="signup_button">Login</button>
          </div>
        </header>
      </div>
    </div>
  );
}
export default Header;
