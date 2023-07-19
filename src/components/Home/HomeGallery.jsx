import {useState} from 'react'

import living3 from '../../assets/images/living-3.jpg'
import living2 from '../../assets/images/living-2.jpg'
import decoracion1 from '../../assets/images/decoracion-1.jpg'
import decoracion2 from '../../assets/images/decoracion-2.jpg'
import barra1 from '../../assets/images/barra-1.jpg'
import barra2 from '../../assets/images/barra-2.jpg'
import ImageComponent from '../ImageComponent'

export default function HomeCarrousel() {

  const [carrousel, setCarrousel] = useState(1)
  const carrouselInfo = [
    {
      photo:living3,
      width:'8%',
      blurHash: 'TIGa@6W=E#00x^M{?w9Z-UH=%LI='
    }, {
      photo:living2,
      width:'20%',
      blurHash: 'TCDRZ@xa5R~VN^ELxGRjWUn4smW;'
    },
    {
      photo:decoracion1,
      width:'9%',
      blurHash: 'T8FFBNAw%30056$K^jNF$f~Cx^-q'
    },
    {
      photo:decoracion2,
      width:'20%',
      blurHash: 'TFGb0L4TT}00o}V??HMw-;=wtSD*'
    },
    {
      photo:barra1,
      width:'20%',
      blurHash: 'TBB_*dE+AI}?EhoNS5S$smw}t7k9'
    },
    {
      photo:barra2,
      width:'17%',
      blurHash: 'TFJY8vxV0.=@xrIr}nt59xthX5Rn'
    }]

  const subirCarrousel = () => {
    if (carrousel === 5) {
      setCarrousel(1)
    }else{
      setCarrousel(carrousel + 1)
    }
  }

  const bajarCarrousel = () => {
    if (carrousel === 1) {
      setCarrousel(5)
    }else{
      setCarrousel(carrousel - 1)
    }
  }

  return (
    <section className="container-fluid p-0 position-relative">

      <div className="carrousel-navigator d-none d-lg-flex justify-content-between position-absolute end-0 bottom-0 mx-3 ">
        <button className="bi bi-arrow-left texto-verde-la-cheminee fs-3" onClick={()=>bajarCarrousel()} />
        <p className='m-0 mx-2 d-flex align-items-center'>{carrousel}/5</p>
        <button className="bi bi-arrow-right texto-verde-la-cheminee fs-3" onClick={()=>subirCarrousel()} />
      </div>

      <div className="carrouselContainer">
          <div className={"carrouselContainer_mobil px-0 py-35px py-md-45px py-lg-55px carrouselContainer_mobil-position-"+carrousel} >
              {carrouselInfo.map((card,key) => <ImageComponent className='img-fluid box-shadow mx-4' src={card.photo} alt={card.photo} hash={card.blurHash} key={key} height='100%' width={card.width} blurClass='mx-4' /> )}
          </div>

      </div>

    </section>
  )
}