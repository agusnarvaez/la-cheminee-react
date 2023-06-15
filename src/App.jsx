import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/index.css'
import Header from "./components/Header"


const Home = lazy(()=>import("./components/Home/Home"))
const Hotel = lazy(()=>import("./components/Hotel/Hotel"))
const About = lazy(()=>import("./components/About/About"))
const Contact = lazy(()=>import("./components/Contact/Contact"))
const Footer = lazy(()=>import("./components/Footer"))
export default function App() {
  return (
    <Suspense fallback={<div className="loading">Cargando...</div>}>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/el-hotel" element={<Hotel />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  )
}


