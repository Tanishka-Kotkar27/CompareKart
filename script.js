// userlogin
function login()
{
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let msg  = document.getElementById("msg");

    if(user === "Tanishka_27" && pass === "@1234")
    {
        msg.innerText = "Login successfully...";
        msg.style.color = "green";

        setTimeout(function(){
            window.location.href = "index.html"; 
        }, 1000);
    }
    else
    {
        msg.innerText = "Invalid credential.";
        msg.style.color = "red";
    }
}



//theme change
let isDark = false;

function toggleTheme() {

    let navb = document.getElementById("navb");
    let login = document.getElementById("login");
    let toggle = document.getElementById("themeToggle");
    let moon = document.getElementById("moonIcon");
    let logo = document.getElementById("logo");

    if (isDark === false) {
        document.body.style.backgroundColor = "#1f1f1f";
        document.body.style.color = "white";

        navb.style.backgroundColor = "#a3a0a0";
        navb.style.color = "white";

        login.style.backgroundColor = "rgba(0, 14, 120, 0.85)";
        login.style.color = "white";

        toggle.style.backgroundColor = "#e5e7eb";  
        moon.style.fill = "#000000";             

        document.querySelector('.h2').style.color = "white";
        document.querySelector('.lab').style.color = "white";
        document.querySelector('.lab2').style.color = "white";
        document.querySelector('.login-btn').style.backgroundColor = "#7d7a7a";
        document.querySelector('.login-btn').style.color = "black";
        document.querySelector('.for').style.color = "wheat";
        document.querySelector('.reg').style.color = "wheat";
        document.querySelector('.register-text').style.color = "wheat";

        isDark = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        navb.style.backgroundColor = "#efeeee";
        navb.style.color = "black";

        login.style.backgroundColor = "white";
        login.style.color = "black";

        toggle.style.backgroundColor = "#424141"; 
        moon.style.fill = "white";              
        document.querySelector('.h2').style.color = "#1f3cff";
        document.querySelector('.lab').style.color = "black";
        document.querySelector('.lab2').style.color = "black";
        document.querySelector('.login-btn').style.backgroundColor = "#1f3cff";
        document.querySelector('.login-btn').style.color = "white";
        document.querySelector('.for').style.color = "#1f3cff";
        document.querySelector('.reg').style.color = "#1f3cff";
        document.querySelector('.register-text').style.color = "#555";

        isDark = false;
    }
}



//Loan Calculator
function calculateEMI() {

    let p = Number(document.getElementById("amount").value); // principal
    let r = Number(document.getElementById("rate").value / 12 / 100);
    let n = Number(document.getElementById("years").value * 12);

    if (!p || !r || !n) {
        alert("Enter valid values");
        return;
    }

    let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    document.getElementById("emi").innerText =
        "₹" + Math.round(emi);

    document.getElementById("total").innerText =
        "₹" + Math.round(emi * n);

    document.getElementById("interest").innerText =
        "₹" + Math.round(emi * n - p);
}
