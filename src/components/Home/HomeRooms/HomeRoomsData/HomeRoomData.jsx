import { Link } from 'react-router-dom'
import HomeRoomService from './HomeRoomService'

export default function HomeRoomsArticle({index,room}) {

  const infoClass = index % 2 === 0 ? "order-lg-1" : "order-lg-2"

  return (
      <div className={"container-fluid p-0 px-lg-5 row col-lg-6 d-lg-flex flex-column justify-content-center flex-wrap "+infoClass}>
        <h3 className="fw-bold col-12 fs-4 my-2 p-0 texto-verde-la-cheminee texto-elegante">{room.title}</h3>

        <p className="fs-6 col-12 p-0 texto-verde-la-cheminee">{room.description}</p>

        <ul className="d-flex col-12 flex-wrap p-0 list-unstyled">
          {room.services.map((service, index) => <HomeRoomService key={index} index={index} service={service}/> )}
        </ul>

        <Link to="/contacto" className="btn-la-cheminee border-0 col-7 col-md-5 col-lg-7 col-xl-5 bg-green-la-cheminee my-2">Consultar disponibilidad</Link>
      </div>
  )
}