import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  
  function UnAutorize() {
    document.getElementById("exitButton").style.display = 'none'
    document.getElementById("userInfo").innerHTML = ""
  }

  return (
    <div className='headerWarpper'>
        <div className='links'>
            <NavLink to='#' className={({isActive}) => isActive ? 'activeNav' : 'Nav'}>Проекты</NavLink> {/*/projects*/}
            <NavLink to='#' className={({isActive}) => isActive ? 'activeNav' : 'Nav'}>Отчеты</NavLink> {/*/reports*/}
            <NavLink to='#' className={({isActive}) => isActive ? 'activeNav' : 'Nav'}>Контакты</NavLink> {/*/contacts*/}
            <NavLink to='#' className={({isActive}) => isActive ? 'activeNav' : 'Nav'}>Прочее</NavLink> {/*/others*/}
        </div>
        <div className='usersInfo'>
            <p id="userInfo" className='pUser'></p> 
            <div className='exitDiv'>
              <button className='exitButton' id='exitButton' onClick={() => UnAutorize()}>Выход</button>  
            </div>
              
        </div>
    </div>
  )
}

export default Navbar