const corsProxy = require('cors-anywhere');
const host = 'localhost'; // Cambia esto si tu servidor de desarrollo tiene una dirección IP diferente
const port = 8080; // Puedes utilizar cualquier puerto disponible en tu entorno de desarrollo

corsProxy
  .createServer({
    originWhitelist: [], // Dejar en blanco para permitir todas las solicitudes de origen
    requireHeader: ['origin', 'x-requested-with'], // Requerir los encabezados necesarios para las solicitudes CORS
    removeHeaders: ['cookie', 'cookie2'], // Eliminar los encabezados de cookies para evitar problemas de seguridad
  })
  .listen(port, host, () => {
    console.log(`Servidor CORS Anywhere en ejecución en http://${host}:${port}`);
  })