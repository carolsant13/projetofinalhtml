let sliderElement = document.querySelector ('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword =document.querySelector('#valor');
let password =document.querySelector('#password');

let containerPassword =document.querySelector('#container-password');

let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%'
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value;

slider.oninput=function(){
    sizePassword.innerHTML =this.value;
}

function GENERATEPASSWORD (){
    
    let pass='';
    const n = charset.length;
    for(let i=0 ; i< sliderElement.value; ++i){
        pass +=  charset.charAt(Math.floor(Math.random()* n));
    }

    containerPassword.classList.remove('hide');
    password.innerHTML= pass;
    novaSenha =pass;

}

function copyPassword(){
   alert('senha copiada!') 
   navigator.clipboard.writeText(novaSenha);
}