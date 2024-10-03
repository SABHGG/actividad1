const contenido = document.querySelector('#contenido');
const t1 = document.querySelector('#t1')
const t2 = document.querySelector('#t2')
t1.placeholder = 'X'
t2.placeholder = 'Y'

const op1 = document.querySelector('#opcion1')
const op2 = document.querySelector('#opcion2')
const op3 = document.querySelector('#opcion3')
const op4 = document.querySelector('#opcion4')
const op5 = document.querySelector('#opcion5')

const btn = document.querySelector('#enviar')

var url = 'https://actividad-1-backend.onrender.com'
op1.addEventListener('click', opcion1)
op2.addEventListener('click', opcion2)
op3.addEventListener('click', opcion3)
op4.addEventListener('click', opcion4)
op5.addEventListener('click', opcion5)

btn.addEventListener('click', enviar)

function opcion1(){
    url = 'https://actividad-1-backend.onrender.com'
    t1.disabled = false
    t2.disabled = false


    t1.value = ''
    t2.value = ''

    t1.placeholder = 'X'
    t2.placeholder = 'Y'
}

function opcion2(){
    url = 'https://actividad-1-backend.onrender.com'
    t1.disabled = false
    t2.disabled = true
  

    t1.value = ''
    t2.value = ''

    
    t1.placeholder = 'Numero que desea multiplicar'
    t2.placeholder = ''
}

function opcion3(){
    url = 'https://actividad-1-backend.onrender.com'

    t1.disabled = false
    t2.disabled = true

    t1.value = ''
    t2.value = ''

    t1.placeholder = 'Ingrese el radio del circulo'
    t2.placeholder = ''
}

function opcion4(){
    url = 'https://actividad-1-backend.onrender.com'
    t1.disabled = false
    t2.disabled = true

    t1.value = ''
    t2.value = ''

    t1.placeholder = 'Ingrese el lado del cuadrado'
    t2.placeholder = ''
}   

function opcion5(){
    url = 'https://actividad-1-backend.onrender.com'

    t1.disabled = false
    t2.disabled = false

    t1.value = ''
    t2.value = ''

    t1.placeholder = 'Ingrese la base del triangulo'
    t2.placeholder = 'Ingrese la altura del triangulo'
}

function enviar(){
    url = 'https://actividad-1-backend.onrender.com'
    if(op1.checked){
        url = url + `/ecuacion/${parseFloat(t1.value).toFixed(1)}/${parseFloat(t2.value).toFixed(1)}`
    }
    else if(op2.checked){
        url = url + `/multiplicar/${t1.value}`
    }
    else if(op3.checked){
        url = url + `/calcular/circulo/${parseFloat(t1.value).toFixed(1)}`
    }
    else if(op4.checked){
        url = url + `/calcular/cuadrado/${parseFloat(t1.value).toFixed(1)}`
    }
    else if(op5.checked){
        url = url + `/calcular/triangulo/${parseFloat(t1.value).toFixed(1)}/${parseFloat(t2.value).toFixed(1)}`
    }
    fetch(url)
    .then(res => res.text())
    .then(data => {
        contenido.innerHTML = data
    }).catch(err => contenido.innerHTML = 'Error de conexión')
}