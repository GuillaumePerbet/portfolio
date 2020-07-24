//SMOOTH SCROLL ANCHOR LINK__________________________________________
const anchorlinks = document.querySelectorAll('a[href^="#"]');
for (let item of anchorlinks) {
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href');
        let target = document.querySelector(hashval);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        history.pushState(null, null, hashval);
        e.preventDefault();
    });
}

//TOGGLE MENU_________________________________________________________
const menu = document.getElementById('menu');

function toggleMenu(){//toggle function
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');
    const logo = document.getElementById('top-bar-logo');
    logo.classList.toggle('open');
}

const menuBtn = document.getElementById('top-bar-menu-btn');
menuBtn.addEventListener('click',()=>{//event on menu button click
    toggleMenu();
});

const links = menu.getElementsByTagName('a');
for (let link of links){//event on menu item click
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        toggleMenu();
    });
}

//SUBMIT CONTACT FORM___________________________________________________
const contactForm = document.querySelector("#contact form");
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch('ajax/contact-form.php',{method: 'POST', body: formData}).then();
});

//PREVENT SCROLL TO FOCUS INPUT__________________________________________
const nameInput = document.getElementsByName('name')[0];
nameInput.focus({preventScroll: true});