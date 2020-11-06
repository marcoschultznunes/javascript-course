import React from 'react';

const LanguagesRank = () => {
    const programming_languages = ['Javascript', 'Python', 'Java', 'PHP', 'C#', 'C++', 'C']

    const mapListItems = (list) => list.map(item => <li key={item}>{item}</li>)
    
    return (
        <div>
            <ol>
                {mapListItems(programming_languages)}
            </ol>
        </div>
    )
}

export default LanguagesRank