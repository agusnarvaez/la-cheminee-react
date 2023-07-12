import { Link } from 'react-router-dom'
import HomeRoomService from './HomeRoomService'
import {scrollToTop } from '../../../../utils/headerUtils.js'

export default function HomeRoomsArticle({index,room}) {

  const infoClass = index % 2 === 0 ? "order-lg-1" : "order-lg-2"

  return (
      <div className={"container-fluid p-0 ps-lg-3 pe-lg-5 row col-lg-6 d-lg-flex flex-column justify-content-center flex-wrap "+infoClass}>
        <h3 className="fw-bold col-12 fs-15rem fs-md-2rem fs-xl-25rem my-2 p-0 texto-verde-la-cheminee texto-elegante">{room.title}</h3>

        <p className="col-12 fs-1rem fs-md-13rem fs-xl-15rem lh-chico p-0 texto-verde-la-cheminee">{room.description}</p>

        <ul className="d-flex col-12 flex-wrap p-0 list-unstyled">
          {room.services.map((service, index) => <HomeRoomService key={index} index={index} service={service}/> )}
        </ul>

        <Link onClick={scrollToTop} to="/contacto" className="btn-la-cheminee border-0 col-8 col-md-5 col-lg-9 col-xl-7 bg-green-la-cheminee my-2 fw-bold">Consultar disponibilidad</Link>
      </div>
  )
}