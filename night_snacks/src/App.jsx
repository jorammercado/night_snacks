
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import { useState } from 'react'
import UserPortal from "./pages/UserPortal";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PublicRoute from "./components/utils/PublicRoute";
import { Reset } from 'styled-reset'

import FourOFour from "./pages/FourOFour"
import Home from "./pages/Home"
import Index from "./pages/Index"
import Show from "./pages/Show"
import New from "./pages/New"
import Edit from "./pages/Edit"
import NavBar from "./components/NavBar"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { LoginWrapper } from './styles/loginElements'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <>
      <Reset />
      <LoginWrapper>
        <div className='app'>
          <Router>
            <div className="nav">
              <NavBar />
            </div>

            <main>
              <Routes>

                {/* public route login */}
                <Route path="/login"
                  element={
                    <PublicRoute
                      element={Login}
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                    />
                  }
                />
                {/* public route - if sent to home => redirect to login */}
                <Route path="/" element={<Navigate to="/login" />} />

                {/* public route - sign up */}
                <Route path="/signup"
                  element={
                    <PublicRoute
                      element={SignUp}
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                    />
                  }
                />

                {/* private route - user info edit */}
                <Route
                  path="/users/:user_id/profile/edit"
                  element={
                    <ProtectedRoute
                      element={UserPortal}
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                    />
                  }
                />

                {/* private route - user info */}
                <Route
                  path="/users/:user_id/profile"
                  element={
                    <ProtectedRoute
                      element={UserPortal}
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                    />
                  }
                />

                {/* private route - home screen of specific user */}
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute
                      element={Home}
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                    />
                  }
                />

                {/* private route - list all data */}
                <Route
                  path="/snacks"
                  element={
                    <ProtectedRoute
                      element={Index}
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                    />
                  }
                />

                {/* private route - create 1 new data element belonging to user */}
                <Route
                  path="/snacks/new"
                  element={
                    <ProtectedRoute
                      element={New}
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                    />
                  }
                />

                {/* private route - list 1 data element */}
                <Route
                  path="/snacks/:resource_id"
                  element={
                    <ProtectedRoute
                      element={Show}
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                    />
                  }
                />

                {/* private route - edit 1 data element */}
                <Route
                  path="/snacks/:resource_id/edit"
                  element={
                    <ProtectedRoute
                      element={Edit}
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                    />
                  }
                />

                {/* public route - page not found */}
                <Route
                  path="*"
                  element={
                    <PublicRoute
                      element={FourOFour}
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                    />
                  }
                />

              </Routes>
            </main>
          </Router>

        </div>
      </LoginWrapper>
    </>
  )
}

export default App
