// document.addEventListener("click", (e) => {
//   console.log(e.target);
// });
let toggleDarkBtn = document.querySelector(".box .toggle-con div");
let darkBtn = document.querySelector(".darck-mode-toggle");

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
      if (
        e.innerHTML.toLowerCase() ==
        localStorage.getItem("mainColor").toLowerCase()
      )
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
      if (
        e.innerHTML.toLowerCase() ==
        localStorage.getItem("bodyColor").toLowerCase()
      )
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

if (localStorage.getItem("can") == "true") {
  toggleDarkBtn.classList.add("can");
  toggleDarkBtn.innerHTML = "!(●'◡'●) You Can Convert";
  darkBtn.style.display = "block";
} else if (localStorage.getItem("can") == "false") {
  toggleDarkBtn.classList.remove("can");
  darkBtn.style.display = "none";
} else {
  localStorage.setItem("can", "false");
}

toggleDarkBtn.onclick = () => {
  if (localStorage.getItem("can") == "true") {
    localStorage.setItem("can", "false");
    toggleDarkBtn.classList.remove("can");
    darkBtn.style.display = "none";
    toggleDarkBtn.innerHTML = "!(¬‿¬) You Can Not Convert";
  } else if (localStorage.getItem("can") == "false") {
    localStorage.setItem("can", "true");
    toggleDarkBtn.classList.add("can");
    darkBtn.style.display = "block";
    toggleDarkBtn.innerHTML = "!(●'◡'●) You Can Convert";
  }
};

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
// document.querySelector(".a").onclick = function () {
//   if (localStorage.getItem("can") == "true") {
//     document.body.classList.toggle("dark");
//     if (document.body.classList.contains("dark")) {
//       localStorage.setItem("dark_mode", "dark");
//       document.body.style.backgroundColor = `#333`;
//     } else {
//       localStorage.setItem("dark_mode", "");
//       if (localStorage.getItem("bodyColor") === null) {
//         document.body.style.backgroundColor = `#dee1e3`;
//       } else {
//         document.body.style.backgroundColor = `${localStorage.getItem(
//           "bodyColor"
//         )}`;
//       }
//     }
//   }
// };

//change main color
let colors = document.querySelectorAll(".col");

colors.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
    if (e.classList.contains("active")) {
      colors.forEach((e2) => {
        e2.classList.remove("active");
      });
      e.classList.add("active");
    } else {
      e.classList.add("active");
    }
  });
});

let change = document.querySelector(".change");
change.onclick = () => {
  // console.log(act.innerHTML);
  let act = document.querySelector(".colors .active");
  localStorage.setItem("mainColor", act.innerHTML);
  // document.body.style.cssText = `--mFain-color:${act.innerHTML};`;
};

//change body color
let col_body = document.querySelectorAll(".col-body");

col_body.forEach((e) => {
  // console.log(e.innerHTML);
  // localStorage.setItem('test', e.innerHTML);
  e.addEventListener("click", () => {
    e.classList.toggle("active");
    if (e.classList.contains("active")) {
      col_body.forEach((e2) => {
        e2.classList.remove("active");
      });
      e.classList.add("active");
    } else {
      e.classList.add("active");
    }
  });
});

let change_body = document.querySelector(".change-body");
change_body.onclick = () => {
  if (document.body.classList.contains("dark"))
    window.alert("لا يمكن التغيير في الوضع المظلم (¬‿¬)!");
  else {
    // console.log(act.innerHTML);
    let act = document.querySelector(".colors-body .active");
    localStorage.setItem("bodyColor", act.innerHTML);
    document.body.style.backgroundColor = act.innerHTML;
  }
};


//Up button
let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 200
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};