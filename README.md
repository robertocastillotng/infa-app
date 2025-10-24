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
