// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

import logo from '../../assets/logo.svg'
import styles from './NavBar.module.css'


interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props

 
  
  return (
    <main className={styles.container}>
     <nav>
      <NavLink to="/">
        <img src={logo} alt="Plantur" />
      </NavLink>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/plants">PLANT LIST</NavLink></li>
          <li><NavLink to="/plants/new">NEW PLANT</NavLink></li>
          <li><NavLink to="/change-password">CHANGE PASSWORD</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
      :
      <ul>
          <li><NavLink to="/login">LOG IN</NavLink></li>
          <li><NavLink to="/signup">SIGN UP</NavLink></li>
        </ul>
      }
    </nav>
  </main>
  )
}

export default NavBar
