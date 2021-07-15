'use strict'

const btnNavOpen = document.querySelector('.hamburger');
const btnNavClose = document.querySelector('.nav-close');
const navBar = document.querySelector('.nav-bar');
const headerIMG = document.querySelector('.header-img');
const btnLeft = document.querySelector('.btn-slider-back');
const btnright = document.querySelector('.btn-slider-next');
const headerImagesMobile = [];
const headerImagesDesktop = [];
let i = 0;

//Header Images Array
headerImagesMobile[0] = './images/mobile-image-hero-1.jpg';
headerImagesMobile[1] = './images/mobile-image-hero-2.jpg';
headerImagesMobile[2] = './images/mobile-image-hero-3.jpg';
// headerImagesDesktop[0] = '../images/desktop-image-hero-1.jpg';
// headerImagesDesktop[1] = '../images/desktop-image-hero-2.jpg';
// headerImagesDesktop[2] = '../images/desktop-image-hero-3.jpg';

//Global Variables
const navToggle = (e) => {
    navBar.classList.toggle('hidden');
} 

const headerBackMobile = () => {
    i--;
    if (i < 0) {
        i = 2
        headerIMG.src = headerImagesMobile[i];
    } else {
        headerIMG.src = headerImagesMobile[i]
    }
}

const headerNextMobile = () => {
    i++
    if (i < 3) {
        headerIMG.src = headerImagesMobile[i];
    } else if (i > 2) {
        i = 0;
        headerIMG.src = headerImagesMobile[i];
    }
}



// //Media Query Variables

// const mediaLaptop = window.matchMedia('(min-width: 64em)');
// const mediaMobile = window.matchMedia('(max-width: 63.5em)');

// //Mobile Media Query
// const mobile = () => {
//     //Set Image slider to Mobile Version
//     headerIMG.src = headerImagesMobile[i];
//     console.log('mobile');
    
//     //Add
//     btnLeft.addEventListener('click', headerBackMobile);
//     btnright.addEventListener('click', headerNextMobile);
// }

// //Laptop Media Query

// const laptop = () => {
//     //Set Image slider to Desktop Version
//     headerIMG.src = headerImagesDesktop[i];
//     console.log('laptop');
    
    
//     const navToggle = (e) => {
//         navBar.classList.toggle('hidden');
//     }

//     //Event Listeners
//     btnLeft.addEventListener('click', headerBackDesktop);
//     btnright.addEventListener('click', headerNextDesktop);
// }




btnLeft.addEventListener('click', headerBackMobile);
btnright.addEventListener('click', headerNextMobile);
// mediaMobile.addEventListener('change', mobile);
// mediaLaptop.addEventListener('change', laptop);
btnNavOpen.addEventListener('click', navToggle);
btnNavClose.addEventListener('click', navToggle);
