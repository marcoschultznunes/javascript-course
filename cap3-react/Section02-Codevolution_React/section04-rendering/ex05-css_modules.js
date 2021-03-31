/*
    In React, you can have a different kind of CSS file called module CSS. A module.css 
    file will have the advantage of having local scope only. Which means the child 
    components of a parent will not be in its scope

    It is also imported slightly different
*/

/* Example */
import React from 'react';
import Css from '../../css/example.module.css'; // It is assigned to a variable

const ModuleCss = () => {
    return(
        <div className={Css.text /* classes must be declared with the variable this way */}>
            <h3>module.css</h3>
        </div>
    )
}

export default ModuleCss 

/* The module.css file is written just like a normal css file 
.text{
    margin: 10px;
    background-color: purple;
    border: 2px solid black;
    border-radius: 10px; 
    padding-left: 20px;
    font-size: 22px;
    font-weight: bolder;
}

*/
