import { useLocation } from 'react-router-dom';
import React from 'react';

const Home = () => {
  const location = useLocation();
  
  return (
    <div>
     {location.pathname === '/' ? (
       <img className="mainimage" src="https://images.unsplash.com/photo-1616543791139-fdca422b7ef7?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Happy Latino family enjoying time together."  />
     ) : null}
<div className="maincontainer">
       
        <p>
        Welcome to EarlyStepsLatino, where families come together to embark on a journey of understanding and support. Our mission is simple yet profound: empower Latino families facing the challenges of autism with early intervention strategies, knowledge, and a vibrant community. At EarlyStepsLatino, we believe in the strength of Familia, the power of Early Steps, and the potential for bright futures.</p>
        <p> Navigate autism's early years with confidence, connecting with a community that grows and learns together. Discover comprehensive resources, culturally sensitive information, and a network that understands the unique needs of Latino families. Join us at EarlyStepsLatino, where every step is a step toward a thriving future for your child and your family.
        </p>
            </div>
            <div className="missioncontainer">
<h1>Our Mission</h1>
<p>
EarlyStepsLatino is dedicated to enriching the lives of Latino families by offering comprehensive information, fostering connection, and promoting early intervention strategies for a thriving journey with autism.
</p>
</div>
    <footer>
      <h1> Created by Yadira Morales</h1>
    </footer>
    </div>

  );
};

export default Home;
