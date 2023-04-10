import '../Css/nav.css'
import { Link } from "react-router-dom";

const NavLink = () =>{
    return(
        <>
            <li ><Link to={'/'}>Inicio</Link></li>
            <li><Link to={'/skills'}>Mis Skills</Link></li>
            <li><Link to={'/contact'}>Contacto</Link></li>
            <li><a href="./cv.pdf" download={""}>Cv</a></li>
        </>
    )
}

export default NavLink;