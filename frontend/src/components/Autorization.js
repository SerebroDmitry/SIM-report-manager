import React from 'react'
import '../css/Autorization.css'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { setAutorizationStatus, setUser } from '../store/Reducers/userReducer';

const Autorization = () => {
  const dispatch = useDispatch()
  let data  //тут мы храним данные о пользователях, получаемые из API
  const usersUrl = "api/users"; // путь к данным о пользователях
  let phoneInput = React.createRef(); //реф для поля ввода телефона
  let passwordInput = React.createRef(); // реф для поля ввода пароля
  let userPhoneForEnter = ""; // тут мы храним данные, введенные пользователем в инпут и затем сравниваем их с данными из БД
  let userPasswordForEnter = ""; // тут мы храним данные, введенные пользователем в инпут и затем сравниваем их с данными из БД
  let userID //тут мы храним ID авторизованного пользователя


  //счетчик поиска в БД
  let find = 9999;


  const isAutorized = useSelector((state) => state.user.isAutorized)
  //без этого кнопка входа с первого раза не работает
  useEffect(() => {
    if (isAutorized !== 'false') {
      document.location = '/projects' 
    } else {
        fetch(usersUrl)
          .then((response) => response.json())
          .then((response) => {
            data = response
            // setData(response)
          });
      }
  }, []);


  //
  //
  //--------------------АВТОРИЗАЦИЯ-----------------------
  //
  //
  function Autorization () {

    userPhoneForEnter = phoneInput.current.value;  //забираем значения из инпутов
    userPasswordForEnter = passwordInput.current.value;  //забираем значения из инпутов
    fetch(usersUrl) //получение информации из API
      .then((response) => response.json()) //изменения формата в JSON
      .then((response) => {
        //запись значения JSON в переменную data
        // setData(response);
        data = response
      })
      .then(() => {
        //поиск совпадений в ДБ
        for (var i = 0; i < data["userDate"].length; i++) {
          if (
            //сравниваем данные от пользователя и данные в базе
            userPhoneForEnter === String(data["userDate"][i].phone_number) &&
            userPasswordForEnter === String(data["userDate"][i].password)
          ) {
            find = i; //сохраняем порядковый номер найденного пользователя
          }
        }
        if (find !== 9999) {
          document.location = '/projects' 
          userID = find
          document.getElementById("userInfo").innerHTML = data["userDate"][userID].surname + ' ' + data["userDate"][userID].name + ' ' + data["userDate"][userID].dads_name
          document.getElementById("exitButton").style.display = 'block'
          
          dispatch(setUser(data['userDate'][userID]))
          dispatch(setAutorizationStatus('true'))

          userPhoneForEnter = ""; //обнуляем переменные для хранения значений из инпутов
          userPasswordForEnter = ""; //обнуляем переменные для хранения значений из инпутов
          find = 9999; //обнуляем идентификатор поиска
        } else {
          alert("Пользователь с таким паролем и номером телефона не найден");
        }
      });
        //обнуляем значения инпутов
        phoneInput.current.value = "";
        passwordInput.current.value = "";
  }

  return (
    <div className='Autorization'>
      <div className='row1'>
        <p className='pAutorization'>Номер телефона</p>
        <input placeholder='8**********' type='tel' ref={phoneInput}></input>
      </div>
      <div className='row2'>
        <p className='pAutorization'>Пароль</p>
        <input placeholder='Пароль' type='password' ref={passwordInput}></input>
      </div>
      <div className='row3col1'>
        <button onClick={() => Autorization()}>Вход</button>
      </div>
      <div className='row3col2'>
        <button onClick={ () => document.location='/reg' }>Регистрация</button>
      </div>
    </div>
  )
}

export default Autorization