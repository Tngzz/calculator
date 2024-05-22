// Sélectionne tous les boutons avec la classe 'btn-num'
const buttons = document.querySelectorAll('.btn-num');
console.log("Boutons trouvés:", buttons);

const display = document.querySelector('#display')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("Boutons trouvés:", button);
        display.textContent += button.value;

        
        
    })
})

