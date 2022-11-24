import './Portifolio.css'

import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import Perfil from '../../assets/imgs/perfil.jpg'
import Skills from '../../components/Skills'

export default function Portifolio() {
    return (
        <div className='container-profile'>

            <div className='container-img'>
                <img src={Perfil} alt="" />
                <Skills/>
            </div>

            <div className='container-datas'>
                <div className='data'>
                    <div className='personal'>
                        <h2>Perfil</h2>
                        <ul>
                            <li>Nome: Humberto Monteiro Araújo Filho</li>
                            <li>Idade: 25 anos</li>
                            <li>Cidade: Fortaleza/ CE</li>
                            <li>Escolaridade: Ensino médio completo</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Sobre</h2>
                        <p>
                            Constante aprendiz. Quero proporcionar melhorias de negócios, adquirir e compartilhar
                            conhecimentos de forma justa e ética. contribuir para negócios sustentáveis, benefícios
                            mútuos e criação de valor de longo prazo. Utilizo a linguagem de programação JavaScript
                            e as tecnologias HTML e CSS junto com o REACT.js em projetos pessoais e pretendo evoluir
                            meus conhecimentos para entrar na área de desenvolvimento web como front-end.
                        </p>
                    </div>
                    <div className='contacts'>
                        <h2>Contatos</h2>
                        <ul className='contacts-ul'>
                            <li><a href="https://www.instagram.com/humberto.fh/"><span>Instagram</span> <AiOutlineInstagram/></a></li>
                            <li><a href="https://github.com/humbertomonteiro"><span>GitHub</span> <AiFillGithub/></a></li>
                            <li><a href="https://www.linkedin.com/in/humberto-monteiro-8b6684110/"><span>Linkedin</span> <AiFillLinkedin/></a></li>
                        </ul>
                    </div>
                    <div className='specialties'>
                        <h2>Especialidades</h2>
                        <ul>
                            <li>Sites</li>
                            <li>Blogs</li>
                            <li>Sistemas</li>
                        </ul>
                    </div>
                </div>
                
            </div>

        </div>
    )
}