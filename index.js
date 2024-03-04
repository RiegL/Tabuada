// function maiorIdade(idade){
//     if (idade >=18){
//         window.alert("voce é de maior")
//     }else{
//         window.alert("você é de menor")
//     }
// }

// var suaIdade =  prompt("digite sua idade")

// window(maiorIdade(suaIdade))

// var d1 = window.document.getElementById('div1')

// d1.addEventListener('mouseout', colored)
// d1.addEventListener('mouseover', coloblue)

// function colored(){
//     d1.style.backgroundColor = 'red'
// }

// function coloblue(){
//     d1.style.backgroundColor = 'blue'
// }

function mult() {
  var num = window.document.getElementById("num");
  var end = window.document.getElementById("end");

  var n = Number(num.value);
  var e = Number(end.value);

  if (n == 0 || e == 0) {
    window.alert("[ERRO] Confira os dados");
  } else {
    var x = 0;
    var r = "";
    var res = window.document.getElementById("resposta");
    res.innerHTML = `A taboada do ${n} é: <br>`;
    do {
      r = n * x;
      res.innerHTML += `${x} X ${n} = ${r} <br>`;
      x++;
    } while (x <= e);
  }
}

function clean() {
  var num = window.document.getElementById("num");
  var end = window.document.getElementById("end");
  var res = window.document.getElementById("resposta");

  num.value = "";
  end.value = "";
  res.innerHTML = "Prencha os valores acima !!";
}
