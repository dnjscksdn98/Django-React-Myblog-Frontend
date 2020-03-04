import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const { isAuthenticated } = props;

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {isAuthenticated ? (
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      ) : (
        <React.Fragment>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </React.Fragment>
      )}
    </ul>
  );
}

export default Home;