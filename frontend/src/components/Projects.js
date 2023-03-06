import React, { useEffect, useState } from 'react'
import '../css/Projects.css'

const Projects = () => {
  const [tableData, setTableData] = React.useState()

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbzuKuSOUfd9IOsQobix0PnIRv28IB3uTx5KdpVoVeNe04g7QzXQeeCEbsHBxE5CYdEV8A/exec') //получение информации из API гугла
        .then((response) => response.json()) //изменения формата в JSON
        .then((response) => {
          //запись значения JSON в переменную tableData
          setTableData(response['smr'])    
        }) 
  }, []);     

  return (
    <div>
    {tableData && tableData.map(item => (
      <div key={item.id} className='mainTableDiv'>
        <div className='LeftTableDiv'>
          <div className='AdressLabelDiv'>
            <p className='Adress'>{item.adress}</p>
          </div>
          <div className='PlaneDiv'>
            <p className='Plane'>План СМР: {item.plane}</p><br />
            <p className='Plane'>Факт СМР: </p>
          </div>
          
        </div>
        <div className='RightTableDiv'>
          <span className='ErpGfcName'>ЕРП: </span>
          <span className='Information'>{item.ERP}</span>
          <span className='ErpGfcName'>,    ГФК: </span>
          <span className='Information'>{item.GFK}</span><br />
          <span className='ErpGfcName'>Наименование: </span>
          <span className='Information'>{item.object_name}</span><br />
          <div className='buttonsDiv'>
            <button className='ButtonSmallReport'>Отчет</button>
            <button className='ButtonSmallPlane'>План</button>  
          </div>
        </div>
        
      </div>
    ))}
    </div>
  )
  
}

export default Projects