import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/assessment">Assessment</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;
