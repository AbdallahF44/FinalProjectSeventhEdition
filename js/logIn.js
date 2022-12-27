//<i class="fa-solid fa-xmark"></i>
//<i class="fa-solid fa-check"></i>
//log in page
let btnLogIn = document.querySelector(".btnLogIn");
let adminNameInput = document.querySelector(".adminNameInput");
let adminPasswordInput = document.querySelector(".adminPasswordInput");
btnLogIn.onclick = function () {
  // console.log(adminNameInput.value === "");
  if (adminNameInput.value == "" || adminPasswordInput.value == "") {
    window.alert("يجب أن تملئ كل الإدخالات (¬‿¬)!");
    // adminNameInput.value = "";
    // adminPasswordInput.value = "";
  } else if (
    adminNameInput.value == "A4" &&
    adminPasswordInput.value == "4444"
  ) {
    btnLogIn.classList.add("opening");
    btnLogIn.innerHTML = '<i class="fa-solid fa-check"></i>';
    // console.log(44);
    setTimeout(() => {
      window.open("adminPage.html", "_self");
    }, 1000);
  } else {
    btnLogIn.classList.add("closing");
    btnLogIn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    window.alert("أنت ليس آدمن، إرجع (¬‿¬)!");
    setTimeout(() => {
      // window.open("index.html", "_self");
      window.close();
    }, 500);
  }
};
// document.addEventListener("click", (e) => {
//   console.log(e.target);
// });
let darkBtnLogIn = document.querySelector(".darck-mode-toggle");
darkBtnLogIn.onclick = function () {
  if (localStorage.getItem("can") == "true") {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark_mode", "dark");
      document.body.style.backgroundColor = `#333`;
      darkBtnLogIn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
      localStorage.setItem("dark_mode", "");
      darkBtnLogIn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
      if (localStorage.getItem("bodyColor") === null) {
        document.body.style.backgroundColor = `#dee1e3`;
      } else {
        document.body.style.backgroundColor = `${localStorage.getItem(
          "bodyColor"
        )}`;
      }
    }
  }
};
window.onload = () => {
  if (localStorage.getItem("mainColor") === null) {
    document.querySelectorAll(".col")[0].classList.add("active");
  } else {
    document.body.style.cssText = `--main-color:${localStorage.getItem(
      "mainColor"
    )};
    font-family: "Cairo", sans-serif;
    background-color: ${localStorage.getItem("bodyColor")};`;
    console.log(localStorage.getItem("mainColor"));
    document.querySelectorAll(".col").forEach((e) => {
      if (e.innerHTML == localStorage.getItem("mainColor"))
        e.classList.add("active");
    });
  }
  if (localStorage.getItem("bodyColor") === null) {
    document.querySelectorAll(".col-body")[0].classList.add("active");
  } else {
    document.body.style.backgroundColor = `${localStorage.getItem(
      "bodyColor"
    )};`;
    console.log(localStorage.getItem("bodyColor"));
    document.querySelectorAll(".col-body").forEach((e) => {
      if (e.innerHTML == localStorage.getItem("bodyColor"))
        e.classList.add("active");
    });
  }
  if (localStorage.getItem("dark_mode") == "dark") {
    document.body.classList.add("dark");
    document.body.style.backgroundColor = `#333`;
    darkBtnLogIn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
  if (localStorage.getItem("can") == "true") {
    darkBtnLogIn.style.display = "block";
  } else if (localStorage.getItem("can") == "false") {
    darkBtnLogIn.style.display = "none";
  }
};
