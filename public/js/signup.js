const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const confirmPassword = document.querySelector('#confirm-password-signup').value.trim();

  if (password !== confirmPassword) {
    alert('Your passwords did not match')
    password.value('')
    confirmpassword.value('')
  }

  if (username && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};


document
  .getElementById('create-account-btn')
  .addEventListener('click', signupFormHandler);
