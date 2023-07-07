export default function HomeRoomService({index,service}) {

return(
  // Verificar si es el primer o último elemento
  index === 0?
    <li className="container-fluid px-2 m-0 col-auto fw-bold texto-verde-la-cheminee">
      {service}
    </li>
    :<li className="container-fluid px-2 m-0 col-auto fw-bold texto-verde-la-cheminee border-cheminee-start">
      {service}
    </li>
  )
}