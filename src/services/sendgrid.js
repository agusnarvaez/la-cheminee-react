import axios from 'axios'
import credentials from '../credentials'

const sendContactEmail = {
    autoReply: async (data) => {
        sendEmail({data,templateId:credentials.sendGrid.autoReplyTemplate})
    },
    notification: async (data) => {
        sendEmail({data,templateId:credentials.sendGrid.notificationTemplate})    },
}

const sendEmail = async (data,templateId) => {
    try {
        console.log(data)
        const response = await axios.post(
            'https://api.sendgrid.com/v3/mail/send',
            {
                template_id: templateId, // Reemplaza con el ID del template deseado
                personalizations: [
                    {
                    to: [{ email: data.email }],
                    subject: data.subject,
                    },
                ],
                from: { email: 'agus.narvaez@outlook.com' },
                description: data.description,
                phone: data.phone,
                name: data.name,
                content: [{ type: 'text/plain', value: 'Heya!' }]
            // ...otros datos necesarios para la solicitud de envío de correo electrónico
            },
            {
            headers: {
                Authorization: `Bearer ${credentials.sendGrid.apiKey}`,
                'Content-Type': 'application/json'
            },
            }
        )

      console.log(response.data) // Respuesta de la API de SendGrid
    } catch (error) {
      console.error(error)
    }
  }


export {sendContactEmail}