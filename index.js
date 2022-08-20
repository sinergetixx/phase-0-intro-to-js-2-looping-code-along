// Code your solutions in this file
function writeCards(namesArray, eventName){
    let message = []
    for (let i = 0; i < namesArray.length; i++) {
        message.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`)
    }

    return message
}


function countDown(n){
    while (n >= 0 ) {
        console.log(n--);
    }
}