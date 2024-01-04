let p1 = 'X'
let p2 = 'O'
let b1 = document.querySelector('.button1')
let b2 = document.querySelector('.button2')
let b3 = document.querySelector('.button3')
let b4 = document.querySelector('.button4')
let b5 = document.querySelector('.button5')
let b6 = document.querySelector('.button6')
let b7 = document.querySelector('.button7')
let b8 = document.querySelector('.button8')
let b9 = document.querySelector('.button9')
var btn = document.querySelector("#button9");

let aux = ''

addEventListener('click', (ev) => {
    ev.preventDefault()




function Usuario(){
       let conf = confirm('Deseja confirmar?')
         if(conf !== false){
            ev.target.value = p1
            aux = p2
            p2 = p1
            p1 = aux
            
        }
            


}

function verifica (){
        if(ev.target.value === ''){
            Usuario()
        }
   
 } 



verifica()

function ganhou(){
    if((b1.value == b2.value) && (b2.value == b3.value) && (b1.value != '')){
        b1.style.backgroundColor = 'green'
        b2.style.backgroundColor = 'green'
        b3.style.backgroundColor = 'green'
    }else if((b4.value == b5.value) && (b5.value == b6.value) && (b4.value != '')){
        b4.style.backgroundColor = 'green'
        b5.style.backgroundColor = 'green'
        b6.style.backgroundColor = 'green'

    }else if((b7.value == b8.value) && (b8.value == b9.value) && (b7.value != '')){
        b7.style.backgroundColor = 'green'
        b8.style.backgroundColor = 'green'
        b9.style.backgroundColor = 'green'

    }else if((b1.value == b4.value) && (b4.value == b7.value) && (b1.value != '')){
        b1.style.backgroundColor = 'green'
        b4.style.backgroundColor = 'green'
        b7.style.backgroundColor = 'green'

    }else if((b2.value == b5.value) && (b5.value == b8.value) && (b2.value != '')){
        b2.style.backgroundColor = 'green'
        b5.style.backgroundColor = 'green'
        b8.style.backgroundColor = 'green'

    }else if((b3.value == b6.value) && (b6.value == b9.value) && (b3.value != '')){
        b3.style.backgroundColor = 'green'
        b6.style.backgroundColor = 'green'
        b9.style.backgroundColor = 'green'
    }else if((b3.value == b5.value) && (b5.value == b7.value) && (b3.value != '')){
        b3.style.backgroundColor = 'green'
        b5.style.backgroundColor = 'green'
        b7.style.backgroundColor = 'green'
    }else if((b1.value == b5.value) && (b5.value == b9.value) && (b1.value != '')){
        b1.style.backgroundColor = 'green'
        b5.style.backgroundColor = 'green'
        b9.style.backgroundColor = 'green'
    }

   
}

ganhou()

btn.addEventListener("click", function() {
    
    location.reload();
});




})

