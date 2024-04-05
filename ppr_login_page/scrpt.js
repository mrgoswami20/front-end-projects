const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signup-link');
const signInLink = document.querySelector('.signin-link');

signUpLink.addEventListener('click', ()=>{
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', ()=>{
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
});