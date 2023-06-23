import '../../assets/styles/home.css'

import HomeBanner from "./HomeBanner"
import HomeIntroduction from './HomeIntroduction'
import HomeCarrousel from './HomeGallery'
import HomeRooms from './HomeRooms'
import HomeSpa from './HomeSpa'

export default function Home() {
  return (
    <main className="container-fluid p-0">

      <HomeBanner/>

      <HomeIntroduction/>

      <HomeCarrousel />

      <HomeRooms/>

      <HomeSpa/>
    </main>
  )
}