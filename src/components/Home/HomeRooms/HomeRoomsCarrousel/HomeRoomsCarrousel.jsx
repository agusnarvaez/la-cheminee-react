import { useState } from 'react';
import CarrouselInner from './HomeRoomsCarrouselInner';
export default function HomeRoomsCarrousel({photos,index}) {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(Array.from({ length: photos.length }, (_, i) => i + 1))
  console.log(index)
  const handleNext = () => {
    setCurrentImageIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      if (newIndexes[index] === photos.length) {
        newIndexes[index] = 1;
      } else {
        newIndexes[index] += 1;
      }
      return newIndexes;
    });
  }
  const handlePrevious = () => {
    setCurrentImageIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      if (newIndexes[index] === 1) {
        newIndexes[index] = photos.length;
      } else {
        newIndexes[index] -= 1;
      }
      return newIndexes;
    });
  };
  return (
    <div className="container-fluid p-0 col-lg-6 order-lg-2 box-shadow">

    <div id={"carrousel-"+index} className="carousel slide position-relative">

        <div className="carousel-indicators d-lg-none m-0">
          <button type="button" data-bs-target={"#carrousel-"+index} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target={"#carrousel-"+index} data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target={"#carrousel-"+index} data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <CarrouselInner photos={photos} currentImageIndex={currentImageIndexes[index]} />

        <div className="d-none d-lg-flex text-white align-items-center position-absolute bottom-0 end-0 carrousel-navigator ">
          <button className="bi bi-arrow-left text-white fs-4 fw-light" type="button" data-bs-target={"#carrousel-"+index} data-bs-slide="prev" onClick={handlePrevious}/>

          <p className='d-flex align-items-center p-0 m-0 fw-light'>{currentImageIndexes[index]+"/"+photos.length}</p>

          <button className="bi bi-arrow-right text-white fs-4 fw-light" type="button" data-bs-target={"#carrousel-"+index} data-bs-slide="next" onClick={handleNext}/>
        </div>
      </div>
    </div>
  )
}