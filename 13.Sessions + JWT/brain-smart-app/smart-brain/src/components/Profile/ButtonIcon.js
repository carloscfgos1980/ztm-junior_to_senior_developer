import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProfileIcon from './ProfileIcon';



const ButtonIcon = ({ onRouteChange, direction, ...args }) => {
      const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);


    return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>
            <ProfileIcon/>
        </DropdownToggle>
        <DropdownMenu {...args} 
        className='b--transparent shadow-5' 
        style={{marginTop: '20px', backgroundColor: 'rgba(255, 255,255,0.5'}}>
          <DropdownItem>View Profile</DropdownItem>
            <DropdownItem onClick={() => onRouteChange('signout')}>
                Sign Out
            </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    )
}

ButtonIcon.propTypes = {
  direction: PropTypes.string,
};

export default ButtonIcon;