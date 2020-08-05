//TOGGLE MENU_________________________________________________________
function toggleMenu(){//toggle function
    const menu = document.getElementById('menu');
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
        fetch('ajax/contact-form.php',{method: 'POST', body: formData}).then(res=>res.json()).then(data=>{
            const contactResponse = document.getElementById('contact-response');
            const emailError = document.getElementById('contact-emailError');
            const messageError = document.getElementById('contact-messageError');
            //reset error messages
            emailError.classList.add('d-none');
            messageError.classList.add('d-none');
            contactResponse.classList.remove('failure');
            if(data.send == true){//email send with success
                contactForm.reset();
                contactResponse.classList.add('success');
                contactResponse.innerText = "Merci pour votre message!";
            }else{//email failure
                contactResponse.classList.remove('success');
                contactResponse.classList.add('failure');
                contactResponse.innerText = "Echec de l'envoi";
                if(data.emailError){//check if email was fill
                    emailError.classList.remove('d-none');
                }
                if(data.messageError){//check if message was fill
                    messageError.classList.remove('d-none');
                }
            }
        });
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