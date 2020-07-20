//SMOOTH ANCHOR LINK SCROLL__________________________________________
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

//MENU DISPLAY_________________________________________________________
const menuBtn = document.getElementById('top-bar-menu-btn');
menuBtn.addEventListener('click',()=>{
    //hide top bar
    const topBar = document.getElementById('top-bar');
    topBar.classList.add('d-none');
    //show menu
    const menu = document.getElementById('menu');
    menu.classList.remove('d-none');
});

const closeBtn = document.getElementById('menu-close');
closeBtn.addEventListener('click',()=>{
    //hide menu
    const menu = document.getElementById('menu');
    menu.classList.add('d-none');
    //show top bar
    const topBar = document.getElementById('top-bar');
    topBar.classList.remove('d-none');
});