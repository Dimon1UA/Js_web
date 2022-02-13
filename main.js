alert('Оставьте свой отзыв о героях фильмов про мстителей, кликнув по картинке этого героя')

let table = document.getElementById('table')
for(a = 1; a <= 24; a++){
    let div = document.createElement('div')
    table.appendChild(div)
    div.classList.add(`div_${a}`)
}
let div = document.querySelectorAll('div') 
for (let c = 0; c < div.length; c++) { 
    div[c].addEventListener('click', function fun(){ 
        console.log(c) 
        let input = document.createElement('input') 
        input.value = this.innerHTML 
        this.innerHTML = ''
        this.appendChild(input) 
        let new_el = this 
        input.addEventListener('blur', function(){ 
            new_el.innerHTML = this.value 
            new_el.addEventListener('click', fun) 
        }) 
        this.removeEventListener('click', fun)  
    })  
}