import axios from 'axios'
import credentials from '../credentials'

const sendContactEmail = {
    autoReply: async (data) => {
        return sendEmail(data,credentials.sendGrid.autoReplyTemplate)
    },
    notification: async (data) => {
        return sendEmail(data,credentials.sendGrid.notificationTemplate)    },
}

const sendEmail = async (data,templateId) => {
    try {
        const response = await axios.post(
            'http://localhost:8080/https://api.sendgrid.com/v3/mail/send',
            {
                template_id: templateId, // Reemplaza con el ID del template deseado
                personalizations: [
                    {
                        to: [{email:data.email}], /* ? data.email.map((email) => ({ email })) : [], // Verifica si el campo de email está definido */
                        phone: data.phone,
                        name: data.name,
                        subject: data.subject,
                    },
                  ],
                from: { email: 'agus.narvaez@outlook.com' },
                content: [{ type: 'text/plain', value: data.description }], // Si se proporciona un template_id válido, no se necesita el campo "content"
            // ...otros datos necesarios para la solicitud de envío de correo electrónico
            },
            {
            headers: {
                Authorization: `Bearer ${credentials.sendGrid.apiKey}`,
                'Content-Type': 'application/json'
            },
            }
        )
        console.log(response)
      console.log(response.data) // Respuesta de la API de SendGrid
    } catch (error) {
      console.error(error)
      return error
    }
  }


export {sendContactEmail}