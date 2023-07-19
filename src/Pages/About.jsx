import HelmetData from '../components/HelmetData'
import '../assets/styles/index.css'
import '../assets/styles/about.css'
import decoracion from '../assets/images/decoracion-2.jpg'
import ventana from '../assets/images/ventana.jpg'
import barra from '../assets/images/barra-1.jpg'
import banner from '../assets/backgrounds/banner-home.jpg'
import ImageComponent from '../components/ImageComponent'
export default function About({metaData}) {
  return (
    <main className="container-fluid p-0 px-3 px-md-4 px-lg-5 d-flex flex-column align-items-center">
      <HelmetData metaData={metaData}/>

    <div className="container-fluid p-0 py-0 d-flex flex-column align-items-center">
      <h1 className='texto-elegante text-center texto-verde-la-cheminee fw-bold fs-lg-3rem'>¡Conocenos un poco más!</h1>
      <p className='texto-verde-la-cheminee text-center fs-1rem fs-md-13rem px-md-3 px-lg-5'>Te invitamos a que conozcas todo acerca de La Cheminée y explores lo que tenemos para ofrecerte</p>
    </div>

    <div className='h-900px h-md-400px h-lg-600px h-xl-800px container-fluid p-0 my-2 m-0 row justify-content-center justify-content-md-between'>
      <ImageComponent className='img-fluid d-block col-12 col-md-7 p-0 cover-image-shadowed mb-2 mb-md-0' src={decoracion} alt="decoracion" hash='LFGkg;4TT}4n00o}V?X8?HMw-;M|' blurClass='col-12 col-md-7 box-shadowed' width=' ' height=' ' />

      <ImageComponent className='img-fluid d-block col-12 col-md-40 p-0 cover-image-shadowed' src={ventana} alt="ventana" hash='U7Bp96R50KyC-:oL9Eo#00tQ~VMyDiWW?cVs' blurClass='col-12 col-md-40' height=' ' />
    </div>


    <div className="container-fluid p-0 pt-3 py-lg-5 d-flex flex-column flex-lg-row align-items-center">
      <div className='col-12 col-lg-6 pb-3 testimonios-container'>
        <h2 className='texto-elegante text-center px-2 ps-lg-0 pe-lg-5 mb-3 text-lg-start texto-verde-la-cheminee fw-bold fs-lg-2rem'>Te ofrecemos una experiencia única</h2>
        <p className='texto-verde-la-cheminee text-center text-lg-start fs-1rem px-md-3 ps-0 pe-lg-4'>La identidad, la historia de un sitio emblemático y tradicional en una esquina distinguida de San Martín de los Andes. <br/>Situada en el centro de dicha ciudad, frente a la plaza San Martin, rodeada de un frondoso parque interno para disfrutar de la naturaleza patagónica, LA CHEMINEE HOTEL & SPA brinda una amplia gama de servicios para hacer de su estadía un verdadero placer.</p>
      </div>
      <div className='col-12 col-lg-6 mt-3'>
        <h2 className='texto-elegante text-center texto-verde-la-cheminee  mb-3 fs-2 m-0 lh-lg pt-3 px-3 fst-italic fw-light'>“Hospedarnos en La Cheminée fue una experiencia única. La comodidad, buena atención y calidez están presentes en todo momento. Volvería sin dudas”</h2>
        <p className='texto-verde-la-cheminee text-center fw-bold fs-1rem px-md-3 px-lg-5'>Mariana, 32 años. Huesped de La Cheminée</p>
      </div>
    </div>

    <div className="container-fluid px-0 py-35px py-lg-50px d-flex flex-column align-items-center">
      <h2 className='texto-elegante text-center texto-verde-la-cheminee fw-bold fs-18rem fs-lg-2rem mb-3'>No se termina acá...</h2>
      <p className='texto-verde-la-cheminee text-center fs-1rem  px-md-3'>
        En La Cheminée, nos enorgullece combinar la elegancia clásica con toques modernos para crear un ambiente acogedor y sofisticado, manteniendo la escencia que tanto caracterizaba al antiguo hotel. Nuestras habitaciones cuidadosamente decoradas ofrecen un refugio tranquilo donde podés relajarte y recargar energías después de un día explorando los encantos de la hermosa ciudad de San Martín de los Andes.
      </p>

      <p className='texto-verde-la-cheminee text-center fs-1rem px-md-3'>
        Dentro del hotel, también ofrecemos una experiencia gastronómica de primera calidad. Nuestro talentoso equipo de chefs utiliza ingredientes frescos y locales para crear platos exquisitos que deleitarán tu paladar.
      </p>

      <p className='texto-verde-la-cheminee text-center fs-1rem px-md-3'>
        Además de todo esto, podrás visitar nuestro Spa ubicado en las propias instalaciones del hotel para que puedas relajarte y disfrutar de todo lo que tenemos para ofrecerte: pileta, duchas escocesas, salón de masajes, sauna seco y húmedo, jacuzzi y sectores para que puedas deleitarte con bebidas y comida.
      </p>

      <p className='texto-verde-la-cheminee text-center fs-1rem px-md-3'>
        Nuestro amable y atento equipo está dedicado a brindar un servicio personalizado, asegurándose de que cada huésped se sienta como en casa. Ya sea que necesites recomendaciones sobre los mejores lugares para visitar, reservas en restaurantes locales o asistencia con cualquier solicitud especial, estamos aquí para ayudarte en cada paso del camino.
      </p>

      <ImageComponent alt='barra de la cheminée' className='img-fluid col-12 p-0 cover-image-shadowed mt-4 mb-md-0' src={barra} hash='TBC5SDE+AI}?EhoNS5S$smw}t7k9' blurClass='col-12 min-height-250 min-height-md-480 min-height-lg-600 min-height-xl-700' />
    </div>

    <div className="top-separator min-height-600 min-height-md-700 py-30px py-lg-50px d-flex flex-column align-items-center">
      <div className='col-12'>
        <h2 className='texto-elegante text-center texto-verde-la-cheminee fw-bold fs-18rem fs-lg-2rem mb-3'>¡Te esperamos!</h2>
        <p className='texto-verde-la-cheminee text-center fs-1rem px-md-3 px-lg-2'>Ya sea que estés visitando nuestra encantadora ciudad por negocios o por placer, en La Cheminée nos esforzamos por superar tus expectativas y convertir tu estancia en una experiencia inolvidable.</p>
        <p className='texto-verde-la-cheminee text-center fs-1rem px-md-3 px-lg-2'>Te invitamos a descubrir el encanto y la hospitalidad de La Cheminée. ¡Esperamos darle la bienvenida pronto y convertirnos en tu hogar lejos de casa!</p>
      </div>

      <ImageComponent loading='lazy' className='img-fluid min-height-300 col-12 p-0 cover-image-shadowed mt-3 mb-5 mb-md-0' alt='la cheminee' src={banner} hash='TRA0kOWVabJbNGoII=xTW?wZn#W@' width='100%' height='100%' blurClass='min-height-300 min-height-md-480 min-height-lg-600 min-height-xl-700' />
    </div>

    </main>
  )
}