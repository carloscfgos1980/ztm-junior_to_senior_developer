import { User } from "../containers/App";


interface UserCardProps {
  user: User;
  children?: React.ReactNode;
}


const UserCard = ({user}: UserCardProps) => {
    return (
        <div>
            <li >
            <span>id: {user.id}</span>
            <span>name: {user.username}</span>
            </li>
        </div>
    )
}

export default UserCard