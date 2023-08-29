import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonDetail from './pages/PokemonDetail'
import Pages404 from './pages/Pages404'
import PrivateRoutes from './components/auth/PrivateRoutes'

function App() {

  return (
    <Routes>
      <Route  path='/' element={<Home/>}/>

      <Route element={<PrivateRoutes/>}>
        <Route  path='/pokedex' element={<Pokedex/>}/>
        <Route  path='/pokedex/:idPokemon' element={<PokemonDetail/>}/>
      </Route>


      <Route path='*' element={<Pages404/>}/>
    </Routes>
  )
}

export default App
