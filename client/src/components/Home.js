import React, { useContext} from 'react'
import { UserContext } from '../UserContext';
function Home() {

const [user, setUser] = useContext(UserContext);

  return (
    <div>{user.first_name}</div>
  )
}

export default Home