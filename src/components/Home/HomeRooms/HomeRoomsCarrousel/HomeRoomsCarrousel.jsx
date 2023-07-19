import { useState } from 'react'
import CarrouselInner from './HomeRoomsCarrouselInner'
export default function HomeRoomsCarrousel({photos,index}) {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(1)


  const handleNext = () => {
    setCurrentImageIndexes(prevIndexes => {

      if (currentImageIndexes === photos.length) {
        return 1
      } else {
        return currentImageIndexes+1
      }
    })
  }
  const handlePrevious = () => {
    setCurrentImageIndexes(prevIndexes => {
      if (currentImageIndexes === 1) {
        return photos.length
      } else {
        return currentImageIndexes-1
      }
    })
  }
  return (
    <div className="container-fluid p-0 col-lg-6 order-lg-2 box-shadow">

    <div id={"carrousel-"+index} className="carousel slide position-relative">

        <div className="carousel-indicators d-lg-none m-0">
          {
            photos.map((photo,key) => {
              return (
                <button
                  key={key}
                  type="button"
                  data-bs-target={"#carrousel-"+index}
                  data-bs-slide-to={key}
                  className={key===0?"active":null}
                  aria-current="true"
                  aria-label={"Slide "+(key+1)}
                />
              )
            })
          }
        </div>

        <CarrouselInner photos={photos} />

        <div className="d-none d-lg-flex text-white align-items-center position-absolute bottom-0 end-0 carrousel-navigator ">
          <button className="bi bi-arrow-left text-white fs-4 fw-light" type="button" data-bs-target={"#carrousel-"+index} data-bs-slide="prev" onClick={handlePrevious}/>

          <p className='d-flex align-items-center p-0 m-0 fw-light'>{currentImageIndexes+"/"+photos.length}</p>

          <button className="bi bi-arrow-right text-white fs-4 fw-light" type="button" data-bs-target={"#carrousel-"+index} data-bs-slide="next" onClick={handleNext}/>
        </div>
      </div>
    </div>
  )
}