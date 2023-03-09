import './Section.css'  

export default function SectionBootstrap() {
    return (
        <section id='bootstrap' data-anime className='container-notes bg-white'>
            <div className="content">
                <div className="content-notes">
                    <div className='cont'>
                        <h1>Bootstrap</h1>
                        <p>
                            Um framework front-end que fornece estruturas css para ficar mais simples de fazer sua interface
                        </p>
                        <h2>Acesse aqui</h2>
                        <p>
                            Acesse um dos clones abaixo e inspecione o código para ver as principais configurações para sua página
                            ficar toda funcional.
                        </p>
                        <div className='btn'>
                            <a className='btn-black' href="https://humbertomonteiro.github.io/finans/" target='_blanck'>Clone Finans</a>
                            <a className='btn-black' href="https://humbertomonteiro.github.io/spotify/" target='_blanck'>Clone Spotify</a>
                        </div>
                    </div>
                    <div className='icon'>
                        <i className="fa-brands fa-bootstrap"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}