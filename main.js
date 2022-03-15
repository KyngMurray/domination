// -------------------------------- DOMINATION -----------------------------------



// -------------------------------------------------------------------------------
// --------------------------------- PART 1 --------------------------------------
// -------------------------------------------------------------------------------



// --------------------------- #1 ---------------------------------

function strikeThrough() {
    let arguments = document.querySelector("#arguments");
    arguments.firstElementChild.style.textDecoration = 'line-through';
}

// --------------------------- #2 ---------------------------------

strikeThrough()

// --------------------------- #3 ---------------------------------

function replaceImageURL (DOMID, DOMURL){
    let image = document.querySelector(DOMID)
    image.src = DOMURL
}

// --------------------------- #4 ---------------------------------

replaceImageURL('#image-1', "https://direct.rhapsody.com/imageserver/images/alb.329533933/500x500.jpg")
replaceImageURL('#image-2', "https://static.vecteezy.com/system/resources/previews/002/276/049/original/yin-yang-symbol-isolated-daoism-faith-sign-vector.jpg")
replaceImageURL('#image-3', "https://s0.as-img.com/r/1395662/500/250/logo.jpg?u=1605496171")


// --------------------------- #5 ---------------------------------

function remove1st(){
    let list = document.getElementById('arguments')
    list.removeChild(list.firstElementChild)
}

// --------------------------- #6 ---------------------------------

remove1st()
remove1st()

// --------------------------- #7 ---------------------------------

function changeIDFontSize(size, ID) {
    let element = document.querySelector(ID)
    element.style.fontSize = size
}

// --------------------------- #8 ---------------------------------

changeIDFontSize('150px', '#thing-1')
changeIDFontSize('150px', '#thing-2')



// -------------------------------------------------------------------------------
// --------------------------------- PART 2 --------------------------------------
// -------------------------------------------------------------------------------



// --------------------------- #1 ---------------------------------

function appendDOM (DOMelement){
    let list = document.querySelector('ul')
    list.appendChild(DOMelement)
}

// --------------------------- #2 ---------------------------------

let listItem = document.createElement('img')
listItem.src = "https://i1.sndcdn.com/avatars-CpAXMyjQCJkbR0gn-C0sfdw-t500x500.jpg"

appendDOM(listItem)

// --------------------------- #3 ---------------------------------

function changeImageSize (image){
    image.style.height = '30px'
}

// --------------------------- #4 ---------------------------------

let newImageSize = document.querySelector('#image-2')
changeImageSize(newImageSize)

// --------------------------- #5 ---------------------------------

function invisibleClass (domElement){
    invisibleElement = document.querySelector(domElement)
    invisibleElement.className = 'invisible'
}

// --------------------------- #6 ---------------------------------

invisibleClass('#thing-c')



// -------------------------------------------------------------------------------
// --------------------------------- PART 3 --------------------------------------
// -------------------------------------------------------------------------------



// --------------------------- #1 ---------------------------------

function createListItem (text){
    let newList = document.createElement('li')
    newList.innerText = text
    return newList
}

// --------------------------- #2 ---------------------------------

let newListItem = createListItem('I am the KYNG of KYNG\'s')
let newListItem2 = createListItem('I am the KYNG of GEMINI\'s')

appendDOM(newListItem)
appendDOM(newListItem2)

// --------------------------- #3 ---------------------------------

function changeHeaderSize (size, text){
    let newHeader = document.querySelector('h' + size)
    newHeader.innerText = text 
    return newHeader
}

// --------------------------- #4 ---------------------------------

let newHeader = changeHeaderSize('1', 'I AM THE ONE & ONLY KYNG')
appendDOM(newHeader)