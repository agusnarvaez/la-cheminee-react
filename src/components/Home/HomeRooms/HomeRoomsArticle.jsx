import HomeRoomsCarrousel from "./HomeRoomsCarrousel/HomeRoomsCarrousel"
import HomeRoomServices from "./HomeRoomsData/HomeRoomData"

export default function HomeRoomsArticle({index,room}) {
  return (
    <article className="container-fluid col-12 row justify-content-center m-0 my-4 p-0 px-3">

      <HomeRoomsCarrousel photos={room.photos} index={index}/>

      <HomeRoomServices index={index} room={room}/>

    </article>
  )
}