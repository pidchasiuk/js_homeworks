var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

function isValidEmail(email){
    let pattern = /^\w+(\.\w+)?@(gmail\.com|yahoo\.com)/;
    return pattern.test(email);
};

let arrValidEmails = []
arr.forEach((user) => {
    if (isValidEmail(user.email)){
        arrValidEmails.push(user.email);
    }
});
console.log(arrValidEmails);