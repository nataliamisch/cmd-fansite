const javashit = document.querySelector("#ScriptThing");
javashit.style.color = 'red';
let button = document.querySelector("#button");

let ClickBool = true;

button.addEventListener("click", OnClick);

const test = document.getElementsByClassName("booty");

function OnClick() {
    if (ClickBool) {
        button.style.backgroundColor = "Blue";
        button.innerHTML = "button";
        ClickBool = false;

    } else {
        button.style.backgroundColor = "White";
        button.innerHTML = "click";
        ClickBool = true;
    }
}