import laChemineeLogo from '../../assets/logos/logo-la-cheminee.svg'
import living from '../../assets/images/living-1.jpg'
import ImageComponent from '../ImageComponent'
export default function HomeIntroduction() {
  return (
    <section className="container-fluid col-12 row flex-column flex-lg-row align-items-center m-0 mt-5 p-0">
      <div className="container-fluid min-height-250 min-height-md-480 min-height-lg-300 min-height-xl-450 introduction-image-container order-lg-2 px-4 col-lg-6 position-relative">
        {/* <img loading='lazy' className="w-100 h-auto introduction-image" src={living} alt="Living" /> */}
        <ImageComponent
          src={living}
          alt='Living'
          className='w-100 h-auto introduction-image'
          hash='T6C5r3000f~XD%bE-WNFNG=|M{M|'
          width='100%'
          height='100%'
          blurClass='min-height-250 min-height-md-480 min-height-lg-300 min-height-xl-450'
          />
      </div>

      <div className='container-fluid col-lg-6 my-4 mb-0 m-lg-0 px-4 row flex-column order-lg-1 justify-content-center align-items-center col-12'>
        <div className='row justify-content-start flex-lg-column p-0 align-items-end align-items-lg-start'>
          <img loading='lazy' src={laChemineeLogo} alt='La Cheminée' className='col-4 col-md-3 p-0 col-lg-5' />
          <h2 className='col-8 col-lg-12 fs-13rem fs-md-2rem fs-xl-35rem m-0 p-0 ps-2 ps-lg-0  fw-bold texto-verde-la-cheminee texto-elegante lh-chico'>reabre sus puertas</h2>
        </div>

        <p className='texto-verde-la-cheminee p-0 m-0 mt-3 mt-lg-4 pt-1 pe-xl-5 pe-xl-5 fs-1rem fw-light'>
          El hotel se renovó para ofrecer un servicio acorde a las necesidades de sus huéspedes y convertirse en La Cheminée Hotel y Spa. Las instalaciones han sido mejoradas y pensadas para  poder brindar el mejor servicio a las diversas exigencias que la industria turística demanda a nivel internacional.
        </p>

      </div>

    </section>
  )
}