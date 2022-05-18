let username = document.querySelector("#username"); // مسكت الانبوت الخاص باليوزر نيم
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let registerBtn = document.querySelector("#sign_up");

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault(); // لايقاف الريفريش الخاص بالصفحة
  if (username.value === ""|| email.value === ""|| password.value === "") {
    alert("الرجاء تسجيل الدخول"); 
  } else { // طيب لو في داتا اعمل التالي
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    setTimeout(() => {  // Arru Function
      window.location = "login.html";  
    }, 1500);
  }
}