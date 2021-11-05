import React, { useState } from 'react';
import '../styles/header.scss';
import { useHistory, useLocation } from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import Login from './Login';
import SignUp from './SignUp';

//
//       Component: Header
//       Description: This component is the menu bar at the top of each page
//
//       Inputs:
//           - NA
//       Outputs:
//          - NA
function Header({setQuery}) {
  const history = useHistory();
  const goTo = (page) => () => {
    history.push('/' + page);
  };
  const location = useLocation();
  const inputPlaceholder = location.pathname === '/' ? 'Discover Projects...' : 'Search Features...';
  const search = (event) => {
    if (event.key === 'Enter') {
      setQuery(event.target.value);
    }
  };

  const username = ReactSession.get("username");
  const [loggedin, setLoggedin] = useState(username !== '');

  return (
    <div className="header_div">
      <div className="header_container">
        <header className="header">
          <div className="nav">
            <div onClick={goTo('')} className="logo" data-testid="header_home">
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
                data-testid="header_input"
                placeholder={inputPlaceholder}
                onKeyPress={search}
              />
            </div>
            <div className="links">

              <ul data-testid="header_links">
                {loggedin && <li data-testid="header_sub" onClick={goTo("submit-project")}>Submit Project</li>}
                <li data-testid="header_rm" onClick={goTo('feature-hunt')}>RoadMap</li>
                <li data-testid="header_fb" onClick={goTo('feedback')}>Feedback</li>
                {loggedin && <li data-testid="header_dash" onClick={goTo('dashboard')}>Your Projects</li>}

              </ul>
            </div>
          </div>

          {!loggedin && <div className="auth_button" data-testid="login_header">
            <Login setLoggedin={setLoggedin}/>
            <SignUp/>
          </div>}
          {loggedin && <div className="auth_button">
            <button onClick={() => {
              setLoggedin(false); 
              ReactSession.set("username", "");
              history.push("/")
              }} 
              data-testid="logout_header"
              className="signup_button">LogOut</button>
          </div>}
        </header>
      </div>
    </div>
  );
}
export default Header;
