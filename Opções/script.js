window.onload = function()
{
    var button = document.getElementById("button");

    button.onclick = function ()
    {
        var saldo = document.getElementById("saldo");
        var receitaValor = document.getElementById("valor");
        var resultado = parseInt(receitaValor.value) + 10000
        if ( resultado > 10000 ) 
        {
            console.log(resultado)
            saldo.innerText = 'Saldo após a receita: '+resultado;
        }
        
      
    }

}