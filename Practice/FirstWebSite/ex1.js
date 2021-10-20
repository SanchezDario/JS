//Author: Dario Sanchez

let nombre = prompt('Insert your name: ')
let age = parseInt(prompt('Insert your age: '))

document.write('Hola ' +nombre+', tienes '+age+ ' años')

const leters = ['A','B','C','D','E','F','G','H','I','J']

const dni = prompt('Insert your DNI: ')

if(dni.length==8 && parseInt(dni)>0){
    let leter = dni%10
    document.write(leter)
    document.write('Your complete DNI is: ' + dni + leters[leter]);
}

const word = prompt('Insert a text').toLowerCase()

let consonant = 0; let vocals = 0; let espaces = 0

for(const leter of word){
    if(leter == 'a' || leter == 'e' || leter == 'i' || leter == 'o' || leter == 'u') vocals++;
    else if(leter == ' ') espaces++;
    else consonant++ }

document.write('The text have: ' +vocals+ ' vocals, ' +consonant+ ' consonants and ' +espaces+ ' espaces')