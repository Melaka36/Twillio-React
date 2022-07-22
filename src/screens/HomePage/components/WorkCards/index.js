import React from "react";
import './index.css' ;
import SkilCard from "./components/SkillCard"
function WorkCards(){
    return (
        <section className="WorkCards">
        <h1 className="title is-3">What I do?</h1>
        <SkilCard></SkilCard>
        </section>
    );
} 

export default WorkCards;