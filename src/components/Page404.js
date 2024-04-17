import Hero from "./Hero";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <Hero text="Opps! Looks like that page does not exist." />
      <div className="col-lg-8 offset-lg-2 my-5">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-7">
                <img src="https://i.giphy.com/FUKCPzVj0GGrCsdsmP.webp" />
            </div>
            <div className="col-md-3">
                Search for something else using our search to view some awesome films!
            </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;
