// render card and array slots

renderHTML = (data) => {
    pageArray = []; 
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 
        if (role === 'Manager') {
            const managerCard = renderManager(employee);
            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = renderEngineer(employee);
            pageArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = renderIntern(employee);
            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('')
    const renderTeam = renderTeamPage(employeeCards); 
    return renderTeam;

};


// HTML structure

const renderTeamPage = function (employeeCards) {   
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-name mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                <!--cards-->
                ${employeeCards}
            </div>
        </div>
    </main>
    
</body>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

</html>
`;
}


// role renders

const renderEngineer = function (engineer) {
    return `
                <div class="col-4 mt-4">
                    <div class="card h-80">
                        <div class="card-header">
                            <h3>${engineer.name}</h3>
                            <h4><i class="material-icons">terminal</i> Engineer</h4>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${engineer.id}</p>
                            <p class="email">Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></p>
                            <p class="github">Github: <a href="https://github.com/${engineer.github}"> ${engineer.github}</a></p>
                        </div>
                    </div>
                </div>
`;
};

const renderIntern = function (intern) {
    return `
                <div class="col-4 mt-4">
                    <div class="card h-80">
                        <div class="card-header">
                            <h3>${intern.name}</h3>
                            <h4><i class="material-icons">school</i> Intern</h4>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${intern.id}</p>
                            <p class="email">Email:<a href="mailto:${intern.email}"> ${intern.email}</a></p>
                            <p class="school">School: ${intern.school}</p>
                        </div>
                    </div>
                </div>
`;
};

const renderManager = function (manager) {
    return `
                <div class="col-4 mt-4">
                    <div class="card h-80">
                        <div class="card-header">
                            <h3>${manager.name}</h3>
                            <h4><i class="material-icons">account_box</i> Manager</h4>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${manager.id}</p>
                            <p class="email">Email: <a href="mailto:${manager.email}"> ${manager.email}</a></p>
                            <p class="office">Office Number: ${manager.officeNumber}</p>
                        </div>
                    </div>
                </div>
`;
};



module.exports = renderHTML;