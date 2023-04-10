import { useState } from 'react'
import '../Css/form.css'

const Form = () =>{
    const [input,setInput] = useState({
        nombre:'',
        telefono:'',
        correo:'',
        propuesta:''
    })
    const [respuesta,setRespuesta] = useState('Mensaje no enviado')

    const handleChange = (e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const contacto = input

        const enviar = 
           await fetch('https://porfolio-j9go.onrender.com/create',{
                method:'POST',
                body: JSON.stringify(contacto),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const json = await enviar.json()
            
            if(enviar.ok){
                console.log(json)
                setInput({
                    nombre:'',
                    telefono:'',
                    correo:'',
                    propuesta:''  
                })
                setRespuesta('Mensaje Enviado')
            }
    }

    return(
        <>
        <form className='form' onSubmit={handleSubmit}>
            <h2>Contacto</h2>
                <label>Nombre</label>
                <input required value={input.nombre} onChange={handleChange} placeholder='user' type="text" name='nombre' maxLength={15} />
                <label>Correo Electronico</label>
                <input required value={input.correo} onChange={handleChange} placeholder='miEmail@gmail.com' type="email" name="correo"  maxLength={50}/>
                <label>Telefono</label>
                <input required value={input.telefono} name='telefono' onChange={handleChange} placeholder='1120304050' type='number'  maxLength={15}/>
                <label>Trabajo</label>
                <textarea required value={input.propuesta} onChange={handleChange} placeholder='Necesito armar una pagina' name="propuesta" cols="40" rows="10" maxLength={100}></textarea>
                <button type='submit'>Enviar</button>
                <p>{respuesta}</p>
            </form>
        </>
    )
}

export default Form;