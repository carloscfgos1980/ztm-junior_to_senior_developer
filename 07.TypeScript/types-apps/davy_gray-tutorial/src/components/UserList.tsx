import { User } from "../containers/App";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
  children?: React.ReactNode;
}


const UserList = ({users}:UserListProps) => {
    return (
        <div className="myUL">
            <ul className="center-display">
                {users.map(user => (
                <UserCard user={user}/>
                ))}
            </ul>
        </div>
    )
}

export default UserList