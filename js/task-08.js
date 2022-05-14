const form = document.querySelector(".login-form");

const submitHandler = (event) => {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;

    const obj = {
        [email.name]: email.value,
        [password.name]: password.value,
    }    
    console.log(obj);

    if (email.value === "" || password.value === "") {
        alert ("Всі поля повинні бути заповнені");
    } else {    
        event.currentTarget.reset();
    }

};

form.addEventListener("submit", submitHandler);


