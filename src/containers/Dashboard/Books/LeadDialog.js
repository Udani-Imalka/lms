import React,{ useState } from "react";

import { Button, FlexRow, Select } from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";

export default function LeadDialog({handleClose, show}){
    const [member, setMember] = useState("");

    const sendConfirm = () => handleClose(true,member);
    const sendCancel = () => handleClose(false, null);

    return(
        <Modal show={show}>
        <DialogBox>
            <h2>Lead book</h2>
            <p>Select member to continue and confirm</p>
            <Select
            id="member-select"
            onChange={(e) => setMember(e.target.value)}
            value={member}
             >
                <option value="">--Please choose the member--</option>
                <option value="member1">member_1</option>
                <option value="member2">member_2</option>
                <option value="member3">member_3</option>
                <option value="member4">member_4</option>
                <option value="member5">member_5</option>
                <option value="member6">member_6</option>
            </Select>
            <FlexRow>
                <Button onClick={sendConfirm}>Confirm</Button>
                <Button onClick={sendCancel} color="secondary">
                    Cancel
                </Button>
            </FlexRow>
        </DialogBox>
        </Modal>
    )
    
}