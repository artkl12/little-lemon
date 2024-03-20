import React from "react";
import "./Main.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "./Nav";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Nav />
      <section className="hero__container">
        <div className="hero__text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            deserunt odit, doloribus nulla rem tempora libero distinctio illum
            et placeat?
          </p>
          <Button variant="primary">Reserve Table</Button>
        </div>
        <div>
          <img src="restauranfood.jpg" alt="rest-food" className="hero__img"/>
        </div>
      </section>
      <section className="specials__container">
        <div className="specials__text">
          <h2>Specials</h2>
          <Button variant="primary">Order online</Button>
        </div>
        <div className="specials__cards-container">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="restauranfood.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="restauranfood.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="restauranfood.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
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
          <img src="restauranfood.jpg" alt="rest-food" className="about__img"/>
        </div>
      </section>
      <Footer />
      
    </>
  );
}

export default Main;
