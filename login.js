
let username = document.querySelector("#username"); // مسكت الانبوت الخاص باليوزر نيم
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let registerBtn = document.querySelector("#sign_up");

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault(); // لايقاف الريفريش الخاص بالصفحة
  if (username.value === ""|| password.value === "") {
    alert("الرجاء تسجيل الدخول"); 
  } else { // طيب لو في داتا اعمل التالي
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);

    setTimeout(() => {  // Arru Function
      window.location = "home.html";  
    }, 1500);
  }
}




// let username = document.querySelector("#username");
// let password = document.querySelector("#password");
// let loginBtn = document.querySelector("#sign_in");

// let getUser = localStorage.getItem("username");
// let getPassword = localStorage.getItem("password");

// loginBtn.addEventListener("click", login);

// function login(e) {
//   e.preventDefault();
//   if (username.value === "" || password.value === "") {
//     alert("الرجاء تسجيل الدخول");
//   } else {
//     if (
//       getUser &&
//       getUser.trim() === username.value.trim() &&
//       getPassword &&
//       getPassword === password.value
//     ) {
//       setTimeout(() => {
//         window.location = "home";
//       }, 1500);
//     } else {
//       console.log("username or password is wrong !!");
//     }
//   }
// }
