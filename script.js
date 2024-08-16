let form = document.querySelector("#contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  var formData = new FormData(form);

  try {
    const response = await fetch("https://cdn.jsdelivr.net/gh/mdabdulkyum1/dynamic-contact-form@main/index.php
", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    if (data.success) {
      alert("Email Sent Successfully");
      form.reset();
    } else {
      alert("Failed To Send Email");
    }
  } catch (error) {
    console.error("Error: ", error);
  }
});
