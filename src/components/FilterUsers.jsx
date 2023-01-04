import React from 'react'
import SortUsers from './SortUsers'

const FilterUsers = ({filter, setFilter, sortUsers}) => {
  return (
    <div>
      <input className="search" value={filter.search} type='text' placeholder='Поиск...' onChange={e => setFilter({...filter, search: e.target.value})} />
      <SortUsers
        sortUsers={sortUsers}
        filter={filter}
        defaultValue='Сортировка по'
        options={[{ value: 'name', name: 'По имени' }, { value: 'username', name: 'По фамилии' }]}
      />
    </div>
  )
}

export default FilterUsers