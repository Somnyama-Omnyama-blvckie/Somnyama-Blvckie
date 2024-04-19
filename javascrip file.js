// JavaScript code for interactive features, form validation, etc.

// Example: Toggle navigation menu for smaller screens
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu-visible');
});


// Example: Form validation
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting
  
  // Perform form validation
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');

  // Check if any field is empty
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all fields');
    return;
  }

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address');
    return;
  }

  // If all fields are filled and email is valid, proceed with form submission
  // However, if you want to customize the message based on the specific name and email address provided:
  const specificName = "So'mnyama Piggy Trading";
  const specificEmail = "so'mnyama@gmail.com";
  const specificMessage = "Kindly communicate with us here if you cannot reach us through other channels.";

  if (
    nameInput.value !== specificName ||
    emailInput.value !== specificEmail ||
    messageInput.value !== specificMessage
  ) {
    alert('Please provide the correct name, email address, and message for So\'mnyama Piggy Trading.');
    return;
  }

  // If all validations pass, you can submit the form
  contactForm.submit();
});

  }

  // If all fields are filled, submit the form (you can add AJAX submission here)
  alert('Form submitted successfully!');
  contactForm.reset(); // Reset the form fields
});



