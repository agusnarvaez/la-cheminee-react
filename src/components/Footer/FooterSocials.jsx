import credentials from "../../credentials"


export default function FooterSocials() {
  const liStyle = 'container-fluid p-0 m-0 m-lg-0 col-2 col-md-1 col-lg-4'

  return (
    <section className="container-fluid flex-column border-bottom border-bottom-lg-0 justify-content-start align-items-start p-0 m-0 py-3 p-lg-0 row col-12 col-lg-2">

        <h2 className="fs-1rem d-block fw-bold col-12 border-lg-0 p-0">Redes Sociales</h2>

        <ul className="container-fluid p-0 m-lg-0 m-0 col-12 text-white list-unstyled d-flex flex-wrap justify-content-start">
          <li className={liStyle}><a className="text-white" href='/'> <i className="bi bi-whatsapp me-4 fs-2 "/></a></li>
          {/* <li className={liStyle}><a className="text-white" href={credentials.whatsappApi}> <i className="bi bi-facebook me-4 fs-2 "/></a></li>
          <li className={liStyle}><a className="text-white" href={credentials.whatsappApi}> <i className="bi bi-instagram me-4 fs-2 "/></a></li> */}
        </ul>

    </section>
  )
}