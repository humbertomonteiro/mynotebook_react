import './App.css'

import Header from '../components/templats/Header'
import Main from '../components/templats/Main'
import Footer from '../components/templats/Footer'

import SectionGit from '../components/section/SectionGit'
import SectionVsc from '../components/section/SectionVsc'
import SectionBootstrap from '../components/section/SectionBootstrap'


import ImgGit from '../assets/imgs/github.png'
import ImgVsc from '../assets/imgs/vsc.png'
import ImgBootstrap from '../assets/imgs/bootstrap.png'

const App = () => {

    function animate() {

        const observer = new IntersectionObserver(e => {
            Array.from(e).forEach(element => {
                if(element.intersectionRatio >= .5) {
                    element.target.classList.add('anime')
                }
            }, {
                threshold: 1
            })
        })
    
        Array.from(document.querySelectorAll('[data-anime]'))
            .forEach(e => {
                e.observer.observe(e)
            })
    
    }
    
    return (
        <>
            <Header />
            <Main />
            <SectionGit img={ImgGit} />
            <SectionBootstrap img={ImgBootstrap}/>
            <SectionVsc img={ImgVsc} />
            <Footer />
        </>
    )
}
export default App