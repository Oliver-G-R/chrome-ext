/* Podemos insertar la lógica de nuestra ventana flotante */
console.log('I am popup')

const btnClickMe = document.querySelector('#click-me')

btnClickMe.addEventListener('click', () => {
    alert('Hi, I´m an Alert your from extension')
})
