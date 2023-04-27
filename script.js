// Get the registration form and add a listener for submit event
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the form data
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  // Log the form data to the console
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

  // Reset the form
  registrationForm.reset();
});
