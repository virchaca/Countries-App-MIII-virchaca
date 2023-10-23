Módulo 3: Ejercicio de evaluación final - Virchaca

Vamos a desarrollar una página web con el listado de las escenas de las películas donde el
actor Owen Wilson ha dicho 'wow', usando una API elaborada con estos datos, API Wow de Owen Wilson.
Este proyecto lo desarrollaremos utilizando el starter kit de react, creando diferentes componentes y usando dependecias propias de react como react router dom para controlar las rutas y la dependencia de i gh-pages-D para publicar el proyecto en gitHub Pages.


1. Listado de escenas

Listaremos 50 escenas donde el actor Owen Wilson ha
dicho 'wow', estas cambiarán de forma random cada vez que refresquemos la pagina gracias a la API utilizada.

Crearemos el componente MovieSceneList y, recogiendo la informacion mediante fetch en el componente Api, mostraremos en cada elemento las siguientes características:
Poster (poster)
Película (name)
Frase completa (phrase)
Año (year)

2. Filtrado por película

Crearemos un componente Filter con dos tipos de filtros:

Filtrado por escena y titulo de pelicula: creamos input, mediante  funcion manejadora hacemos lifting a App, componente principal, para pasarle el valor del input a la funcion handleChangeInput, que actualiza la variable de estado que utilizaremos para filtrar. Pasamos variable de estado y funcionchange por props a Filters para tener el input controlado y poder llevar a cabo el lifting comentado.

Filtrado por año: creamos input select seleccionando los años de las peliculas mediante el método map, recorriendo la informacion de la misma API (getMoviesYears()). Mediante  funcion manejadora hacemos lifting a App, pasamos el valor del input a la funcion handleChangeYear, que actualiza la variable de estado que utilizaremos para filtrar. Pasamos variable de estado y funcionchange por props a Filters para tener el input controlado y poder llevar a cabo el lifting.

En App, filtramos creando la constante filteredMovies, que pasamos al componente MovieSceneList, pàra renderizar el listado.


3. Listado de la aplicación
Listamos creando los siguientes componentes:
Componente para el listado (MovieSceneList), al que pasamos la informacion que queremos mostrar.

componente para la tarjeta de cada escena del listado (MovieSceneItem) para listar todas las escenas al cargar la pagina y poder filtrar segun requerimientos.

Y componente para el detalle de cada escena del listado (MovieSceneDetail) que se nos mostrará cuando pinchemos sobre una escena determinada. Esto lo hacemos usando rutas y React Router DOM, al hacer clic sobre la tarjeta de una escena, en vez del listado, pasaremos a ver unicamente esta escena, mostrando la siguiente informacion: 

nombre de la película,
frase completa
director
el enlace del audio de la escena, (al darle clic se muestra en una pestaña aparte en el navegador y se reproduce).



4. BONUS: URL compatible
Guardando la informacion recibida en el LocalStorage conseguimos que la URL sea compatible, es decir, 
que si visitamos esa URL directamente en el navegador se vea el detalle de la escena de una película. Si refrescamos el navegador en el detalle de una escena de la película debe volver a mostrar el
detalle de la película.

5. BONUS: Ordenación
Por último hemos ordenado el listado de escenas alfabéticamente por el nombre de la película.
