import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
const Profile = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  //ekhane sudu namer kajta use state die, photoURL useRef dia korlam,email ta normali
  const [name, setName] = useState(user.display);
  const photoURLRef = useRef(user.photoURL);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, photoURLRef.current.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          readOnly
          defaultValue={user?.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          onChange={handleNameChange}
          defaultValue={name}
          type="text"
          placeholder="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>photoURL</Form.Label>
        <Form.Control
          ref={photoURLRef}
          type="photoURL"
          placeholder="photoURL"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
