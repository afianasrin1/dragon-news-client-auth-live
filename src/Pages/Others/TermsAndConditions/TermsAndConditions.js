import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const TermsAndConditions = () => {
  return (
    <div>
      <h3>Here is our Terms and condition</h3>
      <ul>
        <li>amar</li>
        <li>qwe</li>
        <li>bvb</li>
      </ul>
      <p>
        Go back Registration:
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default TermsAndConditions;
