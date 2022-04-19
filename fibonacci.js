do{
    n=Number(prompt("ingrese el número de Fibonacci que desea calcular"))
    }while(isNaN(n)||n<0||n>34)
function fb(n){
    if(n==1||n==0){
    return 1
    }else
    return fb(n-1)+fb(n-2);
}
let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML= "El numero de Fibonacci numero " +n +" es "+ fb(n)