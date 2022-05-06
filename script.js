function navbarFixed() {
  let logo = document.getElementById('logo');
  let nav = document.getElementById('nav');

  logo.classList.toggle('navbarFixed');
  nav.classList.toggle('navbarFixed');
}

function validate() {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nummerRegEx =
    /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;

  let naam = document.getElementById('naam');
  let nummer = document.getElementById('nummer');
  let email = document.getElementById('email');

  let naamInput = naam.value;
  let nummerInput = nummer.value;
  let emailInput = email.value;

  if (naamInput == '') {
    naam.classList.add('invalid');
  } else {
    naam.classList.remove('invalid');
  }

  if (!nummerRegEx.test(nummerInput)) {
    nummer.classList.add('invalid');
  } else {
    nummer.classList.remove('invalid');
  }

  if (!emailRegEx.test(emailInput)) {
    email.classList.add('invalid');
  } else {
    email.classList.remove('invalid');
  }

  if (
    (naamInput != '') &
    emailRegEx.test(emailInput) &
    nummerRegEx.test(nummerInput)
  ) {
    confetti();
  }

  function clearAfterTimeout() {
    naam.classList.remove('invalid');
    nummer.classList.remove('invalid');
    email.classList.remove('invalid');
  }

  setTimeout(clearAfterTimeout, 2000);
}
