import laChemineeLogo from '../../assets/logos/logo-la-cheminee-white.svg'

export default function HomeBanner() {
  return (
    <section className="container-fluid col-12 row m-0 p-0 position-relative">

      <div className="banner jumbotron-fluid d-flex justify-content-center align-items-center">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-4 fs-md-4rem fs-lg-45rem fs-xl-7rem fw-semibold texto-elegante">Bienvenidos a</h1>
          <img loading='lazy' src={laChemineeLogo} alt="Logo La Cheminee" className='col-8 col-lg-6 col-xl-7 img-fluid' />
          <h2 className='fs-1rem  fs-md-2rem fw-semibold texto-elegante pt-4'>San Martín de Los Andes</h2>
        </div>
      </div>
    </section>
  )
}