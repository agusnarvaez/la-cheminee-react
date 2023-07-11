import CarrouselItem from "./HomeRoomsCarrouselItem"

export default function CarrouselInner({photos, currentImageIndex}) {
  return (
    <div className="carousel-inner">
      {photos.map((photo, index) => (
        <CarrouselItem
          className={`carousel-item ${index === currentImageIndex - 1 ? 'active' : ''}`}
          photo={photo}
          key={index}
        />
      ))}
    </div>
  )
}