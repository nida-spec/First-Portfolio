const progressh= document.querySelector('.progress-html')
const progressc= document.querySelector('.progress-css')
const progressJ= document.querySelector('.progress-js')
const progressR= document.querySelector('.progress-react')
const progressN= document.querySelector('.progress-node')
setTimeout(() => {
progressh.style.width= progressh.getAttribute('data-done') + '%'
progressh.style.opacity= 1 

progressc.style.width= progressc.getAttribute('data-done') + '%'
progressc.style.opacity= 1 

progressJ.style.width= progressJ.getAttribute('data-done') + '%'
progressJ.style.opacity= 1 

progressR.style.width= progressR.getAttribute('data-done') + '%'
progressR.style.opacity= 1 

progressN.style.width= progressN.getAttribute('data-done') + '%'
progressN.style.opacity= 1 
}, 500);



//Modal
const modalViews= document.querySelectorAll('.projects-modal'),
modalBtns= document.querySelectorAll('.projects-button'),
modalClose= document.querySelectorAll('.modal-close')

let modal= function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalClose.forEach((modalClose)=>{
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})