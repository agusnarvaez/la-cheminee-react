
import { Link } from 'react-router-dom'
import living4 from '../assets/images/living-4.jpg'
import '../assets/styles/notFound.css'

export default function Error404() {
  return (
    <main className="container-fluid p-0 d-flex flex-column flex-md-row align-items-center align-items-md-stretch justify-content-center  justify-content-md-between h-100 ">
      <div className='container-fluid col-md-6 py-5 py-md-0 px-3 px-md-0 d-flex flex-column align-items-center align-items-md-start justify-content-center  justify-content-md-between'>
        <div className='container-fluid p-0 pt-md-5 pe-md-4 d-flex flex-column align-items-center align-items-md-start justify-content-center'>
          <h2 className='texto-verde-la-cheminee texto-elegante text-center fs-3rem fw-bold ms-md-3'>Algo salió mal</h2>
          <p className='texto-verde-la-cheminee text-center text-md-start fs-11rem ms-md-3'>La página que estás buscando no pudo ser encontrada. La misma pudo haber sido eliminada o el link no es correcto.</p>
          <Link className='btn btn-success bg-green-la-cheminee rounded-10px px-5 py-2 ms-md-3' to="/">Volver</Link>
        </div>
        <div className='notFoundText d-none d-md-block col-12 pt-4 position-relative'>
          <span className="notFoundTextInner">404<br />NOT<br />FOUND</span>
        </div>
      </div>
      <img className='d-none d-md-block img-fluid col-6 img-cover notFoundImage' alt='living' src={living4}/>
    </main>
  )
}