const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#login-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();
    const username = document.querySelector('#name-register').value.trim();
   
  
    if (email && password && username) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify({ email, username, password}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.assign('/');
      } else {
        alert('Failed to register');
      }
    }
  };
  
  document
    .querySelector('.sign-form')
    .addEventListener('submit', loginFormHandler);
  ///this is and event listenr that sennds information 