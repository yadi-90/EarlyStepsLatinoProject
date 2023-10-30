import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li class="navlinks"><Link to="/">Home</Link></li>
          <li class="navlinks"><Link to="/assessment">Assessment</Link></li>
          <li class="navlinks"><Link to="/resources">Resources</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;
