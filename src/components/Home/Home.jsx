import '../../assets/styles/home.css'
import HelmetData from '../HelmetData'

import { Suspense,lazy } from 'react'

//* Componentes lazy load
const HomeBanner = lazy(()=>import("./HomeBanner"))
const HomeIntroduction = lazy(()=>import('./HomeIntroduction'))
const HomeCarrousel = lazy(()=>import('./HomeGallery'))
const HomeRooms = lazy(()=>import('./HomeRooms'))
const HomeSpa= lazy(()=>import('./HomeSpa'))
const HomeInfo = lazy(()=>import('./HomeInfo'))
const HomeLocation = lazy(()=>import('./HomeLocation'))
const HomeFaq = lazy(()=>import('./HomeFaq'))

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