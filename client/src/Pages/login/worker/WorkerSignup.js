import "../../../style/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
export default function WorkerSignup({ setAuth, current, setCurrent }) {
  const [data, setData] = useState({});
  let job = window.localStorage.getItem("job");
  const navigate = useNavigate();
  const setUserData = (e) => {
    setData({
      ...data,
      job: job,
      [e.target.id]: e.target.value,
    });
    console.log(data);
  };
  const createWorker = (e) => {
    console.log(data);
    e.preventDefault();
    axios
      .post("http://localhost:5000/worker/addWorker", data)
      .then((res) => {
        setAuth(true);
        console.log(res);
        window.localStorage.setItem("auth", true);
        setCurrent(data);
        console.log(current);
        window.localStorage.setItem("current", JSON.stringify(data));

        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="ffds">
      <img
        className="imgg"
        src="https://scribie.com/assets/front/illustrations/Welcome-to-scribie-512x391.svg"
      />
      <form className="gorm">
        <h3>Sign Up As A WORKER</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            id="name"
            onChange={setUserData}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            id="phone"
            onChange={setUserData}
          />
        </div>
        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Number"
            onChange={setUserData}
          />
        </div>
        <div className="mb-3">
          <label>location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter location"
            id="text"
            onChange={setUserData}
          />
        </div>
        <div className="mb-3">
          <label>job</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter job"
            id="job"
            onChange={setUserData}
          />
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              onChange={setUserData}
            />
          </div>
          <div className="mb-3">
            <label> Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={setUserData}
            />
          </div>
          <div className="d-grid">
            <button className="buttono" onClick={createWorker}>
              Sign Up
            </button>
          </div>
        </div>
        <p className="underLinee">
          You already have an account? <Link to="/Login">Login</Link>{" "}
        </p>{" "}
      </form>
    </div>
  );
}
