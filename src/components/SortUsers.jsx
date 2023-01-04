import React from 'react'

const SortUsers = ({filter, defaultValue, options, sortUsers}) => {
  return (
    <select filter={filter.sort} onChange={(e) => sortUsers(e.target.value)}>
      <option disabled>{defaultValue}</option>
      {options.map(option => <option value={option.value} key={option.value} >{option.name}</option>)}
    </select>
  )
}

export default SortUsers