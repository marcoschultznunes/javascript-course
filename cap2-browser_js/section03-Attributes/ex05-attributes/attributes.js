function print(e=''){console.log(e)}

const image = document.querySelector('img')

// 3 ways of getting attribute from html element
print(image.getAttribute('src')) //Gets exactly what i have written as src
print(image.src) //Gets the path
print(image['src']) //Gets the path