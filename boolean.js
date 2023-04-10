
/*function umOuOutro(a , b) {
    //retorna verdade se apenas um dos argumentos é verdade
    if(a === true && b=== false) {
       return true; 
    } else {
        return false;
    }
} 

*/  
            
function umOuOutro(a, b, c) {
   
    return(
        (a && !b && !c) ||
        (!a && b && !c) ||
        (!a && !b && c)
    )

}

console.log( 
umOuOutro(true, true, false), // false
umOuOutro(false, true, false), // true
umOuOutro(true, false, true), // true
umOuOutro(false, false, false), // false
umOuOutro(false,false, true) //false
)


