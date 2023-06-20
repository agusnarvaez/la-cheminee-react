import FooterTitle from "./Footer/FooterTitle";
import FooterSocials from "./Footer/FooterSocials";
import FooterAccordionItem from "./Footer/FooterAccordionItem";
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
    <footer className="container-fluid px-4 py-5 bg-green-la-cheminee">

        <FooterTitle/>

        <div className="accordion accordion-flush bg-green-la-cheminee" id="accordionFlush">

            <FooterAccordionItem title="La Cheminée" accordionId="flush-collapseOne" links={primaryLinks}/>

            <FooterAccordionItem title="Legales" accordionId="flush-collapseTwo" links={secondaryLinks}/>

        </div>

        <FooterSocials/>
    </footer>
  )
}