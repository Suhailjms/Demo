import './App.css';
import Nav from './components/nav';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
// import Form from './pages/regi';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './pages/regi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />}/>
        <Route exact path='/home' element={<Page1 />}/>
        <Route exact path='/about' element={<Page2 />}/>
        <Route exact path='/contact' element={<Page3 />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
  }
export default App;