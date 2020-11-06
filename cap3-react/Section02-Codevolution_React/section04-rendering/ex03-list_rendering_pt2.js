/*
    The commonly used way to render more complex lists, is to map it to a component  
*/

// Frameworks.jsx component
export const Frameworks = () => {
    const framework_list = [ // A complex array of objects with array properties
        {
            language: 'Javascript',
            frameworks: [
                'React', 'Angular', 'Vue', 'Express', 'Meteor'
            ]
        },
        {
            language: 'Python',
            frameworks: [
                'Django', 'Flask', 'Tensorflow'
            ]
        },
        {
            language: 'Java',
            frameworks: [
                'Spring', 'Swing'
            ]
        },
        {
            language: 'PHP',
            frameworks: [
                'Laravel', 'Code Igniter', 'Symfony'
            ]
        },
        {
            language: 'C#',
            frameworks: [
                '.NET', '.NETCore', 'Xamarin', 'UWP', 'WPF'
            ]
        }
    ]

    // Map into a custom component, passing the object as a prop
    const mapLangsFws = (list) => list.map(lang => 
        <Language language={lang} /> 
    )

    return(
        <ol>
            {mapLangsFws(framework_list)}
        </ol>
    )
}

// Language.jsx component
import React from 'react';

const Language = (props) => { 
    const {language} = props

    // Since each language object has an array of frameworks, we must also map those to <li>
    const mapList = (list) => list.map(item => <li>{item}</li>)

    return(
        <li>{language.language}:
            <ul> {/* Nested list */}
                {mapList(language.frameworks)}
            </ul>
        </li>
    )
}

export default Language