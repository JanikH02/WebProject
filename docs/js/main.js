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

function handleRegistration() {
    let mail = document.getElementById("mailTF").value;
    let password = document.getElementById("passwordTF").value;
    let firstname = document.getElementById("firstnameTF").value;
    let surname = document.getElementById("surnameTF").value;
    let age = document.getElementById("ageTF").value;
    let semester = document.getElementById("semesterTF").value;
    addStudent(firstname, surname, mail, password, age, semester)
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


/*
* ----------------------------------------------Databank----------------------------------
* */
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

// Verbindung zur SQLite-Datenbank herstellen
let db = new sqlite3.Database('res/userDatas.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the userDatas database.');
});


// Beispiel: Daten einfügen
function addStudent(firstname, surname, mail, password, age, semester) {
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            return console.error(err.message);
        }
        db.run(`INSERT INTO STUDENT(id, firstname, surname, mail, password, age, semester)
                VALUES (?, ?, ?, ?, ?, ?, ?)`, [id, firstname, surname, mail, hash, age, semester], function (err) {
            if (err) {
                return console.error(err.message);
            }
            console.log(`Row(s) inserted ${this.changes}`);
        });
    });
}

// function searchStudent(mail){
//     db.get("SELECT * FROM STUDENT WHERE mail = ?", [mail], function(err, row) {
//         if (err) {
//             return console.error(err.message);
//         }
//         // Falls ein Eintrag gefunden wurde, gib ihn aus
//         if (row) {
//             console.log(`Student gefunden: Name = ${row.name}, Email = ${row.mail}`);
//         } else {
//             console.log("Kein Student mit dieser E-Mail-Adresse gefunden.");
//         }
//     });
// }

function verifyStudent(mail, password) {
    // Suche den Studenten anhand der E-Mail
    db.get("SELECT * FROM STUDENT WHERE mail = ?", [mail], function (err, row) {
        if (err) {
            return console.error(err.message);
        }

        // Wenn kein Student gefunden wurde
        if (!row) {
            return console.log("no student found");
        }

        // Wenn ein Student gefunden wurde, vergleiche das Passwort
        bcrypt.compare(password, row.password, function (err, result) {
            if (err) {
                return console.error(err.message);
            }

            // Überprüfen, ob das Passwort korrekt ist
            if (result) {
                return console.log("right password");
            } else {
                return console.log("wrong password");
            }
        });
    });

}


function addModuleDB(id, name, description, x, y) {
    db.run(`INSERT INTO MODULE(id, name, description, x, y)
            VALUES (?, ?, ?, ?, ?)`, [id, name, description, x, y], function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Row(s) inserted ${this.changes}`);
    });
}


// Verbindung schließen
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});










