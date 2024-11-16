import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logged, setLogged }) => {
  return (
    <nav>
      <h2>Authentication</h2>
      <ul>
        <li>
          <Link to={"/"}>Dashboard</Link>
        </li>
        {logged ? (
          <li>
            <Link onClick={() => setLogged(false)}>Logout</Link>
          </li>
        ) : (
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
