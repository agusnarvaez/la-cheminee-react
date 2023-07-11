import '../assets/styles/home.css'
import HelmetData from '../components/HelmetData'

import { Suspense,lazy } from 'react'

//* Componentes lazy load
const HomeBanner = lazy(()=>import("../components/Home/HomeBanner"))
const HomeIntroduction = lazy(()=>import('../components/Home/HomeIntroduction'))
const HomeCarrousel = lazy(()=>import('../components/Home/HomeGallery'))
const HomeRooms = lazy(()=>import('../components/Home/HomeRooms'))
const HomeSpa= lazy(()=>import('../components/Home/HomeSpa'))
const HomeInfo = lazy(()=>import('../components/Home/HomeInfo'))
const HomeLocation = lazy(()=>import('../components/Home/HomeLocation'))
const HomeFaq = lazy(()=>import('../components/Home/HomeFaq'))

export default function Home({metaData}) {
  return (
    <main className="container-fluid p-0">
      <HelmetData metaData={metaData}/>
      <Suspense fallback={<div className="loading">Cargando...</div>}>
        <HomeBanner/>

        <HomeIntroduction/>

        <HomeCarrousel />

        <HomeRooms/>

        <HomeSpa/>

        <HomeInfo/>

        <HomeLocation/>

        <HomeFaq/>
      </Suspense>
    </main>
  )
}