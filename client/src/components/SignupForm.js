import SignupFormEmployees from "./SignupFormEmployees";
import SignupFormEmployers from "./SignupFormEmployers";

import React, { useState } from 'react'


    function SignupForm({ setCurrentUser }) {
        const [authMode, setAuthMode] = useState("employee");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [errors, setErrors] = useState([])
        // const history = useHistory();
      
        function handleSignupSubmit(e) {
          e.preventDefault();
          const user = {
            email,
            password,
          };
          fetch("/employees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          }).then(resp => resp.json())
          .then((newUser) => {
            if (newUser?.errors) {
              setErrors(newUser.errors)
            } else {
              setCurrentUser(newUser)
            //   history.push('/')
            }
          })
        }
      
        function handleLoginSubmit(e) {
          e.preventDefault();
          const user = {
            email,
            password,
          };
          fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          }).then(resp => resp.json())
          .then((user) => {
            if (user?.errors) {
              setErrors(user.errors)
            } else {
              setCurrentUser(user)
            //   history.push('/')
            }
          })
        }
      
        const changeAuthMode = () => {
          setAuthMode(authMode === "employee" ? "employee" : "employer");
        };
      
        if (authMode === "employee") {
          return (
            <div className="Auth-form-container">
              <form className="Auth-form" onSubmit={handleLoginSubmit}>
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
                  onChange={(e) => setPassword(e.target.value)}             />
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
      
        return (
          <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSignupSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Employer Signup</h3>
                <div className="text-center">
                  Not an Employer?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                    Sign In
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="email"
                    value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Password"
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

export default SignupForm