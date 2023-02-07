import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom" 

function SignupFormEmployers({ changeAuthMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useContext(UserContext);

  const history = useHistory();

  function handleEmployerSignup(e) {
    e.preventDefault();
    const newEmployer = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };
    fetch("/employers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployer),
    })
      .then((resp) => resp.json())
      .then((newEmployer) => {
        if (newEmployer?.errors) {
          setErrors([newEmployer.errors]);
        } else {
          setUser(newEmployer);
            history.push('/')
        }
      });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleEmployerSignup}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Employer Signup</h3>
          <div className="text-center">
            Not an Employer?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
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

export default SignupFormEmployers;
