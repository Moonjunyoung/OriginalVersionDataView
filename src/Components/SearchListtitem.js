import React, { useState } from 'react'

const SearchListitem = ({ index, value }) => {
  const [name, setname] = useState(value)
  const [Index, setIndex] = useState(index)

  return (
    <option key={Index} value={Index}>
      {name}
    </option>
  )
}

export default SearchListitem
