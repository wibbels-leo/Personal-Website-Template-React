import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <img
        className="contact-image"
        src={process.env.PUBLIC_URL + "/headshot.jpeg"}
        alt="Leo"
      />
      <p className="about-paragraph">
        Hello, my name is Leo Wibbels, I was born and raised in Boise, Idaho.
        The familial "sport" was FIRST robotics, and the perennial waiting game
        was "how's it built?". After highschool, in a break from the family
        tradition of engineering and higher education, I spent a few years
        following my interests in music, food, and culture from New Orleans, to
        Mexico.
      </p>
      <p className="about-paragraph">
        In Michoacán Mexico, on a small family farm, I fell in love with growing
        and eating one's own food, while observing the delicate working
        relationship between a farmer, his land, and its ecosystem. At 21, I
        decided to pursue a degree in Sustainable Agriculture and Food Systems
        from the University of Idaho. While in school I managed the student run
        farm, a fledgling 5 acre vegetable farm. Understaffed and overworked, I
        soon understood the potential of simple automation in small-scale,
        high-intensity agriculture. Unfortunately, my inexperience with computer
        programming continually thwarted my projects: from weather based
        irrigation controllers to controlled environment mushroom cultivation
        systems. I needed to learn to code.
      </p>
      <p className="about-paragraph">
        After finishing my bachelor’s, I enrolled in a 14 week coding bootcamp;
        while a great initial foray in web development, it was only the
        beginning. I spent the next couple of years working for a friend,
        building a fully off-grid cabin, barn, and year-round solar greenhouse
        in the mountains of Idaho. In many ways this was my dream job, and it
        covered most of the bases: agriculture, green energy, tangible results,
        good coworkers, hard work, sweat and sunshine, but I still longed for
        the creative freedom enabled by a high degree of coding competency. My
        instructor from the boot camp invited me to apply at his company as a
        junior full stack developer, where I've been for a little over a year.
      </p>
      <p className="about-paragraph">
        The best part of working as a fullstack developer on a tiny team, like
        at Thought Saver, is you get to touch every portion of the code base.
        You are responsible for every aspect of the application you're building,
        from the database, through the API, all the way up to pixel count on a
        button's border radius. In lieu of a formal designer, you are now tasked
        with materializing vague product ideas and ambitions into tangible
        client facing features. Thought Saver has provided an amazing
        opportunity to learn, grow, travel, and hone my programming and
        professional skills. I'm looking forward to new and different
        opportunities. The learning curve is starting to level out, and the
        horizon is filled with cool projects. I look forward to building with
        you.
      </p>
    </div>
  );
}
