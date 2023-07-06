import { Link } from 'react-router-dom'
export default function Error404() {
  return (
    <main className="container-fluid p-0 py-5 px-3 d-flex flex-column align-items-center justify-content-center">
      <h2 className='texto-verde-la-cheminee texto-elegante text-center fs-3rem fw-bold'>Algo salió mal</h2>
      <p className='texto-verde-la-cheminee text-center fs-11rem'>La página que estás buscando no pudo ser encontrada. La misma pudo haber sido eliminada o el link no es correcto.</p>
      <Link className='btn btn-success bg-green-la-cheminee rounded-10px px-5 py-2' to="/">Volver</Link>
    </main>
  )
}