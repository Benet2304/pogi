const btn = document.getElementById('login');
const username = document.getElementById('username');
const password = document.getElementById('password');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (username.value === 'sarap'&& password.value === 'hellyeah'){
        alert('nice');
        window.location.href="main.html";
    }
})