/* La primerva vez que se instala la extensión, aquí podemos hacer cada tipo de cosas
que necesitmos*/
chrome.runtime.onInstalled.addListener(() => {
    /* chrome.storage.local.set({
        name: "Oliver Guerrero Ruiz"
    }) */
})

/* console.log('I am backgrond') */

/* Esto observa la interacción de la navegación para poder implementar el script de fondo. */

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    /* Evaluamos si el estado de la nueva pagina web que el usuario cargo
    esta completada, y si es valida */
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
         /* Si la condición se cumple pasamos a inyectar nuestros archivos*/
        chrome.scripting.insertCSS({
            target: { tabId },
            files: ["./foreground.css"]  //Archivo que se ejecutara cada vez que una pagina cargue
        }).then(() => {
         
            chrome.scripting.executeScript({
                target: { tabId },
                files: ["./foreground.js"]
            }).then(() => console.log('Script cargado'))
            .catch(err => console.error(err))
        }).catch(err => console.log(err))
    }
})

/* COMUNICACION CON LOS DEMAS COMPONENTES DE LA EXTENSIÓN */

//Para enviar mensajes entre los componentes

/* 
    Primer forma

    Toma dos argumentos, el mensaje que se va enviar y la devoluvion de la llamda para un mensaje de respuesta.
*/
/* chrome.runtime.sendMessage("message", response => {

}); */


/* 
    Segunda forma 

    Toma tres argumentos, la identificación de la pestaña a la que se enviara el mensaje, el mesnaje que se va enviar y la devolución de la llamada.
*/

/* chrome.tabs.sendMessage(tabId, "message", response = {

}); */


//Para recibir el mensaje

/* 
    El método onMessage escucha todas las llamadas que se le hacen de mensajes.
    Parametros--- 
    request:  el mensaje que se envia
    sender: envío del remitente
    senderResponse: método que le permite enviar al remitente original
*/

/* chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    if (request === 'get_name') {
        return "Jack";
    }
});
 */



//Ejemplo
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    /* evaluamos el mensaje que nos esta llegando por request */
    if (request.message === 'get_name') {
        sendResponse("Oliver") //respondemos el mensaje enviando un dato
    } else if (request.message === 'change_name') { //seguimos verificando la información que nos llega para efectuar nuestra lógica
        chrome.storage.local.set({ //guardamos en local la información
            name: request.payload
        }, () => {
            /* Verificamos el estado del proceso al guardar  */
            if (chrome.runtime.lastError) { //Si hay un error mandamos la infromación correspondiente para poder tratalo
                sendResponse({ message: 'fail' })
                return;
            }
            /* Sino hay error alguno mandamos al igual un mensaje */

            sendResponse({ message: 'success' })
        })

        return true 

   /*  Si todo ha salido como lo esperamos mandamos un valor booleano en true 
    para que chrome sepa que se cumplio con exito el mensaje */
    }
})