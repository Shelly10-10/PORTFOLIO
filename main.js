const slides=document.querySelectorAll('.slide');
const next=document.querySelector('#next');
const prev=document.querySelector('#prev');
const auto=false;
const intervaltime=5000;
let slideInterval;

const nextslide=()=>{
    //get current class
    const current=document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for new slide
    if(current.nextElementSibling){
        //ADD current to next sibling
        current.nextElementSibling.classList.add('current');
    }else{
        //when u r in the last slide move current to the next slide
        slides[0].classList.add('current');
    }
    setTimeout(()=> current.classList.remove('current'));
}
const prevslide=()=>{
    //get current class
    const current=document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for new slide
    if(current.previousElementSibling){
        //ADD current to next sibling
        current.previousElementSibling.classList.add('current');
    }else{
        //when u r in the first slide move current to the previous slide
        slides[slides.length-1].classList.add('current');
    }
    setTimeout(()=> current.classList.remove('current'));
}
//button events
next.addEventListener('click',e=>{
    nextslide();
})
prev.addEventListener('click',e=>{
    prevslide();
})