function addErrorClsss(elementId) {
    var element = document.getElementById(elementId);
    element.className = 'error-input';
}

function addErrorClassToAllInputs() {
    addErrorClsss('first-name');
    addErrorClsss('last-name');
    addErrorClsss('address-name');
}


//window.setTimeout(addErrorClassToAllInputs, 5000)
//addErrorClassToAllInputs()



//var sendButton = document.getElementById('send-button');

//sendButton.addEventListener('click', addEventList)

var firstNameEl = document.getElementById('first-name');



function addEventList() {
    addErrorClsss('first-name');
}


function onFirstNameKeyup() {
    addErrorClsss('first-name');
}

firstNameEl.addEventListener('keyup', onFirstNameKeyup);