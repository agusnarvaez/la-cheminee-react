
export default function FaqAccordionItem({title,accordionId,text}) {

    return (

        <div className="accordion-item border-top border-0">
            <h2 className="accordion-header border-0">
                <button className="accordion-button shadow-none p-0 py-3 collapsed fw-bold border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target={`#${accordionId}`} aria-expanded="false" aria-controls={accordionId}>
                    {title}
                </button>
            </h2>
            <div id={accordionId} className="accordion-collapse collapse  border-0"
                data-bs-parent="#accordionFlushExample">
                {text}
            </div>
    </div>
    )
}