import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ minHeight: "100vh" }}>
        <Navbar />
        <Switch>
          <Route>

          </Route>
          <Route>

          </Route>
          <Route>

          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App