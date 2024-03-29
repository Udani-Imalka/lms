import React, { useState } from "react";

import {
    Button,
    Container,
    FlexRow,
    
}from "../../../components/CommonComponents";
import { Modal,DialogBox } from "../../../components/Modal";


import Input from "../../../components/input";

export default function AddEditBookDialog ({isEdit =false, handleClose, show, data}){
    const [title,setTitle] =useState(isEdit && data && data.title ? data.title : "");
    const [author,setAuthor] = useState(isEdit && data && data.author ? data.author : "");

    const clearInputs = ()=> {
        setTitle("")
        setAuthor("")
    }
    const sendDone = () => {
        if(title !== "" && author !== "") {
            const data = { title,author}
            clearInputs();
            handleClose(true, data);
        } else if (title === "") {
            window.alert(`Please enter a title to ${isEdit ? "edit" : "add"}.`);
        } else {
            window.alert(`Please enter the author of the book to ${isEdit ? "edit" : "add"}.`);
        }
        
    };

    const sendCancel = () => {
        !isEdit && clearInputs();
        handleClose(false,null);
    };

    return (
        <Modal show={show}>
            <DialogBox>
                <h2>{`${isEdit ? "Edit" : "Add"} book`}</h2>
                <p>Enter the below details of the book</p>
                <Container alignItems="center" disableFullWidth>
                     <Input 
                        lable="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        id="title"
                        name="title"
                        required
                        minLength="1"
                     />
                     <Input 
                        lable="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text"
                        id="author"
                        name="author"
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
    )
}