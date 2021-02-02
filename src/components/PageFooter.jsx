import React from 'react';

const year = new Date().getFullYear();

function PageFooter(){
    console.log(year);
    return <footer>
    <p> Copyright © {year} Atult™</p>
    </footer>
}

export default PageFooter;