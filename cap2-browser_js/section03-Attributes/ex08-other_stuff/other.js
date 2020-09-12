function print(e=''){console.log(e)}

const label = document.querySelector('form > label')

print(label.for) //Undefined => This attribute's name is changed
print(label.htmlFor) //to this
print(label.getAttribute('for')) //It's better to use get attribute

print()

/*
    .attributes => READ ONLY. I cannot alter the attributes if i access them with this.
    So it's better not to use this.
*/

print(label.attributes)
print(label.attributes[1])
print(label.attributes['random'])
print(label.attributes.random)

/*
    As you can see, it is best practice to always use getAttribute(), as it works in all scenarios
*/