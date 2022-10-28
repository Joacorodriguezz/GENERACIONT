function triplicador(numero,triple,callback){
    callback(numero*triple);
}

function multiplicador(num1,num2,callback){
    callback(num1,num2);
}

function division(num1,num2,callback){
    callback(num1/num2) ;
}

function resto(num1,num2,callback){
    callback (num1%num2);
}

triplicador(5,3,function(resultadoTriple){
    console.log(resultadoTriple);
    multiplicador(resultadoTriple,function(resultadoMultiplicacion){
        console.log(resultadoMultiplicacion);
        division(resultadoMultiplicacion,function(resultadoDivison){
            console.log(resultadoDivison);
            resto(resultadoDivison,function(resultadoResto){
                console.log(resultadoResto)
            
            }
        }
    }
}