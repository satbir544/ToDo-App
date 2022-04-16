import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px'
    };

    return (
        <nav>
            <ul className='nav-links'>
                <Link style={navStyle} to='/'>
                    <li> Home </li>
                </Link>
                <Link style={navStyle} to='/complete'>
                    <li> Complete </li>
                </Link>
                <Link style={navStyle} to='/incomplete'>
                    <li> Incomplete </li>
                </Link>
                <Link style={navStyle} to='/history'>
                    <li> History </li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li> About </li>
                </Link>
            </ul>
        </nav>
    );
  }
  
  export default Nav;
  