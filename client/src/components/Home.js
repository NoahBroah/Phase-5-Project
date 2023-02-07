import React, { useContext} from 'react'
import { UserContext } from '../UserContext';
function Home() {

const [user, setUser] = useContext(UserContext);

  return (
    <div>{user}</div>
  )
}

export default Home