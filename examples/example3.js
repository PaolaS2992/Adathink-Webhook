// *** Estructuras de Control Secuencial ***

/**
 * Ejercicio Ejemplo 01:
 * Un maestro desea saber qué porcentaje de hombres y que porcentaje de mujeres hay en un grupo de
 * estudiantes. Elaborar un pseudocódigo que permita ingresar la cantidad de varones y mujeres y muestre
 * el porcentaje de estos para su grupo de estudiantes.
 */


const ejercicioResuelto1 = (varones, mujeres) => {
    const porcetajeVaron = varones / (varones + mujeres) * 100;
    const porcetajeMujer = mujeres / (varones + mujeres) * 100;
    let obj = {
        varones: porcetajeVaron,
        mujeres: porcetajeMujer
            }
    return obj;
};

console.log('Ejercicio Resuelto Nº 01 -->', ejercicioResuelto1(5, 15));

/**
 * Ejercicio Ejemplo 02:
 * La municipalidad de Pueblo Libre piensa invertir cierto monto de dinero en la reparación de las pistas en 
 * las avenidas principales. Desarrollar un pseudocódigo que permita ingresar un monto de inversión en 
 * soles y lo reparta en la refacción de cinco avenidas de la siguiente manera:
 * Avenida La Mar - 35% del monto
 * Avenida Abancay - 25% del monto
 * Avenida 28 de Julio - 10% del monto
 * Avenida Aviación - 15% del monto
 * Avenida Tacna - restante del monto
 * Mostrar cuanto le correspondería a cada avenida.
 */
const ejercicioResuelto2 = (inversion) => {
    const laMar = inversion * 0.35;
    const abancay = inversion * 0.25;
    const julio = inversion * 0.10;
    const aviacion = inversion * 0.15;
    const tacna = inversion - (laMar + abancay + julio + aviacion);
    const objImprimir = {
        av_LaMar: laMar,
        av_Abancay: abancay,
        av_28Julio: julio,
        av_Aviacion: aviacion,
        av_Tacna: tacna
    };
    return objImprimir;
};

console.log('Ejercicio Resuelto Nº 02 -->', ejercicioResuelto2(10000));

/**
 * Ejercicio 01:
 * Se debe permitir ingresar dos numeros, luego mostrar la suma y el producto de ambos.
 */
const ejercicio1 = (nro1, nro2) => {
    const suma = nro1 + nro2;
    const producto = nro1 * nro2;
    const objImprimir = {
        suma,
        producto
    };
    return objImprimir;
};

console.log('Ejercicio Nº 01 -->', ejercicio1(29, 92));

/**
 * Ejercicio 02:
 * Se debe permitir ingresar un numero entero, luego mostrar el 20% de este numero.
 */
const ejercicio2 = (nro) => {
    const numero = nro * 20 / 100;
    return numero;
};

console.log('Ejercicio Nº 02 -->', ejercicio2(16));

/** 
 * Ejercicio 03:
 * Se debe permitir ingresar un valor en metros, luego mostrar su valor en centimetros y un milimetro.
 * Datos:
 * 1 metros --> 100 centimetros
 * 1 centimetro --> 10 milimetros.
*/

const ejercicio3 = (metros) => {
    const centimetro =  metros * 100;
    const milimetro = metros * 1000;
    const objImprimir = {
        metros,
        centimetro,
        milimetro
    };
    return objImprimir;
};

console.log('Ejercicio Nº 03 -->', ejercicio3(100));

/**
 * Ejercicio 04:
 * Ingresando la base y altura de un triángulo, luego mostrar su área.
 */
const ejercicio4 = (base, altura) => {
    const area = (base * altura) / 2;
    return area;
};

console.log('Ejercicio Nº 04 -->', ejercicio4(10, 5));

/**
 * Ingresar un valor en dólares, luego mostrar su equivalente en soles.
 * Dato: 1 dólar es 3.38 soles
 */
const ejercicio5 = (valorDolares) => {
    const soles = valorDolares * 3.38;
    return soles;
};

console.log('Ejercicio Nº 07 -->', ejercicio5(100));

/**
 * Ejercicio 06:
 * Leer una medida en pulgadas e imprimir su equivalente en milímetros.
 * Dato: (25.4 mm = 1 pulgada)
 */
const ejercicio6 = (pulgadas) => {
    const milimetros = pulgadas * 25.4;
    return milimetros;
};

console.log('Ejercicio Nº 06 -->', ejercicio6(100));

 /**
  * Ejercicio 07:
  * Ingresar un nùmero de tres cifras y luego mostrar la suma de sus cifras elevada al cuadrado.
  */

const ejercicio7 = (nro1, nro2, nro3) => {
    const suma = Math.pow(nro1 + nro2 + nro3, 2);
   return suma;
};

console.log('Ejercicio Nº 07 -->', ejercicio7(1, 2, 3));

/**
 * Ejercicio 08:
 * Se debe ingresar un monto de dinero, luego mostrar cuando le toca a cada socio segùn la siguiente tabla.
 * Socio A --> 30%
 * Socio B --> 20%
 * Socio C --> 50%
 */

 const ejercicio8 = (monto) => {
     const socioA = (monto * 30) / 100 ;
     const socioB = (monto * 20) / 100;
     const objImprimir = {
         socio_A: socioA,
         socio_B: socioB,
         socio_C: monto - (socioA + socioB)
     }
     return objImprimir;
 };

 console.log('Ejercicio Nº 08 -->',ejercicio8(100));

 /**
  * Ejercicio 09:
  * Desarrollar un algoritmo que pida el ingreso del precio base de un producto y se debe calcular el IGV 
  * (19% del precio base), luego mostrar el valor del IGV y el precio final del producto (Precio base mas el IGV).
  */
 const ejercicio9 = (precioBase) => {
     const valorIgv = (precioBase * 19) / 100;
     const precioFinal = precioBase + valorIgv;
     const objImprimir = {
         valor_IGV: valorIgv,
         precio_Final: precioFinal,
     };
     return objImprimir;
 };

 console.log('Ejercicio Nº 09 -->', ejercicio9(100));

 /**
  * Ejercicio 10:
  * Una empresa realiza anualmente un evento para fines solidarios con las comunidades nativas del Perù,
  * para ello se requiere un algoritmo que permita ingresar la cantidad de entradas vendidas de los
  * tres tipos detallados en el siguiente tarifario:
  * 
  * Entrada General --> S/. 150.00
  * Entrada para mayores de 65 --> S/. 50.00
  * Entrada para menores de edad --> S/. 80.00
  * 
  * Luego mostrar la cantidad de dinero recaudado por cada tipo de tarifa y el monto recaudado en total.
  */

const ejercicio10 = (cantGeneral, cantMayores, cantMenores) => {
    const precioTGeneral = cantGeneral * 150;
    const precioTMayores = cantMayores * 50;
    const precioTMenores = cantMenores * 80;
    const totalPrecioEntradas = precioTGeneral + precioTMayores + precioTMenores;
    const objImprimir = {
        entrada_General: precioTGeneral,
        entrada_Mayores: precioTMayores,
        entrada_Menores: precioTMenores,
        total_Entradas: totalPrecioEntradas
    };
    return objImprimir;
};

console.log('Ejercicio Nº 10 -->', ejercicio10(100, 150, 80));