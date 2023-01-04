import React, { useState } from 'react';

const AddUser = (props) => {
  

  const [addNewUser, setAddNewUser] = useState({name: '', username:'', age:'',isAgree: ''})
  console.log('rerenderADD')
  const onAdd = () => {
    const newUser = {
      ...addNewUser,
      id: props.users.length + 1,
    }
    props.onAddNewUser(newUser)
    setAddNewUser({name: '', username:'', age:'',isAgree: ''})

  }


  return (
    <form>
      <h3>Добавить пользователя</h3>
      <input type='text' placeholder='Имя' value={addNewUser.name} onChange={e => setAddNewUser({...addNewUser, name: e.target.value})}/>
      <input type='text' placeholder='О себе' value={addNewUser.username} onChange={e => setAddNewUser({...addNewUser, username: e.target.value})}/>
      <input type='text' placeholder='Возраст' value={addNewUser.age} onChange={e => setAddNewUser({...addNewUser, age: e.target.value})}/>

      <label htmlFor="isAgree" onChange={e => setAddNewUser({...addNewUser, isAgree: e.target.checked})}>Согласен</label>
      <input type="checkbox" id='isAgree' />
      <button type="button" onClick={onAdd}>Добавить</button>
    </form>

  )
}

export default AddUser

