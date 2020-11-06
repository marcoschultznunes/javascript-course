import React from 'react';

const Language = (props) => {
    const {language} = props

    const mapList = (list) => list.map(item => <li key={language.language+item}>{item}</li>)

    return(
        <li>{language.language}:
            <ul>
                {mapList(language.frameworks)}
            </ul>
        </li>
    )
}

export default Language