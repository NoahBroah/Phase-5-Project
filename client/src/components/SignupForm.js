import SignupFormEmployees from "./SignupFormEmployees";
import SignupFormEmployers from "./SignupFormEmployers";

import React, { useState } from 'react'


    function SignupForm({ setCurrentUser }) {
        const [authMode, setAuthMode] = useState("employee");
      
        
      
       
      
        function changeAuthMode() {
          setAuthMode(authMode === "employee" ? "employer" : "employee");
        };
      
        if (authMode === "employee") {
          return (
           <SignupFormEmployees changeAuthMode={changeAuthMode}/>
          );
        } else {
            return (
                <SignupFormEmployers changeAuthMode={changeAuthMode} />
            );
        }
      
        
      }

export default SignupForm