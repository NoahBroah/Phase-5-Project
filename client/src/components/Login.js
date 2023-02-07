import React, { useState } from "react";
import EmployeeLogin from "./EmployeeLogin";
import EmployerLogin from "./EmployerLogin";

function Login() {
  const [authMode, setAuthMode] = useState("employee");

  function changeAuthMode() {
    setAuthMode(authMode === "employee" ? "employer" : "employee");
  }

  if (authMode === "employee") {
    return <EmployeeLogin changeAuthMode={changeAuthMode} />;
  } else {
    return <EmployerLogin changeAuthMode={changeAuthMode} />;
  }
}

export default Login;
