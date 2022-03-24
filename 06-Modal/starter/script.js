'use strict';
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.close-modal');
let show = document.querySelectorAll('.show-modal');
console.log(show);

for(let i=0;i<show.length;i++){
        show[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        console.log('clicked button no.', show[i]);
        overlay.classList.remove('hidden');
    });

        close.addEventListener('click', overLay)
        overlay.addEventListener('click',overLay);
}
document.addEventListener('keydown',function (e) {
    if(e.key==='Escape'){
        overLay();
    }
})
function overLay() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}