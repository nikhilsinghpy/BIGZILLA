
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './component/Footer/Footer';
import Dashboard from './component/dashboard/Dashboard';
import Header from './component/Header/Header';

function App() {
  return (
   <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
