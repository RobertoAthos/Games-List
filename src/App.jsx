import {BrowserRouter,Routes,Route} from 'react-router-dom'
import GameDetail from './pages/GameDetail/GameDetail'
import Results from './pages/ResultsGames/Results'
import TopGames from './pages/TopGames/TopGames'


function App() {
  return (
   <BrowserRouter>
      <Routes>
      <Route path='/' element={<TopGames/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/game/:name' element={<GameDetail/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
