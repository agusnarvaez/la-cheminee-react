const buttonState ={
    default: "default",
    loading: "loading",
    success: "success",
    error: "error"
}

const contactFields =[
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
      name:'message',
      placeholder:'Descripción',
      type:'textarea',
      options:{
        required:'La descripción es requerida',
      }
    }
  ]
export {buttonState,contactFields}