import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="navlinks"><Link to="/">Home</Link></li>
          <li className="navlinks"><Link to="/assessment">Assessment</Link></li>
          <li className="navlinks"><Link to="/resources">Resources</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;
