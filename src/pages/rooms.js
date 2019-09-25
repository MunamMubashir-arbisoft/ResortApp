import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner
        title="Our Rooms"
        subtitle="Find the room of your dreams to have a time of your dreams"
      >
        <Link className="btn-primary" to="/">
          Return to Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
