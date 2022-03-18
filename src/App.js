
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './component/Header';
import AddContact from './component/pages/AddContact';
import EditContact from './component/pages/EditContact';
import Home from './component/pages/Home';




function App() {
  return (
    <div className="App">    
      <Header/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<AddContact />} />
        {/* <Route path="/addUser/:id" element={<AddEditUser />} /> */}
        <Route path="/Edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
