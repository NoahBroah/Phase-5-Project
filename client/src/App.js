import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";
import { UserProvider } from "./UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState([]);

  // useEffect(() => {
  //   fetch("/employees").then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((user) => setCurrentUser(user));
  //     } else {
  //       resp.json().then((errorData) => setErrors(errorData.errors));
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   fetch("/employers").then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((user) => setCurrentUser(user));
  //     } else {
  //       resp.json().then((errorData) => setErrors(errorData.errors));
  //     }
  //   });
  // }, []);

  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App" style={{ minHeight: "100vh" }}>
          <Navbar />
          <Switch>
            <Route exact path="/signup">
              <SignupForm />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
