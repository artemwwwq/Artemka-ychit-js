function alertVlues(elementParametr) {
    //console.log(elementParametr.value);
    //console.log(elementParametr.className);
}

function getEl(id) {
    console.log('Find element')
    var el = document.getElementById(id);
    return el;
}


var firstNameId = "first-name";
var firstNameEl = getEl(firstNameId);
//alertFirstNameValues()
alertVlues(firstNameEl)

var lastNameId = "last-name";
var lastNameEl = getEl(lastNameId);
//alertLastNameValues()
alertVlues(lastNameEl)

var addressId = "address-name";
var addressEl = getEl(addressId);
alertVlues(addressEl);

var citiesId = "cities";
var citiesEl = getEl(citiesId);
alertVlues(citiesEl);

var hobbiesId = "hobbies";
var hobbiesEl = getEl(hobbiesId);
alertVlues(hobbiesEl);

var avatarWrapperId = "avatar-wrapper";
var avatarWrapperEl = getEl(avatarWrapperId);
var avatarId = "avatar";
var avatarEl = document.getElementById(avatarId);

//window.alert(avatarEl.alt);
//window.alert(hobbies.value)
//window.alert(cities.value);
//window.alert(firstNameEl.value);
//window.alert(lastNameEl.value);
//window.alert(addressEl.value);

firstNameEl.value = "Alexey";
// console.log(firstNameEl.value);
// console.log(firstNameEl.className);

lastNameEl.value = "Kyznecov";
console.log(lastNameEl.value);
console.log(lastNameEl.className);

//window.alert(lastNameEl.className);

lastNameEl.className = "last-name defoult-input error-input";

avatarEl.src =
  "https://academy-of-capital.ru/upload/medialibrary/29f/29f4d8caa9598cca4e17289af0dff9e1.jpg";

citiesEl.value = "Moscow";
hobbiesEl.value = "I have not interest";

avatarWrapperEl.innerHTML = '<ul id ="list"><li>1</li></ul>';

var xyi = 'list'
var numberList = document.getElementById(xyi);
//window.alert(numberList.innerHTML);
