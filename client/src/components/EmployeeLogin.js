import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom"

function EmployeeLogin({ changeAuthMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useContext(UserContext);

  const history = useHistory();

  function handleEmployeeLogin(e) {
    e.preventDefault();

    const employee = {
      email: email,
      password: password,
    };

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    })
      .then((resp) => resp.json())
      .then((employee) => {
        if (employee?.errors) {
          console.log("Yikes");
          setErrors([employee.errors]);
        } else {
          console.log("hey");
          setUser(employee);
            history.push('/')
        }
      });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleEmployeeLogin}>
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
          <div>
            {errors.length > 0 && (
              <ul style={{ color: "red" }}>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
          </div>

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

export default EmployeeLogin;
