import React, { useState, useCallback, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as _ from 'lodash'
import './SearchList.css'
import SerchListOption from './Serch-ListOption'
import SearchListitem from './SearchListtitem'

const SerchList = ({ datas, pmbd }) => {
  const arr = _.map(datas)
  const list = arr

  const [selected, setSelected] = useState('default')
  const [SearchListdisplay, setSearchListdisplay] = useState(true)

  const onChange = useCallback(
    e => {
      const tmp = e.target[e.target.value].text
      setSelected(tmp)
      setSearchListdisplay(false)
    },
    [selected]
  )

  const onDisplay = () => {
    setSearchListdisplay(true)
  }

  return (
    <>
      {SearchListdisplay ? (
        <div className='input-group mb-3' id='serach-box'>
          <div className='input-group-prepend'>
            <label className='input-group-text' for='inputGroupSelect01'>
              ComponentName
            </label>
          </div>
          <select
            className='custom-select'
            id='inputGroupSelect01'
            onChange={onChange}
          >
            {list.map((value, index) => (
              <SearchListitem value={value} index={index} />
            ))}
          </select>
        </div>
      ) : (
        <SerchListOption
          SelectedValue={selected}
          pmbddata={pmbd}
          onDisplay={onDisplay}
        />
      )}
    </>
  )
}

export default SerchList
