const bod = document.querySelector('body')
const seti = document.querySelector('.settings')
const lightTheme = document.getElementById('light-theme')
const darkTheme = document.getElementById('dark-theme')
const contine = document.getElementById('contine')
const tConteiner = document.querySelector('.theme-conteiner')

bod.classList.add('dark-theme')

seti.onclick = function(){
    tConteiner.style = 'display: block;'
}

contine.onclick = function(){
    tConteiner.style = 'display: none;'
}
 
// darkTheme.onclick = function(){
//     bod.classList.add('dark-theme')
//     bod.classList.remove('light-theme')
// }

// lightTheme.onclick = function(){
//     bod.classList.add('light-theme')
//     bod.classList.remove('dark-theme')
// }

