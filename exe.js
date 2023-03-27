function exe1 () { 
    let num1=(document.getElementById ("n1").value)
    let num2=(document.getElementById ("n2").value)
    let resultado=num1-num2
    alert(`resultado: ${resultado}`)
}
function exe2 () {
    let num1=(document.getElementById ("n1").value)
    let num2=(document.getElementById ("n2").value)
    let num3=(document.getElementById ("n3").value)
    let resultado=num1*num2*num3
    alert(`resultado: ${resultado}`)
}
function exe3 () {
    let num1=(document.getElementById ("n1").value)
    let num2=(document.getElementById ("n2").value)
    let resultado=num1/num2
    alert(`resultado ${resultado}`)
}
function exe4 () {
    let num1=(document.getElementById ("n1").value)
    let num2=(document.getElementById ("n2").value)
    let resultado=((num1*2)+(num2*3)) /5
    alert(`resultado ${resultado}`)
    
}
function exe5 () {
    let num1=(document.getElementById ("n1").value)
    //let n2=(n1/10)  ou n2=n1*0.9
    //let n3=(n2*9)
    let num2=num1-(num1*0.10)
    alert(`resultado ${num2}`)
}
function exe6 () {
    let fixo=(document.getElementById("fixo").value)
    let Vendas=(document.getElementById("Vendas").value)
    let Comissao=Vendas *0.04
    let total=Number(fixo) + Number(Comissao)
    alert (`Comissão: R$${Comissao} Salario Total: R$${total}`)
}
function exe7 () {
    const peso=(document.getElementById("peso").value)
    let emagrece= peso-(peso*0.15)
    let engorda= peso+(peso*0.20)
    alert (`Depois de emagrecer: ${emagrece} Depois de engordar: ${engorda}`)
}
function exe8 () {
    let peso=(document.getElementById("peso"))
    let gramas= peso*1000
    alert (`Seu peso em gramas é: ${gramas}`)
} 
function exe9 () {
    let maior=(document.getElementById("Base maior").value)
    let menor=(document.getElementById("Base menor").value)
    let altura=(document.getElementById("Altura").value)
    let area=((maior+menor) * altura) /2
    alert (`A area do trapezio é: ${area}`)

}
function exe10 () {
    let lado=(document.getElementById("lado").value)
    let A= lado*lado
    alert (`A area do quadrado é: ${A}`)

}