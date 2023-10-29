import "./App.css";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/nav-bar";
// import Students from "./components/students";
import Profile from "./components/profile";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "./components/loading";
import Nav from "./components/2ndNav.js";





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
