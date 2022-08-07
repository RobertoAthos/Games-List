import {BrowserRouter,Routes,Route} from 'react-router-dom'
import GameDetail from './pages/GameDetail/GameDetail'
import Search from './pages/Search/Search'
import TopGames from './pages/TopGames/TopGames'


function App() {
  return (
   <BrowserRouter>
      <Routes>
      <Route path='/' element={<TopGames/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/game/:name' element={<GameDetail/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
