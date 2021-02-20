let btnLeft = document.querySelector('.btn_left')
let btnRight = document.querySelector('.btn_right')

let sliderLine = document.querySelector('.slider_line');

let count = 0;

btnLeft.setAttribute('disabled', 'disabled')

btnLeft.addEventListener('click', ()=>{
    count += 500;
    sliderLine.style.left = `${count}px`

    if(count === 0){
        btnLeft.setAttribute('disabled', 'disabled')
    }

    if(count < 2500){
        btnRight.removeAttribute('disabled')
    }
})

btnRight.addEventListener('click', ()=>{
    count -= 500;
    sliderLine.style.left = `${count}px`
    
    btnLeft.removeAttribute('disabled')


    if(count === -2000){
        btnRight.setAttribute('disabled', 'disabled')
    }
})