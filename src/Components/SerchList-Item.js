import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
const SearchListItem = ({ items}) => {
  const [item, setitem] = useState(items)

  useEffect(
    () => {
      setitem(items)
    },
    [item]
  )
  

  return (
    <table class='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>ComponentTypeID</th>
          <th scope='col'>Counter</th>
          <th scope='col'>ComponentTypeName</th>
          <th scope='col'>LastChangedInVersion</th>
          <th scope='col'>Failure Location</th>

          <th scope='col'>Degradation Mechanism</th>
          <th scope='col'>Degradation Influence</th>

          <th scope='col'>Graphics</th>
          <th scope='col'>Degradation Progression</th>

          <th scope='col'>Failure Timing</th>
          <th scope='col'>Time Code</th>
          <th scope='col'>Discovery Methods</th>

          <th scope='col'>CommonDegradation</th>
          <th scope='col'>RelativeFrequency</th>

          <th scope='col'>Strength</th>
          <th scope='col'>Def Color</th>
          <th scope='col'>NewVulnerability</th>
          <th scope='col'>Repair Time</th>
          <th scope='col'>Fail Weight</th>
          <th scope='col'>Inst Col</th>
          <th scope='col'>Def Fail Weight</th>
          <th scope='col'>Task Metric</th>
          <th scope='col'>Attenuation</th>
          <th scope='col'>AddToList</th>
        </tr>
      </thead>
      <tbody>
        {
          <tr>
            <th scope='row'>{item.ComponentTypeID}</th>
            <td>{item.Counter}</td>
            <td>{item.ComponentTypeName}}</td>

            <td>{item.LastChangedInVersion}</td>
            <td>{item.FailureLocation}</td>

            <td>{item.DegradationMechanism}</td>
            <td>{item.DegradationInfluence}</td>

            <td>{item.Graphics}</td>
            <td>{item.DegradationProgression}</td>

            <td>{item.FailureTiming}</td>
            <td>{item.TimeCode}</td>
            <td>{item.DiscoveryMethods}</td>
            <td>{item.CommonDegradation}</td>
            <td>{item.RelativeFrequency}</td>

            <td>{item.Strength}</td>
            <td>{item.DefColor}</td>
            <td>{item.NewVulnerability}</td>
            <td>{item.RepairTime}</td>
            <td>{item.FailWeight}</td>
            <td>{item.InstCol}</td>
            <td>{item.DefFailWeight}</td>
            <td>{item.TaskMetric}</td>
            <td>{item.Attenuation}</td>
            <td>{item.AddToList}</td>
          </tr>
        }
      </tbody>
    </table>
  )
}

export default SearchListItem
