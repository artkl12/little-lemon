import React, { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Swal from "sweetalert2";
import "./Reservations.css";
import Nav from "./Nav";
import Footer from "./Footer";

function Reservations() {
  const [reserved, setReserved] = useState([]);

  useEffect(() => {
    console.log(reserved);
  }, [reserved]);

  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setReserved((prevReserved) => [...prevReserved, data]);
    showAlert();
    reset();
  };

  // need to finish functionalaty to disable selected time from first time
  const isReserved = (date, time) => {
    return reserved.some(
      (reservation) => reservation.date === date && reservation.time === time
    );
  };

  function showAlert() {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Thank You! Check your email for confirmation.",
      showConfirmButton: true,
    });
  }

  return (
    <>
      <Nav />
      <div className="form__container">
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm={12} md={6}>
                <div className="form__inputs">
                  <label htmlFor="date">Choose date</label>
                  <div className="form__inputs_icon">
                    <img
                      src="calendar-day.svg"
                      alt="calendar"
                      style={{ width: "2rem" }}
                    />
                    <input
                      {...register("date", { required: "Select the date" })}
                      type="date"
                      id="res-date"
                    />
                  </div>
                  {errors.date && <span>{errors.date.message}</span>}
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="form__inputs">
                  <label htmlFor="time">Choose time</label>
                  <div className="form__inputs_icon">
                    <img
                      src="alarm-clock.svg"
                      alt="clock"
                      style={{ width: "2rem" }}
                    />
                    <select
                      {...register("time", { required: "Select the time" })}
                      name="time"
                      id="res-time"
                    >
                      {errors.time && <span>{errors.time.message}</span>}
                      <option value="">Select a time</option>
                      <option
                        value="17:00"
                        disabled={isReserved(watch("date"), "17:00")}
                      >
                        17:00
                      </option>
                      <option
                        value="18:00"
                        disabled={isReserved(watch("date"), "18:00")}
                      >
                        18:00
                      </option>
                      <option
                        value="19:00"
                        disabled={isReserved(watch("date"), "19:00")}
                      >
                        19:00
                      </option>
                      <option
                        value="20:00"
                        disabled={isReserved(watch("date"), "20:00")}
                      >
                        20:00
                      </option>
                    </select>
                  </div>
                  {errors.time && <span>{errors.time.message}</span>}
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6}>
                <div className="form__inputs">
                  <label htmlFor="guests">Number of guests</label>
                  <div className="form__inputs_icon">
                    <img
                      src="person-circle-plus.svg"
                      alt="calendar"
                      style={{ width: "2rem" }}
                    />
                    <input
                      {...register("guests", { required: "How many guests?" })}
                      type="number"
                      min="1"
                      max="10"
                      id="guests"
                      placeholder="Number of guests"
                    />
                  </div>
                  {errors.guests && <span>{errors.guests.message}</span>}
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="form__inputs">
                  <label htmlFor="occasion">Occasion</label>
                  <div className="form__inputs_icon">
                    <img
                      src="glass-cheers.svg"
                      alt="calendar"
                      style={{ width: "2rem" }}
                    />
                    <select
                      {...register("occasion")}
                      name="occasion"
                      id="occasion"
                    >
                      <option value="None">None</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                    </select>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form__inputs">
                  <label htmlFor="name">Name</label>
                  <div className="form__inputs_icon">
                    <img
                      src="user.svg"
                      alt="calendar"
                      style={{ width: "2rem" }}
                    />
                    <input
                      {...register("name", {
                        required: "Name is required",
                        maxLength: 50,
                      })}
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
              </Col>
              <Col md={6}>
                <div className="form__inputs">
                  <label htmlFor="email">Email</label>
                  <div className="form__inputs_icon">
                    <img
                      src="envelope.svg"
                      alt="calendar"
                      style={{ width: "2rem" }}
                    />
                    <input
                      {...register("email", {
                        required: "Email is required",
                      })}
                      type="email"
                      placeholder="email"
                    />
                  </div>
                  {errors.email && <span>{errors.email.message}</span>}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form__inputs">
                  <textarea
                    {...register("textarea")}
                    name="textarea"
                    id=""
                    cols="20"
                    rows="2"
                    placeholder="if there`s a special case..."
                  ></textarea>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="form__button">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  onSubmit={showAlert}
                >
                  {isSubmitting ? "Submitting..." : "Reserve a table"}
                </button>
              </div>
            </Row>
          </form>
        </Container>
      </div>
      <div className="reservation__img">
        <img src="restaurant chef B.jpg" alt="chef_B" />
        <img src="Mario and Adrian A.jpg" alt="chefs" />
        <img src="restaurant.jpg" alt="" />
      </div>
      <Footer />
    </>
  );
}

export default Reservations;
