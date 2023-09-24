/*=============== SHOW MENU ===============*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*========== MENU SHOW ==========*/        
/* Validar IF */

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU OCULTO =====*/
/* Validar IF */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const   navLink = document.querySelectorAll('.nav__link')

const   linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    // Cuando hacemos click en nav__link, removemos la clase show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header class to the header
    //Si el desplazamiento del scroll es mayor a 50, se agrega la clase scroll-header al encabezado
    this.scrollY >= 50  ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header');       
}
window.addEventListener('scroll', shadowHeader)
/*=============== EMAIL JS ===============*/
const   contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const   sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_eatryz9','template_41ocl0w','#contact-form','yoYfBnwj63M8u5LCI')
    .then(( )=>{
        // show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(()=> {
            contactMessage.textContent=''
        }, 5000)

        // Clear input fields
        contactForm.reset()

    },()=>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const   scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top id
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                                : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const   sections = document.querySelectorAll('section[id]')

const   scrollActive = () =>{
        const scrollDown = window.scrollY

        sections.forEach(current => {
                const sectionHeight = current.offsetHeight,
                        sectionTop = current.offsetTop - 58,
                        sectionId = current.getAttribute('id'),
                        sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else{
            sectionsClass.classList.remove('active-link')
        }
        })
}

window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
