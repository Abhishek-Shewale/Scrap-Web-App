import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faRecycle, faTruck } from "@fortawesome/free-solid-svg-icons";
import { TwoMen } from "./TwoMen";
import Background from './bg.png';

function HomePage({loggedInUser}) {
   const adminUsernames = ["admin1", "admin2"]; // Add the admin usernames here

   // Check if the logged-in user is an admin
   const isAdminUser = loggedInUser && adminUsernames.includes(loggedInUser);

  return (
    <div>

      <div style={styles.heroSection}>
        <h1 style={styles.heading}>
          <span style={{ backgroundColor: "rgba(86, 173, 56, 0.5)" }}>
            Scrap
          </span>{" "}
          piling up?
        </h1>
        <h1 style={styles.heading}>Cash it in with us.</h1>
        <p style={styles.paragraph}>
          We are committed to making scrap management convenient for you. Browse
          our services, check the latest prices, and if you're ready, request a
          pickup at a time that suits you.
        </p>
      </div>
      <div style={styles.servicesSection}>
        <h2 style={styles.subHeading}>Our Services</h2>
        <div style={styles.servicesContainer}>
          <div style={styles.serviceCard}>
            <FontAwesomeIcon icon={faCogs} style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Metal Scrap Collection</h3>
            <p style={styles.cardText}>
              We buy all types of metal scrap, including steel, iron, copper,
              and more.
            </p>
          </div>
          <div style={styles.serviceCard}>
            <FontAwesomeIcon icon={faRecycle} style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Electronic Waste Disposal</h3>
            <p style={styles.cardText}>
              We help you get rid of old and obsolete electronic devices in an
              eco-friendly manner.
            </p>
          </div>
          <div style={styles.serviceCard}>
            <FontAwesomeIcon icon={faTruck} style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>On-Demand Pickup</h3>
            <p style={styles.cardText}>
              Schedule a pickup at your convenience, and we'll come collect your
              scrap.
            </p>
          </div>
        </div>
      </div>

      <div style={styles.svgAndTextSection}>
        <div style={styles.svgContainer}>
          {/* Replace with your SVG */}
          <TwoMen />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.subHeading}>Recycle for a Better Tomorrow</h2>
          <p style={styles.text}>
            Recycling is one of the most important actions you can take to
            reduce waste and help save our environment. By recycling your scrap
            with us, you're not only getting paid but also contributing to a
            greener planet.
          </p>
        </div>
      </div>
    </div>
  );
}

// Styles
const styles = {
  heroSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "85vh",
    padding: "0 1rem",
    backgroundImage: `url(${Background})`

  },
  heading: {
    color: "#333",
    fontSize: "4rem",
    textAlign: "center",
  },
  subHeading: {
    color: "#333",
    fontSize: "2rem",
  },
  paragraph: {
    color: "#666",
    fontSize: "1.2rem",
    textAlign: "center",
  },
  servicesSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    marginTop: "2rem",
  },
  servicesContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "1rem",
  },
  serviceCard: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0px 3px 9px rgba(0,0,0,0.2)",
    margin: "1.4rem",
    padding: "1.9rem",
    width: "19.5rem",
    textAlign: "center",
  },
  cardTitle: {
    color: "#333",
    fontSize: "1.2rem",
  },
  cardText: {
    color: "#666",
  },
  cardIcon: {
    marginBottom: "1rem",
    fontSize: "2.5rem",
    color: "#56ad38",
  },

  svgAndTextSection: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "2rem",
    padding: "0 1rem",
  },
  svgContainer: {
    flex: 1,
    maxWidth: "50%",
  },
  textContainer: {
    flex: 1,
    maxWidth: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#666",
    fontSize: "1.2rem",
    textAlign: "center",
  },
};

export default HomePage;
