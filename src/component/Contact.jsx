import '../Css/contact.css';
import Form from '../component/Form';
import Buttoms from '../component/Buttoms';
import Logo from '../img/logoWeb.png'
const Contact = () =>{
    return(
        <>
        <section className='section-form'>
            <article>
            <Form/>
            </article>
            <article className='contact'>
            <h2>Mis redes.</h2>
            <p>Aqui podras ver mi recorrido y los trabajos que e realizado.</p>
            <Buttoms/>
            <p><strong>Correo Electronico </strong><br/>mendoza.matias.ezequiel.01@gmail.com</p>
            <p><strong>Telefono </strong><br/>1170001025</p>
            <img src={Logo} alt="Logo" />
            </article>
        </section>
       
        </>
    )
}

export default Contact ;