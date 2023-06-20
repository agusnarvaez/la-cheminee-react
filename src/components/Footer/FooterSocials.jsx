import credentials from "../../credentials"


export default function FooterSocials() {
  return (
    <section className="container-fluid d-flex flex-wra p-0 m-0 py-3 border-top row">
        <h2 className="fs-6 fw-bold col-12 p-0">Redes Sociales</h2>
        <ul className="container-fluid p-0 col-12 text-white list-unstyled d-flex flex-wrap justify-content-start">
          <li className="container-fluid p-0 m-0 my-2 col-2"><a className="text-white" href={credentials.whatsappApi}> <i className="bi bi-whatsapp me-4 fs-1"/></a></li>
          <li className="container-fluid p-0 m-0 my-2 col-2"><a className="text-white" href={credentials.whatsappApi}> <i className="bi bi-facebook me-4 fs-1"/></a></li>
          <li className="container-fluid p-0 m-0 my-2 col-2"><a className="text-white" href={credentials.whatsappApi}> <i className="bi bi-instagram me-4 fs-1"/></a></li>
        </ul>

    </section>
  )
}