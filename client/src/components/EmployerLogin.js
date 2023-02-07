import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom"

function EmployerLogin({ changeAuthMode }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [user, setUser] = useContext(UserContext);

    const history = useHistory();
  
    function handleEmployerLogin(e) {
      e.preventDefault();
  
      const employer = {
        email: email,
        password: password,
      };
  
      fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employer),
      })
        .then((resp) => resp.json())
        .then((employer) => {
          if (employer?.errors) {
            setErrors([employer.errors]);
            console.log("Yikes");
          } else {
            console.log("hey");
            setUser(employer);
              history.push('/')
          }
        });
    }
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleEmployerLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Employer Signup</h3>
            <div className="text-center">
              Not an Employer?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Employee
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
  )
}

export default EmployerLogin