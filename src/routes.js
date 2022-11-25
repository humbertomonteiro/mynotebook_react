import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Notes from './pages/Notes'
import Profile from './pages/Profile'
import Projects from './pages/Projects'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/anotacoes' element={<Notes/>}/>
                <Route path='/portifolio' element={<Profile/>}/>
                <Route path='/projetos' element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
    )
}