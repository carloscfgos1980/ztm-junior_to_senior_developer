import {useState, useEffect} from 'react';
import './App.css';
import AddNumbers from '../components/AddNumbers';
import Form from '../components/Form';
import UserList from '../components/UserList';
import Header from '../components/Header';


export type User = {
    id: number | null,
    username: string | null
  }


function App() {


  const user1: User = {
    id: 0,
    username: 'Carlos'
  }

  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<User>(user1);
  const [users, setUsers] = useState<User[]>([user1]);

  useEffect(()=>{
    console.log('mounting');
    console.log('Users:', users)
    return () => console.log('unmounting')
  }, [users])

    const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  const addOne = ():void => setCount(count + 1);
  const decOne = ():void => setCount(count - 1);

  const handleTextInput = (e: any):void => {
    setName(e.target.value)
    setUser({
      id: users?.length,
      username: name
    })
    // console.log('user:', user)
  };

  const addUser = ():void => {
    console.log('users:', users)
    // users?.push(user)
    setUsers(users => [...users, user]);
    setName('');
  }

  return (
    <div className="App">
      <Header/>
      <AddNumbers count={count} addOne={addOne} decOne={decOne}/>
      <Form handleSubmit={handleSubmit} handleTextInput={handleTextInput} name={name} addUser={addUser}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
