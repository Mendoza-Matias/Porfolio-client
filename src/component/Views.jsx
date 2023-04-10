
import '../Css/skills.css';
import Buttoms from '../component/Buttoms'
import video from '../videos/views'
const Views = () =>{
   
    return(
        <>
        <section className="section-views">
        {video.map((contenido)=>{
            console.log(contenido)
            return(
                <article key={contenido.id}>
                    <h2>{contenido.nombre}</h2>
                    <video controls src={contenido.videos}></video>
                    <Buttoms/>
                </article>
            )
        })}
        </section>
        </>
    )
}

export default Views;