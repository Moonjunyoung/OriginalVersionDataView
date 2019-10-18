import React, { useState, useCallback } from 'react'
import * as _ from 'lodash'

import SerchList from './Components/Serch-List'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// import data

const datas = require('./data/pmdb.json');

const ComponentNameDataCreate=(array)=>{
  let tmp=[];
  let ComponentsName = [];
  for (let i = 0; i < array.length; i++) {
    let uniqdata = array[i].ComponentTypeName.trim();
   tmp.push(uniqdata);
  }
    ComponentsName=_.uniq(tmp);
    return ComponentsName;
}



const App = () => {

  let ComponentNameData=useCallback(ComponentNameDataCreate(datas));
  const [pmbd,setpmbd]=useState(datas);
  


  return (
    <>
      <header className='Web-title'>
        <h1>PMBD Data 조회</h1>
      </header>
      <SerchList datas={ComponentNameData} pmbd={pmbd}/> 
    </>
  )
}

export default App
