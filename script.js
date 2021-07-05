'use strict' ;

const buttonStart = document.getElementById( 'buttonStart' ) ;

buttonStart.onclick = function () {

    let aNumber ;
    let textValue = 'Введите число:' ;
    
    do {
        aNumber = prompt ( textValue ) ;
        textValue = 'Введённое значение не возможно преобразовать в число. Повторите попытку:' ;
    } while ( isNaN ( parseInt ( aNumber ) ) ) ;
    aNumber = parseInt ( aNumber ) ;

    if ( evenNumber ( aNumber ) ) {
        console.log ( `Число ${aNumber} - чётное число.` ) ;
    }
    else {
        console.log ( `Число ${aNumber} - нечётное число.` ) ;
    }

    if ( simpleNumber ( aNumber ) ) {
        console.log ( `Число ${aNumber} - простое число.` ) ;
    }
    else {
        console.log ( `Число ${aNumber} - не простое число.` ) ;
    }
    
}

const evenNumber = function ( value ) {

    if( value % 2 === 0 ) {
        return true ;
    }
    else {
        return false ;
    }
    
}

const simpleNumber = function ( value ) {
    
    if( value < 2 ) {
        return false ;
    }
    else {
        for ( let key = 2; key < value; ++key ) {
            if( value % key === 0 ) {
                return false ;
            }
        }    
        return true ;
    }    
    
}