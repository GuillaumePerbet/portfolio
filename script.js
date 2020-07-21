//DISPLAY FUNCTIONS
function showMenu(){
    const menu = document.getElementById('menu');
    menu.classList.remove('d-none');
}

function hideMenu(){
    const menu = document.getElementById('menu');
    menu.classList.add('d-none');
}

function showTopBar(){
    const topBar = document.getElementById('top-bar');
    topBar.classList.remove('d-none');
}

function hideTopBar(){
    const topBar = document.getElementById('top-bar');
    topBar.classList.add('d-none');
}

//SMOOTH SCROLL ANCHOR LINK__________________________________________
const anchorlinks = document.querySelectorAll('a[href^="#"]');
for (let item of anchorlinks) {
    item.addEventListener('click', (e)=> {
        //for menu links
        hideMenu();
        showTopBar();
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

//OPEN MENU_________________________________________________________
const menuBtn = document.getElementById('top-bar-menu-btn');
menuBtn.addEventListener('click',()=>{
    hideTopBar();
    showMenu();
});

//CLOSE MENU_____________________________________________________________
const closeBtn = document.getElementById('menu-close');
closeBtn.addEventListener('click',()=>{
    hideMenu();
    showTopBar();
});

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