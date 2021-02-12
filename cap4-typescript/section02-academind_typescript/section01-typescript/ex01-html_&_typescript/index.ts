const ninput1 = document.getElementById('n1') as HTMLInputElement
const ninput2 = document.getElementById('n2') as HTMLInputElement

const multiplyButton = document.getElementById('multiply-button')


const multiply = (n1: number, n2: number): number => {
    return n1 * n2

}

multiplyButton.addEventListener('click', () => {
    alert(multiply(+ninput1.value, +ninput2.value))
})

export default {}
