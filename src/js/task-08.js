const formRef = document.querySelector('form');

const emailRef = document.querySelector('[type="email"]');
const passwordRef = document.querySelector('[type="password"]');


const onformRefSubmit = (event) => {
    event.preventDefault();
    if (passwordRef.value === "" || emailRef.value === "") {
        alert('Все поля должны быть заполнены');
        return;
    }  
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const data = { email, password };
    console.log(data);  
    document.querySelector('form').reset();
}

formRef.addEventListener('submit', onformRefSubmit);