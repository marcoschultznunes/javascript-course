import React from 'react';
import Language from './Language';

export const Frameworks = () => {
    const framework_list = [
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

    const mapLangsFws = (list) => list.map(lang => 
        <Language language={lang} key={lang.language}/>
    )

    return(
        <ol>
            {mapLangsFws(framework_list)}
        </ol>
    )
}