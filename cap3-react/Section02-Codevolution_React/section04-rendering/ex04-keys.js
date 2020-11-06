/*
    In react, every item on a list must have a key prop. This prop must be uniquely valued.
    A good value to the item key would be the id of the element, should it come from 
    the database, since that value is unique.

    Peculiarities:
        - key prop of parent is not accessible from the child components
        - keys help react update efficiently, identifying elements when changing the list
        - the index of the item as a key can cause errors
        - this wouldn't be a problem if the list was static (never reordered, filtered, etc.)
        - it would be better if it was the index + the item value
        - if you don't specify the key, react will use the index as the key by default
*/
 
// Rewriting ex02's LanguagesRank.jsx using the key prop
const LanguagesRank = () => {
    const programming_languages = ['Javascript', 'Python', 'Java', 'PHP', 'C#', 'C++', 'C']

    //I'll simply use the name, since the items in this list are not supposed to be repeated
    const mapListItems = (list) => list.map(item => <li key={item}>{item}</li>)
     
    return (
        <div>
            <ol>
                {mapListItems(programming_languages)}
            </ol>
        </div>
    )
}

// Rewriting ex03's Frameworks.jsx using the key prop
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

    //I'll use the language, since it is not supposed to be repeated
    const mapLangsFws = (list) => list.map(lang => 
        <Language language={lang} key={lang.language}/>
    )

    return(
        <ol>
            {mapLangsFws(framework_list)}
        </ol>
    )
}

// Rewriting ex03's Language.jsx using the key prop
const Language = (props) => {
    const {language} = props

    // Using language + framework name, as the same framework could appear in 2 languages
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