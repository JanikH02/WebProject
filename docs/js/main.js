function handleLogin(event) {
    event.preventDefault()
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let loginContainer = document.getElementById("loginContainer");
    let loginTitel = document.getElementById("titelLogin");
    if (username.value === "a" && password.value === "1") {
        loginContainer.classList.add("fadeDownLogin")
        loginTitel.classList.add("fadeUpLogin")
        loginTitel.addEventListener("animationend", function () {
            window.location.href = "http://localhost:63342/WebProject/docs/dashboard.html?_ijt=m0cdrme3luojp8or3rdab825gb";
        })
    } else {
        loginContainer.classList.add()
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    let overviewElement = document.getElementById("contentOverview");
    let moduleAdderElement = document.getElementById("moduleAdder");
    moduleAdderElement.addEventListener("click", () => addModule(overviewElement));


});
let moduleCounter = 0;


function addModule(overviewElement) {
    const clickSomewhere = document.createElement("div");

    document.getElementById('contentOverview').appendChild(clickSomewhere);
    clickSomewhere.classList.add("clickSomewhere")
    clickSomewhere.innerText = "Click somewhere to place the modules";
    clickSomewhere.addEventListener("click", function (event) {
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        addCoordinates((mouseX / window.innerWidth) * 100, (+mouseY / window.innerHeight) * 100);
        const module = document.createElement("div");
        document.getElementById("contentOverview").appendChild(module);
        module.classList.add("module");
        module.id = `modul ${moduleCounter}`;
        module.innerText = `modul ${moduleCounter}`;
        let modules = document.querySelectorAll(".module");
        if (moduleCounter < modules.length) {
            let x = coordinates.at(moduleCounter).x;
            let y = coordinates.at(moduleCounter).y;
            modules.item(moduleCounter).style.left = `${x}%`;
            modules.item(moduleCounter).style.top = `${y}%`;
            moduleCounter++;
        }
        clickSomewhere.remove()
    });


}

// document.addEventListener("click", function (event) {
//
// });

class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const coordinates = [];

function addCoordinates(x, y) {
    coordinates.push(new Coordinate(x, y))
}














