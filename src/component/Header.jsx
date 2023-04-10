import About from "./About";
import Nav from "./Nav";

import '../Css/header.css'


const Header = () =>{
    return (
        <div>
            <Nav/>
            <header className="header">
            <h1>Mendoza Matias</h1>
            <h2 className="subtitle">Full stack Developer</h2>
            </header>
            <About/>
        </div>
    )
}

export default Header;