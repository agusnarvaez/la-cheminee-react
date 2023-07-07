import '../../assets/styles/home.css'
import HelmetData from '../HelmetData'

import HomeBanner from "./HomeBanner"
import HomeIntroduction from './HomeIntroduction'
import HomeCarrousel from './HomeGallery'
import HomeRooms from './HomeRooms'
import HomeSpa from './HomeSpa'
import HomeInfo from './HomeInfo'
import HomeLocation from './HomeLocation'
import HomeFaq from './HomeFaq'
export default function Home({metaData}) {
  return (
    <main className="container-fluid p-0">
      <HelmetData metaData={metaData}/>
      <HomeBanner/>

      <HomeIntroduction/>

      <HomeCarrousel />

      <HomeRooms/>

      <HomeSpa/>

      <HomeInfo/>

      <HomeLocation/>

      <HomeFaq/>
    </main>
  )
}