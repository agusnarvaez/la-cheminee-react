import {useState,useRef} from 'react'

import living3 from '../../assets/images/living-3.jpg'
import living2 from '../../assets/images/living-2.jpg'
import decoracion1 from '../../assets/images/decoracion-1.jpg'
import decoracion2 from '../../assets/images/decoracion-2.jpg'
import barra1 from '../../assets/images/barra-1.jpg'
import barra2 from '../../assets/images/barra-2.jpg'
export default function HomeCarrousel() {

  const [carrousel, setCarrousel] = useState(1)
  const myElementRef = useRef(null)
  const carrouselInfo = [living3, living2, decoracion1,decoracion2,barra1,barra2]

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
  /*useEffect(() => {
     if (myElementRef.current) {
      //const rect = myElementRef.current.getBoundingClientRect()
      //const xPosition = rect.x // Posición en el eje X
    }
  }, [])*/

  return (
    <section className="container-fluid p-0 position-relative">

      <div className="carrousel-navigator d-none d-lg-flex justify-content-between position-absolute end-0 bottom-0 mx-3 ">
        <button className="bi bi-arrow-left texto-verde-la-cheminee fs-3" onClick={()=>bajarCarrousel()} />
        <p className='m-0 mx-2 d-flex align-items-center'>{carrousel}/5</p>
        <button className="bi bi-arrow-right texto-verde-la-cheminee fs-3" onClick={()=>subirCarrousel()} />
      </div>

      <div className="carrouselContainer">
          <div className={"carrouselContainer_mobil carrouselContainer_mobil-position-"+carrousel} >
              {carrouselInfo.map((card,key) => <img loading='lazy' ref={myElementRef} className='img-fluid box-shadow mx-4' src={card} alt={card} key={key} /> )}
          </div>

      </div>

    </section>
  )
}