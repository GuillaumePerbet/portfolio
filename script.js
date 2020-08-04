//PROJECT CONTENT_____________________________________________________
function fillProject(project){
    //get first project section
    const projectSection = document.querySelector('#project > div:first-of-type');
    //fill title
    const title = projectSection.querySelector('#project-title');
    title.innerText = project.title;
    //fill details
    const details = projectSection.querySelector('#project-details');
    details.innerText = project.details;
    //fill date
    const date = projectSection.querySelector('#project-date');
    date.innerText = project.date;
    //fill href
    const hrefs = projectSection.querySelectorAll('[href]');
    hrefs.forEach(href=>{
        href.setAttribute('href',project.href);
    });
    //fill src
    const srcs = projectSection.querySelectorAll('[src]');
    srcs.forEach(src=>{
        src.setAttribute('src',project.src);
    });
    //fill alt
    const alts = projectSection.querySelectorAll('[alt]');
    alts.forEach(alt=>{
        alt.setAttribute('alt',project.alt);
    });
    //fill coin
    for (let i=0; i<=4; i++){
        let coin = projectSection.querySelector(`#project-carousel-coin-${i}`);
        coin.innerText = project.coin[i];
    }
}

fillProject(projects[0]);


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