function print(e=''){console.log(e)}

const div = document.querySelector('div')

print(div.miss_you) //Undefined => Cannot access custom attributes this way.
print(div.getAttribute('miss_you')) //This works!
print(div['miss_you']) //Undefined
print()

print(div.hasAttribute('miss_you'))

div.setAttribute('miss_you', "And i'm so sorry") //Set Attribute => Modifies and creates attributes
print(div.getAttribute('miss_you'))

div.setAttribute('overkill', "I can't get to sleep") 
print(div.getAttribute('overkill'))

div.removeAttribute('miss_you') //Remove Attribute
print(div.getAttribute('miss_you')) //null

/*
    As you can see, it is best practice to always use getAttribute(), as it works in all scenarios
*/
