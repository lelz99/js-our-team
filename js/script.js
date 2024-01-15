const grid = document.querySelector('.employees-grid');

const employees = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg',
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg',
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        image : 'angela-lopez-social-media-manager.jpg',
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        image : 'scott-estrada-developer.jpg',
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : 'barbara-ramos-graphic-designer.jpg',
    }
]


let list = '';

for (let key in employees){

    const nameEmployees = employees[key].name;
    const roleEmployees = employees[key].role;
    const imageEmployees = employees[key].image;

    console.log(nameEmployees + ' ------', roleEmployees + ' ------', imageEmployees)


    list += `
    <div class ="col mb-4">
        <div class ="card text-center">
            <img src="img/${imageEmployees}">
            <div class="card-body">
                <h2>${nameEmployees}</h2>
                <h3>${roleEmployees}</h3>
            </div>
        </div>
    </div>
    `;
}

grid.innerHTML = list;