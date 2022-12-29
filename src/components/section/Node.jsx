import './Section.css'
import { useState } from 'react'

export default function SectionNode() {

    const [ btnShow, setBtnShow ] = useState({clicked: false})

    function showNote() {
        setBtnShow({clicked: !btnShow.clicked})
    }

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
                        <button onClick={() => showNote()} className='btn btn-white'>Anotações Node.js</button>
                        </div>
                    </div>
                </div>
                <div id="note" className={btnShow.clicked ? '#note active' : '#note'}>
                    <div className="cont-note">
                        <div className="cont-note-info">
                            <h1>Node.js</h1>

                            <p>
                                Node.js é um ambiente que permite a execução de código javascript fora do navegador.
                                É ultilizado para construir e consumir APIs (back-ends). O Node possui apenas um núcleo (single-threaded), 
                                mas suporta várias operações simultâneas (non-blocking), onde podemos ter várias requisições e o Node
                                vai conseguir atender todas e entregar quando a requisição estiver pronta. Tem um uso baixo de memória,
                                que facilita na hora de colocar uma aplicação no ar e então não precisar gastar tanto para manter a aplicação, 
                                tambem tem muita harmonia com o front-end, pois ambos ultilizam javascript. Todas essas caracteristicas fazem 
                                com que o Node.js seja rápido, escalavel e consequêntemente muito forte no mercado.
                            </p>

                            <h2>Alguns comandos para começar</h2>

                            <p>
                                Vamos primeiro ver alguns comandos que podemos usar no terminal ou no cmd para que tenhamos mais
                                desempenho nos nossos estudos. Para entrar no cmd é só pesquisar cmd na sua maquina ou usar o atalho 
                                <strong>windows r</strong>, onde irá aparecer um balãozinho e você escreve cmd e dar
                                enter. (O atalho para acessar o terminal no VsCode é o <strong>ctrl + J</strong>).
                            </p>
                            <p>
                                Para criar uma pasta usamos o comando <strong>mkdir e o nome da pasta</strong>. 
                                Já para acessarmos uma pasta no nosso terminal usamos o comando 
                                <strong>cd e o nome da pasta</strong>. Então podemos fazer os seguintes comandos: 
                                mkdir teste da o enter e depois o comando: cd teste e apertar o enter. Pronto! Você 
                                já criou e entrou na pasta. Depois de fazer esses paços vamos abrir o VsCode na pasta 
                                criado com o comando <strong>code .</strong>. Para sair de uma pasta usamos 
                                <strong>cd ..</strong>
                            </p>
                            <p>
                                O comando <strong>dir</strong> no terminal é um dos comando principais. Ao ser 
                                executado ele lista todos os diretórios existentes em uma pasta. Então, se uma pasta 
                                'provas' tiver as pastas: 'Trimestre 1' e 'Trimestre 2', com o camando dir na pasta 
                                provas, o prompt listará essas pastas.
                            </p>
                            <p>
                                Temos outros comandos que podemos precisar, como o <strong>pwd</strong> para saber em qual 
                                pasta você está atualmente.
                            </p>
                            <h2>Package.json</h2>
                            <p>
                                O Package.json é onde configuramos o nome da aplicação, qual arquivo usar na inicialização, 
                                tambem é onde mostrarar as bibliotecas e frameworks baixados e onde estarão os scrips de desenvolvimento. 
                                Para criar um arquivo package.json, primeiro temos que falar do gerenciador de pacotes do node, o 
                                <strong>npm</strong>. Trata-se de uma ferramenta crucial para realizar um desenvolvimento 
                                organizado e otimizado, pois permite instalar dependências em um projeto, mantê-las 
                                atualizadas e muito mais. Por isso, é importante conhecer essa tecnologia e entender como 
                                utilizá-la.
                            </p>
                            <p>
                                Para criar um arquivo package.json no nosso projeto, só precisamos usar o comando 
                                <strong>npm init</strong>. Esse comando vai fazer algumas perguntas sobre a configuração 
                                do seu projeto, mas geralmente, como são configurações muito simples de serem alteradas, 
                                usamos o comando <strong>npm init -y</strong>, esse comando vai criar seu arquivo com as 
                                configurações padrões. Se entrar no arquivo estará assim:
                            </p>

                            {/* <code>
                                <pre>
                                    {
                                        "name": "teste",
                                        "version": "1.0.0",
                                        "description": "",
                                        "main": "index.js",
                                        "scripts": {
                                        "test": "echo \"Error: no test specified\" && exit 1"
                                        },
                                        "author": "",
                                        "license": "ISC"
                                    }
                                </pre>
                            </code> */}

                            <h2>Instalando módulos de terceiros</h2>

                            <p>
                                Módulos são arquivos com funcionalidades. Com o arquivo package.json criado agora vamos ver 
                                os comandos usados para baixar as dependências de terceiros para seu projeto. Essas depêndencias 
                                vão para uma pasta chamada <strong>node_modules</strong>, que será criada quando baixar qualquer
                                dependência.
                            </p>
                            <p>
                                Usamos o <strong>npm install e o nome da dependência que quer instalar</strong> ou 
                                podemos abreviar escrevendo <strong>npm i e o nome da dependência</strong>. Dessa 
                                forma o npm irá baixar e deixar no arquivo como depências principais no seu projeto. 
                                Caso queira ver se sua dependência foi baixada realmente, você pode usar o comando <strong>nome da 
                                dependência -v</strong>. Assim será mostrado a versão do pacore baixado, caso exista.
                            </p>
                            <p>
                                A forma de baixar que foi mostrada só irá baixar a dependência no projeto onde foi aplicado o comando.
                                Caso queiro baixar globalmente, ou seja, para todos os projetos que criar com Node.js. Você só precisa usar 
                                o comando <strong>npm i -g nome da dependência</strong>
                            </p>
                            <p>
                                Para exemplificar melhor vamos usar os conhecimento vistos até aqui. Primeiro entraremos 
                                no cmd e daremos o comando <strong>mkdir teste</strong> para criar uma pasta. Em seguida vamos 
                                entrar nessa pasta com o comando <strong>cd teste</strong>, depois vamos usar o comando 
                                <strong>code .</strong> para abrir a pasta no VsCode. Então vamos criar nosso 
                                package.json com o <strong>npm init -y</strong> e agora vamos baixar o 
                                <strong>express</strong> que é um framewouk muito ultilizado. Só precisamos usar o 
                                comando <strong>npm i express</strong> e esperar baixar todos os pacotes. O seu arquivo
                                package.json vai ficar assim quando terminar de baixar o express:
                            </p>

                            {/* <code>
                                <pre>
                                    {
                                        "name": "teste",
                                        "version": "1.0.0",
                                        "description": "",
                                        "main": "index.js",
                                        "scripts": {
                                        "test": "echo \"Error: no test specified\" && exit 1"
                                        },
                                        "author": "",
                                        "license": "ISC",
                                        "dependencies": {
                                        "express": "^4.18.2"
                                        }
                                    }
                                </pre>
                            </code> */}
                            <p>
                                Será criado mais um arquivo chamado packege-lock.json que vai servir para deixar suas dependências 
                                na verção correta para todos que estiverem trabalhando no projeto.
                            </p>
                            <p>
                                Temos mais uma forma importante de baixar dependências de terceiros. Quando precisarmos baixar qualquer
                                framework ou biblioteca que só vamos precisar apenas em desenvolvimento, que é quando o projeto
                                está sendo criado e testado e não está em produção. Vamos usar o comando 
                                <strong>npm i --save-dev nome da dependência</strong>. Dessa forma os pacotes baixados só estarão
                                em desenvolvimento que é onde realmente precisam está, pois em produção só iriam tomar 
                                memória e deixar a aplicação mais pesada.
                            </p>
                            <p>
                                Uma biblioteca que sempre vamos usar apenas na produção é o nodemon. Vamos intalar essa dependência
                                com o comando <strong>npm i --save-dev nodemon</strong>. Agora seu package.json ficará assim:
                            </p>

                            {/* <code>
                                <pre>
                                    {
                                        "name": "teste",
                                        "version": "1.0.0",
                                        "description": "",
                                        "main": "index.js",
                                        "scripts": {
                                        "test": "echo \"Error: no test specified\" && exit 1"
                                        },
                                        "author": "",
                                        "license": "ISC",
                                        "dependencies": {
                                        "express": "^4.18.2"
                                        },
                                        "devDependencies": {
                                        "nodemon": "^2.0.20"
                                        }
                                    }
                                    
                                </pre>
                            </code> */}
                            <p>
                                Note que o nodemon fica separado na parte de devDependencies e ficará apenas em desenvolvimento
                                para que possamos usar menos memória da nossa aplicação em produção.
                            </p>

                            <h3>Observação 1:</h3>
                            <p>
                                Perceba que as dependências que são instaladas tem sua versão informada.
                                normalmente será assim: um sinal e uma sequencia com tres numeros. O primeiro número é o minor, 
                                o segundo é o major e o ultimo o fix. o sinal que está no exemplo é o circunflexo. Isso quer 
                                dizer que a versão da sua dependencia poderar atualizar automaticamente o mejor até a versão 99,
                                mas não poderar atualizar o minor.
                            </p>

                            <p>
                                Tambem podemos alterar o sinal das nossas dependências. Usando o ~ no lugar do ^, só irá atualizar 
                                automaticamente a versão do fix.
                                E se não usar nenhum sinal, quer dizer que só será usada a versão informada e o package.json vai
                                sempre permanecer com essa versão.
                            </p>
                            <p>
                                Tambem podemos informar qual versão queremos baixar para nossa aplicação. veja o exemplo: 
                                <strong>npm i --save-dev axios@0.27.2 -E</strong>.
                                Nesse comando, estamos informando qual a dependencia que queremos baixar, depois 
                                o sinal @, logo em seguida a versão(são a sequência de três números) e por ultimo o -E para informar 
                                que quer que instale exatamente a versão passada.
                            </p>

                            <h3>Observação 2:</h3>
                            <p>
                                A pasta node_modules que é gerada quando instalamos as dependências do nosso projeto não deve ir
                                para o repositório remoto, pois é uma pasta muito grande e é muito simples de baixarmos os pacotes
                                com o npm, porque o arquivo package.json estará com as dependências usadas no projeto e basta dar o
                                comando <strong>npm i</strong> que todas essas dependências serão baixadas.
                            </p>
                            <p>
                                Então para ignorarmos essa pasta node_modules, vamos criar uma um arquivo <strong>.gitignore</strong> 
                                na raiz do nosso projeto e dentro desse arquivo vamos escrever o nome das pasta que queremos ignorar 
                                do nosso projeto, que no caso é apenas o node_modules.
                            </p>

                            <h2>Módulos no Node.js</h2>
                            <p>
                                Temos três formas de usar módulos no Node.js. A primeira maneira de ultilizarmos é 
                                ultilizando módulos de terceiros, que já vimos como baixar com o npm. Tambem podemos criar nossos 
                                próprios módulos e implementa-los e a última forma é importar os módulos que já vem pré-instalados 
                                no Node.js, como o path, fs, http e etc.
                            </p>
                            <p>
                                Para importar esses módulos é muito simples. Primeiro temos que exportar o módulo.
                                Para exemplificar vamos criar um arquivo person.js, dentro desse arquivo vamos criar uma classe e
                                em seguida vamos exportar esse módulo. Para exportar usamos o <strong>module.exports</strong>.
                            </p>
                            {/* <code>
                                <pre>
                                    class Person {
                                        constructor(name) {
                                            this.name = name
                                        }
                                        function sayMyName() {
                                            return `My name is ${this.name}`
                                        }
                                    }

                                    //primeira forma, exportando a classe diretamente.

                                    module.exports = Person

                                    //segunda forma, exportando um objeto com a classe criada.

                                    module.exports = {
                                        Person
                                    }
                                </pre>  
                            </code> */}
                            <p>
                                Para importar o módulo vamos criar mais um arquivo, vamos nomealo-lo como index.js e a 
                                sintaxe ultilizada para importar é usando a função <strong>require</strong> passando o 
                                caminho relativo do módulo que exportamos como parâmetro e atribuindo para uma constante 
                                essa função. Ex.: 
                            </p>
                            {/* <code>
                                <pre>
                                    const {Person} = require('./person')
                                </pre>
                            </code> */}
                            <p>
                                As chaves que estão envolvendo o Person é a expressão <strong>destructuring</strong>, 
                                estamos ultilizando pois estamos importando um objeto. O destructuring serve para 
                                que possamos pegar de um objeto (usando as chaves) ou de um array (usando os colchetes) 
                                o atributo que queremos.
                            </p>
                            <p>
                                Se fossemos importar a classe diretamente seria assim:
                            </p>
                            <code>
                                <pre>
                                    const Person = require('./person')
                                </pre>
                            </code>
                            <p>
                                Agora podemos usar o módulo importado.
                            </p>
                            {/* <code>
                                <pre>
                                    //instanciando classe
                                    const Person = new Person('Humberto')

                                    //mostrando no console a função que diz o nome.
                                    console.log(Person.sayMyName())
                                </pre>
                            </code> */}
                            <p>
                                Para rodarmos no Node.js o módulo importado vamos dar o comando <strong>node index.js</strong> 
                                no terminal e você vai receber: My name is Humberto
                            </p>
                            <p>
                                Aqui temos um pequeno problema. Caso mudassemos qualquer linha do nosso código, teriamos que rodar
                                o mesmo comando denovo: <strong>node index.js</strong>. Como exemplo vamos mudar o return da função 
                                sayMyName da classe que está como <strong>My name is</strong> e vamos alterar para 
                                <strong>hello, my name is</strong>. Para vermos o resultado teriamos que usar o comando
                                node index.js novamente. Para resolvermos isso temos uma biblioteca muito famosa e que já falamos 
                                dela aqui, o <strong>nodemon</strong>.
                            </p>
                            <h3>Observação:</h3>
                            <p>
                                Caso baixassemos o nodemon globalmente assim: <strong>npm i -g nodemon</strong>. Poderiamos usar o comando
                                <strong>npm nodemon index.js</strong> no nosso terminal para que ele funcionasse. Como no exemplo baixamos 
                                apenas na aplicação e não globalmente, vamos ter que usa-lo de outra forma.
                            </p>
                            <p>
                                O nodemon é um dos casos de dependências que só serviriam no desemvolvimento de uma aplicação.
                                Ele vai ficar de olho no nosso código e qualquer mudança será percebida e reiniciará
                                automaticamente a nossa aplicação. Para usar o nodemon vamos usar a parte dos scripts do 
                                nosso arquivo package.json.
                            </p>
                            {/* <code>
                                <pre>
                                    {
                                        "name": "teste",
                                        "version": "1.0.0",
                                        "description": "",
                                        "main": "index.js",

                                        //vai ser aqui que vamos configurar nosso nodemon.
                                        "scripts": {
                                            //podemos e vamos apagar esse script
                                        "test": "echo \"Error: no test specified\" && exit 1"
                                        },
                                        "author": "",
                                        "license": "ISC",
                                        "dependencies": {
                                        "express": "^4.18.2"
                                        },
                                        "devDependencies": {
                                        "nodemon": "^2.0.20"
                                        }
                                    }
                                </pre>
                            </code> */}
                            <p>
                                Os scripts do package.json tem alguns palavras reservadas, como o start, mas podemos dar qualquer
                                nome ao nosso script, porem se usarmos uma palavra não reservada teremos que usar o <strong>run</strong>
                                para funcionar na hora de dar o comando no terminal.
                            </p>
                            <p>
                                Caso usassemos o nome dev para nomear o script e passassemos o nodemon para ele o seu arquivo package.json 
                                ficaria assim:
                            </p>
                            {/* <code>
                                <pre>
                                    {
                                        "name": "teste",
                                        "version": "1.0.0",
                                        "description": "",
                                        "main": "index.js",
                                        "scripts": {
                                        "dev": "nodemon index.js"
                                        },
                                        "author": "",
                                        "license": "ISC",
                                        "dependencies": {
                                        "express": "^4.18.2"
                                        },
                                        "devDependencies": {
                                        "nodemon": "^2.0.20"
                                        }
                                    }
                                    
                                </pre>
                            </code> */}

                            <p>
                                Dessa forma vamos usar o comando <strong>npm run dev</strong> para rodar o nodemon no nosso
                                arquivo index.js. Caso queira colocar o start como o script você vai usar apenas o comando
                                <strong>npm start</strong> que vai funcionar da mesma forma, pois o start é uma palavra reservada
                                e por isso não precisa usar o run na hora de dar o comando.
                            </p>

                            <p>
                                Agora que o nodemon está rodando, qualquer mudança vai ser percebida e o nodemon vai reiniciar 
                                automaticamente nosso projeto. vamos tentar mudar denovo o retur da função da classe, agora para: 
                                `Hi, I'm this.name`. Você verá que seu terminal retornará a mudança assim que salvar seu projeto.
                                Caso queira parar qualquer dependência que está rodando no seu projeto basta dar um 
                                <strong>ctrl + c</strong> no terminal que será interrompido.
                            </p>

                            <h2>Módulo path</h2>
                            <p>
                                O path é uma das dependências pre-instaladas do Node.js mais importantes. Para vermos
                                sua ultilização, vamos criar uma pasta chamada modules e dentro dessa pasta vamos criar
                                um arquivo chamado path.js. Como já vem instalada, podemos já importar para esse arquivo
                                o path da seguinte forma:
                            </p>
                            <code>
                                <pre>
                                    const path = require('path')
                                </pre>
                            </code>
                            <p>
                                path significa caminho em português e é isso que o path vai nos informar. Com métodos simples
                                vamos saber em qual pasta está, ou o diretório do projeto, até mesmo as extenções dos arquivos.
                            </p>
                            <p>
                                O Node.js tem algumas variaveis globais, aqui vamos conhecer uma. <strong>__filename</strong>.
                                Essa variavel é o nome do arquivo que está sendo executado. Para entender melhor vamos fazer
                                o seguinte script no nosso aquivo path.js: 
                            </p>
                            <code>
                                <pre>
                                    console.log(path.basename(__filename))
                                </pre>
                            </code>
                            <p>
                                Aqui vamos passar para o path a função <strong>basename</strong> que serva para obter o nome do
                                arquivo atual. Como parâmetro vamos passar o __filename que dirá em qual arquivo está sendo usada 
                                essa variavel(no caso é no arquivo path.js).
                            </p>

                            <p>
                                Já para saber em qual diretório onde estamos, vamos ter que usar a função <strong>dirname</strong>, 
                                passando o __filename como parâmetro para passar o arquivo que estamos. Essa linha de código irá 
                                retornar o diretório da pasta em que estamos.
                            </p>
                            <code>
                                <pre>
                                    console.log(path.dirname(__filename))
                                </pre>
                            </code>
                            <p>
                                Para ver as extenções dos nossos arquivos tambem é muito fácil com o path. Basta que passemos o 
                                método <strong>extname</strong> tambem com o __filename como parâmetro.
                            </p>
                            <code>
                                <pre>
                                    console.log(path.extname(__filename))
                                </pre>
                            </code>
                            <p>
                                Podemos criar um objeto com informações do nosso arquivo se fizermos esse código:
                            </p>
                            <code>
                                <pre>
                                    console.log(path.parse(__filename))
                                </pre>
                            </code>
                            <p>
                                O Node.js vai nos retornar um objeto com as principais informações do nosso arquivo.
                                Basta usarmos o método <strong>parse</strong> com o __filename como parâmetro que o node 
                                irá retornar:
                            </p>
                            {/* <code>
                                <pre>
                                    {
                                        root: 'C:\\',
                                        dir: 'C:\\Users\\humberto\\Documents\\estudos\\teste\\modules',
                                        base: 'path.js',
                                        ext: '.js',
                                        name: 'path'
                                    }
                                </pre>
                            </code> */}
                            <p>
                                O path tambem pode juntar caminhos de arquivos com o método <strong>join</strong>. Aqui
                                vamos conhecer mais uma variável do Node.js o <strong>__dirname</strong> que vai armazenar o 
                                diretório onde está sendo declarado.
                            </p>
                            <p>
                                Para o método join vamos passar essa variável como parâmetro e o que queremos juntar com o 
                                diretório passado(o __dirname é o diretorio atual). veja o exempli abaixo:
                            </p>
                            <code>
                                <pre>
                                    console.log(path.join(__dirname, 'teste', teste.html))
                                </pre>
                            </code>

                            <p>
                                Nesse exemplo o join irá retornar o diretório atual e passar uma pasta e um arquivo para esse
                                diretório. O Node.js retornará: 
                                <strong>C:\Users\humberto\Documents\estudos\teste\modules\teste\teste.html</strong>.
                                Esse método vai servir para criarmos pastas com outro método muito importante que já vem
                                pré-instalado no Node.js, o <strong>fs</strong>.
                            </p>
                            <h2>método fs</h2>
                            <p>
                                Esse método vai nos permitir manipular arquivos, vamos poder criar, ler, renomear arquivos entre
                                outras coisas. Para vermos como ultiliza-lo vamos criar um arquivo chamado fs.js na pasta metodos 
                                que criamos. Nesse arquivo vamos inportar tanto o fs quanto o path que é nessesário para ultilizar
                                o fs.
                            </p>

                            <code>
                                <pre>
                                    const fs = require('fs')
                                    const path = require('path')
                                </pre>
                            </code>

                            <p>
                                Para começar vamos criar uma pasta usando um método do fs chamado <strong>mkdir</strong>.
                                Aqui vamos precisar do método join do path. Como primeiro argumento do join vamos usar o diretório de onde 
                                queremos criar a pasta e como segundo argumento vamos passar o nome da pasta que vamos criar. Para finalizar
                                como último argumento do mkdir vamos usar uma callback para tratar erros. Veja o exemplo:
                            </p>

                            {/* <code>
                                <pre>
                                    fs.mkdir(path.join(__dirname, '/teste'), (error) => {
                                        if(error) {
                                            return console.log(`Error: ${error}`)
                                        } 
                                    
                                        console.log('Pasta criado com sucesso!')
                                    })
                                </pre>
                            </code> */}

                            <p>
                                Nesse exemplo vemos que foram passados dois parâmetros para o método mkdir o path com o 
                                caminho que queremos construir e uma callback que recebe um erro e retorna se algo der
                                errado e uma string se der certo.
                            </p>
                            <p>
                                Para testar esse código vamos inportar esse método que criamos em no nosso arquivo index.js.
                                Importaremos assim:
                            </p>
                            <code>
                                <pre>
                                    require('./modules/fs')
                                </pre>
                            </code>
                            <p>
                                Vai ser mostrado a mensagem que passamos de Pasta criada com sucesso! no nosso terminal 
                                e se você for na pasta modules verá que foi criada uma pasta com o nome teste, que foi 
                                o nome que passamos para o método join do path.
                            </p>
                            <p>
                                Caso salve novamento o arquivo index.js, verá uma menssagem de erro. Pois a pasta que quer 
                                criar já existe. Então a callback que trata o erro mostrará a mensagem criada para a situação.v
                            </p>
                            <p>
                                Para criar um arquivo é bem parecido de como criar uma pasta. Vamos mudar o método para o 
                                <strong>writeFile</strong> e passar três parârametros: Local onde quer criar a pasta é o primeiro 
                                parâmetro, e é passado com o path novamente, sendo o primeiro parâmetro do path o diretório, o 
                                segundo é o nome da pasta(Esse é opcional) e o terceiro o nome do arquivo que quer criar. O segundo 
                                parâmetro passado para o método writeFiler é o conteúdo do arquivo e por último é uma callback para 
                                tratar erros. Veja o exemplo a seguir.
                            </p>

                            {/* <code>
                                <pre>
                                    fs.writeFile(path.join(__dirname, '/teste', 'teste.html'), 'Conteudo do arquivo!', (error) => {
                                        if(error) {
                                            return console.log(`Erro: ${error}`)
                                        }
                                    
                                        console.log("Arquivo criado com sucesso!")
                                    })
                                </pre>
                            </code> */}
                            <p>
                                Agora se for para a pasta teste que está na pasta modulos verá que dentro dela existe um arquivo HTML 
                                que nele tem o conteúdo passado para a função writeFile.
                            </p>
                            <p>
                                Caso altere o conteúdo do arquivo que está criando para Conteúdo do arquivo 2! e salvar. Verá que foi
                                sobreescrito o antigo por esse novo. Se quisermos adicionar um conteúdo a um arquivo vamos usar 
                                outro método. O <strong>AppendFile</strong>, que será igual o writeFile na sintaxe, só que irá ser
                                adicionado o conteúdo e não sobreescrito. Veja como foi feito o código e o resultado no arquivo:
                            </p>

                            {/* <code>
                                <pre>
                                    fs.appendFile(path.join(__dirname, '/teste', 'teste.html'), 'Hello word!!!', (error) => {
                                        if(error) {
                                            return console.log(`Error:${error}`)
                                        }
                                        console.log('Adicionado com sucesso!!!')
                                    })
                                </pre>
                            </code> */}
                            <p>
                                Esse é o resultado:
                                Conteudo do arquivo!Hello word!!!
                            </p>
                            <p>
                                Veja que foi adicionado o conteúdo novo como esperado.
                            </p>

                            <p>
                                Agora vamos ler um arquivo. Para isso vamos usar o método <strong>readFile</strong>. Aqui vamos passar
                                o arquivo que queremos ler com o path no primeiro argumento, no segundo parâmetro vamos passar o sistema
                                de caracteres que está sendo usado no arquivo, no caso será o utf8 e por último vamos passar uma callback
                                com dois argumentos: error que usaremos para informar qual erro com a nossa callback e data que é o
                                conteúdo retornado pela função. Veja o exemplo:
                            </p>

                            {/* <code>
                                <pre>
                                    fs.readFile(path.join(__dirname, '/teste', 'teste.html'), 'utf8', (error, data) => {
                                        if(error) {
                                            return console.log(`Error: ${error}`)
                                        }
                                        console.log(data)
                                    })
                                </pre>
                            </code> */}
                            <p>
                                Aqui será retornado para nós o que está escrito no arquivo passado com o path. Esse será o resultado:
                                Conteudo do arquivo!Hello word!!!
                            </p>
                            <h2>Método HTTP</h2>
                            <p>
                                O Node.js tem o método HTTP pré-instalado e vamos usa-lo agora para construir um pequeno back-end. Como
                                já sabemos temos que primeiro importar esse método. Nossa próxima linha de código será declarando uma
                                porta. Porta servirá para informar para nossa máquina onde vamos rodar esses processos que serão passados
                                no nosso back-end.
                            </p>
                            <code>
                                <pre>
                                    const http = require('http')

                                    const port = 8080
                                </pre>
                            </code>
                            <p>
                                Nosso próximo passo será atribuir para uma constante nosso método http e chamar a função 
                                <strong>createServer</strong> que receberar como parâmetro uma callback que tem dois argumentos: o 
                                <strong>request</strong> é o objeto da requisição que será mandado para o servidor e retornará o 
                                segundo parâmetro da nossa callback o <strong>response</strong> que é o objeto da resposta, onde teremos
                                vários métodos disponiveis para trabalhar nossa aplicação.
                            </p>
                            {/* <code>
                                <pre>
                                    const server = http.createServer((req, res) => {
                                    }
                                </pre>
                            </code> */}
                            <p>
                                Agora vamos começar a passar requisições para nosso back-end. Vou fazer uma condição:
                            </p>
                            {/* <code>
                                <pre>
                                    const server = http.createServer((req, res) => {
                                        if(req.url === '/home')
                                        res.writeHead(200, {'Content-Type': 'text/html'})
                                        res.end('&lt;h1>Home Page!!!&lt;/h1>')
                                    }
                                </pre>
                            </code> */}
                            <p>
                                veja que na condição passada temos o <strong>req.url</strong> que representa a url da requisição 
                                que estamos mandando para o servidor. Então se for exatamente igual /home a requisição retornará com
                                o <strong>res.end</strong> qualquer coisa que queira retornar(basta que esteja em formato de string).
                                Nesse caso estamos mandando como resposta um HTML com a tag de titulo com Home Page!!!
                                Tambem vemos a função res.writeHead que serve para informar tanto o status da requisição quanto
                                o content-type que está sendo enviado. Assim evitamos erros.
                            </p>
                            <p>
                                Para testarmos vamos primeiro usar o método <strong>listen</strong> do http com a porta que declaramos
                                no começo do código e como segundo parâmetro uma callback retornando uma string informando que o servidor
                                está rodando. Vejá como foi feito:
                            </p>
                            {/* <code>
                                <pre>
                                    server.listen(port, () => console.log(`Rodando na porta ${port}`))
                                </pre>
                            </code> */}
                            <p>
                                Agora basta salvar esse arquivo que o nodemon vai reiniciar a aplicação e podemos ir no nosso navegador 
                                acessar o localhost:8080/home que vai está retornando o HTML informado.
                            </p>
                            <p>
                                Agora vamos passar como resposta uma lista de usuários em formato json, mas o res.end não vai conseguir
                                ler corretamente esse json, então vamos dar um parser nesse json com a função JSON.stringify e o código 
                                irá ficar da seguinte forma:
                            </p>
                            {/* <code>
                                <pre>
                                    const server = http.createServer((req, res) => {
                                        if(req.url === '/home') {
                                            res.end('&lt;h1>Home page&lt;/h1>')
                                        }
                                    
                                        //condição para verificasr o caminho da url
                                        if(req.url === '/users') {
                                            //lista json com os úsuarios  
                                            const users = [
                                                {
                                                    name: 'Humberto Monteiro',
                                                    id: '1'
                                                },
                                                {
                                                    name: 'Fernanda Santiago',
                                                    id: '2'
                                                }
                                            ]

                                            //tambem precisamos informar o content-type
                                            res.writeHead(200, {'Content-Type': 'application/json'})

                                            //usando o JSON.stringify passando a lista json para sofrer um parse.
                                            res.end(JSON.stringify(users))
                                        }
                                    })
                                </pre>
                            </code> */}
                            <p>
                                Se acessarmos agora o localhost:8080/users vamos ver que estará retornando os usuários corretamente.
                            </p>
                            <p>
                                Usamos o back-end geralmente para enviar json com dados para trabalharmos, mas de api de terceiros de
                                um banco de dados.
                            </p>
                            <h2>Express</h2>
                            <p>
                                Agora que vimos como fazer um back-end, podemos ver o Express que é um framework muito famoso que
                                simplifica a criação de um back-end. Primerio vamos criar na nossa pasta modulos um arquivo chamado
                                express.js e importar o express para esse arquivo da seguinte forma:
                            </p>
                            <code>
                                <pre>
                                    const express = require('express')
                                    cost app = express()
                                </pre>
                            </code>
                            <p>
                                Veja que primeiro importamos e em seguida passamos para uma constante nomeada como app(que é uma convenção)
                                o express instanciado. Agora para usarmos os métodos http pasta que façamos o seguinte:
                            </p>
                            {/* <code>
                                <pre>
                                    
                                    const port = 8080

                                    app.get('/home', (req, res) => {
                                    res.status(200).send('&lt;h1>Hello Word&lt;/h1>')
                                    })
                                    
                                    app.listen(port, () => console.log(`Rodando na porta ${port}`))
                                </pre>
                            </code> */}
                            <p>
                                Da mesma forma que com o http passa uma porta e colocamos para o express escutar com a função listen.
                                O app que é o express instânciado vai receber a função get que recebe dois parâmetros, o caminho e uma 
                                callback que vai ter o req e o res(request e response). res.status é passado o 200 que é quando não dar 
                                nenhum erro e em seguida é passado a função send com o que queremos mostrar na resposta. Nesse caso mandamos
                                um HTML. Uma das diferenças do express para o html que vem pre-instalado no node é que não precisamos
                                passar o Content-Type.
                            </p>
                            <p>
                                Para enviarmos um json é muito simples também. Vamos usar os mesmos users do http:
                            </p>
                            {/* <code>
                                <pre>
                                    app.get('/users', (req,res) => {
                                        const users = [
                                            {
                                                name: 'Humberto Monteiro',
                                                id: '1'
                                            },
                                            {
                                                name: 'Fernanda Santiago',
                                                id: '2'
                                            }
                                        ]
                                    
                                        res.status(200).json(users)
                                    })
                                </pre>
                            </code> */}

                            {/* <h2>MongoDB</h2> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}