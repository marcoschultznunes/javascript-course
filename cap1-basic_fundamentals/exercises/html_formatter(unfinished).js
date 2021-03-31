const makeDiv = (...content) => {
    return new FormatHtml(`<div>${content.map(element => element).join('')}</div>`)
}

class FormatHtml {
    constructor(content){
        this.content = content
    }

    toString(){
        return this.content
    }

    div = makeDiv
}

const Format = { 
    div: makeDiv
    // h1: (...content) => {
    //     return `<h1>${content.map(element => element).join('')}</h1>`
    // },

    // p: (...content) => {
    //     return `<p>${content.map(element => element).join('')}</p>`
    // },

    // span: (...content) => {
    //     return `<span>${content.map(element => element).join('')}</span>`
    // },
}

console.log(Format.div().div("Hello There"))
