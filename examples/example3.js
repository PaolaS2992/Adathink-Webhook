// *** Estructuras de Control Secuencial ***

/**
 * Ejercicio 01:
 * Un maestro desea saber qué porcentaje de hombres y que porcentaje de mujeres hay en un grupo de
 * estudiantes. Elaborar un pseudocódigo que permita ingresar la cantidad de varones y mujeres y muestre
 * el porcentaje de estos para su grupo de estudiantes.
 */


const ejercicio1 = (varones, mujeres) => {
    const porcetajeVaron = varones / (varones + mujeres) * 100;
    const porcetajeMujer = mujeres / (varones + mujeres) * 100;
    let obj = {
        varones: porcetajeVaron,
        mujeres: porcetajeMujer
            }
    return obj;
};

console.log(ejercicio1(5, 15));

/**
 * Ejercicio 02:
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