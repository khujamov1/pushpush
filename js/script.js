var elMainForm = document.querySelector(".main-form");
var elInputAddBefore = elMainForm.querySelector(".before-add");
var elInputAddAfter = elMainForm.querySelector(".after-add");
var elRemoveBefore = document.querySelector(".remove-before");
var elRemoveAfter = document.querySelector(".remove-after");
var elMainList = document.querySelector(".main-list");

var arr = ["olma", "nok", "uzum"];

function myFunction() {

    for (var iterator of arr) {
        var newItem = document.createElement("li");
        
        newItem.textContent = iterator;
        elMainList.appendChild(newItem);
    }
}

elMainForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    elMainList.innerHTML = "";

    var elInputAddBeforeVal = elInputAddBefore.value;
    var elInputAddAfterVal = elInputAddAfter.value;

    if(!elInputAddBeforeVal == '') {
        arr.unshift(elInputAddBeforeVal);
    }
    if(!elInputAddAfterVal == '') {
        arr.push(elInputAddAfterVal);
    }    
    
    myFunction();
    
})

console.log(arr);
elRemoveBefore.addEventListener("click", function() {
    elMainList.innerHTML = ""
    arr.shift();
    myFunction();
})
elRemoveAfter.addEventListener("click", function() {
    elMainList.innerHTML = ""
    arr.pop();
    myFunction();
}); 


myFunction()