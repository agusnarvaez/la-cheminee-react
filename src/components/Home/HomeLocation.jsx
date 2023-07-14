import GoogleMap from './HomeLocation/GoogleMap'
export default function HomeLocation() {
  return (
    <section className="container-fluid col-12 row m-0 my-5 pt-2 p-0 position-relative">

      <h2 className="text-center fs-26rem mb-5 fw-bolder texto-verde-la-cheminee texto-elegante">¿Dónde estamos?</h2>
      <GoogleMap/>
    </section>
  )
}