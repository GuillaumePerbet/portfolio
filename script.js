//TOGGLE MENU_________________________________________________________
const menu = document.getElementById('menu');

function toggleMenu(){//toggle function
    //toggle menu
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');

    //toggle logo on index page
    const logo = document.getElementById('top-bar-logo');
    if (logo!==null){
        logo.classList.toggle('open');
    }

    //toggle return button on project page
    const returnBtn = document.getElementById('top-bar-return');
    if (returnBtn!==null){
        returnBtn.classList.toggle('open');
    }
}

const menuBtn = document.getElementById('top-bar-menu-btn');
menuBtn.addEventListener('click',()=>{//event on menu button click
    toggleMenu();
});

const links = menu.getElementsByTagName('a');
for (let link of links){//event on menu item click
    link.addEventListener('click',(e)=>{
        toggleMenu();
    });
}

//CONTACT FORM___________________________________________________
const contactForm = document.querySelector("#contact form");
if (contactForm!==null){
    //name input focus
    const nameInput = document.getElementsByName('name')[0];
    nameInput.focus({preventScroll: true});

    contactForm.addEventListener('submit',(e)=>{//form submission
        e.preventDefault();
        const formData = new FormData(contactForm);
        fetch('ajax/contact-form.php',{method: 'POST', body: formData}).then();
    });
}

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