import credentials from '../credentials'
import emailjs from 'emailjs-com'

const sendEmail = async (data,templateId) => {
    const response = emailjs.send(
      credentials.emailJs.service,
      credentials.emailJs.template,
      data,
      credentials.emailJs.id
    )
      .then((result) => {
        const response = {
          status: result.status,
          text: result.text
        }
        //console.log("Email enviado exitosamente!", response)
        return response
      })
      .catch((error) => {
        console.log("Error al enviar el email", error)
        return error
      })
    return response
  }


export {sendEmail}