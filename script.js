//PROJECT CONTENT_____________________________________________________
function fillProject(section, project){
    //fill title
    const title = section.querySelector('#project-title');
    title.innerText = project.title;
    //fill details
    const details = section.querySelector('#project-details');
    details.innerText = project.details;
    //fill date
    const date = section.querySelector('#project-date');
    date.innerText = project.date;
    //fill href
    const hrefs = section.querySelectorAll('[href]');
    hrefs.forEach(href=>{
        href.setAttribute('href',project.href);
    });
    //fill src
    const srcs = section.querySelectorAll('[src]');
    srcs.forEach(src=>{
        src.setAttribute('src',project.src);
    });
    //fill alt
    const alts = section.querySelectorAll('[alt]');
    alts.forEach(alt=>{
        alt.setAttribute('alt',project.alt);
    });
    //fill coin
    for (let i=0; i<=4; i++){
        let coin = section.querySelector(`#project-carousel-coin-${i}`);
        coin.innerText = project.coin[i];
    }
    //add navigation events
    const next = section.querySelector('#project-carousel-next');
    next.addEventListener('click',()=>slideRight());
    const prev = section.querySelector('#project-carousel-prev');
    prev.addEventListener('click',()=>slideLeft());
}

const projectSection = document.querySelector('#project > div');
let position = 0;
fillProject(projectSection, projects[position]);

//PROJECT CARROUSEL___________________________________________________
function slideRight(){
    //increase position
    if (position == projects.length-1){
        position = 0;
    }else{
        position++;
    }
    //clone project section
    const oldSection = document.querySelector('#project > div');
    const newSection = oldSection.cloneNode(true);
    newSection.classList.remove('center');
    newSection.classList.add('left');
    fillProject(newSection, projects[position]);
    //slide old section
    oldSection.classList.add('right');
    setTimeout(()=>{
        //remove old section
        oldSection.remove()
        //insert new section
        document.getElementById('project').appendChild(newSection);
        //slide section new
        setTimeout(()=>{//add delay for navigator to compute styles
            newSection.classList.remove('left');
        }, 100);
    },500) ;
}

function slideLeft(){
    //decrease position
    if (position == 0){
        position = projects.length-1;
    }else{
        position--;
    }
    //clone project section
    const oldSection = document.querySelector('#project > div');
    const newSection = oldSection.cloneNode(true);
    newSection.classList.add('right');
    fillProject(newSection, projects[position]);
    //slide old section
    oldSection.classList.add('left');
    setTimeout(()=>{
        //remove old section
        oldSection.remove()
        //insert new section
        document.getElementById('project').appendChild(newSection);
        //slide section new
        setTimeout(()=>{//add delay for navigator to compute styles
            newSection.classList.remove('right');
        }, 100);
    },500) ;
}

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