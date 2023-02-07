import React, { useContext } from "react";
import { UserContext } from "../UserContext";
function Home() {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      {!user ? (
        "hello"
      ) : (
        <div>
          <h2>{user.first_name} {user.last_name}</h2>
        </div>
      )}
    </div>
  );
}

export default Home;
