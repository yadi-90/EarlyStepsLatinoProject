import "./App.css";
import { Routes, Route,Link } from 'react-router-dom';
import NavBar from "./components/nav-bar";
// import Students from "./components/students";
// import Profile from "./components/profile";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "./components/loading";
import Nav from "./components/2ndNav.js";
import Home from './components/Home';
import Assessment from './components/Assessment.js';
import Resources from './components/Resources.js';
import AssessmentTest from './components/AssessmentTest.js';
import AssessmentTestSpanish from "./components/AssessmentTestSpanish.js";
import TranslationButton from "./components/TranslationButton";  // Import the TranslationButton component
import Logo from "./components/Logo";

function App() {
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">

      <NavBar />

        <div className="logo">
      <Logo />
      </div>
      <div className="slogan">
      <p>Grow together, Learn Together</p>
      </div>

      <div>
      <TranslationButton /> </div>
      <div className="container flex-grow-1">
        <Nav />
        {!user ? <span>Be sure to Login!!!</span> : <span>Hello <Link to="api/me">{user.name}</Link></span> }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/AssessmentTest" element={<AssessmentTest />} />
          <Route path="/AssessmentTestSpanish" element={<AssessmentTestSpanish />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;



