import bannerImage from '../../assets/backgrounds/banner-home.jpg'
import laChemineeLogo from '../../assets/logos/logo-la-cheminee-white.svg'
export default function HomeBanner() {
  return (
    <section className="container-fluid col-12 row m-0 p-0 position-relative">
     {/*  <img src={bannerImage} alt="Banner" className="img-fluid p-0 col-12" />
      <div className='container-fluid position-absolute top-0 start-0 p-0 col-12 row flex-column align-items-center justify-content-center'>
        <h2 className='d-flex p-0 align-items-center text-center'>Bienvenidos a</h2>
        <img src={laChemineeLogo} alt="Logo La Cheminee" className='img-fluid' />
      </div> */}
      <div class="banner jumbotron-fluid d-flex justify-content-center align-items-center">
        <div class="container d-flex flex-column justify-content-center align-items-center">
          <h1 class="display-4">Bienvenidos a</h1>
          <img src={laChemineeLogo} alt="Logo La Cheminee" className='col-8 img-fluid' />
        </div>
      </div>
    </section>
  )
}