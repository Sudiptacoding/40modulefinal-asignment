import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ReadMore from './Components/ReadMore/ReadMore';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/more' element={ <ReadMore></ReadMore> }></Route>
          <Route path='*' element={ <Error></Error> }></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
