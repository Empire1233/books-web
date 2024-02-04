import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="main=body">
      <div className="main-nav">
        <div className="component-nav">
          <ul>
            <li>
              <a href="2">Home</a>
            </li>
            <li>
              <a href="#">
                <b>Books</b>
              </a>
            </li>
            <li>
              <a href="#">Audio Books</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <div>
              <li>
                <button className="btn">
                  <a href="#">
                    <b className="btn1">Sign Up</b>
                  </a>
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
