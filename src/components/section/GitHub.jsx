import './Section.css'  

import { useState } from 'react'

import Passo1 from '../../assets/imgs/githubpasso1.PNG'
import Passo2 from '../../assets/imgs/githubpasso2.PNG'
import Passo3 from '../../assets/imgs/githubpasso3.PNG'
import Passo4 from '../../assets/imgs/githubpasso4.PNG'
import Passo5 from '../../assets/imgs/githubpasso5.PNG'

export default function GitHub() {

    const [ btnShow, setBtnShow ] = useState({clicked: false})

    function showNote() {
        setBtnShow({clicked: !btnShow.clicked})
    }
    return (
        <section id='gitHub' data-anime className='container-notes bg-white'>
            <div className="content">
                <div className="content-notes">
                    <div className='cont'>
                        <h1>GitHub</h1>
                        <p>
                            Aqui está mue GitHub e minhas anotações.
                        </p>
                        <h2>Veja meus repositórios</h2>
                        <p>
                            Você vai encontrar outros projetos, segue lá!
                        </p>
                        <div className='btn'>

                            <a className='btn btn-black' href="https://github.com/humbertomonteiro" target='_blanck'>GitHub</a>

                            <button onClick={() => showNote()} className='btn btn-black'>
                                Anotações GitHub
                            </button>

                        </div>
                    </div>
                    <div className='icon'>
                        <i className="fa-brands fa-github"></i>
                    </div>
                </div>
                <div id='note' className={btnShow.clicked ?  '#note active' : '#note'}>
                    <div className='cont-note'>
                        <div className='cont-note-info'>

                            <h2>Para que surgiu o GitHub</h2>
                            <p>
                                O GitHub surgio para que podessemos armazenar nossos projetos em um repositório remoto,
                                para que ficasse viavel o trabalho em equipe. Imagina se precisassemos mandar nossas
                                atualizações de código por e-mail. Em uma equipe pequena já causaria um grande transtorno,
                                uma mudança de cada um, faria com que todos os outros desenvolvedores tivessem que ver
                                e-mails e e-mails para poder começar a trabalhar. Então o GitHub vai guardar nosso repositório
                                git e ainda da uma ótima visão dos commits dentro do projeto.
                            </p>
                            <h3>Criar conta</h3>
                            <p>
                                Primeiro crie uma conta no GitHub. É como criar qualquer outra conta na internet.
                                <a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
                                target='_blanck'>Criar conta</a>
                            </p>
                            <h3>Criar repósitorio remoto</h3>
                            <p>
                                Clique na logo do gitHub e depois clique no botão new, pra criar um repositório remoto.
                            </p>
                            <div className='div-img'><img src={Passo1} alt=""/></div>
                            <p>
                                Após clicar no botão new, irá aparecer essa tela:
                            </p>
                
                            <div className='div-img'><img src={Passo2} alt=""/></div>
                            <p>
                                No campo <strong>nome do repositório</strong> você vai colocar o nome da pasta onde está seu projeto
                                (tem que ser igual) e no campo abaixo <strong>Descrição</strong> você vai colocar uma descrição do seu
                                projeto.
                            </p>
                            <p>
                                Ainda na mesma página vão aparecer esses campos:
                            </p>
                            <div className='div-img'><img src={Passo3} alt=""/></div>
                
                            <p>
                                Aqui vamos primeiro informar se o repositório vai ser público ou privado. Se for público, todos terão
                                acesso ao seu repósitori, caso seja privado so terá acesso ao repositório quem você der a permissão.
                                Os outros campos podem ser desconsiderados. E agora é só clicar no botão Criar repositório.
                            </p>
                            <p>
                                Irá aparecer essas opções:
                            </p>
                            <p>
                                Para criar um novo repositório na linha de comando ele mostrará os seguintes comandos:
                            </p>
                            <div className='div-img'><img src={Passo4} alt=""/></div>
                            <p>
                                Ou para enviar um repositório existente a partir da linha de comando.
                            </p>
                            <div className='div-img'><img src={Passo5} alt=""/></div>
                
                            <p>
                                Aqui no nosso caso vamos criar um repositório remoto já existente.
                                então para começar vamos copiar o primerio código que o github nos mostrou.
                                Esse: 
                                <strong>git remote add origin https://github.com/humbertomonteiro/sdgfgds.git</strong>
                            </p>
                            <p>
                                Agora vamos no terminal do nosso projeto e colocar esse código copiado. Esse
                                comando vai criar um repositório com o nome origin e a url do repositório
                                será a informada em seguida.
                            </p>
                            <p>
                                Agora podemos verificar se realmente foi criado o repositório remoto passando
                                o seguinte comando: <strong>git remote</strong>
                                Agora se tudo estiver correto, o terminal responderá: <strong>origin</strong>
                            </p>
                            <p>
                                O segundo código passado para nós é:  <strong>git branch -M main</strong>
                                Que só vai mudar o nome da branch de master, que é o padrão, para main. Essa
                                mudança na prática não muda em nada, é mais questão de nomeclatura mesmo.
                            </p>
                            <p>
                                O último comando é o: <strong>git push -u origin main</strong>
                                Esse comando push é muito importante. Aqui ele vai mandar tudo que está no
                                branch main do nosso repositório local para o repositório remoto.
                            </p>
                            <p>
                                Podemos mandar qualquer branch para o repositório remoto, basta entrar na branch
                                que quer enviar. Como exemplo vamos imaginar que tenha uma branch chamada development
                                e você quer envia-la tambem. vamos entrar nela com o camando: <strong>git checkout development</strong>
                                e em seguida usariamos o comando: <strong>git push origin development</strong>
                            </p>
                            <h3>Repositórios remotos</h3>
                            <h4>Git clone</h4>
                            <p>
                                Se formos trabalhar em um repositório remoto, temos que clonar ele no nosso
                                computador, fazemos isso com o comando <strong>git clone</strong>
                                Para começar vamos no repositório que queremos trabalhar e copiar a url dele,
                                depois vamos criar a pasta onde vamos clonar esse repositório(pode ser
                                em qualquer lugar da sua maquina). Vamos entrar nessa pasta que acabamos de criar
                                e clicar no segundo botão do mouse, vão aparecer algumas opções, mas vamos escolher
                                a opção <strong>Git Bash Here</strong>. quando fizer isso aparecerá uma telinha e é
                                nessa telinha que vamos digitar nosso comando para clonar.
                                Vamos usar o seguinte comando: <strong>git clone</strong> e a url do projeto onde vamos
                                trabalhar. Pronto! Agora é só esperar carregar os dados e abrir seu projeto.
                            </p>
                            <h4>Git pull</h4>
                            <p>
                                Agora vamos supor que você está trabalhando em equipe e seus cologas já deram alguns
                                push no projeto, você não vai ver essas alterações na sua maquina, para atualizar o projeto
                                de acordo como está la no repositório remoto ultilizamos o comando <strong>git pull</strong>.
                                Pronto! Agora seu repositório está atualizado e você pode trabalhar normalmente.
                            </p>
                            <h3>Personalize seu GitHub</h3>
                            <p>
                                Seu github será visto por empresas para que elas avaliem seus códigos e vejam seus
                                projetos. Então vamos dar uma melhorada no nosso github. Veja esse video que você conseguirá 
                                deixar muito mais atrativo seu GitHub
                            </p>
                            <div className="div-video">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/cRoBt6AZgjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="btn btn-close">
                                <a href='#gitHub' onClick={() => showNote()} className='btn btn-black'>
                                    Fechar GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}