'use strict' ;

const buttoniPiE = document.getElementById( 'iPiE' ) ;

buttoniPiE.onclick = function () {
    mainFunction ( evenNumber, simpleNumber, enterNumber ) ;
}

const mainFunction = function ( functionEvenNumber, functionSimpleNumber, enterNumber ) {

    const value = enterNumber () ;
    alert ( `${ functionEvenNumber ( value ) }\n${functionSimpleNumber ( value )}` ) ;

}

const enterNumber = function () {   
     
    let aNumber ;
    let textValue = 'Введите число:' ;
    
    do {
        aNumber = prompt ( textValue ) ;
        textValue = 'Введённое значение не возможно преобразовать в число. Повторите попытку:' ;
    } while ( isNaN ( parseInt ( aNumber ) ) ) ;

    return parseInt ( aNumber ) ;

}

const evenNumber = function ( value ) {

    if( value % 2 === 0 ) {
        return `Введённое число ${value} - чётное число.` ;
    }
    else {
        return `Введённое число ${value} - нечётное число.` ;
    }
    
}

const simpleNumber = function ( value ) {
    
    if( value < 2 ) {
        return `Введённое значение ${value} не является простым числом, т.к. меньше 2.`
    }
    else {
        for ( let key = 2; key < value; ++key ) {
            if( value % key === 0 ) {
                return `Число ${value} - не простое число, т.к. ${value} / ${key} = ${value / key}.` ;
            }
        }    
        return `Число ${value} - простое число.` ;
    }    
    
}