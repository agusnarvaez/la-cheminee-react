export default function HomeRoomService({index,service}) {

return(
  // Verificar si es el primer o último elemento
  index === 0?
    <li className="container-fluid fs-09rem p-0  m-0 col-auto fw-bold texto-verde-la-cheminee">
      {service}
    </li>
    :
    <>
    <li className="border-cheminee-start my-1 mx-2"></li>
      <li className="container-fluid fs-09rem m-0 p-0 col-auto fw-bold texto-verde-la-cheminee">
        {service}
      </li>
    </>
  )
}