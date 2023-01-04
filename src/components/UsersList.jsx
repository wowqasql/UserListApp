import { TransitionGroup, CSSTransition } from "react-transition-group"
import UserItem from "./UserItem"

const Users = ({ users, removeUser, EditUser }) => {
console.log('rerender USERLIST')
  if (users.length) {
    return (
      <div>
        <TransitionGroup className="todo-list">
          {users.map(user => (
            <CSSTransition
            key={user.id}
            timeout={500}
            classNames='item'
            >
          <UserItem user={user} key={user.id} removeUser={removeUser} EditUser={EditUser} />
            </CSSTransition>
          ))}
        </TransitionGroup>

      </div>)
  }
  else {
    return (<div className="user">
      <h2>Нет пользователей</h2>
    </div>)
  }

}

export default Users