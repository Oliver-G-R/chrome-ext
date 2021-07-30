# ¿Cómo crear una extensión de google?

La siguiente información fue elaborada gracias a [An Object Is A](https://anobjectisa.com/?p=410)  

## Vamos por partes  
Al empezar siempre es importante una organización de carpetas, y estas podrán ser tantas como tu extensión las necesite.  

**Un ejemplo basado en este proyecto**  

*/images* : En esta carpeta puedes poner los archivos visuales (imagenes, iconos, etc).  

*/js* : Archivos Js lógica que tendrán tus ventanas  

*/popup* : Tus Ventanas flotantes html

*/styles* : Estilos generales o individuales para ser importados desde los archivo html  

## Archivos  
*manifest.js* : La información y fuente de carga de recursos que necesita la extensión  
```JSON
{
    "name": "",
    "description": "",
    "version": "",
    "manifest_version": 3, /* Aquí debe ir la version exacta del manifest
                             que vas a utilizar en el proyecto, para que esta funcione */

    "icons": { /* Esta tendrá las siguientes medidas, L X A para los diferentes tamaños 
                  que se ocupan en la pantalla, por lo cual deben estar ligadas al directorio 
                  donde las tengas alojadas
                   */
        "16": "",
        "32": "",
        "48": "",
        "128": ""
    },
    "background": { /* Este archivo es el mas importante ya que servira de comunicador e inciador para todos
                    los componentes de la extensión */
        "service_worker": ""
    },
    "action": { /* Contendrá las propiedades de la ventana flotante */
        "default_popup": "", //El archivo de carga para la ventana flotante
        "default_icons": { //los iconos de esta ventana flotante
            "16": "",
            "32": "",
            "48": "",
            "128": ""
        }
    },
    "options_page": "", /* Carga la página de opciones la cual puede servir para que el usuario pueda 
                            configurar la extensión */
    "permissions": [ /* Los permisos que se le dan del naveagddor para poder accionar sin problemas */
        
    ],
    "host_permissions": [ /* En esta parte se registran todo tipo de urls que queremos que sean compatibles con 
                             nuestra extensión */
    ]

}
```  


