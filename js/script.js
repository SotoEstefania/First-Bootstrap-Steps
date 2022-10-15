function queryS(string){
    return document.querySelector(string); 
}

const btnResumen= queryS('.btn-resumen');
const btnBorrar= queryS('.btn-reset');
const total=queryS('.total-a-pagar');
const inputCantidad=queryS('#input-cantidad');
const inputCategoria=queryS('#input-categoria');
var precioFinal=0;
var precioTicket=200;
var opcionCategoria;

btnResumen.addEventListener('click', mostrarPrecioFinal);
btnBorrar.addEventListener('click', function(){total.innerHTML='Total a Pagar: $'});


function mostrarPrecioFinal(){
    switch(inputCategoria.value){
        case 'Estudiante':
        precioFinal=precioTicket*0.2;
        break;
    case 'Trainee':
        precioFinal=precioTicket*0.5;
        break;
    case 'Junior':
        precioFinal=precioTicket*0.85;
        break;
    }
    total.innerHTML=`Total a Pagar: $${precioFinal*inputCantidad.value}`
}