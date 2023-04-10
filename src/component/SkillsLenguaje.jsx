import Images from '../img/img';
import ContainImg from './ContainImg';


const SkillsLenguaje = () =>{
    return(
        <>
       {Images.map((img)=>{
        return(
        <article key={img.id}>
        <ContainImg  extension={img.logo}/>
        </article>
        )   
    })}   
        </>
    )
}

export default SkillsLenguaje;