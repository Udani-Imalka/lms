import { Button,FlexRow } from "./CommonComponents";
import { Modal,DialogBox } from "./Modal";

export default function ConfirmationDialog({
    handleClose, show, headerText, detailText
}) {
    const sendYes = () => handleClose(true);

    const sendNo = () => handleClose(false);

    return (
        <Modal show= {show}>
            <DialogBox>
                <h2>{headerText}</h2>
                <p>{detailText}</p>
                <FlexRow>
                    <Button onClick={sendYes}>Yes</Button>
                    <Button onClick={sendNo}>No</Button>
                </FlexRow>
            </DialogBox>
        </Modal>
    );
}