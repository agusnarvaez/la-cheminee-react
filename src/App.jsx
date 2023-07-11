import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import './assets/styles/Custom.scss'
import './assets/styles/index.css'
import Header from "./components/Header"
import logoBapps from './assets/logos/logoBappsFooter.png'

const Home = lazy(()=>import("./components/Home/Home"))
const About = lazy(()=>import("./components/About/About"))
const Contact = lazy(()=>import("./components/Contact/Contact"))
/* const Terms = lazy(()=>import("./components/Terms/Terms")) */
/* const Privacy = lazy(()=>import("./components/Privacy/Privacy")) */
const Footer = lazy(()=>import("./components/Footer"))
const Error404 = lazy(()=>import("./components/Error404"))

export default function App() {

const metaData = {
    home:
        {
            title: "San Martín de los Andes",
            description:"Conocé el hotel que te proveerá de un descanso inigualable en la Patagonia Argentina y disfrutá de la naturaleza en su máxima expresión.",
            keywords:"hotel, san martín de los andes, patagonia, sur, argentina, alojamiento, descanso, naturaleza, montaña, lago, quincho, parrilla, pileta, piscina, spa, jacuzzi, sauna, masajes, relax, aventura, deportes, nieve, esquí, snowboard, pesca, cabalgatas, trekking, mountain bike, gastronomía, restaurant, bar, desayuno, almuerzo, cena, merienda, té, tortas, dulces, picadas, vinos, ciervo",
            cannonical: "/",
        },
    contact:
        {
          title: "Despejá tus dudas",
          description:"El equipo del hotel está a tu disposición para responder tus consultas y brindarte la información que necesites para que tu estadía sea inolvidable.",
          keywords:"hotel, san martín de los andes, patagonia, sur, argentina, alojamiento, descanso, naturaleza, montaña, lago, quincho, parrilla, pileta, piscina, spa, jacuzzi, sauna, masajes, relax, aventura, deportes, nieve, esquí, snowboard, pesca, cabalgatas, trekking, mountain bike, gastronomía, restaurant, bar, desayuno, almuerzo, cena, merienda, té, tortas, dulces, picadas, vinos, ciervo, contacto, consultas, estadía, inolvidable, equipo, información, dudas, despejar, responder",
          cannonical: "/contacto"
        },
    about:
        {
          title: "Conocenos",
          description:"Conocé lo que La Cheminée tiene para ofrecerte, desde sus instalaciones hasta las actividades que podés realizar en la zona.",
          keywords:"hotel, san martín de los andes, patagonia, sur, argentina, alojamiento, descanso, naturaleza, montaña, lago, quincho, parrilla, pileta, piscina, spa, jacuzzi, sauna, masajes, relax, aventura, deportes, nieve, esquí, snowboard, pesca, cabalgatas, trekking, mountain bike, gastronomía, restaurant, bar, desayuno, almuerzo, cena, merienda, té, tortas, dulces, picadas, vinos, ciervo, conocenos, instalaciones, actividades, zona",
          cannonical: "/sobre-nosotros"
        },
    error404:
        {
          title: "Página no encontrada | Error 404",
          description:"No se ha encontrado la página que busca. Puede volver al inicio.",
          keywords:"error, 404",
          cannonical: "/*"
        }
}

  return (
    <Suspense fallback={<div className="loading">Cargando...</div>}>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home metaData={metaData.home} />} />
            <Route path="/sobre-nosotros" element={<About metaData={metaData.about} />} />
            <Route path="/contacto" element={<Contact metaData={metaData.contact}/>} />
            {/* <Route path="/terminos-y-condiciones" element={<Terms metaData={metaData.home} />} /> */}
            <Route path="*" element={<Error404 metaData={metaData.error404} />} />
        </Routes>
        <Footer />
        <div className="col-12 py-3 bg-green-la-cheminee d-flex justify-content-center align-items-center">
            <img className='logoBapps' alt="logoBapps" src={logoBapps} />
        </div>
      </BrowserRouter>
    </Suspense>
  )
}


