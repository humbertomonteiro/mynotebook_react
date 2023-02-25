import './Profile.css'

import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin, AiFillProfile } from 'react-icons/ai'

import Perfil from '../../assets/imgs/perfil.jpg'

export default function Profile() {
    return (
        <div className='container-profile'>

            <div className='container-img'>
                <div>
                    <img src={Perfil} alt="" />
                </div>
                <div className="profile-contancts">
                    <div className='profile'>
                        <h2>Perfil</h2>
                        <ul>
                            <li><strong>Nome:</strong> Humberto Monteiro Araújo Filho</li>
                            <li><strong>Idade:</strong> 25 anos</li>
                            <li><strong>Estado civil:</strong> Casado</li>
                            <li><strong>Cidade:</strong> Fortaleza/ CE</li>
                            <li><strong>Email:</strong> bertohf5@gmail.com</li>
                            <li><strong>Escolaridade:</strong> Ensino médio completo</li>
                        </ul>
                    </div>
                    <div className='contacts'>
                        <h2>Contatos</h2>
                        <a href="https://www.instagram.com/humberto.fh/"><span>Instagram</span> <AiOutlineInstagram/></a>
                        <a href="https://github.com/humbertomonteiro"><span>GitHub</span> <AiFillGithub/></a>
                        <a href="https://www.linkedin.com/in/humberto-monteiro-8b6684110/"><span>Linkedin</span> <AiFillLinkedin/></a>
                    </div>
                </div>
            </div>
            <div className="container-about">
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
            </div>
            <div className="container-courses">
                <div className='courses'>
                <h2>Cursos</h2>
                    <div className='course'>
                        <h3>- Web moderno</h3>
                        <ul>
                            <li><strong>Instituição:</strong> Cod3r</li>
                            <li><strong>Plataforma:</strong> Udemy</li>
                            <li><strong>Professor:</strong> Leonardo Leitão</li>
                        </ul>
                        <h4>Tecnologias:</h4>
                        <p>
                            Javascript, Angular, React, Next, Vue, Node, HTML, CSS, jQuery, Bootstrap, Webpack,
                            Gulp, MySQL
                        </p>
                    </div>
                    <div className='course'>
                        <h3>- Web completo</h3>
                        <ul>
                            <li><strong>Plataforma:</strong> Udemy</li>
                            <li><strong>Professor:</strong> Jorge Sant Ana</li>
                            <li><strong>Professor:</strong> Jamilton Damasceno</li>
                        </ul>
                        <h4>Tecnologias:</h4>
                        <p>
                            HTML5, CSS3, SASS, Bootstrap, JS, ES6, MySQL, JQuery, MVC, APIs, IONIC
                        </p>
                    </div>

                </div>
            </div>
            <div className="container-specialties-projects">
                <ul className='specialties'>
                    <h2>Especialidades</h2>
                    <li>Sites</li>
                    <li>Blogs</li>
                    <li>Sistemas</li>
                </ul>
                <div className='projects'>
                    <h2>Projetos</h2>
                    <a href="/projetos">Projetos pessoais <AiFillProfile/></a>
                </div>
            </div>
        </div>
    )
}