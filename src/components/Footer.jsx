import FooterTitle from "./Footer/FooterTitle"
import FooterSocials from "./Footer/FooterSocials"
import FooterAccordionItem from "./Footer/FooterAccordionItem"
import FooterNav from "./Footer/FooterNav"

export default function Footer() {

const primaryLinks = [
    {
        title:"El Hotel",
        to:"/el-hotel"
    },
    {
        title:"Sobre Nosotros",
        to:"/sobre-nosotros"
    },
    {
        title:"Contacto",
        to:"/contacto"
    }
]

const secondaryLinks = [
    {
        title:"Términos y condiciones",
        to:"/terminos-y-condiciones"
    },
    {
        title:"Políticas de privacidad",
        to:"/politicas-de-privacidad"
    }
]
return (
    <footer className="container-fluid px-4 py-5 bg-green-la-cheminee d-lg-flex ">

        <FooterTitle/>

        <div className="accordion accordion-flush bg-green-la-cheminee d-lg-none border-bottom" id="accordionFlush">

            <FooterAccordionItem title="La Cheminée" accordionId="flush-collapseOne" links={primaryLinks}/>

            <FooterAccordionItem title="Legales" accordionId="flush-collapseTwo" links={secondaryLinks}/>

        </div>


        <ul className="d-none d-lg-flex col-5 container-fluid p-0 m-0">
            <li className="container-fluid p-0 pe-3 m-0 col-6 ">
                <h2 className="fs-6 fw-bold col-12 border-lg-0 p-0">La Cheminée</h2>
                <FooterNav links={primaryLinks}/>
            </li>
            <li className="container-fluid p-0 pe-3 m-0 col-6 ">
                <h2 className="fs-6 fw-bold col-12 border-lg-0 p-0">Legales</h2>
                <FooterNav links={secondaryLinks}/>
            </li>
        </ul>




        <FooterSocials/>
    </footer>
  )
}