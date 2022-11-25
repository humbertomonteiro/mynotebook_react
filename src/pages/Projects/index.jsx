import './Projects.css'

import Finans from '../../assets/imgs/finans.png'
import Spotify from '../../assets/imgs/spotify.png'
import Mosquito from '../../assets/imgs/mataMosquito.png'
import Orcamento from '../../assets/imgs/orcamento.png'
import Encurtador from '../../assets/imgs/encurtarLink.png'

export default function Projects() {
    return (
        <section className='container-projects'>
            <h1>Meus Projetos Pessoais</h1>
            <div className="projects">
                <a href="https://humbertomonteiro.github.io/finans/" target='_blanck'>
                    <img src={Finans} alt="" />
                    <div className='projects-info'>
                        <h2>Clone do site Finans</h2>
                        <h3>Tecnologias usadas:</h3>
                        <p>HTML, CSS, JavaScript e Bootstrap</p>
                    </div>
                </a>
                <a href="https://humbertomonteiro.github.io/spotify/" target='_blanck'>
                    <img src={Spotify} alt="" />
                    <div className="projects-info">
                        <h2>Clone do site Spotify</h2>
                        <h3>Tecnologias usadas:</h3>
                        <p>HTML, CSS, JavaScript e Bootstrap</p>
                    </div>
                </a>
                <a href="https://humbertomonteiro.github.io/game-Mata-Mosquito/" target='_blanck'>
                    <img src={Mosquito} alt="" />
                    <div className="projects-info">
                        <h2>Game feito com JavaScript</h2>
                        <h3>Tecnologias usadas:</h3>
                        <p>HTML, CSS, JavaScript</p>
                    </div>
                </a>
                <a href="https://humbertomonteiro.github.io/app_financas/" target='_blanck'>
                    <img src={Orcamento} alt="" />
                    <div className="projects-info">
                        <h2>Gerênciar seu orçamento</h2>
                        <h3>Tecnologias usadas:</h3>
                        <p>HTML, CSS, JavaScript</p>
                    </div>
                </a>
                <a href="https://6380decf8f98a12e0dc6bf35--luminous-cranachan-d62d82.netlify.app/" target='_blanck'>
                    <img src={Encurtador} alt="" />
                    <div className="projects-info">
                        <h2>Encurtador de link usando api B</h2>
                        <h3>Tecnologias usadas:</h3>
                        <p>HTML, CSS, JavaScript e React.js</p>
                    </div>
                </a>
            </div>
            
        </section>
    )
}