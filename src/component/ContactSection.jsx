import Contact from "./Contact";
import Nav from "./Nav";
import Footer from '../component/Footer';
import '../Css/contact.css'

const ContactSection = () =>{
    return(
        <div>
            <Nav/>
            <div className="separacion"/>
            <Contact/>
        <Footer/>
        </div>
    )
}

export default ContactSection;