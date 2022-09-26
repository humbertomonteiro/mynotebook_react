import './Section.css'

const SectionVsc = props =>
    <section className='section corBg'>
        <div>
            <img src={props.img} alt="" />
        </div>
        <div className='cont'>
            <h1>Editor de código</h1>
            <h2>VS Studio Code</h2>
            <p>Tem varios editores de códigos que você pode usar, mas aqui eu vou usar o vs Studio code. Então todas as dicas dadas no site vão servir para o editor citado.</p>
        </div>
    </section>

export default SectionVsc