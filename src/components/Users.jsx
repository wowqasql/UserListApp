import React, { useEffect, useState } from "react"
import AddUser from "./AddUser"
import Header from "./Header"
import UsersList from "./UsersList"
import FilterUsers from "./FilterUsers"
import { useSort, useSearchAndSort } from "../hooks/useUsers"

const url = "https://jsonplaceholder.typicode.com/users"

const Users = () => {

const [users, setUsers] = useState([{id: '', email:'', name: '', username: '', age: '', isAgree: ''}])
const [filter, setFilter] = useState({search:'', sort:''})
const [isUserLoading, setIsUserLoading] = useState(false)



useEffect(() =>{ 
  setIsUserLoading(true)
  fetch(url).then(response => response.json().then(json => setUsers(json)))
  setIsUserLoading(false)
},[])

  const onAddNewUser = (newUser) => {
    setUsers([...users, newUser])
 }

  const removeUser = (user) => {
    setUsers(users.filter(u => u.id !== user.id))
  }

  const EditUser = (user) => {
    console.log(user)
    users[user.id - 1] = user
    setUsers([...users])
  }

  const sortUsers = (sortValue) => {
    setFilter({...filter, sort: sortValue})
  }

const sortedUsers = useSort(filter.sort, users)
const searchAndSortUsers = useSearchAndSort(filter.sort, users, filter.search)


  return (
    <div>
      <Header />
      <FilterUsers filter={filter} setFilter={setFilter} sortUsers={sortUsers} />
      <main>
        {isUserLoading
          ? <h1>Идет загрузка</h1>
          : <UsersList users={searchAndSortUsers} removeUser={removeUser} EditUser={EditUser} />
        }
      </main>
      <aside>
        <AddUser users={users} onAddNewUser={onAddNewUser} />
      </aside>
    </div>
  )
}


export default Users
