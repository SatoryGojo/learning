import { NavLink } from 'react-router-dom';
import NavbarStyle from './Navbar.module.css'
const Navbar = () =>{
    return(
        <nav className={NavbarStyle.nav}>
          <ul>
            <NavLink to='/profile' className={navData=>navData.isActive ? NavbarStyle.active : NavbarStyle.item }><li>Профиль</li></NavLink>
            <NavLink to='/dialogs' className={navData=>navData.isActive ? NavbarStyle.active : NavbarStyle.item }><li>Сообщения</li></NavLink>
            <li>Обратная связь</li>
          </ul>
       </nav>
    );
}

export default Navbar;