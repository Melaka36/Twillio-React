import React from "react";
import "./index.css";
import SkilCard from "./components/SkillCard";
function WorkCards() {
  return (
    <section className="WorkCards">
      <h1 className="title is-3">Who am I?</h1>
      <div className="columns">
        <div className="column is-4">
          <SkilCard uname="Kithimini Katuwandeniya" imgLink="https://media-exp1.licdn.com/dms/image/C5603AQE6BbaR_1zC5g/profile-displayphoto-shrink_200_200/0/1610201622905?e=2147483647&v=beta&t=COjDCXHDuVWJpdRAnU4PL4ME_ogT0CqWwYeIgrnlzB8"></SkilCard>
        </div>
        <div className="column is-4">
          <SkilCard uname="Melaka Pathiranagama" imgLink="https://pbs.twimg.com/profile_images/1397789007262543873/H1NyvUk5_400x400.jpg"></SkilCard>
        </div>
        <div className="column is-4">
          <SkilCard uname="Wanidu hasaranaga" imgLink="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/340500/340569.jpg"></SkilCard>
        </div>
      </div>
    </section>
  );
}

export default WorkCards;
