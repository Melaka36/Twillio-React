import React from "react";
import "./index.css";
import HomeHero from "./components/HomeHero";
import WorkCards from "./components/WorkCards";
function HomePage() {
  return (
    <div>
      <HomeHero></HomeHero>
      <WorkCards></WorkCards>
    </div>
  );
}

export default HomePage;
