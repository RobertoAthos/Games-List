import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Results from './pages/ResultsGames/Results'
import TopGames from './pages/TopGames/TopGames'


function App() {
  return (
   <BrowserRouter>
         <Routes>
         <Route path='/' element={<TopGames/>}/>
            <Route path='/results' element={<Results/>}/>
         </Routes>
   </BrowserRouter>
  )
}

export default App
