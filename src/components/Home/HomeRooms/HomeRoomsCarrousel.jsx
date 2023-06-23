import { useState } from 'react';

export default function HomeRoomsCarrousel({photos,index}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const handleNext = () => {
    if (currentImageIndex === photos.length) {
      setCurrentImageIndex(1)
    } else {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }
  const handlePrevious = () => {
    if (currentImageIndex === 1) {
      setCurrentImageIndex(photos.length)
    } else {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }
  return (
    <div className="container-fluid p-0 col-lg-6 order-lg-2 box-shadow">

      <div id={"carrousel-"+index} className="carousel slide position-relative">

        <div className="carousel-indicators d-lg-none m-0">
          <button type="button" data-bs-target={"#carrousel-"+index} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target={"#carrousel-"+index} data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target={"#carrousel-"+index} data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          {photos.map((photo, index) => {
            if (index === 0) {
              return (
                <div className="carousel-item active">
                  <img src={photo} className="d-block w-100" alt={photo}/>
                </div>
              )
            } else {
              return (
                <div className="carousel-item">
                  <img src={photo} className="d-block w-100" alt={photo}/>
                </div>
              )
            }
          })}
        </div>
        <div className="d-none d-lg-flex text-white align-items-center position-absolute bottom-0 end-0 carrousel-navigator ">
          <button className="bi bi-arrow-left text-white fs-4 fw-light" type="button" data-bs-target={"#carrousel-"+index} data-bs-slide="prev" onClick={handlePrevious}/>

          <p className='d-flex align-items-center p-0 m-0 fw-light'>{currentImageIndex+"/"+photos.length}</p>

          <button className="bi bi-arrow-right text-white fs-4 fw-light" type="button" data-bs-target={"#carrousel-"+index} data-bs-slide="next" onClick={handleNext}/>
        </div>
      </div>
    </div>
  )
}