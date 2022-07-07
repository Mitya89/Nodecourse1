//2.1.1 Объявление объекта авторизации

//Объявление через присваивание (пустым)
const userAuthorization = {};
userAuthorization.login = 'Dmitry Melnik';
userAuthorization.password = '55444u4';
console.log(userAuthorization);

//Объявление через присваивание (со значением)
const userAuthorization = {
    login: 'Dmitry Melnik',
    password: '55444u4',
};
console.log(userAuthorization);

//Создание через конструктор Object
const userAuthorization = new Object();
userAuthorization.login = 'Dmitry Melnik';
userAuthorization.password = '55444u4';
console.log(userAuthorization);

//Создание через конструктор Object.create
const userAuthorization = Object.create();
userAuthorization.login = 'Dmitry Melnik';
userAuthorization.password = '55444u4';
console.log(userAuthorization);

//2.1.2 Объявление массива с логинами пользователей

//Создание через прямое присвоение
const userLogins = ['Dmitry', 'Ivan', 'Pavel', 'Mary', 'Orest'];
console.log(userLogins);
//Создание через конструктор Array - вариант №1
const userLogins = new Array ('Dmitry', 'Ivan', 'Pavel', 'Mary', 'Orest');
console.log(userLogins);
//Создание через конструктор Array - вариант №2
const userLogins = new Array ();
userLogins[0] = 'Dmitry';
userLogins[1] = 'Ivan';
userLogins[2] = 'Pavel';
userLogins[3] = 'Mary';
userLogins[4] = 'Orest';
console.log(userLogins);
//Создание через конструктор Array - вариант №3
const userLogins = new Array (['Dmitry', 'Ivan', 'Pavel', 'Mary', 'Orest']);
console.log(userLogins[0]);