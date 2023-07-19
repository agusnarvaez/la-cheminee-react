import spa1 from '../../assets/images/spa-1.jpg'
import spa2 from '../../assets/images/spa-2.jpg'
import spa3 from '../../assets/images/spa-3.jpg'
import spa4 from '../../assets/images/spa-4.jpg'
import spa5 from '../../assets/images/spa-5.jpg'
import spa6 from '../../assets/images/spa-6.jpg'

import ImageComponent from '../ImageComponent'

export default function HomeSpa() {
  return (
    <section className="container-fluid col-12 row m-0 py-55px px-lg-4 py-lg-50px">

      <h2 className="text-center fs-1 m-0 fw-bolder texto-verde-la-cheminee texto-elegante">El Spa</h2>

      <div className="container-fluid box-shadow my-5 spa-gallery p-0 d-flex justify-content-center align-items-center position-relative">
        <div className="container-fluid d-flex justify-content-center flex-wrap p-0 box-shadow spa-gallery-mobil">
          <div className='container-fluid p-0 m-0 mb-1 row justify-content-between'>
            <ImageComponent className='img-fluid col-5 p-0 cover-image-shadowed' src={spa2} alt="spa-2" hash='TuGlbcM_WB_4ayV@%gofWBkCt7j@' width='42%' blurClass='min-height-250 min-height-md-380 box-shadowed' />
            <ImageComponent className='img-fluid col-3 p-0 cover-image-shadowed' src={spa1} alt="spa-1" hash='TKJZb@YQ]i{IR5t7^PR5E1?GtRaK' width='25%' blurClass='min-height-250 min-height-md-380 box-shadowed' />

            <div className='p-0 w-30percent row flex-column align-items-center justify-content-between'>
              <ImageComponent className='img-fluid w-100 h-50 pb-1 px-0 me-1 cover-image-shadowed' src={spa3} alt="spa-3" hash='TKB{gU$r=lOMoNI#I~IqndNl$Zsp' height='46%' width='90%' blurClass='min-height-125 mb-1 mx-1 min-height-md-185 box-shadowed' />
              <ImageComponent className='img-fluid w-100 h-50 pt-1 px-0 me-1 cover-image-shadowed' src={spa4} alt="spa-4" hash='THLo}-WZ9^bx~pIVtR9aM|tkRQr=' height='46%' width='90%' blurClass='min-height-125 mt-1 mx-1 min-height-md-185 box-shadowed' />
            </div>
          </div>

          <div className='container-fluid p-0 pt-1 m-0 row justify-content-center'>
            <ImageComponent className='img-fluid col-6 p-0 pe-2 cover-image-shadowed' src={spa5} alt="spa-5" hash='Te7n-5tnozT5kYkCNQM|RikGe-n#' width='49%' blurClass='min-height-250 min-height-md-380 me-2 box-shadowed' />
            <ImageComponent className='img-fluid col-6 p-0 cover-image-shadowed' src={spa6} alt="spa-6" hash='TPAv^is+ERKBWWxcI]ogtT-SkYXB' width='50%' blurClass='min-height-250 min-height-md-380 box-shadowed' />
          </div>
        </div>
      </div>

    </section>
  )
}