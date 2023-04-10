import '../Css/skills.css'
import SkillsLenguaje from './SkillsLenguaje';
import Views from './Views';
import Footer from './Footer';


const Skills = () =>{
    return(
        <>
        <section className="contain-skills">
            <h2 className='titulo'>Tengo conocimiento en</h2>
            <p>Llevo tiempo capacitandome en<br/>distintas areás de la programación.</p>
            <section className='section-skills'>
                <article className='article-skills'>
                    <h3 className='item-title'>Frontend</h3>
                    <div className='items'>
                    <p>Html</p>
                    <p>Css</p>
                    <p>Javascript</p>
                    <p>React</p>
                    <p>Bootstrap</p>
                    <p>Sass</p>
                    </div>
                </article>
                <article className='article-skills'>
                    <h3 className='item-title'>Backend</h3>
                    <div className='items'>
                    <p>Node.js</p>
                    <p>MongoDB</p>
                    </div>
                </article>
                <article className='article-skills'>
                    <h3 className='item-title'>Habilidades Blandas</h3>
                    <div className='items'>
                    <p>Trabajo en equipo</p>
                    <p>Proactividad</p>
                    <p>Actitud</p>
                    <p>Perseverante</p>
                    <p>Constante</p>
                    </div>
                </article>
            </section>
            <section className='containImg'>
            <SkillsLenguaje/>
            </section>
            <section className="contain-skills">
            <h2 className='titulo'>Mis proyectos</h2>
            <p>Estos son algunos de mis proyectos realizados<br/>con diversas tecnologias  en lo que el objetivo era aplicar lo aprendido y conocer nuevas herramientas.</p>
            <Views/>
            <Footer/>
            </section>
        </section>
        </>
    )
}

export default Skills;