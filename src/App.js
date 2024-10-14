import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = (props) =>{
  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Navbar/>
        <Routes>
          <Route path='/profile' element={<Content/>}/>
          <Route path='/dialogs/*' element={<Dialogs/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
