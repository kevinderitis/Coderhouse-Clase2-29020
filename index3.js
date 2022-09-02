// let notasAlumnos = [
//  {nombre: "Pedrito", nota: 10},
//  {nombre: "Lucia", nota: 10},
//  {nombre: "Lautaro", nota: 4},
//  {nombre: "Maria", nota: 5},
//  {nombre: "Robert", nota: 10}
// ]


// function promedioNotas(notasPorAlumno){
//     let sumatoriaNotas = 0;
//     notasPorAlumno.forEach(alumno => {
//         sumatoriaNotas += alumno.nota;
//     });

//     let resultado = (sumatoriaNotas / notasPorAlumno.length)
//     return resultado;
// }

// // let promedio = promedioNotas(notasAlumnos)

// console.log(`Promedio notas curso: ${promedioNotas(notasAlumnos)}`)




// class Perro {
//     constructor(nombre, ape, raza){
//         this.nombre = nombre;
//         this.apellido =  ape;
//         this.raza = raza;
//     }

//     ladrar(){
//         console.log('Guau guau')
//     }

//     decirNombre(){
//         console.log(`Soy ${this.nombre} ${this.apellido}`)
//     }
// }


// let perro1 = new Perro("Firulais", "Gomez", "PP") // firu es instancia de la clase Perro
// let perro2 = new Perro("Pirulito", "Martinez", "Golden")

// perro2.ladrar()
// perro2.decirNombre()

// console.log(Perro)



class Usuario{
    constructor(libros){
        this.libros =  libros
    }


    funcion1(){
        console.log("hola")
    }

    getBooks(){
        let arrayResult = []
        this.libros.forEach(element => {
            arrayResult.push(element.nombre)
        });
        return arrayResult
    }
}

let libros = [{nombre: "libro1", autor: "autor1"},{nombre: "libro2", autor: "autor2"},{nombre: "libro3", autor: "autor3"}]
let mascotas = ["perro", "gato", "loro"]
let usuarios = new Usuario(libros)

console.log(usuarios.libros)

[{nombre: "libro1", autor: "autor1"},{nombre: "libro2", autor: "autor2"},{nombre: "libro3", autor: "autor3"}]
["libro1","libro2","libro3"]