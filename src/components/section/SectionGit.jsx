import './Section.css'

const SectionGit = props =>
    <section data-anime className='section corBg'>
        <div>
            <img src={props.img} alt="" />
        </div>
        <div className='cont'>
            <h1>Repositorios</h1>
            <p>Para ter seus arquivos salvos e faceis de visualizar você pode usar o GitHub, um repositorio muito famoso.</p>
            <h2>Veja meus repositorios</h2>
            <p>Aqui você vai encontrar outros projetos, segue la que sigo de volta pra gente se ajudar.</p>
        </div>
    </section>

export default SectionGit