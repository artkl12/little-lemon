import React, { useForm } from "react-hook-form";
import "./Reservations.css";

function Reservations() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="form__container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label htmlFor="res-date">Choose date</label>
            <input {...register("date")} type="date" id="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select {...register("time")} name="time" id="res-time">
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
              {...register("guests")}
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
            />
            <label htmlFor="occasion">Occasion</label>
            <select {...register("occasion")} name="occasion" id="occasion">
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: 2,
              })}
              type="text"
              placeholder="Your name"
            />
            {errors.name && (
              <span>{errors.name.message}</span>
            )}
            <input {...register("email", {
              required: "Email is required"
            })} type="email" placeholder="email" />
            {errors.email && (
              <span>{errors.email.message}</span>
            )}
            <button type="submit">Make Your reservation</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Reservations;
