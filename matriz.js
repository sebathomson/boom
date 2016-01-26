/**
 * @author Sebastián Thomson <seba.thomson@gmail.com>
 */

function boom()
{
    alert('BOOM!!');
    document.write('<h1>BOOM!! Elegiste un área Minada</h1>');
}

function obtenerBooleanRandom() {
    return Math.floor(Math.random() * 9) % 2;
}

var campo = [ 
                [ obtenerBooleanRandom() , obtenerBooleanRandom() , obtenerBooleanRandom() ], 
                [ obtenerBooleanRandom() , obtenerBooleanRandom() , obtenerBooleanRandom() ], 
                [ obtenerBooleanRandom() , obtenerBooleanRandom() , obtenerBooleanRandom() ]
            ];

function evaluarPuntos(x, y) {
    if ( campo[ x ][ y ] == 1 ) {
        boom();
    };
}
