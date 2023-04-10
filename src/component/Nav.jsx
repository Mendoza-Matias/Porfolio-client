import { useRef } from "react";
import '../Css/nav.css'
import {FaBars,FaTimes} from 'react-icons/fa'
import NavLink from "./NavLink";

const Nav = () =>{

    const navRef = useRef();

    const abriNavBar = () =>{
        navRef.current.classList.toggle('responsive_nav')
    };

     return(
        <div>
            <div className="div">
                <h3 className="logo">MM</h3>
            <nav ref={navRef}>
                <ul>
                    <NavLink/>
                    <button className="nav-btn nav-close-btn" onClick={abriNavBar}>
                    <FaTimes/>
                    </button>
                </ul>
                
            </nav>
            <button className="nav-btn" onClick={abriNavBar}>
                <FaBars/>
            </button>
        </div>
        </div>
    )
}

export default Nav;