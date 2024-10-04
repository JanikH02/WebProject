function handleLogin(event) {
    event.preventDefault()
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let loginContainer = document.getElementById("loginContainer");
    let loginTitel = document.getElementById("titelLogin");
    if (username.value === "a" && password.value === "1"){
        loginContainer.classList.add("fadeDownLogin")
        loginTitel.classList.add("fadeUpLogin")
        loginTitel.addEventListener("animationend",function (){
            window.location.href = "http://localhost:63342/WebProject/docs/dashboard.html?_ijt=m0cdrme3luojp8or3rdab825gb";
        })
    }else {
        loginContainer.classList.add()
    }
}
