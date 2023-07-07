import '../../assets/styles/index.css'
import '../../assets/styles/contact.css'

export default function ContactInput({field,register,errors}) {

  return (
    <div className='col-12 d-flex flex-column py-2 px-3 '>
      <label htmlFor={field.name} className='fw-bold fs-md-1rem'>{field.placeholder}</label>
      {field.name==="message"?
      <textarea id={field.name}
        className="contact-input contact-input-large fs-md-1rem p-2"
        type={field.type}
        placeholder={field.placeholder}
        {...register(field.name, field.options)}
      />
      :<input
        id={field.name}
        className="contact-input fs-md-1rem p-2"
        type={field.type}
        placeholder={field.placeholder}
        {...register(field.name, field.options)}
      />}
      {errors[field.name] && <p className="text-danger fw-bold">{errors[field.name].message}</p>}
    </div>
  )
}