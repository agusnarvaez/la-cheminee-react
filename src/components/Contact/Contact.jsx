import '../../assets/styles/index.css'
import '../../assets/styles/contact.css'
import {useForm} from 'react-hook-form'
import ContactInput from './ContactInput'
import Captcha from './Captcha'
import {sendContactEmail} from '../../services/sendgrid.js'

export default function Contact() {
  const {register,handleSubmit,formState:{errors},getValues,setValue,reset} = useForm()

  const onSubmit = handleSubmit(async(data) => {
    console.log(data)
    try{
      await sendContactEmail.notification(data)
      await sendContactEmail.autoReply(data)
      reset()
    }catch(error){
      alert('Hubo un error al enviar el mail, por favor intentá nuevamente dentro de unos minutos')
      console.log(error)
    }
  })

  const fields =[
    {
      name:'name',
      placeholder:'Nombre y apellido',
      type:'text',
      options:{
        required:'El nombre y apellido es requerido'
      }
    },
    {
      name:'email',
      placeholder:'Email',
      type:'email',
      options:{
        required:'El email es requerido',
        pattern: {
          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          message: "El email no es válido"
        }
      }
    },
    {
      name:'phone',
      placeholder:'Teléfono',
      type:'text',
      options:{
        required:'El teléfono es requerido',
      }
    },
    {
      name:'subject',
      placeholder:'Motivo de contacto',
      type:'text',
      options:{
        required:'El motivo de contacto es requerido',
      }
    },
    {
      name:'description',
      placeholder:'Descripción',
      type:'textarea',
      options:{
        required:'La descripción es requerida',
      }
    }
  ]

  return (
    <main className="container-fluid p-0 pt-4 px-md-5">
      <div className="container-fluid p-0">
        <h1 className="texto-verde-la-cheminee texto-elegante fw-bold text-center fs-2rem fs-md-3rem">¡Contactanos!</h1>
        <p className='texto-verde-la-cheminee text-center px-2 fs-11rem'>Ponete en contacto con La Cheminée e indicanos en qué te podemos ayudar</p>
      </div>

      <form onSubmit={onSubmit} className="container-fluid p-0 py-3 d-flex flex-column justify-content-between align-items-center">
        {
          fields.map((field,index)=>{ return( <ContactInput key={index} field={field} register={register} errors={errors} />) })
        }

        <Captcha register={register} setValue={setValue} errors={errors} />

        <button className='btn-contact bg-green-la-cheminee px-5 py-2 my-2 fs-5' to="/">Enviar</button>
      </form>

    </main>
  )
}