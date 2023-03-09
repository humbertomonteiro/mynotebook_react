import './Projects.css'

import { motion } from 'framer-motion'

import Finans from '../../assets/imgs/finans.png'
import Spotify from '../../assets/imgs/spotify.png'
import Mosquito from '../../assets/imgs/mata-mosquito.png'
import Orcamento from '../../assets/imgs/orcamento.png'
import Encurtador from '../../assets/imgs/encurtarLink.png'

export default function Projects() {

    return (
        <section className='container-projects'>

            <motion.div className='carousel' whileTap={{cursor: "grabbing"}}>
                <h1>Projetos Pessoais</h1>
                <motion.div className="list-projects"
                drag="x"
                dragConstraints={{ right: 0, left: -1820 }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: .8 }}>
        
                    <div className='iten-projects'>
                        <img src={Finans} alt="" />
                        <a href="https://humbertomonteiro.github.io/finans/"
                        target='_blanck' className='iten-projects'>
                            <h2>Clone do site Finans</h2>
                            <h3>Tecnologias usadas:</h3>
                            <p>HTML, CSS, JavaScript e Bootstrap</p>
                        </a>
                    </div>

                    <div className="iten-projects">
                        <img src={Spotify} alt="" />
                        <a href="https://humbertomonteiro.github.io/spotify/"
                        target='_blanck' className='iten-projects'>
                            <h2>Clone do site Spotify</h2>
                            <h3>Tecnologias usadas:</h3>
                            <p>HTML, CSS, JavaScript e Bootstrap</p>
                        </a>
                    </div>
                        
                    <div className="iten-projects">
                        <img src={Mosquito} alt="" />
                        <a href="https://humbertomonteiro.github.io/mata_mosquito/"
                        target='_blanck' className='iten-projects'><h2>Mata Mosquito</h2>
                            <h3>Tecnologias usadas:</h3>
                            <p>HTML, CSS, JavaScript</p>
                        </a>
                    </div>

                    <div className="iten-projects">
                        <img src={Orcamento} alt="" />
                        <a href="https://humbertomonteiro.github.io/my_finans/"
                        target='_blanck' className='iten-projects'>
                            <h2>My Finans - Orçamento</h2>
                            <h3>Tecnologias usadas:</h3>
                            <p>HTML, CSS, JavaScript</p>
                        </a>
                    </div>

                    <div className="iten-projects">
                        <img src={Encurtador} alt="" />
                        <a href="https://6380decf8f98a12e0dc6bf35--luminous-cranachan-d62d82.netlify.app/"
                        target='_blanck' className='iten-projects'>
                            <h2>Encurtador de link</h2>
                            <h3>Tecnologias usadas:</h3>
                            <p>HTML, CSS, JavaScript e React.js</p>
                        </a>
                    </div>
            
                </motion.div>
            </motion.div>
        </section>
    )
}