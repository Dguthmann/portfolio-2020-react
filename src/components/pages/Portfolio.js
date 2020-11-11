import React from "react";
import DiscoverCard from "../DiscoverCard";
import API from "../../utils/API";
import Project from "../Project";

class Discover extends React.Component {

  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="section-header">Portfolio</h1>
          </div>
        </div>
        <div className="row">
          <Project projectImage="images/venuss.png" 
          liveUrl="https://ajm5099.github.io/Music-Discovery/"
          liveTag="VenU Music Discovery Live Site"
          gitUrl="https://github.com/ajm5099/Music-Discovery" 
          gitTag="VenU Music Discovery Repository"
          />
          <Project projectImage="images/gerome-logo_readme.png"
          liveUrl="https://gerome-the-gnome.herokuapp.com/"
          liveTag="Gerome-the-Gnome Live Site" 
          gitUrl="https://github.com/insideseanshead/gerome-the-gnome" 
          gitTag="Gerome-the-Gnome Generator Repository"
          />
        </div>
        <div className="row">
          <Project projectImage="images/screenshotcarls.png" 
          liveUrl="https://dg-carlscafe.herokuapp.com/"
          liveTag="Carl's Cafe Live Site"
          gitUrl="https://github.com/Dguthmann/Carls-cafe/" 
          gitTag="Carl's Cafe Repository"
          />
          <Project projectImage="images/katsu-screenshot.png"
          liveUrl="https://katsu-korokke.herokuapp.com/"
          liveTag="Password Generator Live Site" 
          gitUrl="https://github.com/Dguthmann/katsu-korokke" 
          gitTag="Password Generator Repository"
          />
        </div>
        <div className="row">
          <Project projectImage="images/vacass.png" 
          liveUrl="https://dguthmann.github.io/Vacation-weather-2020/"
          liveTag="Vacation Weather Live Site"
          gitUrl="https://github.com/Dguthmann/Vacation-weather-2020" 
          gitTag="Vacation Weather Repository"
          />
          <Project projectImage="images/workscss.png"
          liveUrl="https://dguthmann.github.io/day-planner-moment/"
          liveTag="Work Day Schedule Live Site" 
          gitUrl="https://github.com/Dguthmann/day-planner-moment" 
          gitTag="Work Day Schedule Generator Repository"
          />
        </div>
      </section>
    );
  }
}

export default Discover;
