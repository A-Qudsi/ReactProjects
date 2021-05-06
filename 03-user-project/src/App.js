import React, {useState, Fragment} from 'react';
import NewUser from './components/Users/NewUser'
import UsersLists from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    })
  }

  return (
    <Fragment>
      <NewUser onAddUser={addUserHandler} />
      <UsersLists users={usersList} />
    </ Fragment>
  );
}

export default App;
