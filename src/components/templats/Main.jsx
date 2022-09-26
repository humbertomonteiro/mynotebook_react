import './Main.css'
import 'font-awesome/css/font-awesome.min.css'

const Main = () => 
    <main className='main corLetra'>
        <div className='icone esquerda'>
            <i className="fa fa-chevron-left"></i>
        </div>

        <div>
            <div className='carrossel1'>
                <h1>Desenvolvimento web</h1>
                <p>Esse é meu caderno de anotações para estudar desinvolvimento web. Para vê tudo da forma oficial procure o site da 3wscholls.</p>
            </div>

            <div className='carrossel2 none'>
                <h1>Começando com HTML</h1>
                <p>Recomendo que comece por aqui, HTML é por onde muitos começas os estudos, para montar o seu arquivo pra depois dá algum design e interações.</p>
            </div>
        </div>

        <div className='icone direita'>
            <i className="fa fa-chevron-right"></i>
        </div>
        
    </main>

export default Main