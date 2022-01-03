const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let images = $$('.image img');
let galleryImg = $('.gallery-inner img');
let prev = $('.prev');
let next = $('.next');
let close = $('.close');
let gallery = $('.gallery')
var currentIndex = 0;
let showGallery = () => {
  
    if(currentIndex === 0)
    {
        prev.classList.add('hide')
    }
    else
    {
        prev.classList.remove('hide')
    }
    
    if(currentIndex === images.length -1 )
    {
        next.classList.add('hide')
    }
    else
    {
        next.classList.remove('hide')
    }
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show')
}
images.forEach( (image, index) => {
    image.onclick = () => {
        currentIndex = index;
        showGallery();        
    }
})
close.onclick = () => {
    gallery.classList.remove('show');
}
document.onkeydown = (e) => {
    if(e.keyCode === 27) {
        gallery.classList.remove('show')
    }
}
prev.onclick = () => {
    if(currentIndex > 0)
    {
        currentIndex--
        showGallery();
    }
 
}
next.onclick = () => {
    if(currentIndex < images.length -1)
    {
        currentIndex++;
        showGallery();
    }
}