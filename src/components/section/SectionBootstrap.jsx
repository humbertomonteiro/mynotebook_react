import './Section.css'  

const SectionBootstrap = props =>
    <section data-anime className='section corLetra'>
        <div className='cont'>
            <h1>Bootstrap</h1>
            <p>Um framework front-end que fornece estruturas css para ficar mais simples de fazer sua interface</p>
            <h2>Acesse aqui</h2>
            <p>No material disponibilizado pelo próprio site você irá conseguir fazer coisas incriveis de uma forma muito simples.</p>
        </div>
        <div>
            <img src={props.img} alt="" />
        </div>
    </section>

export default SectionBootstrap