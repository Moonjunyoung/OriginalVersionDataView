import React, { useState, useEffect, useCallback } from 'react'
import * as _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SearchListOption.css'
import { MdSearch } from 'react-icons/md'
import SearchListItem from './SerchList-Item'

const CreateSelectFailureLocation = array => {
  let tmp = []
  let ComponentsName = []
  for (let i = 0; i < array.length; i++) {
    let uniqdata = array[i].FailureLocation.trim()
    tmp.push(uniqdata)
  }
  ComponentsName = _.uniq(tmp)
  return ComponentsName
}

const SelectedUserData = (array, userSelect) => {
  const userdata = []
  for (let i = 0; i < array.length; i++) {
    let tmp = new String(array[i].ComponentTypeName)
    tmp = tmp.trim()
    if (userSelect === tmp) {
      userdata.push(array[i])
    }
  }
  return userdata
}

const SelectedCheckboxUserView = (Selectedarray, FailureOptionData) => {
  let p = FailureOptionData
  p = p.trim()
  const array = []
  for (let i = 0; i < Selectedarray.length; i++) {
    let data = Selectedarray[i].FailureLocation
    data = data.trim()
    if (p == data) {
      array.push(Selectedarray[i])
    }
  }
  return array
}

const SerchListOption = ({ SelectedValue, pmbddata, onDisplay }) => {
  let userSelect = SelectedValue
  userSelect = userSelect.trim()

  console.log(userSelect)

  // 선택한 컴포넌트name

  const [displaybutton, setdisplaybutton] = useState(false)
  const [display, Setdisplay] = useState(false)
  const [UserSelectcheckbox, SetUserSelectcheckbox] = useState('')
  const [UserSelectedSummit, SetUserSelectedSummit] = useState(false)
  const [UserSelectedCheckData, SetUserSelectedCheckData] = useState([])

  useEffect(
    () => {
      if (userSelect == 'default') {
        Setdisplay(false)
      } else {
        Setdisplay(true)
      }
    },
    [userSelect]
  )

  const totaldata = _.map(pmbddata)
  const Selecteddata = SelectedUserData(totaldata, userSelect)
  const FailureOptionData = CreateSelectFailureLocation(Selecteddata)
  // FailureOptiondata를가짐

  const onClick = () => {
    Setdisplay(false)
    setdisplaybutton(false)

    const tmp = SelectedCheckboxUserView(Selecteddata, UserSelectcheckbox)

    SetUserSelectedCheckData([...tmp])
    SetUserSelectedSummit(true)
  }

  const onChange = useCallback(
    e => {
      const value = e.target.parentNode.children[1].innerText
      setdisplaybutton(true)
      SetUserSelectcheckbox(value)
    },
    [UserSelectcheckbox, displaybutton]
  )

  const onButtonClick = () => {
    SetUserSelectedSummit(false)
    Setdisplay(true)
  }

  const onComponentButtonClick = () => {
    onDisplay()
  }

  return (
    <>
      {UserSelectedSummit ? (
        <button onClick={onButtonClick}>다른 FailureOption 데이터 보기</button>
      ) : (
        <></>
      )}
      {UserSelectedSummit ? (
        <button onClick={onComponentButtonClick}>
          다른 컴포넌트 데이터 보기
        </button>
      ) : (
        <></>
      )}

      {UserSelectedSummit ? (
        UserSelectedCheckData.map((value, index) => (
          <SearchListItem key={index} items={value} />
        ))
      ) : (
        <></>
      )}
      {display ? (
        <div className='row'>
          <div className='col'>
            <span>
              <strong className='Failure-title'>
                Failure Location({SelectedValue})
              </strong>
            </span>

            {displaybutton ? (
              <button className='btn btn-default' type='button'>
                <MdSearch size={50} color='gray' onClick={onClick} />
              </button>
            ) : (
              <></>
            )}
            <div className='Failure-list'>
              {FailureOptionData.map((value, index) => (
                <div className='custom-control custom-radio'>
                  <input
                    type='radio'
                    name='jb-radio'
                    id={`jb-radio-${index}`}
                    className='custom-control-input'
                    onChange={onChange}
                  />
                  <label
                    className='custom-control-label'
                    for={`jb-radio-${index}`}
                  >
                    {value}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default SerchListOption
