
import woodsIcon from '../../assets/logos/house-tree.svg'
import careIcon from '../../assets/logos/care.svg'
export default function HomeInfo() {
  return (
    <section className="container-fluid col-12 row m-0 pb-5 pb-lg-4 border-bottom">

      <div className="container-fluid col-12 col-lg-6 row m-0 my-lg-5 p-0 py-3 homeInfoContent flex-column align-items-center justify-content-start">
        <img loading='lazy' src={woodsIcon} alt="Icono" className='col-2 col-md-1  col-lg-1 px-lg-0 mb-3 img-fluid spaIcon' />
        <h2 className='texto-verde-la-cheminee fw-bold text-center fs-5'>El lugar</h2>
        <p className='p-0 px-lg-3 m-0 texto-verde-la-cheminee text-center fs-6'>Contamos con 46 m2 al área de Spa. Dentro del mismo ofrecemos poder guardar esquí/equipajes con acceso directo al lobby y a la rampa de descenso de pasajeros dentro del predio hacia el estacionamiento. Exposición de diversos artistas locales  con obras en distintos puntos del hotel. Dos escaleras internas y ascensor.</p>
      </div>

      <div className="container-fluid col-12 col-lg-6 row m-0 my-lg-5 p-0 py-3 align-items-start flex-column align-items-center justify-content-start">
        <img loading='lazy' src={careIcon} alt="Icono" className='col-2 col-md-1 col-lg-1 px-lg-1 mb-3 img-fluid spaIcon' />
        <h2 className='texto-verde-la-cheminee fw-bold text-center fs-5 '>Instalaciones</h2>
        <p className='p-0 px-lg-3 m-0 texto-verde-la-cheminee text-center fs-6'>Dentro de la instalación se podrá hacer uso de las 2 duchas escocesas, sauna seco, sauna húmedo, sala de relax y sala para masajes, con acceso a piscina con jacuzzi cubiertos y climatizados para ser usados todo el año. Wi fi en todas las áreas del hotel, petit café bar , salón desayunador. </p>
      </div>

    </section>
  )
}