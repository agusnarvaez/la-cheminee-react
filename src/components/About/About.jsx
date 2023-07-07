import HelmetData from '../HelmetData'
import '../../assets/styles/index.css'

export default function About({metaData}) {
  return (
    <main className="container-fluid p-0 px-2 px-lg-5 d-flex flex-column align-items-center">
      <HelmetData metaData={metaData}/>

      <div className="container-fluid p-0 py-5 d-flex flex-column align-items-center">
        <h1 className='texto-elegante text-center texto-verde-la-cheminee fw-bold fs-lg-3rem'>¡Conocenos un poco más!</h1>
        <p className='texto-verde-la-cheminee text-center fs-1rem fs-md-13rem px-md-3 px-lg-5'>Te invitamos a que conozcas todo acerca de La Cheminée y explores lo que tenemos para ofrecerte</p>
      </div>



    </main>
  )
}