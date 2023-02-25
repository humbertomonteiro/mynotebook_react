import './Skills.css'

export default function Skills() {
    return (
        <section className='container-skills'>

            <div className='skills'>
                <h2>Skills</h2>
                <div className='tecs'>
                    <a href='/anotacoes' className='tec git'>
                        <h3><i className="fa-brands fa-git-alt"></i></h3>
                        <button>Git</button>
                    </a>
                    <a href='/anotacoes' className='tec github'>
                        <h3><i className="fa-brands fa-github"></i></h3>
                        <button>GitHub</button>
                    </a>
                    <a href='/anotacoes' className='tec node'>
                        <h3><i className="fa-brands fa-node-js"></i></h3>
                        <button>Node.js</button>
                    </a>
                    <a href='/anotacoes' className='tec'>
                        <h3><i className="fa-brands fa-bootstrap"></i></h3>
                        <button>Bootstrap</button>
                    </a>
                </div>
            </div>
                
        </section>
    )
}