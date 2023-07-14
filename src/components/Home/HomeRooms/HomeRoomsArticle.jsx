import HomeRoomsCarrousel from "./HomeRoomsCarrousel/HomeRoomsCarrousel"
import HomeRoomData from "./HomeRoomsData/HomeRoomData"

export default function HomeRoomsArticle({index,room}) {
  return (
    <article className="container-fluid col-12 row justify-content-center m-0 my-4 p-0 px-3">

      <HomeRoomsCarrousel photos={room.photos} index={index}/>

      <HomeRoomData index={index} room={room}/>

    </article>
  )
}