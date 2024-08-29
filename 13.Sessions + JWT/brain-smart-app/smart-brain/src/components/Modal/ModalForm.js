import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Profile from '../Profile/Profile';
import ProfileIcon from '../Profile/ProfileIcon';

function modalForm({isProfileOpen, toggleModal, user, loadUser}) {
  return (
    <section className="mw5 mw7-ns center pa3 ph5-ns">
      <div className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 centerba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5">
        <div className='mt4' style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <ProfileIcon/>
            <Button color="danger" onClick={toggleModal}>
              Close
            </Button>    
        </div> 
        <div>
        <Profile 
          toggleModal={toggleModal} 
          isProfileOpen={isProfileOpen}
          user={user}
          loadUser={loadUser}
        />

        </div>
      </div>
    </section>
  );
}

export default modalForm;