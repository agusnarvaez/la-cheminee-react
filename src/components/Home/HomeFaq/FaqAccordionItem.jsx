
export default function FaqAccordionItem({title,accordionId,text,index}) {
    const selectBorder = index===0?'border-top':''
    return (

        <div className={"accordion-item border-bottom border-0 "+selectBorder}>
            <h2 className="accordion-header border-0">
                <button className="accordion-button shadow-none p-0 py-4 collapsed fw-bold border-0" type="button" data-bs-toggle="collapse"
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