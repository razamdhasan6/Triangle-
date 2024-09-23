let base=document.querySelector("#base")
let height=document.querySelector("#height")
let btn = document.querySelector(".btn")
let result = document.querySelector("#result")

btn.addEventListener('click', (event) => {
    event.preventDefault();

    let b = parseFloat(base.value);
    let h = parseFloat(height.value);
    let area = (b * h) / 2;
    result.textContent =`The area of the Triangle = ${area}`
    
});



