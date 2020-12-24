const useLoadSpinner = (imgStyling={}, iconStyling={}) => {

    const loadSpinnerIcon = 
    <i id='loadspinnericon' style={iconStyling}>  
        <img src="/icons/loadspinner.svg" alt="" width="16px" style={imgStyling}></img>
    </i>

    return [loadSpinnerIcon]
}

export default useLoadSpinner
