import React, { useState } from "react";

import {
  Button,
  Container,
  FlexRow,
} from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";

import Input from "../../../components/input";
import Selector from "../../../components/Selector";

export default function AddEditMemberDialog({
  isEdit = false,
  handleClose,
  show,
  data,
}) {
  const [firstName, setFirstName] = useState(
    isEdit && data && data.firstName ? data.firstName : ""
  );
  const [lastName, setLastName] = useState(
    isEdit && data && data.lastName ? data.lastName : ""
  );
  const [nic, setNic] = useState(isEdit && data && data.nic ? data.nic : "");
  const [address, setAddress] = useState(
    isEdit && data && data.address ? data.address : ""
  );
  const [contactNumber, setContactNumber] = useState(
    isEdit && data && data.contactNumber ? data.contactNumber : ""
  );
  const [userType, setUserType] = useState(
    isEdit && data && data.userType ? data.userType : ""
  );

  const clearInputs = () => {
    setFirstName("");
    setLastName("");
    setNic("");
    setAddress("");
    setContactNumber("");
    setUserType("");
  };
  const sendDone = () => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      nic !== "" &&
      address !== "" &&
      contactNumber !== "" &&
      userType !== ""
    ) {
      const data = {
        firstName,
        lastName,
        nic,
        address,
        contactNumber,
        userType,
      };
      clearInputs();
      handleClose(true, data);
    } else if (firstName === "") {
      window.alert(`Please enter a firstName to ${isEdit ? "edit" : "add"}.`);
    } else if (lastName === "") {
      window.alert(`Please enter a lastName to ${isEdit ? "edit" : "add"}.`);
    } else if (nic === "") {
      window.alert(`Please enter a nic to ${isEdit ? "edit" : "add"}.`);
    } else if (address === "") {
      window.alert(`Please enter a address to ${isEdit ? "edit" : "add"}.`);
    } else if (contactNumber === "") {
      window.alert(
        `Please enter a contactNumber to ${isEdit ? "edit" : "add"}.`
      );
    } else {
      window.alert(
        `Please enter the user Type of the member to ${
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
            lable="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="firstName"
            required
            minLength="1"
          />
          <Input
            lable="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lastName"
            name="lastName"
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
          <Selector
            lable={"User Type"}
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            id="userType"
            name="userType"
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
