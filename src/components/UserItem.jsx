import { useState } from 'react'
import { IoBackspaceOutline, IoPencilOutline } from 'react-icons/io5'
import EditUser from './EditUser'


const UserItem = (props) => {
console.log('rerenderUSERITEM')
const [edit, setEdit] = useState({editUser: false})

  return (
    <div className="user" >
      <IoBackspaceOutline className='delete-icon' onClick={() => props.removeUser(props.user)} />
      <IoPencilOutline className='edit-icon' onClick={() => setEdit({editUser: !edit.editUser})} />
        <h3>{props.user.name} {props.user.username}</h3>
        <p>{props.user.email}</p>
        {/* <p>{props.user.address.city}</p> */}
        {edit.editUser && <EditUser user={props.user} EditUser={props.EditUser} edit={edit} setEdit={setEdit}/>}
    </div>
  )
} 
// Если form.editForm - true, тогда(&&) - выводим <AddUser />. Иначе просто не выводим

export default UserItem