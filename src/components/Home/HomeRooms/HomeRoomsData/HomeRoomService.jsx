export default function HomeRoomService({index,service}) {

return(
  // Verificar si es el primer o último elemento
  index === 0?
    <li className="container-fluid fs-1rem p-0 pe-2 m-0 col-auto fw-bold texto-verde-la-cheminee">
      {service}
    </li>
    :
    <>
    <li className="border-cheminee-start"></li>
      <li className="container-fluid fs-1rem px-3 px-lg-2 m-0 col-auto fw-bold texto-verde-la-cheminee">
        {service}
      </li>
    </>
  )
}