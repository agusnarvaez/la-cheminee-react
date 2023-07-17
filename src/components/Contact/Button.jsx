export default function Button({buttonClass,text}) {

    const buttonSelection = ()=>{
        switch(buttonClass){
            case "loading": return (
                <div className="spinner-border texto-verde-la-cheminee" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                )
            case "success": return (
                <button className="btn-contact__success d-flex align-items-center px-3 py-2 fs-4 bi bi-check-all my-3" type="button"> Enviado</button>)
            case "error": return (
                <button className="bi bi-x fs-4 d-flex align-items-center btn btn-danger px-3 my-3" type="button">¡Ups! Ha habido un error</button>)
        default: return (
            <button className='btn-contact rounded-10px rounded-md-15px col-5 col-md-3 col-xl-2 py-2 bg-green-la-cheminee px-3 py-0 mb-4 fs-1rem' to="/">{text}</button>)
        }
    }
    return (
        <>
            {
                buttonSelection()
            }
        </>
    )
}