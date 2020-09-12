function print(e=''){console.log(e)}

const image = document.querySelector('img')

/*
    NodeType => returns an integer from 1-12 corresponding to a data type, 
    with a nodeName and a nodeValue
*/

print(image.nodeType)
print(image.nodeName) 
print(image.nodeValue)
print()
print(image.getAttributeNode('src').nodeType) //Need getAttributeNODE for it to convert to a node
print(image.getAttributeNode('src').nodeName) 
print(image.getAttributeNode('src').nodeValue)