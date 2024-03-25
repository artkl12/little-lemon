import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Main.css";
import Card from "react-bootstrap/Card";
import Nav from "./Nav";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Nav />
      <section className="hero__container">
        <div className="hero__text">
          <h1>Little Lemon</h1>
          <h3 className="hero__text-p">Chicago</h3>
          <p className="hero__text-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            deserunt odit, doloribus nulla rem tempora libero distinctio illum
            et placeat?
          </p>
          <NavLink to="reservations">Reserve table</NavLink>
        </div>
        <div>
          <img src="restauranfood.jpg" alt="rest-food" className="hero__img" />
        </div>
      </section>
      <section className="specials__container">
        <div className="specials__text">
          <h2>This weeks specials!</h2>
          <Link to="/">Online Menu</Link>
        </div>
        <div className="specials__cards-container">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="greek salad.jpg" />
            <Card.Body>
              <div className="card__title">
                <Card.Title>Greek salad</Card.Title>
                <h6>$12.00</h6>
              </div>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/">Order</Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="bruchetta.jpg" />
            <Card.Body>
              <div className="card__title">
                <Card.Title>Bruchetta</Card.Title>
                <h6>$12.00</h6>
              </div>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/">Order</Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="lemon dessert.jpg" />
            <Card.Body>
              <div className="card__title">
                <Card.Title>Lemon dessert</Card.Title>
                <h6>$12.00</h6>
              </div>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/">Order</Link>
            </Card.Body>
          </Card>
        </div>
      </section>
      <div className="testimonials__container">
        <div className="testimonials__h2">
          <h2>Testimonials</h2>
        </div>
        <div className="testimonials__cards">
          <Card style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <section className="about__container">
        <div className="about__text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            deserunt odit, doloribus nulla rem tempora libero distinctio illum
            et placeat?
          </p>
        </div>
        <div>
          <img src="grilled fish.jpg" alt="rest-food" className="about__img" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Main;
