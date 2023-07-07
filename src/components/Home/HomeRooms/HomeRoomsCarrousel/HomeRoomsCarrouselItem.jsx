export default function CarrouselItem({photo,className}) {
  return (
    <div className={className}>
      <img src={photo} className="d-block w-100" alt={photo}/>
    </div>
  )
}