# React Hooks with Typescript. David Gray

https://www.youtube.com/watch?v=2NEV_M7NN6k

1. Install React Typescript app
   npx create-react-app my-app --template typescript

- trick to change the same word:

1. highlight the word
2. command + d
3. Make the change

#

2. useEffect. It does not need to use typescript because is a side effect (it does not return a value)

# add object to an array

https://www.geeksforgeeks.org/add-an-object-to-an-array-in-typescript/

**Note**
I did not followed this tutorial. I read the offitial docs instead. It was a bit challange to fig it put how to use the props on the components, ex:
interface FormProps {
handleSubmit: any;
handleTextInput: any;
name: string;
addUser: any;
children?: React.ReactNode;
}

const Form = ({handleSubmit, handleTextInput, name, addUser}:FormProps) => {
}

Skills:

- Forms
- Re use components: UserCard, UserList
- Counter
- Logo (image)
- Hooks (useState), Ex:
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<User>(user1);
  const [users, setUsers] = useState<User[]>([user1]);

- typescript function:
  const addOne = ():void => setCount(count + 1);
