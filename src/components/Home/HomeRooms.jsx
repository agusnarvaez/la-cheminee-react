import suiteStandard1 from '../../assets/images/suiteStandard-1.jpg'
import suiteStandard2 from '../../assets/images/suiteStandard-2.jpg'
import suiteStandard3 from '../../assets/images/suiteStandard-3.jpg'
import suiteStandard4 from '../../assets/images/suiteStandard-4.jpg'
import suiteStandard5 from '../../assets/images/suiteStandard-5.jpg'
import suiteSuperior1 from '../../assets/images/suiteSuperior-1.jpg'
import suiteSuperior2 from '../../assets/images/suiteSuperior-2.jpg'
import suiteSuperior3 from '../../assets/images/suiteSuperior-3.jpg'
import suiteSuperior4 from '../../assets/images/suiteSuperior-4.jpg'
import suiteSuperior5 from '../../assets/images/suiteSuperior-5.jpg'
import suiteSuperior6 from '../../assets/images/suiteSuperior-6.jpg'
import suiteStandardPlus1 from '../../assets/images/suiteStandardPlus-1.jpg'
import suiteStandardPlus2 from '../../assets/images/suiteStandardPlus-2.jpg'
import suiteStandardPlus3 from '../../assets/images/suiteStandardPlus-3.jpg'
import suiteStandardPlus4 from '../../assets/images/suiteStandardPlus-4.jpg'
import suiteStandardPlus5 from '../../assets/images/suiteStandardPlus-5.jpg'
import suiteStandardPlus6 from '../../assets/images/suiteStandardPlus-6.jpg'
import suiteStandardPlus7 from '../../assets/images/suiteStandardPlus-7.jpg'
import suiteStandardPlus8 from '../../assets/images/suiteStandardPlus-8.jpg'

import HomeRoomsArticle from './HomeRooms/HomeRoomsArticle'

export default function HomeRooms() {
const rooms = [
  {
    title: "Suite Standard",
    description: "Habitaciones ubicadas en el 1er piso. Las mismas cuentan con un espacio de 26m2.",
    services: ["CAMA QUEEN",'TV 32"','WIFI','AIRE ACONDICIONADO','CALEFACCIÓN','CAJA FUERTE','SECADOR DE PELO','PAVA ELÉCTRICA'],
    photos: [
      {
        src:suiteStandard1,
        blur: 'TUG*sW~pba-pbEIoD%M{ogt8t7jZ'
      },
      {
        src:suiteStandard2,
        blur: 'TsHUtjof-;_Nt7-p-:t7t7t7WWfj'
      },
      {
        src:suiteStandard3,
        blur:'TGDc5gIUxu~qIoogt7R*Rj?bRPWA'
      },
      {
        src:suiteStandard4,
        blur:'TEDlm9%N00~qjFDiIVWBxuR+Rjt7'
      },{
        src:suiteStandard5,
      blur:'T4Ciw84:R600~C9Z?I9Z.8~qX8w]'
    }]
  },
  {
    title: "Suite Standard Plus",
    description: "Habitaciones ubicadas en el 1er piso. Las mismas cuentan con un espacio de 38m2.",
    services: ["CAMA KING",'TV 32"','WIFI','AIRE ACONDICIONADO','CALEFACCIÓN','CAJA FUERTE','SECADOR DE PELO','PAVA ELÉCTRICA'],
    photos: [
      {
        src:suiteStandardPlus1,
        blur: 'TIFrL.~pM_^%%MtSIURjRPoLaJM{'
      },
      {
        src:suiteStandardPlus2,
        blur: 'T6Bo~,N$0LR1Mxs,00xt~W5AxWxD'
      },
      {
        src:suiteStandardPlus3,
        blur:'TBDb]Bmi?H~4%K-p4m?wxAET-o$z'
      },
      {
        src:suiteStandardPlus4,
        blur:'TAA]pX?H0L014:={~W-;Io$eMxIo'
      },
      {
        src:suiteStandardPlus5,
        blur:'TPEBvyIp~Bs:ofn$axWVR+s9oIof'
      },
      {
        src:suiteStandardPlus6,
        blur:'THD8:?~VxvrqIURj9ZM{s:?b?Ht7'
      },
      {
        src:suiteStandardPlus7,
        blur:'T7D[|W00pHx^ozwa4T~q01F#acw['
      },
      {
        src:suiteStandardPlus8,
        blur:'TBAJZqIo0K~UbI9ajXj]j^RjR+xt'
      }]
  },
  {
    title: "Suite Superior",
    description: "Habitaciones ubicadas en el 2do y 3er piso. Las mismas cuentan con un espacio de 40m2.",
    services: ["CAMA QUEEN",'TV 32"','WIFI','AIRE ACONDICIONADO','CALEFACCIÓN','HOGAR','JACUZZI','CAJA FUERTE','SECADOR DE PELO','PAVA ELÉCTRICA'],
    photos: [
      {
        src:suiteSuperior1,
        blur:'T8GR6t00JR0f-U~p9DOH?G14NFVY'
      },
      {
        src:suiteSuperior2,
        blur:'TPG*vj~X%habe,oIM|t8s,9Ge.sT'
      },
      {
        src:suiteSuperior3,
        blur:'TAEn^q000L^$9a589a~Bs-0fxuWT'
      },
      {
        src:suiteSuperior4,
        blur:'TTH1oN%MV?0M9us+9w%2xD~VWBM|'
      },
      {
        src:suiteSuperior5,
        blur:'TBF5gT0L#PPX$yrWT}NH$d_3ozD$'
      },
      {
        src:suiteSuperior6,
        blur:'TGE2tfJD$~~VR.xu00r;NH02s7e.'
      }]
  }
]
  return (
    <section className="container-fluid border-top border-bottom col-12 row m-0 px-0 py-30px py-md-40px py-lg-50px  position-relative">

      <h2 className="text-center fs-26rem mb-3 fw-bolder texto-verde-la-cheminee lh-chico texto-elegante">Nuestras habitaciones</h2>

      {rooms.map((room,index) => {
        return(<HomeRoomsArticle room={room} key={index} index={index} />)})}

    </section>
  )
}