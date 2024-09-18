const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', handleForm);

function handleForm(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value.trim();
  const password = e.currentTarget.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  console.log({ email, password });

  formElement.reset();
}
