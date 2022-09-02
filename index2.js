class Contador{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.contador = 0;
    }

    static contadorGeneral = 0;

    static obtenerCuentaGlobal(){ 
        return Contador.contadorGeneral;
    }

    obtenerResponsable(){
        return `${this.nombre} ${this.apellido}`;
    }

    obtenerCuentaIndividual(){
        return this.contador;
    }

    incrementarContador(){
        this.contador++;
        Contador.contadorGeneral++;
    }
}


let contador1 = new Contador("Juan", "Gonzalez");
contador1.incrementarContador();
contador1.incrementarContador()

let contador2 = new Contador("Pedro", "Perez");
contador2.incrementarContador();
contador2.incrementarContador();
contador2.incrementarContador();

let contador3 = new Contador("Maria", "Perez");
contador3.incrementarContador();

// console.log(contador1)
// console.log(contador2)
// console.log(contador3)
// console.log(`Contador general: ${Contador.contadorGeneral}`);

let responsable1 = contador1.obtenerResponsable();
let cuentaResponsable1 = contador1.obtenerCuentaIndividual()

let responsable2 = contador2.obtenerResponsable();
let cuentaResponsable2 = contador2.obtenerCuentaIndividual()

let responsable3 = contador3.obtenerResponsable();
let cuentaResponsable3 = contador3.obtenerCuentaIndividual()

console.log(`Responsable: ${responsable1} su cuenta es: ${cuentaResponsable1}`);
console.log(`Responsable: ${responsable2} su cuenta es: ${cuentaResponsable2}`);
console.log(`Responsable: ${responsable3} su cuenta es: ${cuentaResponsable3}`);

console.log(Contador.obtenerCuentaGlobal());