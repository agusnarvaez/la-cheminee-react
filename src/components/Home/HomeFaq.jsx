import FaqAccordionItem from "./HomeFaq/FaqAccordionItem"
export default function HomeFaq() {
  const faqs = [
    {
      title:"¿Cómo puedo hacer la reserva de una habitación?",
      text:<p className="accordion-body p-0 border-0">Puede hacer la reserva de una habitación a través de <a href='https://www.booking.com/Share-6OoqicS'>booking</a>, por teléfono o por correo electrónico.</p>
    },
    {
      title:"¿Cuál es la dirección del hotel?",
      text:<p className="accordion-body p-0 border-0">La Cheminée se encuentra ubicado en Mariano moreno 667 esquina gral. Roca, San Martín de los Andes, Neuquén, Argentina (CP 8370).</p>
    },
    {
      title:"¿Cuáles son los horarios de check-in y check-out?",
      text:<p className="accordion-body p-0 border-0">El horario de check-in es a partir de las 15:00 hs y el de check-out es hasta las 11:00 hs.</p>
    },
    {
      title:"¿Cuáles son los horarios de desayuno?",
      text:<p className="accordion-body p-0 border-0">El desayuno se sirve de 8:00 a 10:00 hs.</p>
    }/* ,
    {
      title:"¿En qué momentos puedo disfruta del spa?",
      text:<p className="accordion-body p-0 border-0">El spa se encuentra abierto de 10:00 a 20:00 hs.</p>
    } */
  ]

  return (
    <section className="container-fluid col-12 row m-0 my-5 p-0 px-3 position-relative">

      <h2 className=" fs-1 mb-4 fw-bolder texto-verde-la-cheminee texto-elegante">FAQs</h2>
      <div className="accordion faqAccordion accordion-flush " id="accordionFaq">
        {faqs.map((faq,index) => <FaqAccordionItem key={index} title={faq.title} accordionId={`flush-collapse-${index}`} text={faq.text}/>)}
      </div>

    </section>
  )
}