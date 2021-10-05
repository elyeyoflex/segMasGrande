
var numeros =[4,3,6,2,3];
console.log(segundoMayor(numeros));

function segundoMayor(num){
  var primero = num[0];
  var segundo= 0;
  for(i in num){
    if (num[i]> primero){
      segundo = primero;
      primero = num[i];
    }
    if (num[i]>segundo && num[i]< primero){
      segundo = num[i];
    }
  }
  return segundo
}

/*
var numeros =[];
numeros.push(7);
numeros.push(4);
numeros.push(6);
numeros.push(7);
numeros.push(1);

segundoMayor(numeros);

function segundoMayor(numeros){
  var num = numeros;
  var res = document.getElementById("res");
  var numerosOrdenados = [];
  var indice;
  for(e in num){
    var mayor = 0;
    for (i in num){
      if (num[i]>mayor){
        mayor = num[i];
        indice = i;

      }
    }
  num[indice] = 0;
  numerosOrdenados.push(mayor);
  res.innerHTML+= mayor + "<br/>";
  }
  res.innerHTML+= "el segundo mayor es: " + numerosOrdenados[1];
  console.log(numerosOrdenados);
  console.log(num);
}
*/
