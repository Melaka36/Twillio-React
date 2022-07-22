import React from "react";
import './index.css' ;

function HomeHero(){
    return (
      <section>
        <div className="columns">
          <div className=" column is-6 pl-6 pt-6">
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
              src="https://img.freepik.com/free-photo/confident-sassy-young-bearded-gay-man-pink-t-shirt-shirt-hold-hand-waist-pointing-upper-left-corner-smiling-suggest-friends-visit-party-nearby_176420-37053.jpg?t=st=1658517601~exp=1658518201~hmac=94c11e84138bfec025ad4997162ba7f6bb281881010aea7ce165f75b934d77cb&w=900"
              alt="sd"
            ></img>
          </div>
        </div>
      </section> 
    );
} 

export default HomeHero;