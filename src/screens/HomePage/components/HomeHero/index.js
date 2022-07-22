import React from "react";
import './index.css' ;

function HomeHero(){
    return (
      <section>
        <div className="columns">
          <div className="hero-text-col column is-6">
            <h1 className="title is-6">My name is Melaka</h1>
            <h1 className="title is-4">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s{" "}
            </h1>
            <button class="button is-link mr-3">
              <span class="icon">
              <i class="fa-brands fa-linkedin"></i>
              </span>
              <span>linkedin</span>
            </button>
            <button class="button is-pink ">
              <span class="icon">
              <i class="fa-solid fa-basketball"></i>
              </span>
              <span>Dribble</span>
            </button>
          </div>
          <div className="column is-6 has-text-centered">
            <img
              className="HeroImg"
              src="https://www.pngall.com/wp-content/uploads/13/Content-Delivery-Network-CDN-PNG-Image.png"
              alt="sd"
            ></img>
          </div>
        </div>
      </section> 
    );
} 

export default HomeHero;