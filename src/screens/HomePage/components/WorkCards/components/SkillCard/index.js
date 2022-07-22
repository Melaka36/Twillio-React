import React from "react";
import './index.css' ;

function SkilCard(props){
    return (
        <div class="card">
  {/* <div class="card-image">
    <figure class="image is-8">
      <img src="https://www.pngmart.com/files/7/CDN-PNG-Image.png" alt="Placeholder image"/>
    </figure>
  </div> */}
  <div class="card-content has-background-light ">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src={props.imgLink} alt="Placeholderimage"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{props.uname}</p>
        <p class="subtitle is-6">@Cookie</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a href="/">@bulmaio</a>.
      <a href="/">#css</a> <a href="/">#responsive</a>
      <br/>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
    );
} 

export default SkilCard;