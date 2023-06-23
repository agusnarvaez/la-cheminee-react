import spa1 from '../../assets/images/spa-1.jpg';
import spa2 from '../../assets/images/spa-2.jpg';
import spa3 from '../../assets/images/spa-3.jpg';
import spa4 from '../../assets/images/spa-4.jpg';
import spa5 from '../../assets/images/spa-5.jpg';
import spa6 from '../../assets/images/spa-6.jpg';

export default function HomeSpa() {
  return (
    <section className="container-fluid col-12 row m-0 my-4">

      <h2 className="text-center fs-1 mb-3 fw-bolder texto-verde-la-cheminee texto-elegante">El Spa</h2>

      <div className="container-fluid spa-gallery p-0 d-flex justify-content-center align-items-center position-relative">
        <div className="container-fluid p-0 spa-gallery-mobil">
          <div className='container-fluid p-0 m-0 mb-1 row justify-content-between'>
            <img className='img-fluid col-5 p-0 object-fit-cover' src={spa2} alt="spa-2" />
            <img className='img-fluid col-3 p-0 object-fit-cover' src={spa1} alt="spa-1" />

            <div className='p-0 col-4 row flex-column justify-content-center'>
              <img className='img-fluid w-100 h-50 pb-1 object-fit-cover' src={spa3} alt="spa-3" />
              <img className='img-fluid w-100 h-50 pt-1 object-fit-cover' src={spa4} alt="spa-4" />
            </div>

          </div>

          <div className='container-fluid p-0 pt-1 m-0 row justify-content-center'>
            <img className='img-fluid col-6 p-0 pe-2 object-fit-cover' src={spa5} alt="spa-5" />
            <img className='img-fluid col-6 p-0 object-fit-cover' src={spa6} alt="spa-6" />
          </div>
        </div>
      </div>

    </section>
  )
}