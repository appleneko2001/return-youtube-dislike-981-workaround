import { en } from 'vuetify/src/locale'

export default {
    ...en,
    home: {
        name: 'Home',
        title: 'Return YouTube Dislike',
        subtitle: 'Browser extension and an API that shows you dislikes on Youtube',
        install: 'Install',
        ukraine: 'Support Ukraine',
        sponsors: 'Sponsors',
    },
    install: {
        name: 'Install',
        title: 'Select Your Platform',
        subtitle: 'Available for Firefox and all Chromium browsers',
        title2: 'Other Platforms',
        subtitle2: 'If your browser is not yet supported, try this UserScript',
        title3: 'Third Party Implementations',
        subtitle3: 'No liability on our side, use at your own risk',
    },
    api: {
        name: 'API',
        title: 'Welcome to the official RYD docs',
        subtitle: 'To get started, select a section from the menu.',
        rights: {
            title: 'Usage Rights',
            subtitle: 'Third party use of this open API is allowed with the following restrictions:',
            bullet1: 'Attribution: ',
            bullet1text: 'This project should be clearly attributed with either a link to this repo or a link to returnyoutubedislike.com',
            bullet2: 'Rate Limiting',
            bullet2text: 'There are per client rate limits in place of 100 per minute and 10,000 per day. This will return a 429 status code indicating that your application should back off',
        },
        url: {
            title: 'URL Information',
            subtitle: 'The API is accessible over the following base URL: ',
        },
        endpoints: {
            title: 'Available Endpoints',
            subtitle: 'List of available endpoints is available here: ',
        },
        fetching: {
            title: 'Basic Fetching Tutorial',
            subtitle: 'Example to get votes of a given YouTube video ID: ',
            title2: 'Example Request: ',
            url: 'Request URL: ',
            method: 'Request Method: ',
            headers: 'Headers: ',
            response: 'Response: ',
            error1: 'An invalid YouTube ID will return status code 404 "Not Found"',
            error2: 'An incorrectly formatted YouTube ID will return 400 "Bad Request"'
        },
    },
    help: {
        name: 'Help',
    },
    faq: {
        name: 'FAQ',
    },
    donate: {
        name: 'Donate',
    },
    links: {
        name: 'Links',
    },
}
// HELP

// Troubleshooting > Solución de problemas
// Make sure you have latest version of extension installed, """ right now > Asegúrate de que tienes la última versión de la extensión instalada, """ ahora mismo
// Try removing extension and installing it again, then restarting the browser (all active windows, not just one tab) > Prueba a eliminar la extensión e instalarla de nuevo, después reinicia el navegador (todas las ventanas activas, no solo una pestaña)
// Make sure that this link opens: > Asegúrate de qué este link se abre:
// you should see plain text: > deberías ver este texto:
// If nothing of above helps - report your problem in #bugs-and-problems in our Discord > Si nada de esto funciona, reporta tú problema en #bugs-and-problems en nuestro Discord (en inglés)
// Tell us your Operating System, Browser Name and Browser Version > Dínos tu sistema operativo, nombre del navegador y versión del navegador
// Take screenshot of page with problem (i.e. youtube video page) with console open (press F12) - example screenshot below. > Toma una captura de pantalla de la página con el problema (cómo una página de un vídeo de YouTube) con la consola abierta (pulsa F12) - captura de pantalla de ejemplo abajo.
// Take screenshot of extensions page of your browser with extension installed. > Toma una captura de la página de extensiones de tu navegador con la extensión instalada.
// To see extensions put this into address bar: > Para ver las extensiones pon esto en la barra de dirección:
// about:addons for Firefox > about:addons para Firefox
// chrome://extensions for Chrome, Edge, Brave, Opera, Vivaldi > chrome://extensions para Chrome, Edge, Brave, Opera, Vivaldi

// FAQ

// Frequently Asked Questions > Preguntas frecuentes
// Still have questions? Feel free to join our Discord! > ¿Sígues teniendo problemas? ¡Sientete libre de unirte a nuestro Discord (en inglés)!

// 1 - Where does the extension get its data? > ¿De dónde saca sus datos la extensión?
// A combination of archived data from before the offical YouTube dislike API shut down, and extrapolated extension user behavior.
// > Una combinación de datos archivados antes de que la API oficial de dislikes de YouTube se apagará, y datos estimados basados en los usuarios.

// 2- Why isn't the dislike count updating? > ¿Por qué no se actualiza el contador de dislikes?
// Right now video dislikes are cached and they aren't updated very frequently. It varies depending on a video's popularity but can take anywhere between a few hours and a few days to update.
// > Ahora mismo los dislikes son guardados y no se actualizan muy frecuentemente. Varia dependiendo de la popularidad de un vídeo pero puede tardar entre unas pocas horas y unos pocos días en actualizarse.

// 3 - How does this work? > ¿Cómo funciona esto?
// The extension collects the video ID of the video you are watching, fetches the dislike (and other fields like views, likes etc) using our API. The extension then displays the dislike count and ratio on the page. If you like or dislike a video, that is recorded and sent to the database so an accurate dislike count can be extrapolated.
// > La extensión recoge el ID del vídeo qué estas viendo, carga los dislikes (y otros campos cómo las visitas, likes, etc) usando nuestra API. Entonces, la extensión muestra los dislikes y el radio en la página. Si le das like o dislike a un vídeo, eso se guarda y se envía a la base de datos para qué un contador de dislikes más acertado pueda ser creado.

// 4- Can I share my dislike count with you? > ¿Puedo compartir mi contador de dislikes con vosotros?
// Coming soon. We are looking into using Oauth or a different read only API with a limited scope so creators can share their dislike counts verifiability.
// > Próximamente. Estamos investigando en usar Oauth o una API diferente de solo lectura con alcance limitado para que los creadores puedan compartir sus contadores de dislikes verificablemente.

// 5- What data do you collect and how is it treated? > ¿Qué datos guardais y cómo son guardados?
// The extension only collects data that is strictly necessary for it to function properly, such as IP address or ID of the video you're watching. None of your data will ever be sold to 3rd parties. If you would like to know more about how we handle security and privacy check out our """.
// > La extensión solo guarda datos que son estrictamente necesarios para que funcione correctamente, cómo la dirección IP o el ID del vídeo que estas viendo. Tus datos nunca serán vendidos a terceros. Si te gustaría saber más sobre cómo tratamos la seguridad y la privacidad mira nuestra """.

// 6 - How does the API/Backend work? > ¿Cómo funciona la API/Backend?
// The backend is using archived data from when the youtube api was still returning the dislike count, extension users like/discount count and extrapolation. In the near future we will be allowing content creators to submit their dislike count easily and safely and we will be adding ArchiveTeam's archived data (4.56 billion videos) into our current database. You can also view a video on the topic.
// > El backend usa datos archivados de cuando la API de YouTube seguía proporcionando el contador de dislikes, los votos de usuarios de la extensión y extrapolación. En un futuro cercano permitíremos a los creadores de contenido proporcionar su contador de dislikes de forma fácil y segura y añadíremos datos archivados de ArchiveTeam (4,56 billones de vídeos) en nuestra base de datos. También puedes ver un vídeo al respecto.

// 7- Why does the dislike count show 'DISLIKES DISABLED'? > ¿Porque el contador de dislikes dice "DISLIKES DISABLED"?
// At the time of writing we aren't showing dislikes for videos that disabled their likes and dislikes count. The extension displays 'DISLIKES DISABLED' for these videos. We will be showing dislikes on all videos soon, this is just a temporary workaround so people don't think the extension is broken (which isn't working well). Sometimes a recently uploaded video might show 'DISLIKES DISABLED' even if the creator hasn't disabled it, this is due to how we are detecting if dislikes are disabled, it should go away in a few hours or by liking or disliking the video and refreshing the page (hopefully).
// > En el momento de escribir este artículo, no mostramos los dislikes de los vídeos que tienen desactivado el recuento de likes y dislikes. La extensión muestra "DISLIKES DISABLED" para estos vídeos. Pronto mostraremos los dislikes en todos los vídeos, pero se trata de una solución temporal para que la gente no piense que la extensión está rota (que no funciona bien). A veces, un vídeo subido recientemente puede mostrar "DISLIKES DISABLED" incluso si el creador no lo ha desactivado, esto se debe a la forma en que detectamos si los "dislikes" están desactivados, debería desaparecer en unas horas o al darle like o dislike al vídeo y actualizar la página (con suerte).

// DONATE

// Donate > Donar
// You can support our efforts to keep the internet free with a donation! > ¡Puedes apoyar nuestros esfuerzos de mantener el internet libre con una donación!

// LINKS

// Project Links > Links del proyecto
// Links to the project and its developers > Links al proyecto y sus desarrolladores
// Contact Me > Contactame