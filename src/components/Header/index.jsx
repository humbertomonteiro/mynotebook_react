import './Header.css'

import { useState } from 'react'

import Logo from '../../assets/imgs/logo.png'

export default function Header() {

    const [ toggle, setToggle ] = useState({clicked: false})

    function handleToggle() {
        setToggle({clicked: !toggle.clicked})
    }

    return (
        <header className='header'>
            <aside className='logo'>
                <a href="/"><img src={Logo} alt="" /></a>
            </aside>
            <nav id='nav' className={toggle.clicked ? '#nav active' : '#nav'}>
                <a className='nav-link' href="/">Home</a>
                <a className='nav-link' href="/portifolio">Profile</a>
                <a className='nav-link' href="/anotacoes">Anotações</a>
                <a className='nav-link' href="/projetos">Projetos</a>
                
            </nav>
            <div className="toggle" onClick={() => handleToggle()}>
            <i className={toggle.clicked ? 'icon fa-solid fa-x' : 'icon fa-solid fa-bars'}></i>
            </div>
        </header>
    )
}