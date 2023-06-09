import suiteStandard1 from '../../assets/images/suiteStandard-1.jpg'
import suiteStandard2 from '../../assets/images/suiteStandard-2.jpg'
import suiteStandard3 from '../../assets/images/suiteStandard-3.jpg'
import suiteSuperior1 from '../../assets/images/suiteSuperior-1.jpg'
import suiteSuperior2 from '../../assets/images/suiteSuperior-2.jpg'
import suiteSuperior3 from '../../assets/images/suiteSuperior-3.jpg'
import suiteStandardPlus1 from '../../assets/images/suiteStandardPlus-1.jpg'
import suiteStandardPlus2 from '../../assets/images/suiteStandardPlus-2.jpg'
import suiteStandardPlus3 from '../../assets/images/suiteStandardPlus-3.jpg'

import HomeRoomsItem from './HomeRooms/HomeRoomsArticle'

export default function HomeRooms() {
const rooms = [
  {
    title: "Suite Standard",
    description: "Habitaciones ubicadas en el 1er piso. Las mismas cuentan con un espacio de 26m2.",
    services: ["CAMA QUEEN",'TV 32"','WIFI','AIRE ACONDICIONADO','CALEFACCIÓN','CAJA FUERTE','SECADOR DE PELO','TETERA'],
    photos: [suiteStandard1,suiteStandard2,suiteStandard3]
  },
  {
    title: "Suite Standard Plus",
    description: "Habitaciones ubicadas en el 1er piso. Las mismas cuentan con un espacio de 38m2.",
    services: ["CAMA KING",'TV 32"','WIFI','AIRE ACONDICIONADO','CALEFACCIÓN','CAJA FUERTE','SECADOR DE PELO','TETERA'],
    photos: [suiteStandardPlus1,suiteStandardPlus2,suiteStandardPlus3]
  },
  {
    title: "Suite Superior",
    description: "Habitaciones ubicadas en el 2do y 3er piso. Las mismas cuentan con un espacio de 40m2.",
    services: ["CAMA QUEEN",'TV 32"','WIFI','AIRE ACONDICIONADO','CALEFACCIÓN','HOGAR','JACUZZI','CAJA FUERTE','SECADOR DE PELO','TETERA'],
    photos: [suiteSuperior1,suiteSuperior2,suiteSuperior3]
  }
]
  return (
    <section className="container-fluid border-top border-bottom col-12 row m-0 p-0 py-5 position-relative">

      <h2 className="text-center fs-1 mb-3 fw-bolder texto-verde-la-cheminee texto-elegante">Nuestras habitaciones</h2>

      {rooms.map((room,index) => {return(<HomeRoomsItem room={room} key={index} />)})}

    </section>
  )
}