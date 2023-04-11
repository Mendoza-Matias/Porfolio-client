import '../Css/about.css'
import foto from '../img/foto_personal.jpeg'
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Buttoms from '../component/Buttoms';
const About = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return(
        <div className="about">
            <section className='section'>
                <article>
                <img data-aos="fade-right" className='img'src={foto} alt="Matias Mendoza" />
                </article>
                <article data-aos="zoom-in" className='info'>
                    <h2><strong className='me'>Sobre Mi</strong></h2>
                    <br />
                    <p>¡Hola a todos!<br/>
                     Mi nombre es Matías<br/>
                    Soy estudiante de la Tecnicatura en programación en la universidad Nacional de Hurlinghan y he completado cursos de programación full stack en Educación IT.<br/>
                    Soy una persona autodidacta y creativa, siempre buscando aprender nuevas habilidades y explorar diferentes áreas de la tecnología. Además, me considero un gran colaborador en equipo y dedico mi tiempo y esfuerzo para asegurar el éxito del proyecto en el que esté involucrado.<br/>
                    Me apasiona la programación y creo que con mi perseverancia y dedicación, puedo hacer una contribución significativa en el campo de la tecnología. Estoy emocionado de ver qué oportunidades me esperan en el futuro y estoy dispuesto a enfrentar cualquier desafío que se me presente.
                    <br/>¡Gracias por tomarse el tiempo de conocerme un poco mejor!</p>
                    <div className='contacto'>
                    <Buttoms/>
                    </div>
                </article>
            </section>
            <Footer/>
        </div>
    )
}

export default About;