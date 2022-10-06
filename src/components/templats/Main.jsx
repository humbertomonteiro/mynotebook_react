import './Main.css'
import 'font-awesome/css/font-awesome.min.css'
import React, { useEffect, useState } from 'react'

const Main = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setInterval(click, 6000)
    }, [])

    function click() {
        const item1 = document.querySelector('.item1')
        const item2 = document.querySelector('.item2')

        item1.classList.toggle('none')
        item2.classList.toggle('none')
    }

    return (
        <main className='main corLetra'>
            <div className='icone' onClick={click}>
                <i className="fa fa-chevron-left"></i>
            </div>

            <div setCounter={counter}>
                <div className='item1'>
                    <h1>Desenvolvimento web</h1>
                    <p>Esse é meu caderno de anotações para estudar desinvolvimento web. Para vê tudo da forma oficial procure o site da 3wscholls.</p>
                </div>

                <div className='item2 none'>
                    <h1>Começando com HTML</h1>
                    <p>Recomendo que comece por aqui, HTML é por onde muitos começas os estudos, para montar o seu arquivo pra depois dá algum design e interações.</p>
                </div>
            </div>

            <div className='icone' onClick={click}>
                <i  className="fa fa-chevron-right"></i>
            </div>
        </main>
    )

    setInterval(click, 6000)
}

export default Main