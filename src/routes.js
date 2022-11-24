import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Anotacoes from './pages/Anotacoes'
import Portifolio from './pages/Portifolio'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/anotacoes' element={<Anotacoes/>}/>
                <Route path='/portifolio' element={<Portifolio/>}/>
            </Routes>
        </BrowserRouter>
    )
}