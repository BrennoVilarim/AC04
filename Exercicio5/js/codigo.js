
var guardarAnterior = [];

function outros()
{
       var outros = document.getElementsByClassName("outrosGeneros");
       if(document.getElementById("outros").checked == true)
       {
            for(var i = 0;i < outros.length; i++)
            {
                if(outros[i].checked == true)
                {
                    guardarAnterior.push(outros[i]);
                    outros[i].checked = false;
                }
            }
        }
        else
        {
            manterCheckbox(guardarAnterior);
            guardarAnterior = [];
        }
}

function demaisGeneros()
{
    debugger
    document.getElementById("outros").checked = false;
    manterCheckbox(guardarAnterior);
    guardarAnterior = [];
}

function manterCheckbox(guardarAnterior)
{
    if (guardarAnterior.length > 0)
    {
        for(var i = 0;i < guardarAnterior.length; i++)
        {
            guardarAnterior[i].checked = true;
        }
    }
}