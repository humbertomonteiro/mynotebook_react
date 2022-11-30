import './Section.css'

export default function SectionNode() {
    return (
        <section className='container-notes bg-none'>
            <div className="content">
                <div className='content-notes'>
                    <div className='icon'>
                        <i className="fa-brands fa-node-js"></i>
                    </div>
                    <div className='cont'>
                        <h1>Node.js</h1>
                        <p>
                            Um back-end que facilita a vida de quem começou a programar em JavaScrip,
                            pois usamos a mesma sintaxe.
                        </p>
                        <h2>O que podemos vazer com Node:</h2>
                        <p>
                            Podemos fazer Aplicações em tempo real, como um chat.
                            Chamada de entrada do servidor, Mocks, Protótipos e muito
                            mais.
                        </p>
                        <div className="btn">
                            <a className='btn-white' href="">Anotações Node</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}