interface FormProps {
  handleSubmit: any;
  handleTextInput: any;
  name: string;
  addUser: any;
  children?: React.ReactNode;
}


const Form = ({handleSubmit, handleTextInput, name, addUser}:FormProps) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={name}
                placeholder="Enter your text here..."
                onChange={handleTextInput} />
            </form> 
            <div className="space">
            <button 
            type="submit" 
            value={name}
            onClick={()=>addUser()}>Add User</button>
            </div>
        </div>
    )
}

export default Form