class Music{
    static count = 0
    
    static incrementCount(){
        this.count++
    }

    constructor(title, artist, gender, chorus){
        Music.incrementCount()
        this.id = Music.count
        this.title = title
        this.artist = artist
        this.gender = gender
        this.chorus = chorus
    }

    playChorus(){
        console.log(this.chorus)
    }
}

const ruby = new Music('Ruby', 'Kaiser Chiefs', 'Britpop', 'Ruby ruby ruby ruby ruby RU BAY! A-a-A-a-aaah')
const m2 = new Music('I Wanna be Adored', 'Stone Roses', 'Rock', 'I wanna be a doooooor...')
const yyz = new Music('YYZ', 'Rush', 'Rock')

console.log(ruby)
console.log(m2)
console.log(yyz)
console.log(Music.count)

