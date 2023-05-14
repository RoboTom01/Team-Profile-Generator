// renderCSS = (data) => {
//     styleArray = []; 
//     styleArray.join('')
//     renderStyle(styles);

// };

const renderCSS = 
`
:root {
    --primary: lightslategray;
    --secondary: white;
}

/* elements */

* {
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}

/* classes */

.navbar-brand {
    font-size: 50px;
}

.card-header {
    background-color: var(--primary);
    color: var(--secondary);
}

.card-body {
    background-color: var(--secondary);
    color: var(--primary);
    min-width: 500px;
}

.container {
    margin: 100px auto;
    justify-content: space-evenly;
    display: flex;
    
}

/* id's */

#navbar {
    background-color: var(--primary);
    color: var(--secondary);
    font-size: 50px;
}
`;




module.exports = renderCSS;