const renderCSS = 
`:root {
    --primary: rgb(85, 163, 241);
}


/* elements */

* {
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}


/* classes */

.card {
    border: solid 3px;
    border-color: black;
    width: 350px;
}

.card-header {
    background-color: var(--primary);
    color: white;
    border-radius: 15pt;
}

.card-body {
    background-color: white;
    color: black;
}

.container {
    margin: 100px auto;
    justify-content: space-evenly;
    display: flex;
    
}

.material-icons {
    font-size: 27px;
}

.navbar-name {
    font-size: 50px;
}


/* id's */

#navbar {
    background-color: var(--primary);
    color: white;
    font-size: 50px;
}
`;


module.exports = renderCSS;