class Language{
    constructor(lang, paradigm, type){
        this.language = lang
        this.paradigm = paradigm
        this.type = type
    }
}

class Framework extends Language{
    constructor(language, framework, creator){
        super(language.language, language.paradigm, language.type)
        this.framework = framework
        this.creator = creator
    }
}

const javascript = new Language('Javascript', 'Functional', 'Front-end and Back-end')
const react = new Framework(javascript, 'React', 'Facebook')
const angular = new Framework(javascript, 'Angular', 'Google')
const vue = new Framework(javascript, 'Vue', 'Crowdsourced')

console.log(javascript)
console.log(react)
console.log(angular)
console.log(vue)