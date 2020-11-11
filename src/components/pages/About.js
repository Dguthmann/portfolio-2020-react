import React from "react";

function About() {
  return (

    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="section-header">About Me</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src="images/dguthmann.jpg" alt="David Guthmann" align="Left"
            style={{ margin: "0% 1% 1% 1%" }} />
          <p>
            My name is David Guthmann.  I was born, raised, and still live in the city of Omaha, Nebraska.  I grew up watching the cornhuskers and graduated from the University of Nebraska-Lincoln for a Bachelor's Degree of Science in Electrical in 2011.  During my years in college, I grabbed a basic background in coding specifically mainly in C as many microprocessors work with that.  Coming out of college I worked for a time in signal design, which works by sending electrical code on the train tracks to determine safety signals and crossing equipment.  The physical "houses" is where all the equipment is stored and they could be as new as microprocessors controlling the signals to as old as relay circuits.  Looking at those massive drawing of realys and following each boolean to their result was intimidating, but the interesting thing is trying to think of a modern program and how you could do it with nothing but relays.  This really taught me to adapt to whatever is thrown at you.
                </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <p>
            My other main passion and the reason I got into coding was video games.  I have played different types over the years, but mmos have always held a close point for me.  The basics of macro writing in that game is coding on a very small and approachable scale.  It was also a childhood dream to become a designer who makes them.  I think that natural fit of see what I want to do and figuring out the tool that I'm using to create it into reality is one of my best qualities.  At the moment, I am currently a student of University of Washington's Coding Bootcamp and am open to new professional opportunities anywhere in the United States.
                </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <a href={"https://github.com/Dguthmann"} target="_blank">My Github Profile</a>
        </div>
        <div className="col-md-4">
          <a href={"https://www.linkedin.com/in/david-guthmann-2351b838/"} target="_blank">My Linked In Page</a>
        </div>
        <div className="col-md-3">
          <a href={"other/DavidGuthmann-Resume.pdf"} target="_blank">My Resume</a>
        </div>
      </div>



    </section>
  );
}

export default About;
