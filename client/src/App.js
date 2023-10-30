import "./App.css";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/nav-bar";
// import Students from "./components/students";
import Profile from "./components/profile";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "./components/loading";
import Nav from "./components/2ndNav.js";
import Home from './components/Home';
import Assessment from './components/Assessment.js';
import Resources from './components/Resources.js';




function App() {

  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Nav />

        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/assessment" element={<Assessment />} />
  <Route path="/resources" element={<Resources />} />
</Routes>
        {/* <img src ="https://images.unsplash.com/photo-1616543791139-fdca422b7ef7?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "></img> */}
      {/* {!user ? <span>Hello from Techtonica From DEV!!!</span> : <span>Hello <Link to="api/me">{user.name}</Link></span> } */}
      {/* <Routes>
      <Route path="/" element={<Students user={user}/>} />
      <Route path="api/me" element={<Profile user={user}/>} />
      </Routes> */}
      {/* </div>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/assessment" element={<Assessment />}></Route>
            <Route path="/resources" element={<Resources />}></Route>
          </Routes>
        </Router> */}
      </div>
    </div>
  );
}

export default App;
