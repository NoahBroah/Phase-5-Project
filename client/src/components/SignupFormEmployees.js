import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";

function SignupFormEmployees({ changeAuthMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [currentUser, setCurrentUser] = useContext(UserContext);

  function handleEmployeeSignup(e) {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    fetch("/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((newUser) => {
        if (newUser?.errors) {
          setErrors(newUser.errors);
        } else {
          setCurrentUser(newUser);
          //   history.push('/')
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
