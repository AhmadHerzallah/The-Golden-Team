import React from "react";
import {
  Button,
  ButtonGroup,
  Form,
  Row,
  Col,
  yup,
  InputGroup,
  formik,
} from "react-bootstrap";
import "../style/Profile.css";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <div className="btnsti">
        <h2 className="sti">setitings</h2>
        <ButtonGroup vertical>
          <Link to="/Profile" className="navn">
            <Button className="btns">Public Profile</Button>
          </Link>
          <Link to="/EditProfile" className="navn">
            <Button className="btns">Edit Profile</Button>
          </Link>
        </ButtonGroup>
      </div>
      <div className="tit">
        <h3> Profile</h3>
        <img
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          alt="app img"
          className="proimg"
        />
      </div>

      <Form className="forpro">
        <Form.Group className="mb-3 name" controlId="exampleForm.ControlInput1">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Hassan"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3 inp" controlId="exampleForm.ControlInput1">
          <Form.Label>sacund name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Jouda"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
        </Form.Group>
      </Form>
      <Form className="forpro">
        <Form.Group className="mb-3 name" controlId="exampleForm.ControlInput1">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Gaza"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-1 age" controlId="exampleForm.ControlInput1">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="13"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
        </Form.Group>
      </Form>
      <Form className="forpro">
        <Form.Group className="mb-3 name" controlId="exampleForm.ControlInput1">
          <Form.Label>Profession</Form.Label>
          <Form.Control
            type="text"
            placeholder="Hacker"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-1 inp" controlId="exampleForm.ControlInput1">
          <Form.Label>College Degrees</Form.Label>
          <Form.Control
            type="text"
            placeholder="student"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
        </Form.Group>
      </Form>
    </div>
  );
}
