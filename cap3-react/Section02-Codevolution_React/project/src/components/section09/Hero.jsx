import React from 'react';

const Hero = (props) => {
    const {heroName} = props

    if(heroName === 'Joker'){
        throw Error
    }

    return <h3>{heroName}</h3>
}

export default Hero