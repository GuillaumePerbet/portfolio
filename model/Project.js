class Project{

    constructor(title, details, date, href, src, alt, width, height, coin){
        this.title = title;
        this.details = details;
        this.date = date;
        this.href = href;
        this.src = src;
        this.alt = alt;
        this.width = width;
        this.height = height;
        this.coin = coin;
    }
}

const projects = [];

projects.push(new Project(
    'Sites Shine',
    'Sites corporate pour la société Shine Group',
    'Novembre 2020',
    'project-shine.html',
    'media/project-shine.png',
    'les quatre logos des filiales de Shine Group',
    '2190',
    '1458',
    ['Maquettage', 'Intégration', 'Vue.js', 'Vuetify', 'Déclinaison']
));

projects.push(new Project(
    'MyTeam',
    'Site vitrine pour l\'application myteam',
    'Février 2021',
    'project-myteam.html',
    'media/project-myteam.png',
    'logo de MyTeam',
    '730',
    '486',
    ['Maquettage', 'Intégration', 'Vue.js', 'Vuetify', 'Équipe']
));

projects.push(new Project(
    'PF4H',
    'Application web de création et diffusion de contenu dans le cadre du projet 4hfactory',
    '2021',
    'project-pf4h.html',
    'media/project-pf4h.png',
    'logo de ACE',
    '1088',
    '536',
    ['Laravel', 'Nuxt.js', 'Vuetify', 'API REST', 'Login']
));

projects.push(new Project(
    'Guillaume Perbet',
    'Portfolio de développeur web',
    'Juillet 2020',
    'project-portfolio.html',
    'media/project-portfolio.jpg',
    'ordinateur, tablette et mobile avec une vue du portfolio à l\'écran',
    '1087',
    '725',
    ['Wireframe', 'Intégration', 'Animations', 'Mailing', 'Responsive']
));

projects.push(new Project(
    'Droopist',
    'Site de petites annonces (en formation)',
    'Septembre 2020',
    'project-droopist.html',
    'media/project-droopist.jpg',
    'page de petites annonces d\'un journal',
    '6800',
    '4800',
    ['Back End', 'P O O', 'C R U D', 'Routing', 'Mailing']
));

projects.push(new Project(
    'Hiking',
    'Tableau de bord de gestion d’excursions (en formation)',
    'Juillet 2020',
    'project-hiking.html',
    'media/project-hiking.jpg',
    'ordinateur avec une vue du projet hiking à l\'écran',
    '5000',
    '3334',
    ['Back End', 'Front End', 'C R U D', 'A J A X', 'Responsive']
));

projects.push(new Project(
    'Products manager',
    'Dashboard de suivi de produits (en formation)',
    'Août 2020',
    'project-products.html',
    'media/project-products.jpg',
    'bureau avec un ordinateur montrant le tableau de bord de suivi de produits',
    '5000',
    '3300',
    ['Front End', 'C R U D', 'T w i g', 'File upload', 'Validation']
));

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
    //fill width
    const widths = section.querySelectorAll('[width]');
    widths.forEach(width=>{
        width.setAttribute('width',project.width);
    });
    //fill height
    const heights = section.querySelectorAll('[height]');
    heights.forEach(height=>{
        height.setAttribute('height',project.height);
    });
    //fill coin
    for (let i=0; i<=4; i++){
        let coin = section.querySelector(`#project-carousel-coin-${i}`);
        coin.innerText = project.coin[i];
    }
    //add navigation events
    const next = section.querySelector('#project-carousel-next');
    next.addEventListener('click',()=>slideLeft());
    const prev = section.querySelector('#project-carousel-prev');
    prev.addEventListener('click',()=>slideRight());
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
