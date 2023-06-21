import laChemineeLogo from '../../assets/logos/logo-la-cheminee-white.svg'

export default function HomeBanner() {
  return (
    <section className="container-fluid col-12 row m-0 p-0 position-relative">

      <div class="banner jumbotron-fluid d-flex justify-content-center align-items-center">
        <div class="container d-flex flex-column justify-content-center align-items-center">
          <h1 class="display-4">Bienvenidos a</h1>
          <img src={laChemineeLogo} alt="Logo La Cheminee" className='col-8 col-lg-4 img-fluid' />
        </div>
      </div>
    </section>
  )
}