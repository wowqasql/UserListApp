import React, { useState } from 'react'

const EditUser = (props) => {

  const [addNewUser, setAddNewUser] = useState({name: '', username:'', age:'',isAgree: ''})
  console.log('rerenderEDIT')
  const onEditUser = () => {
    const newUser = {
      ...addNewUser,
      id: props.user.id
    }
    props.EditUser(newUser)
    setAddNewUser({name: '', username:'', age:'',isAgree: ''})
    props.setEdit({editUser: false})

  }
  return (
    <form>
      <input type='text' placeholder='Имя' value={addNewUser.name} onChange={e => setAddNewUser({...addNewUser, name: e.target.value})}/>
      <input type='text' placeholder='О себе' value={addNewUser.username} onChange={e => setAddNewUser({...addNewUser, username: e.target.value})}/>
      <input type='text' placeholder='Возраст' value={addNewUser.age} onChange={e => setAddNewUser({...addNewUser, age: e.target.value})}/>

      <label htmlFor="isAgree" onChange={e => setAddNewUser({...addNewUser, isAgree: e.target.checked})}>Согласен</label>
      <input type="checkbox" id='isAgree' />
      <button type="button" onClick={onEditUser}>Изменить</button>
    </form>
  )
}

export default EditUser