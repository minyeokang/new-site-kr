import { Link } from 'react-scroll';
function Header() {
  return (
    <header>
      <nav className='mb-4 fs-5'>
        <h1 className="logo">Minyeo</h1>
        <ul className="menu">
          <li><Link to="work">Work</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </nav>
    </header>
    
  )
}

export default Header