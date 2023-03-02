import React from 'react'
import '../css/Autorization.css'

const Autorization = () => {
  return (
    <div className='Autorization'>
      <div className='row1'>
        <p>Номер телефона</p>
        <input placeholder='8**********' type='tel'></input>
      </div>
      <div className='row2'>
        <p>Пароль</p>
        <input placeholder='Пароль' type='password'></input>
      </div>
      <div className='row3col1'>
        <button>OK</button>
      </div>
      <div className='row3col2'>
        <button>Регистрация</button>
      </div>
    </div>
  )
}

export default Autorization