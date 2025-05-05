document.addEventListener("DOMContentLoaded", function () {
    const allLinks = document.querySelectorAll("nav a");

    allLinks.forEach((link) => {
      link.addEventListener("click", function () {
        allLinks.forEach((nav) => nav.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });

  document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return;
  }

  alert("Your message has been sent successfully! 📩");

  // Reset form after submission
  this.reset();
});


document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return;
  }

  alert("Your message has been sent successfully! 📩");

  // Reset form after submission
  this.reset();
});