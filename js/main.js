//Toggle links active
let links = document.querySelectorAll(".con");

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("ch")) {
    links.forEach((e2) => {
      e2.classList.remove("active");
    });
    // console.log(e.target);
  }
});

links.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
    if (e.classList.contains("active")) {
      links.forEach((e2) => {
        e2.classList.remove("active");
      });
      e.classList.add("active");
    }
  });
});

//Up button
let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 500
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//Toggle button in small screen
let tg = document.querySelector(".tg");
tg.addEventListener("click", () => {
  document.body.classList.toggle("open");
});

let darkBtn = document.querySelector(".darck-mode-toggle");
darkBtn.onclick = function () {
  if (localStorage.getItem("can") == "true") {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark_mode", "dark");
      document.body.style.backgroundColor = `#333`;
      darkBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
      localStorage.setItem("dark_mode", "");
      darkBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
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
    // console.log(localStorage.getItem("mainColor"));
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
    // console.log(localStorage.getItem("bodyColor"));
    document.querySelectorAll(".col-body").forEach((e) => {
      if (e.innerHTML == localStorage.getItem("bodyColor"))
        e.classList.add("active");
    });
  }
  if (localStorage.getItem("dark_mode") == "dark") {
    document.body.classList.add("dark");
    document.body.style.backgroundColor = `#333`;
    darkBtn.innerHTML=`<i class="fa-solid fa-sun"></i>`;
  }
  if (localStorage.getItem("can") == "true") {
    darkBtn.style.display = "block";
  } else if (localStorage.getItem("can") == "false") {
    darkBtn.style.display = "none";
  }
};


