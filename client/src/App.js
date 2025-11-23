import React from "react";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./Layout/layout";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Doctors from "./pages/Doctors/doctors";
import Services from "./pages/Services/services";
import Profile from "./pages/Profile/profile";
import Register from "./register/register";
import Login from "./register/Login";
import Detailes from "./register/detailes";
import News from "./pages/news/news";
import DoctorDetail from './pages/doctorDetail/doctorDetail';
import Appointment from "./pages/appointment/appointment";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/doctors" element={<Doctors/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/appointment" element={<Appointment/>}/>

                <Route path="/doctors/:id" element={<DoctorDetail/>} />


                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/detailes" element={<Detailes/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
