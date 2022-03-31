computertotal = 0;
playertotal = 0;

   function name() {
       var c = prompt(`What is your name?`)
       return c
   }

var b = name()

function num() {
    var r = math.floor(math.random() * 10) +1;
    return r
}

function comp() {
    do{
    var b = num()
    computertotal = computertotal + a
    alert(`The computer's number is ${r} It has a total of ${computertotal}`)
} while (computertotal <16);

return computertotal
}

function user() {
    
    do{
        var r = num()
        alert(`it is your turn`)

        playertotal = playertotal + r;

        alert(`your new number is ${playertotal} YOu now have a total of ${playertotal}`)
    
        var g = prompt(`would you like a number? yes or no?`)

        if (playertotal > 20) {

        
        break;
        }
    
    } while ( (playertotal < 20) && (g == "yes") );
    return playertotal

}

function scores(computertotal, playertotal) {
    if ( (computertotal > playertotal) && (computertotal <= 20) && (playertotal <=20) ) {
        alert(`you have won, the computer went over a total of 20.`)
    }
    else if ( (computertotal > playertotal) && (computertotal <= 20) && playertotal)
}

