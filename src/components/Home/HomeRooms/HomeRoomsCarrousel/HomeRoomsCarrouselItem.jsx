import ImageComponent from "../../../ImageComponent"
export default function CarrouselItem({photo,className}) {
  return (
    <div className={className}>
      <ImageComponent
        src={photo.src}
        alt={photo.src}
        className="d-block w-100"
        blurClass=''
        hash={photo.blur}
        width='100%'
        height='100%'
      />
    </div>
  )
}