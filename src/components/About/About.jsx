import HelmetData from '../HelmetData'
import '../../assets/styles/index.css'
import '../../assets/styles/about.css'
import decoracion from '../../assets/images/decoracion-2.jpg'
import ventana from '../../assets/images/ventana.jpg'
export default function About({metaData}) {
  return (
    <main className="container-fluid p-0 px-3 px-md-4 px-lg-5 d-flex flex-column align-items-center">
      <HelmetData metaData={metaData}/>

    <div className="container-fluid p-0 py-0 d-flex flex-column align-items-center">
      <h1 className='texto-elegante text-center texto-verde-la-cheminee fw-bold fs-lg-3rem'>¡Conocenos un poco más!</h1>
      <p className='texto-verde-la-cheminee text-center fs-1rem fs-md-13rem px-md-3 px-lg-5'>Te invitamos a que conozcas todo acerca de La Cheminée y explores lo que tenemos para ofrecerte</p>
    </div>

    <div className='introduction-images container-fluid p-0 my-2 m-0 row justify-content-center justify-content-md-between'>
      <img className='img-fluid col-12 col-md-7 p-0 object-fit-cover mb-2 mb-md-0' src={decoracion} alt="spa-5" />
      <img className='img-fluid col-12 col-md-40 p-0 object-fit-cover' src={ventana} alt="spa-6" />
    </div>


    <div className="container-fluid p-0 py-0 py-lg-5 d-flex flex-column flex-lg-row align-items-center">
      <div className='col-12 col-lg-6 testimonios-container'>
        <h2 className='texto-elegante text-center text-lg-start texto-verde-la-cheminee fw-bold fs-lg-2rem'>Te ofrecemos una experiencia única</h2>
        <p className='texto-verde-la-cheminee text-center text-lg-start fs-1rem fs-md-13rem px-md-3 px-lg-2'>La identidad, la historia de un sitio emblemático y tradicional en una esquina distinguida de San Martín de los Andes. <br/>Situada en el centro de dicha ciudad, frente a la plaza San Martin, rodeada de un frondoso parque interno para disfrutar de la naturaleza patagónica, LA CHEMINEE HOTEL & SPA brinda una amplia gama de servicios para hacer de su estadía un verdadero placer.</p>
      </div>
      <div className='col-12 col-lg-6'>
        <h2 className='texto-elegante text-center texto-verde-la-cheminee fs-2 m-0 lh-lg pt-3 px-2 fst-italic fw-light'>“Hospedarnos en La Cheminée fue una experiencia única. La comodidad, buena atención y calidez están presentes en todo momento. Volvería sin dudas”</h2>
        <p className='texto-verde-la-cheminee text-center fw-bold fs-1rem fs-md-13rem px-md-3 px-lg-5'>Mariana, 32 años. Huesped de La Cheminée</p>
      </div>
    </div>

    </main>
  )
}