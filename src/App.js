import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Build from './Components/Build/Build';
import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
        <Navbar />
        <hr />
          <div className='content'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/build' element={<Build />} /> 
            </Routes>
          </div>
      </div>
  )
}

export default App;
