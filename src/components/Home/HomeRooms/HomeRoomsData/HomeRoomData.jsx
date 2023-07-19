import { Link } from 'react-router-dom'
import HomeRoomService from './HomeRoomService'
import {scrollToTop } from '../../../../utils/headerUtils.js'

export default function HomeRoomsArticle({index,room}) {

  const infoClass = index % 2 === 0 ? "order-lg-1 pe-lg-5 ps-lg-4" : "order-lg-2 align-items-lg-end pe-lg-4"
  const textClass = index % 2 === 0 ? "text-lg-start" : "text-lg-end"
  const flexClass = index % 2 === 0 ? "" : "justify-content-lg-end"
  return (
      <div className={"container-fluid p-0   row col-lg-6 d-lg-flex flex-column justify-content-center flex-wrap "+infoClass}>
        <h3 className={"fw-bold col-12 fs-18rem fs-md-2rem fs-xl-25rem mt-3 mb-4 p-0 texto-verde-la-cheminee texto-elegante "+textClass}>{room.title}</h3>

        <p className={"col-12 fs-1rem lh-chico p-0 m-0 mb-4 texto-verde-la-cheminee "+textClass}>{room.description}</p>

        <ul className={"d-flex col-12 flex-wrap p-0 list-unstyled mb-4 "+flexClass}>
          {room.services.map((service, index) => <HomeRoomService key={index} index={index} service={service}/> )}
        </ul>

        <Link onClick={scrollToTop} to="/contacto" className="btn-la-cheminee border-0 col-8 col-md-5 col-lg-8 col-xl-5 col-xxl-3 bg-green-la-cheminee my-2 fw-bold">Consultar disponibilidad</Link>
      </div>
  )
}