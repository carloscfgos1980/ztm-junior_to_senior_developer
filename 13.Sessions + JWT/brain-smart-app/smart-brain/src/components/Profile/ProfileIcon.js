import React from "react";
import batman_vatar from './batman_avatar.webp'; 


class ProfileIcon extends React.Component{
    constructor(props){
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle(){
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render(){
        return (
            <div>
                <img
                    src={batman_vatar}
                    className="br-100 ba h3 w3 dib" alt="avatar"
                />
            </div>
        )
    }
}

export default ProfileIcon