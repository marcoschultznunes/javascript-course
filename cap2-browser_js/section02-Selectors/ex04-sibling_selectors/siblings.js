function print(e=''){console.log(e)}

const list = document.querySelector('div ul')

//Children

print(list.childNodes) //Returns a nodeList which includes the spaces between elements
print(list.children) //Returns an htmlCollection
Array.from(list.children).forEach(print) //Print all children

print()

const child = list.firstElementChild //Returns the first child that is an element => Correct way
const teest = list.firstChild //Returns the first child, including whitespaces => Wrong way
print(child)
print(teest) //Will be a whitespace text

print()

//Parent

print(child.parentElement) 
print(child.parentNode)
print(child.parentElement.parentElement) //Parent of Parent
print(child.parentElement.parentElement.parentElement.parentElement.firstElementChild) //Navigating

print()

//Sibling

print(child.nextElementSibling) //Next Sibling
print(child.previousElementSibling) //Previous Sibling (in this case null as this is the first child)