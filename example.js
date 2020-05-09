var pares=[];
var impares=[];

function bs(arr, first, second)
{ 
    var temp = arr[first]; 
    arr[first] = arr[second]; 
    arr[second] = temp;
}

/* function bs(arr, first, second)
{ 
    var temp = arr[first]; 
    arr[first] = arr[second]; 
    arr[second] = temp;
} */

function bso(arr)
{
    var leng = arr.length,i, x, stop;

    for (i=0; i<leng; i++)
    {
        for (x=0, stop=leng-i; x<stop; x++)
        {
            if (arr[x]>arr[1+x])
            {
                bs(arr, x, 1+x);
            }
        }
    }

//PUEDES DESPUES DE TERMINAR EL ORDENAMIENTO INSERTARLOS EN LOS ARREGLOS PARES E IMPARES
    for(var i=0; i<arr.length;i++)
    {
        if(arr[i]%2==0) //PARA LOS PARES
        {
            pares.push(arr[i]);
        }
        else //PARA LOS IMPARES
        {
            impares.push(arr[i]);
        }
    }
    return arr;
}

const array = [82, 52, 5, 8, 100, 67]
console.log(bso(array));