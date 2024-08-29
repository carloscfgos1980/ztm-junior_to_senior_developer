import React from 'react';
import { useState } from "react";


const Profile = ({toggleModal, isProfileOpen, user, loadUser}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [pet, setPet] = useState('');
    console.log('name:', name)

    const onFormChange = (event) => {
         console.log('event.target.name:', event.target.value)
        switch(event.target.name) {
            case 'user-name':
                setName(event.target.value)
                break;
            case 'user-age':
                setAge(event.target.value)
                break;
            case 'user-pet':
                setPet(event.target.value)
                break;
            default:
                return
        }
    }

    const onProfileUpdate = (data) => {
        fetch(`http://localhost:3000/profile/${user.id}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({formInput: data})
        }). then(resp => {
            toggleModal();
            loadUser(...user, ...data)
        }). catch(err => {
            console.log(err)
        })
    }
    return (
      <article>
        <main className="pa4 black-80">
          <div className="measure">
            <div>
                <h1>{user.name}</h1>
                <h3>{`Imgage Submitted:${user.entries}`}</h3>
                <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
            </div>
            <form>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6 tl" htmlFor='user-name'>Name</label>
                    <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    placeholder='enter new new name...'
                    type="text"
                    name='user-name'
                    onChange={onFormChange}
                />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6 tl" htmlFor="user-age">Age</label>
                    <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    placeholder={user.age}
                    type="text"
                    name="user-age"
                    id="age"
                    onChange={onFormChange}
                    />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6 tl" htmlFor="user-pet">Pet</label>
                    <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    placeholder={user.pet}
                    type="text"
                    name="user-pet"
                    id="pet"
                    onChange={onFormChange}
                    />
                </div>
            </form>
            <div className='mt4' style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'
                onClick={() => onProfileUpdate ({name, age, pet})}
                >
                    Save
                </button>
                <button 
                    className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
                    onClick={toggleModal}                
                >
                    Cancel
                </button>
            </div>
          </div>
        </main>
      </article>
    )
}

export default Profile;