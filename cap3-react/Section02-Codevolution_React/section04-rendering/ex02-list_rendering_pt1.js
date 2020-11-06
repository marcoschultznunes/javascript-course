/*
    The best way to render a list of elements in react is by using the map method, as it
    works inside JSX elements
*/

const LanguagesRank = () => {
    // The array
    const programming_languages = ['Javascript', 'Python', 'Java', 'PHP', 'C#', 'C++', 'C']

    // The map function, which turns each item into an HTML element
    const mapListItems = (list) => list.map(item => <li>{item}</li>)
    
    return (
        <div>
            <ol>
                {mapListItems(programming_languages)}
            </ol>
        </div>
    )
}

export default LanguagesRank

// The next example covers more complex lists, such as object lists