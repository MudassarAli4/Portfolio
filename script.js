const navLinks = document.querySelector("#navLinks");
const menuIcon = document.querySelector(".menu-icon i");

//      Menu Icon
navLinks.style.maxHeight = "0px";

menuIcon.addEventListener("click", () => {
  if (navLinks.style.maxHeight === "0px") {
    navLinks.style.maxHeight = "100vh";
  } else {
    navLinks.style.maxHeight = "0px";
  }
});

//      Typing JS

var typed = new Typed("#element", {
  strings: [
    "Frontend Developer",
    "Graphic Designer",
    "Freelancer",
    "React Enthusiast",
    "JavaScript Developer",
    "Innovative Thinker",
  ],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,
});

//    Scroll Button

let backToTopBtn = document.querySelector("#backToTopBtn");
window.onscroll = function () {
  scroollBtn();
};

function scroollBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: "0",
  });
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs
      .send("service_bhvp8eg", "template_12ye3w5", {
        from_name: name,
        email_id: email,
        message: message,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Message failed to send. Please try again.");
        }
      );
  });
