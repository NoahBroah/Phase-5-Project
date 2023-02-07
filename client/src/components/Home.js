import React, { useContext} from 'react'
import { UserContext } from '../UserContext';
function Home() {

const [currentUser, setCurrentUser] = useContext(UserContext);

  return (
    <div>Hi</div>
  )
}

export default Home