// 1

let lista = [1,2,3];


// function mostrarLista(listaDatos){
//     if(listaDatos.length === 0){
//         console.log("Lista vacia");
//     }else{
//        listaDatos.forEach(element => {
//            console.log(element)
//        });
//     }
// }


// mostrarLista(lista2)


// 2
// (function (listaDatos){
//     if(listaDatos.length === 0){
//         console.log("Lista vacia");
//     }else{
//        listaDatos.forEach(element => {
//            console.log(element)
//        });
//     }
// })(lista)


// 3


// function crearMultiplicador(num1){
//     return function(num2){
//         return num1 * num2;
//     }
// }

// let result = crearMultiplicador(3)(5);
// console.log(result);


// duplicar 


// function duplicar(num1){
//     return function(){
//         return num1 * 2;
//     }
// }

// let result2 = duplicar(7)();
// console.log(result2);


// triplicar

function triplicar(num1){
    return function(){
        return num1 * 3;
    }
}

let result3 = triplicar(7)();
console.log(result3);
