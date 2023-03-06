import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { setAutorizationStatus } from '../store/Reducers/userReducer';

const Navbar = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)
  const isAutorized = useSelector((state) => state.user.isAutorized)

  useEffect(() => {

    if (isAutorized !== 'false') {
      document.getElementById("userInfo").innerHTML = user.surname + ' ' + user.name + ' ' + user.dads_name
      document.getElementById("exitButton").style.display = 'block'
      document.getElementById("LinksDiv").style.display = 'flex'
    } 
  }, [])
  
  function UnAutorize() {
    document.getElementById("exitButton").style.display = 'none'
    document.getElementById("userInfo").innerHTML = ""
    document.location = '/' 
    dispatch(setAutorizationStatus('false'))
  }

  return (
    <div className='headerWarpper'>
        <div className='links'  id="LinksDiv">
            <NavLink to='/projects' id="navLink1" className={({isActive}) => isActive ? 'activeNav' : 'Nav'}>Проекты</NavLink> {/*/projects*/}
            <NavLink to='/reports' id="navLink2" className={({isActive}) => isActive ? 'activeNav' : 'Nav'}>Отчеты</NavLink> {/*/reports*/}
            <NavLink to='/contacts' id="navLink3" className={({isActive}) => isActive ? 'activeNav' : 'Nav'}>Сотрудники</NavLink> {/*/contacts*/}
            <NavLink to='/others' id="navLink4" className={({isActive}) => isActive ? 'activeNav' : 'Nav'}>Прочее</NavLink> {/*/others*/}
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