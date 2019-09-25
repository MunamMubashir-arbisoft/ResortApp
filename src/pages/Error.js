import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Hero>
      <Banner
        title="404 Not Found"
        subtitle="The content you're trying to access does not exist"
      >
        <Link className="btn-primary" to="/">
          Return to Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
