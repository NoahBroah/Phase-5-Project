import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom"

function SignupFormEmployees({ changeAuthMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useContext(UserContext);

  const history = useHistory();

  function handleEmployeeSignup(e) {
    e.preventDefault();

    const newEmployee = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };

    fetch("/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    })
      .then((resp) => resp.json())
      .then((newEmployee) => {
        if (newEmployee?.errors) {
          setErrors([newEmployee.errors]);
          console.log("Yikes");
        } else {
          console.log("hey");
          setUser(newEmployee);
            history.push('/')
        }
      });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleEmployeeSignup}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Employee Signup</h3>
          <div className="text-center">
            Not an Employee?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Employer
            </span>
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="firstName"
              className="form-control mt-1"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="lastName"
              className="form-control mt-1"
              placeholder="Enter email"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errors.length > 0 && (
            <ul style={{ color: "red" }}>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupFormEmployees;
