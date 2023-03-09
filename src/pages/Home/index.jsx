import './Home.css'

import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

import BgHome from '../../assets/imgs/bgHome.png'

import Skills from "../../components/Skills";

export default function Home() {
    return (
        <>
            <section className="container-introduceme">
                <div className='introduceMe'>
                    <div className='introduceme-text'>
                        
                        <h3 className='hello'>
                            Olá, me chamo.
                        </h3>

                        <h1 className='name'>Humberto Monteiro</h1>

                        <h3 className='i-am'>
                            Sou estudante de Programação!
                        </h3>

                        <p className='text'>
                                Estou procurando entrar nesse mundo com uma experiencia profissional para
                            poder mostrar o que eu aprendi com os cursos e projetos pessoais que já fiz e quero principalmente
                            aprender mais e mais, até me tornar um desenvolvedor full-stack.
                        </p>
                    </div>
                    <div className='btn-contacts'>
                        <a href="https://www.linkedin.com/in/humberto-monteiro-8b6684110/" target='_blanck'><button><AiFillLinkedin/></button></a>
                        <a href="https://github.com/humbertomonteiro" target='_blanck'><button><AiOutlineGithub/></button></a>
                        <a href="https://www.instagram.com/humberto.fh/" target='_blanck'><button><AiFillInstagram/></button></a>
                        <a href="https://github.com/humbertomonteiro" target='_blanck'><button><AiFillFacebook/></button></a>
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