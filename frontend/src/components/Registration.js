import React from 'react'
import '../css/Registration.css'


//класс для юзеров
class UserAccount {
  constructor(
    phone_number,
    name,
    surname,
    dads_name,
    adress,
    email,
    company,
    password
  ) {
    this.phone_number = phone_number;
    this.name = name;
    this.surname = surname;
    this.dads_name = dads_name;
    this.adress = adress;
    this.email = email;
    this.company = company;
    this.password = password;
  }
}

//начинаем регистрацию
const Registration = () => {

  //отмена регистрации
  function Cancel(e) {
    e.preventDefault()
    document.location = '/' 
  }

  //добавление нового пользователя
  function AddNewUser(e) {
    e.preventDefault();
    //ниже обьявляем переменные для ссылок на элементы и записываем в новый элемент класса пользователь
    let userPhoneNumberForPost = document.getElementById(
      "phoneInputRegistration"
    ).value;
    let userNameForPost = document.getElementById(
      "nameInputRegistration"
    ).value;
    let userSernameForPost = document.getElementById(
      "sernameInputRegistration"
    ).value;
    let userFathernameForPost = document.getElementById(
      "fathernameInputRegistration"
    ).value;
    let userAdressForPost = document.getElementById(
      "adressInputRegistration"
    ).value;
    let userEmailForPost = document.getElementById(
      "emailInputRegistration"
    ).value;
    let userUlForPost = document.getElementById(
      "ulInputRegistration"
    ).value;
    let userPasswordForPost = document.getElementById(
      "passwordInputRegistration"
    ).value;

    //создаем новую переменную класса юзераккаунт для последующей отправки в БД
    let newUser = new UserAccount(
      userPhoneNumberForPost,
      userNameForPost,
      userSernameForPost,
      userFathernameForPost,
      userAdressForPost,
      userEmailForPost,
      userUlForPost,
      userPasswordForPost
    );

    //отправляем новго юзера в АПИ
    let postNewUser = () => {
      fetch("api/newusers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then(() => console.log("New user has sent to API"));
    };
    postNewUser();
    //очищаем инпуты регистрации
    document.getElementById("phoneInputRegistration").value = "";
    document.getElementById("nameInputRegistration").value = "";
    document.getElementById("sernameInputRegistration").value = "";
    document.getElementById("fathernameInputRegistration").value = "";
    document.getElementById("adressInputRegistration").value = "";
    document.getElementById("emailInputRegistration").value = "";
    document.getElementById("ulInputRegistration").value = "";
    document.getElementById("passwordInputRegistration").value = "";
    document.location = '/' 
    alert('Регистрация успешно произведена. Введитеномер телефона и пароль учетной записидля входа.')
  }

  return (
    <div className="RegistrationDiv">
      <div className='LabelReg'>
        Введите данные для регистрации
      </div>
      <div className='PhoneLabel'>
        <label >Номер телефона: </label>
      </div>

      <div className='PhoneInput'>
        <input
          type="email"
          className="inputThere"
          id="phoneInputRegistration"
          placeholder="8**********"
        />
      </div>

      <div className='NameLabel'>
        <label>Имя: </label>
      </div>

      <div className='NameInput'>
        <input
          type="text"
          className="inputThere"
          id="nameInputRegistration"
          placeholder="Имя"
        />
      </div>

      <div className='SurnameLabel'>
        <label>Фамилия: </label>
      </div>

      <div className='SurnameInput'>
        <input
          type="text"
          className="inputThere"
          id="sernameInputRegistration"
          placeholder="Фамилия"
        />
      </div>

      <div className='FathernameLabel'>
        <label>Отчетство: </label>
      </div>

      <div className='FathernameInput'>
        <input
          type="text"
          className="inputThere"
          id="fathernameInputRegistration"
          placeholder="Отчество"
        />
      </div>

      <div className='AdressLabel'>
        <label>Адрес: </label>
      </div>

      <div className='AdressInput'>
        <input
          type="text"
          className="inputThere"
          id="adressInputRegistration"
          placeholder="Адрес для доставки ТМЦ"
        />
      </div>

      <div className='EmailLabel'>
        <label className="text-dark">E-mail: </label>
      </div>

      <div className='EmailInput'>
        <input
          type="text"
          className="inputThere"
          id="emailInputRegistration"
          placeholder="e-mail"
        />
      </div>

      <div className='CompanyLabel'>
        <label className="text-dark">Наименование ЮЛ: </label>
      </div>

      <div className='CompanyInput'>
        <input
          type="text"
          className="inputThere"
          id="ulInputRegistration"
          placeholder="ООО/ИП или ФИО"
        />
      </div>

      <div className='PassLabel'>
        <label className="text-dark">Пароль: </label>
      </div>
      <div className='PassInput'>
        <input
          type="password"
          className="inputThere"
          id="passwordInputRegistration"
          placeholder="пароль"
        />
      </div>
      <div className='ButtonsDiv'>
        <div className='ButtonReg'>
          <button
            type="submit"
            onClick={(e) => AddNewUser(e)}
          >
            Регистрация
          </button>
        </div>

        <div className='ButtonCancel'>
          <button
            type="submit"
            onClick={(e) => Cancel(e)}
          >
            Отмена
          </button>  
        </div>
      </div>
    </div>
  );
};


export default Registration