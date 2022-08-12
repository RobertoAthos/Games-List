import {BrowserRouter,Routes,Route } from 'react-router-dom';
import MusPlay from './pages/MustPlayGames/MusPlay';
import TopGames from './pages/TopGames/TopGames'


function App() {
  return (
   <BrowserRouter>
         <Routes>
         <Route path='/' element={<TopGames/>}/>
         <Route path='/mustplay' element={<MusPlay/>}/>
         </Routes>
   </BrowserRouter>
  )
}

export default App
