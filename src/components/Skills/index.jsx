import './Skills.css'

export default function Skills() {
    return (
        <section className='container-skills'>

            <div className='skills'>
                <div className='tecs'>
                    <a href='/anotacoes' className='tec git'>
                        <h3><i className="fa-brands fa-git-alt"></i></h3>
                        <h4>Git</h4>
                    </a>
                    <a href='/anotacoes' className='tec github'>
                        <h3><i className="fa-brands fa-github"></i></h3>
                        <h4>GitHub</h4>
                    </a>
                    <a href='/anotacoes' className='tec node'>
                        <h3><i className="fa-brands fa-node-js"></i></h3>
                        <h4>Node.js</h4>
                    </a>
                    <a href='/anotacoes' className='tec'>
                        <h3><i className="fa-brands fa-bootstrap"></i></h3>
                        <h4>Bootstrap</h4>
                    </a>
                </div>
            </div>
                
        </section>
    )
}