window.onload = function()
{
    var button = document.getElementById("button");

    button.onclick = function ()
    {
        var saldo = document.getElementById("saldo");
        var receitaValor = document.getElementById("valor");
        var resultado = 10000 - parseInt(receitaValor.value)
        console.log(resultado)
        if ( resultado < 10000 ) 
        {
            console.log(resultado)
            saldo.innerText = 'Saldo após o gasto: '+resultado;
        }
    }

}