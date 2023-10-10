import React, { useState, useEffect } from "react";
import ImageComponent from "./ImageComponent";
import MyButton from "./MyButton";
import "animate.css/animate.min.css"; // Include this line if you installed animate.css

function AboutPage() {
  // A state variable that we'll use to toggle classes on and off
  const [isVisible, setIsVisible] = useState(false);

  // Use the useEffect hook to add the 'visible' class after the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`animate__animated ${isVisible ? "animate__fadeIn" : ""}`}>
      <section>
        <div className="auto-conatainer">
          <div className="row clearfix">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              {/* Your other content here */}
              <div className="inner-column" style={{ padding: "20px" }}>
                <div className="sec-title-six">
                  <h1>Welcome to Scrap Mart</h1>
                </div>
                <div
                  className="text"
                  style={{ textAlign: "justify"}}
                >
                  Scrap Mart your local scrap buyer in Pune. We collect all kind of
                  Plastic &amp; metals scrap (Bhangar) like Old News paper,
                  magazine, schoolbooks, waste Iron scrap, aluminum, Copper,
                  Brass, Steel, non-ferrous ferrous scrap metals, Old Plastic,
                  computer &amp; machines, electronic scrap, old batteries,
                  office furniture and old vehicles from both commercial and
                  residential public with market price.
                </div>
                <br />
                <div className="text" style={{ textAlign: "justify" }}>
                  It’s simple to being eco-friendly, give your recyclables old
                  newspapers, milk packets and plastic bottles in a most
                  environment friendly manner. We invite you to join our hands
                  and try to help us in recycling management.
                </div>
                <br />
                <MyButton className="myButton" name="Request Pickup" />
              </div>
            </div>
            {/* image column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <ImageComponent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
