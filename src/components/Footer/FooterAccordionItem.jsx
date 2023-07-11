import FooterNav from "./FooterNav"

export default function FooterAccordionItem({title,accordionId,links}) {

    return (

        <div className="accordion-item border-top border-0 bg-green-la-cheminee">
            <h2 className="accordion-header bg-green-la-cheminee border-0">
                <button className="accordion-button shadow-none p-0 py-3 collapsed fw-bold bg-green-la-cheminee text-white border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target={`#${accordionId}`} aria-expanded="false" aria-controls={accordionId}>
                    {title}
                </button>
            </h2>
            <div id={accordionId} className="accordion-collapse collapse  border-0"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body pt-0 border-0">
                    <FooterNav links={links}/>
                </div>
            </div>
    </div>
    )
}