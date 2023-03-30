//Forma que o YouTuber ensina a fazer: 
/*
 var typed = new Typed(".multiple-text", {
    strings: ["Estudando para ser", "Desenvolvedor Front-End", "Música", "é minha paixão verdadeira", "Tecnologia", "Minha segunda paixão"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
*/

// Primeiro formato usando JS puro
const typing = document.querySelector('[data-js="typing"]')

const messages = ['Estudando para ser', 'Desenvolvedor Front-End', 'Músico']

let messageIndex = 0
let characterIndex = 0
let currentMessage = ''
let currentCharacters = ''

const type = () => {
    if (messageIndex === messages.length) {
        messageIndex = 0
    }

    currentMessage = messages[messageIndex]
    currentCharacters = currentMessage.slice(0, characterIndex++)
    typing.textContent = currentCharacters

    if (currentCharacters.length === currentMessage.length){
        messageIndex++
        characterIndex = 0
    }
}

setInterval(type, 150)