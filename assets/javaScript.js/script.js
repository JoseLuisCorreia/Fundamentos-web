let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('assuntoo')

nome.style.width = '30%'
email.style.width = '30%'
assuntoo.style.width = '40%'

function validaNome(){
if(nome.value.length <3){
    alert('Por favor digite um nome válido.')
}
}