import '../../assets/styles/home.css'

import HomeBanner from "./HomeBanner"
import HomeIntroduction from './HomeIntroduction'

export default function Home() {
  return (
    <main className="container-fluid p-0">

      <HomeBanner/>

      <HomeIntroduction/>

    </main>
  )
}