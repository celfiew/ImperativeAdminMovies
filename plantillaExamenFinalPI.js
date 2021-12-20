const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "César Mauricio Fierro";
const tema = "TEMA 1";

const archivos = require("./jsonHelper")
const arrayPeliculas = archivos.leerJson("peliculas")


/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const gestionDePeliculas = {

    peliculas: arrayPeliculas,

// C
    listarPeliculas: function (array) {
        array.forEach(pelicula => {
            estadoPremio = pelicula.fuePremiada? "premiada": "sin premios"
            console.log(`${pelicula.titulo}, de ${pelicula.director}. Duración de ${pelicula.duracion} minutos, ${estadoPremio} (${pelicula.calificacionIMDB} en IMDB)`)
    });
},
// D
    buscarPorTitulo: function (tituloBuscar) {
       return this.peliculas.find(pelicula => pelicula.titulo === tituloBuscar)
    },

// E
    peliculasPremiadas: function () {
        return this.peliculas.filter(pelicula=>pelicula.fuePremiada === true)
    },
// F
    filtrarPorDuracion: function (Min,Max) {
        return this.peliculas.filter(pelicula=> (pelicula.duracion >= Min) && (pelicula.duracion <= Max) );
    },
// G
    ordenarPorCalificacion: function () {
        return this.peliculas.sort((pelicula1,pelicula2)=>(pelicula2.calificacionIMDB-pelicula1.calificacionIMDB))
    },
// H
    duracionTotal: function(){
        let duracionPeliculas = this.peliculas.reduce((acum,pelicula) => acum + pelicula.duracion,0)
        return 	`La duración de todas las películas sumadas es de ${duracionPeliculas} minutos`
    },
// I
    premiarPeliculaPorTitulo: function (titulo) {
        let tituloEncontrado = this.buscarPorTitulo(titulo)
        if (tituloEncontrado) {
            tituloEncontrado.fuePremiada = true
            archivos.escribirJson("peliculas", this.peliculas)
        }
    }
}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas);
console.log(o);

console.log(v, oo + " .D. Buscar");
console.log(gestionDePeliculas.buscarPorTitulo("Liebestraum"));
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPremiadas());
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorDuracion(90,112));
console.log(o);

console.log(v, oo + " .G. Ordenar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorCalificacion());
console.log(o);

console.log(v, oo + " .H. Duracion");
console.log(gestionDePeliculas.duracionTotal());
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
console.log(gestionDePeliculas.buscarPorTitulo("Axed"))
gestionDePeliculas.premiarPeliculaPorTitulo("Axed")
console.log(gestionDePeliculas.buscarPorTitulo("Axed"))
console.log(o);
