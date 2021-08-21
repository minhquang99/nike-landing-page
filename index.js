/* ---------- show slide ------------ */

let slideIndex = 0  

let slider = document.getElementById('slider')

let slides = slider.getElementsByClassName('slide')



/* ---------- show active item ------------ */

let slideControl = document.getElementById('slide-control')

let slideControlItem = slideControl.getElementsByClassName('slide-control-item')
setTimeout(() => {
    slider.style.marginTop = '-' + slideIndex + '00vh'
    slideControlItem[slideIndex].classList.add('active')
    slides[slideIndex].classList.add('active')
}, 500);


/* ---------- choose slide ------------ */

chooseItem = (index) => {
    if(index === slideIndex) return 

    slideIndex = index

    let currentSlideControl = slideControl.querySelector('.slide-control-item.active')

    currentSlideControl.classList.remove('active')

    let currentSlide = slider.querySelector('.slide.active')

    currentSlide.classList.remove('active')

    

    setTimeout(() => {
        slider.style.marginTop = '-' + slideIndex + '00vh'
        slideControlItem[slideIndex].classList.add('active')
        slides[slideIndex].classList.add('active')
    }, 1200);
    
}

Array.from(slideControlItem).forEach((el, index) => {
    el.onclick = () => {
        chooseItem(index);
        console.log(index);
    }
})

/* ---------- modal ------------ */
let modal = document.getElementById('modal')

let closeBtn = document.getElementById('modal-close')

closeBtn.onclick = () => {
    modal.style.display = 'none'
}

let moreImage = document.getElementsByClassName('more-image-item')

let previewImage = document.getElementsByClassName('preview-image')

Array.from(moreImage).forEach((el) => {
    el.onclick = () => {
        let imgItems = el.parentNode.getElementsByTagName('img')

        Array.from(imgItems).forEach((item, index) => {
            previewImage[index].src = item.src
        })

        let img = el.querySelector('img')
        modal.style.display = 'block'

        let modalContent = modal.querySelector('.modal-content')
        modalContent.src = img.src

        let temp = modalContent.cloneNode(true)
        modalContent.parentNode.replaceChild(temp, modalContent)
    }
})