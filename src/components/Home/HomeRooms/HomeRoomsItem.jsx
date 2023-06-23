import HomeRoomsCarrousel from "./HomeRoomsCarrousel"
import { Link } from 'react-router-dom'

export default function HomeRoomsItem({index,room}) {

  const infoClass = index % 2 === 0 ? "order-lg-1" : "order-lg-2"

  return (
    <article className="container-fluid col-12 row justify-content-center m-0 my-4 p-0 px-3">
      <HomeRoomsCarrousel photos={room.photos} index={index}/>
      <div className={"container-fluid p-0 px-lg-5 row col-lg-6 d-lg-flex flex-column justify-content-center flex-wrap "+infoClass}>
        <h3 className="fw-bold col-12 fs-4 my-2 p-0 texto-verde-la-cheminee texto-elegante">{room.title}</h3>

        <p className="fs-6 col-12 p-0 texto-verde-la-cheminee">{room.description}</p>

        <ul className="d-flex col-12 flex-wrap p-0 list-unstyled">
          {room.services.map((service, index) => {
            // Verificar si es el primer o último elemento
            if (index === 0) {
              return (
                <li className="container-fluid px-2 m-0 col-auto fw-bold texto-verde-la-cheminee">
                  {service}
                </li>
              )
            } else {
              return (
                <li className="container-fluid px-2 m-0 col-auto fw-bold texto-verde-la-cheminee border-cheminee-start">
                  {service}
                </li>
              )
            }
          })}
        </ul>

        <Link to="/el-hotel" className="btn-la-cheminee border-0 col-7 col-md-5 col-lg-7 col-xl-5 bg-green-la-cheminee my-2">Consultar disponibilidad</Link>
      </div>
    </article>
  )
}