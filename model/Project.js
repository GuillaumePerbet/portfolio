class Project{

    constructor(title, details, date, href, src, alt, coin){
        this.title = title;
        this.details = details;
        this.date = date;
        this.href = href;
        this.src = src;
        this.alt = alt;
        this.coin = coin;
    }
}

const projects = [];

projects.push(new Project(
    'Hiking',
    'Tableau de bord de gestion d’excursions',
    'Juillet 2020 - Formation ACS',
    'project-hiking.html',
    'media/project-hiking.png',
    'ordinateur avec une vue du projet hiking à l\'écran',
    ['Back End', 'Front End', 'C R U D', 'A J A X', 'Responsive']
));

projects.push(new Project(
    'Guillaume Perbet',
    'Portfolio de développeur web',
    'Juillet 2020 - Formation ACS',
    'project-portfolio.html',
    'media/project-portfolio.png',
    'ordinateur, tablette et mobile avec une vue du portfolio à l\'écran',
    ['Wireframe', 'Intégration', 'Animations', 'Mailing', 'Responsive']
));