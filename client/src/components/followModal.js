import React, {useState, useContext} from 'react'
import Axios from "axios";

import {Modal, Button, ModalHeader, ModalBody, ModalFooter, Alert} from 'reactstrap'
import UserContext from '../utils/UserContext';



function FollowModal({name, bio, id}){
  const { user } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [showAlert, setShowAlert] =useState(false);

  const addAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  const followUser =() => { 
    
    console.log("fired", id)
    return Axios.put("/api/users/follow", {following:id, followers:user._id}); 
    addAlert()
}
    return (   
       <div>
      <Button color="primary" onClick={toggle}>{name}</Button>
      <Modal isOpen={modal} toggle={toggle} >
    <ModalHeader toggle={toggle} charCode="X">{name}</ModalHeader>
        <ModalBody>
        {bio}
        {showAlert? (<Alert color="success"> Followed! </Alert>): null}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={followUser}>Follow</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
          
        </ModalFooter>
      </Modal>
    </div>
    )

}
export default FollowModal
