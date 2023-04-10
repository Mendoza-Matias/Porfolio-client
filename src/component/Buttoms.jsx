import '../Css/buttoms.css'

const Buttoms = () =>{
    return(
        <div className='links'>
            <a className='linkedin' href="https://www.linkedin.com/in/matias-mendoza-955170240"  target="_blank" rel="noopener noreferrer">Linkedin.</a>
            <a className='github' href="https://github.com/Mendoza-Matias"  target="_blank" rel="noopener noreferrer">Github.</a>
            <a className='cv' href='./cv.pdf' download={''}>Curriculum.</a>
            

        </div>
    )
}

export default Buttoms;