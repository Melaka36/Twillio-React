import React from "react";
// import { Link } from "react-router-dom";
import "./index.css";

function NavBar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="s"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href="/"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">Home</a>

          <a class="navbar-item" href="/about">About</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item" href="/">About</a>
              <a class="navbar-item"  href="/">Jobs</a>
              <a class="navbar-item"  href="/">Contact</a>
              <hr class="navbar-divider" />
              <a class="navbar-item"  href="/">Report an issue</a>
            </div>
          </div> 
        </div> 

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button class="button is-black"> 
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>GitHub</span>
              </button>
              <button class="button is-link">
                <span class="icon">
                <i class="fa-brands fa-facebook"></i>
                </span>
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
