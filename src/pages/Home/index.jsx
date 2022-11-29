import './Home.css'

import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

import BgHome from '../../assets/imgs/bgHome.png'

import Skills from "../../components/Skills";

export default function Home() {
    return (
        <>
            <section className="container-introduceMe">
                <div className='introduceMe'>
                    <div className='introduceMe-text'>
                        <p className='name'>
                            Olá, me chamo <span>Humberto Monteiro</span>.
                        </p>
                        <p className='text'>
                            Sou estudante de Desenvolvimento web. Atualmente não trabalho na aréa,
                            mas por curiosidade comecei a estudar e me apaixonei pelo que podemos criar com
                            essas tecnologias incriveis. Agora estou procurando entrar nesse mundo com uma experiencia profissional para
                            poder mostrar o que eu aprendi com os cursos que já fiz e quero principalmente
                            aprender mais e mais, até me tornar um desenvolvedor full-stack.
                        </p>
                    </div>
                    <div className='btn-contacts'>
                        <a href="https://www.linkedin.com/in/humberto-monteiro-8b6684110/" target='_blanck'><button><AiFillLinkedin/> Linkedin</button></a>
                        <a href="https://github.com/humbertomonteiro" target='_blanck'><button><AiOutlineGithub/> GitHub</button></a>
                    </div>
                </div>
                <div className='introduceMe-img'>
                    <img src={BgHome} alt="" />
                </div>
            </section>
            <Skills/>
        </>
        
    )
}