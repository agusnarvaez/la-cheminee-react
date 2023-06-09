import logoLaChemineeWhite from '../../assets/logos/logo-la-cheminee-white.svg'
export default function FooterTitle() {
  return (
    <section className="container-fluid d-flex flex-wrap justify-content-center justify-content-lg-start mb-4 col-lg-5 m-lg-0 p-lg-0">
        <img className="img-fluid my-2" src={logoLaChemineeWhite} alt="Logo La Cheminée" />
        <h3 className="text-white text-center text-lg-start col-12 fs-5 my-2">Hotel ubicado en San Martín de los Andes, Argentina</h3>
        <h3 className="text-white text-center text-lg-start col-12 fs-5 my-2">Mariano Moreno Gral. Roca 8370</h3>
        <h3 className="text-white text-center text-lg-start col-12 fs-5 my-2">Tel: +54 9 2972 54-1145</h3>
    </section>
  )
}