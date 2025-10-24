## como correr el proyecto
> en una terminal con nodejs: 22

para ejecutarlo en el navegador:

```bash
npm run web
```
> tambien puede escanear el qr desde su telefono movil descargar la app de expo y podra usar el app desde su movil

si tiene windows y emulador de android
```bash
npm run android
```

si tiene mac y emulador 
```bash
expo run android
```


## librerias usadas

1. tanstack
> se uso para hacer las consultas a la api esta libreria ayuda a manejar los errores, loading, mantiene cache de la informacion solicitada

2. redux toolkit
> se uso para tener un estado global de las peliculas y de la pelicula selecionada para ver el detalle cuando se mueve a la pantalla de detalle se consulta el estado y luego se consulta mas detalles de la pelicula en la api con tanstack 

3. se uso react native paper 
> para algunos componentes como  los botones y el seach bar 

4. se uso axios para hacer las peticiones a la api


## decisiones tecnicas
1. se uso react native expo para facilitar las pruebas, esto ayuda a no tener que generar apks para pruebas, se prueba a traves de el app de expo
2. expo tambien cuenta con facilidades para despliegues: OAT over the air, esto facilita la libereracion de features sin tener q pasar por aprobaciones de stores (google o appp store)

## Tiempo estimado invertido

1. creacion de api para consultar backend con axios: 10 minutos aproximadamente
2. creacion de slices para redux: 10 minutos 
3. creacion de store de redux: 5 minutos
4. maquetacion de ui: 1 horas
4. configuracion de paginacion: 20 minutos
5. configuracion de pull to refresh : 5 minutos

