function bs(arr, first, second){ 
    var temp = arr[first]; 
    arr[first] = arr[second]; 
    arr[second] = temp;
}

function bso(arr){
    var leng = arr.length,
        i, x, stop;
    var pares;
    var impares;

    for (i=0; i<leng; i++){
       for (x=0, stop=leng-i; x<stop; x++){
            if (arr[x]>arr[1+x]){
                bs(arr, x, 1+x);
            }
        }
    }

    return arr;
}

let result =bso([82, 52, 5, 8, 100, 67]);

const pares = result.filter(x=> x%2==0);

const impares = result.filter(x=> x%2!=0);

console.log(result);

console.log(pares);

console.log(impares);


/* const nNumeros = (nroVueltas) => {
    let newArr = [];
    for(let i = 0; i < nroVueltas; i++){
        let randon = Math.floor(Math.random() * 100);
        console.log(randon);
        newArr.push(randon);
    }
    return newArr;
}
const nro = nNumeros(10).sort();
*/

const nNumeros = (nroVueltas) => {
    let arrpares = [];
    let arrimpares = [];
    
    for (let j = 0; j < 2; j ++) {
        for(let i = 0; i < nroVueltas; i++){
            if (i % 2 === 0){
                arrpares.push(i);
            } else {
                arrimpares.push(i);
            }
        }        
    }
    const todo = arrpares.concat(arrimpares);
    return todo;
}

const indice = nNumeros(30).length;

// console.log(nNumeros(30).slice(0,indice/2));
console.log(nNumeros(20));