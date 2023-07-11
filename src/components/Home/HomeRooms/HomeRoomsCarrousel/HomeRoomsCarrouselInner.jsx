import CarrouselItem from "./HomeRoomsCarrouselItem"

export default function CarrouselInner({photos}) {

  return (
    <div className="carousel-inner">
      {photos.map((photo, index) => {
        return(
        <CarrouselItem
          className={`carousel-item ${0 === index ? 'active' : ''}`}
          photo={photo}
          key={index}
        />
      )})}
    </div>
  )
}