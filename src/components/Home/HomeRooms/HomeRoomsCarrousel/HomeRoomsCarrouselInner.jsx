import CarrouselItem from "./HomeRoomsCarrouselItem"

export default function CarrouselInner({photos}) {
  return (
      <div className="carousel-inner">
        {photos.map((photo, index) => index === 0?
            <CarrouselItem className="carousel-item active" photo={photo} key={index}/>
            :<CarrouselItem className="carousel-item" photo={photo} key={index} />
        )}
      </div>
  )
}