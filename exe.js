function exe1 () { 
    let num1=Number(document.getElementById ("n1").value)
    let num2=Number(document.getElementById ("n2").value)
    let resultado=num1-num2
    document.getElementById("result").innerHTML = resultado
}
function exe2 () {
    let num1=Number(document.getElementById ("n1").value)
    let num2=Number(document.getElementById ("n2").value)
    let num3=Number(document.getElementById ("n3").value)
    let resultado=num1*num2*num3
    document.getElementById('result').innerHTML = resultado
}
function exe3 () {
    let num1=Number(document.getElementById ("n1").value)
    let num2=Number(document.getElementById ("n2").value)
    let resultado=num1/num2
    document.getElementById("result").innerHTML = resultado
}
function exe4 () {
    let num1=Number(document.getElementById ("n1").value)
    let num2=Number(document.getElementById ("n2").value)
    let resultado=((num1*2)+(num2*3)) /5
    document.getElementById("result").innerHTML = resultado
    
}
function exe5 () {
    let num1=Number(document.getElementById ("n1").value)
    //let n2=(n1/10)  ou n2=n1*0.9
    //let n3=(n2*9)
    let num2=num1*0.9
    document.getElementById("result").innerHTML =(num1*0.9)
}
function exe6 () {
    let fixo=Number(document.getElementById("fixo").value)
    let Vendas=Number(document.getElementById("Vendas").value)
    let Comissao= Vendas *0.04
    let total=Number(fixo) + Number(Comissao)
    document.getElementById("result").innerHTML =(fixo)+(Comissao)
}
function exe7 () {
    const peso= Number (document.getElementById("peso").value)
    document.getElementById("emagrece").innerHTML = peso-(peso*0.15)
    document.getElementById("engorda").innerHTML = peso+(peso*0.20)
}
function exe8 () {
    let peso=Number(document.getElementById("peso").value)
    document.getElementById("gramas").innerHTML = (peso*1000)

} 
function exe9 () {
    let maior=Number(document.getElementById("Base maior").value)
    let menor=Number(document.getElementById("Base menor").value)
    let altura=Number(document.getElementById("Altura").value)
    document.getElementById("trian").innerHTML = area=((maior+menor) * altura) /2
    

}
function exe10 () {
    let lado=Number(document.getElementById("lado").value)
    document.getElementById("quad").innerHTML = (lado*lado)
    

}