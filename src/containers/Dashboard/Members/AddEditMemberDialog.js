import React, { useState } from "react";

import {
  Button,
  Container,
  FlexRow,
} from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";

import Input from "../../../components/input";

export default function AddEditMemberDialog({
  isEdit = false,
  handleClose,
  show,
  data,
}) {
  const [name, setName] = useState(
    isEdit && data && data.name ? data.name : ""
  );
  const [nic, setNic] = useState(isEdit && data && data.nic ? data.nic : "");
  const [address, setAddress] = useState(
    isEdit && data && data.address ? data.address : ""
  );
  const [contactNumber, setContactNumber] = useState(
    isEdit && data && data.contactNumber ? data.contactNumber : ""
  );

  const clearInputs = () => {
    setName("");
    setNic("");
    setAddress("");
    setContactNumber("");
  };
  const sendDone = () => {
    if (name !== "" && nic !== "" && address !== "" && contactNumber !== "") {
      const data = { name, nic, address, contactNumber };
      clearInputs();
      handleClose(true, data);
    } else if (name === "") {
      window.alert(`Please enter a name to ${isEdit ? "edit" : "add"}.`);
    } else if (nic === "") {
      window.alert(`Please enter a nic to ${isEdit ? "edit" : "add"}.`);
    } else if (address === "") {
      window.alert(`Please enter a address to ${isEdit ? "edit" : "add"}.`);
    } else {
      window.alert(
        `Please enter the contact number of the member to ${
          isEdit ? "edit" : "add"
        }.`
      );
    }
  };

  const sendCancel = () => {
    !isEdit && clearInputs();
    handleClose(false, null);
  };

  return (
    <Modal show={show}>
      <DialogBox>
        <h2>{`${isEdit ? "Edit" : "Add"} member`}</h2>
        <p>Enter the below details of the Member</p>
        <Container alignItems="center" disableFullWidth>
          <Input
            lable="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            required
            minLength="1"
          />
          <Input
            lable="NIC"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            type="text"
            id="nic"
            name="nic"
            required
            minLength="1"
          />
          <Input
            lable="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            id="address"
            name="address"
            required
            minLength="1"
          />
          <Input
            lable="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            type="text"
            id="contactNumber"
            name="contactNumber"
            required
            minLength="1"
          />
        </Container>
        <FlexRow>
          <Button onClick={sendDone}>Done</Button>
          <Button onClick={sendCancel} color="secondary">
            Cancel
          </Button>
        </FlexRow>
      </DialogBox>
    </Modal>
  );
}
