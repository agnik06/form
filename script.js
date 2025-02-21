// Listen for form submission
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent normal form submission

  // Gather input values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const terms = document.getElementById("terms").checked;
  const message = document.getElementById("message");

  // Array to store missing fields
  let missingFields = [];

  if (!firstName) missingFields.push("First Name");
  if (!lastName) missingFields.push("Last Name");
  if (!email) missingFields.push("Email");
  if (!phone) missingFields.push("Phone Number");
  if (!gender) missingFields.push("Gender");
  if (!terms) missingFields.push("Terms & Conditions");

  if (missingFields.length > 0) {
      message.textContent = `⚠ Please fill out: ${missingFields.join(", ")}`;
      message.style.color = "#ff3300";
      message.style.opacity = "1";
      return;
  }

  // If valid, show success message
  message.textContent = "✔ Registration Successful!";
  message.style.color = "#00ff99";
  message.style.opacity = "1";

  // Fade out success message after 3 seconds
  setTimeout(() => {
      message.style.opacity = "0";
  }, 3000);

  // Reset the form
  this.reset();
});
