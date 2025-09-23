### Framework
El frameworf elegio fue boostrap
## template:
### dirreccion:
https://startbootstrap.com/theme/one-page-wonder#google_vignette
### lecencia
https://github.com/startbootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE


## Offline para la página principal

para confirmar que este de manera correcta se puso el comando:

## Pruebas de Funcionamiento Offline (PWA)

### Configuración
- El Service Worker (ngsw) precachea los assets clave para que la página de inicio (`/`) funcione sin conexión.
- Archivos precacheados (definidos en `ngsw-config.json`):
  - HTML: `index.html`
  - CSS/JS: Archivos principales del bundle (`*.css`, `*.js`)
  - Imágenes: `/assets/img/01.jpg`, `/assets/img/02.jpg`, `/assets/img/03.jpg` (imágenes clave del template)
- El SW se habilita solo en producción vía `provideServiceWorker` en `main.ts`.

### Pasos para Probar Offline
1. Construye la app: `ng build --configuration production`.
2. Sirve localmente: `http-server dist/<nombre-del-proyecto> -p 8080`.
3. Abre `http://localhost:8080` en Chrome.
4. En DevTools > Network > Marca "Offline".
5. Recarga y verifica:
   - Home carga con encabezado, navegación y secciones.
   - Imágenes clave (`01.jpg`, `02.jpg`, `03.jpg`) visibles.
   - No hay errores de red para assets precacheados.
6. Resultado esperado: Home funcional offline; rutas como `/ui` requieren conexión si no cacheadas.

### Notas
- Pruebas realizadas en Chrome v117+ (simulación offline) el 22/09/2025.
- Ajusta rutas en `ngsw-config.json` si las imágenes o assets cambian de ubicación.