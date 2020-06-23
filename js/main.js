'use strict'

const elect = document.getElementById('election');
const userMenu = document.getElementById('user-menu');
const createPoll = document.getElementById('creat-poll');
const voting = document.getElementById('voting');
const burgerBtn = document.getElementById('burger');
const registration = document.querySelector('.registration');
const registrForm = document.querySelector('.registr-form');
const email = document.querySelector('.email');
const userName = document.querySelector('.user-name');
const logInForm = document.querySelector('.reg');
const btnOut = document.querySelector('.btn-out');
const btnCreate = document.querySelector('.btn-create');
const submitPoll = document.querySelector('.submit-poll');
const btnSearch = document.querySelector('.btn-search');




let login = localStorage.getItem('smartVoting');

function toggleModal() {
    registrForm.classList.toggle('is-open');
}


function autorized() {
  function logOut() {
    localStorage.removeItem('smartVoting');
    login = null;
    registration.style.display = 'block';
    userName.style.display = 'none';
    userMenu.style.display = 'none';
    checkAuth();
  }

  userName.textContent = login;

  registration.style.display = 'none';
  userName.style.display = 'inline';
  btnOut.style.display = 'flex';
  btnOut.addEventListener('click', logOut);
  
}

function notAuthorized() {
  function logIn(event) {
    event.preventDefault();
    if(email.value) {
      login = email.value;

      localStorage.setItem('smartVoting', login);

      toggleModal();
      registration.removeEventListener('click', toggleModal);
      logInForm.removeEventListener('submit', logIn);
      logInForm.reset();
      checkAuth();
    } else {
      alert('Добро пожаловать!')
    }
  }
  registration.addEventListener('click', toggleModal);
  logInForm.addEventListener('submit', logIn);
  
}

function checkAuth() {
  if(login) {
    autorized();
  } else {
    notAuthorized();
  }
}

function create() {
  createPoll.classList.toggle('is-open');
}

checkAuth();

function showMenu() {
  userMenu.classList.toggle('is-open');
}

function closeCreate() {
  createPoll.classList.remove('is-open');
}

function poll(event) {
  // event.preventDefault();
  
  closeCreate();
}

function election() {
  elect.classList.toggle('is-open');
}




registration.addEventListener('click', toggleModal);

userName.addEventListener('mouseover', showMenu);
userMenu.addEventListener('mouseout', showMenu);

btnCreate.addEventListener('click', create);

submitPoll.addEventListener('click', poll);

btnSearch.addEventListener('click', election);

burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.add('active');
  voting.classList.toggle('is-open');
});

// btnOpenModal.addEventListener('click', () => {
//   requestAnimationFrame(animateModal);
//   modalBlock.classList.add('d-block');
// });
// burgerBtn.removeEventListener('click', () => {
//   modalBlock.classList.remove('d-block');
//   burgerBtn.classList.remove('active');
// });



document.getElementById('btn').onclick = function () {
  document.getElementById('check').classList.add('block');
}

document.getElementById('confirm').onclick = function () {
  alert("Thank you for your vote!")
}
