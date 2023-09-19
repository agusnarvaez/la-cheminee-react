//* Importo hojas de estilos
import '../assets/styles/index.css'
import '../assets/styles/contact.css'

//* Importo hooks
import {useState} from 'react'
import {useForm} from 'react-hook-form'

import HelmetData from '../components/HelmetData'

//* Importo componentes
import ContactInput from '../components/Contact/ContactInput'
import Captcha from '../components/Contact/Captcha'
import Button from '../components/Contact/Button'

//* Importo servicios
import {sendEmail} from '../services/emailjs.js'
import { buttonState,contactFields as fields } from '../utils/formUtils'

export default function Contact({metaData}) {
  //* Estado del botón
  const [buttonClass,setButtonClass] = useState(buttonState.default) // ['default','loading','success','error'
  //* Hook de formulario
  const {register,handleSubmit,formState:{errors},setValue,reset} = useForm()

  /* Función que se ejecuta al enviar el formulario
   * @param {Object} data - Objeto con los datos del formulario
   * @returns {void}
   * @version 1.0.0
   * @since 1.0.0
   * @see https://react-hook-form.com/api/useform/handlesubmit
   * @see https://react-hook-form.com/api/useform/formstate
   * @see https://react-hook-form.com/api/useform/register
   * @see https://react-hook-form.com/api/useform/reset
   * @see https://react-hook-form.com/api/useform/setvalue
   * @see https://react-hook-form.com/api/useform/errors
   */
  const onSubmit = handleSubmit(async(data) => {
    try{
      setButtonClass(buttonState.loading)
      /* const response = await sendEmail(data) */
      alert('Este es un sitio de muestra, no se generan mails reales')
      //console.log(response)
      setButtonClass(buttonState.success)
      reset()
    }catch(error){
      reset()
      setButtonClass(buttonState.error)
      alert('Hubo un error al enviar el mail, por favor intentá nuevamente dentro de unos minutos')
      console.log(error)
    }
  })

  return (
    <main className="container-fluid p-0 pt-4 px-md-5">
      <HelmetData metaData={metaData}/>

      <div className="container-fluid p-0">
        <h1 className="texto-verde-la-cheminee texto-elegante fw-bold text-center fs-2rem fs-md-3rem">¡Contactanos!</h1>
        <p className='texto-verde-la-cheminee text-center px-2 fs-11rem'>Ponete en contacto con La Cheminée e indicanos en qué te podemos ayudar</p>
      </div>

      <form onSubmit={onSubmit} className="container-fluid p-0 py-3 px-md-5 d-flex flex-column justify-content-between align-items-center">
        {
          fields.map((field,index)=>{ return( <ContactInput key={index} field={field} register={register} errors={errors} />) })
        }
      <div className='col-12 d-flex flex-column flex-md-row align-items-center justify-content-between pt-4 px-3 px-lg-5'>
        <Captcha register={register} setValue={setValue} errors={errors} />

        <Button buttonClass={buttonClass} text={'Enviar'} />
      </div>

      </form>
    </main>
  )
}