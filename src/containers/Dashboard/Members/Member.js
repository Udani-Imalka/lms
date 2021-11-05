import React, { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
} from "../../../components/CommonComponents";
import Spinner from "../../../components/Spinner";
import ConfirmationDialog from "../../../components/ConfirmationDialog";
import AddEditMemberDialog from "./AddEditMemberDialog";

import { deleteMember, editMember } from "../../../api/memberAPI";
import UserImage from "../../../shared/userImage.jpeg";

import {
  updateMember,
  deleteMember as deleteMemberStore,
} from "../../../store/membersSlice";

const ContainerInlineTextAlignLeft = styled(ContainerInline)`
  align-items: baseline;
`;

const DD = styled.dd`
  color: brown;
  font-weight: bold;
  width: 350px;
  padding-bottom: 10px;
`;

const Member = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditMemberDialog, setShowEditMemberDialog] = useState(false);

  const books = useSelector((state) => state.books.value);
  const members = useSelector((state) => state.members.value);
  const member = members.find((element) => element.id === id);
  const book = member
      ? books.find((element) => element.burrowedMemberId === member.id)
      : null;

  const dispatch = useDispatch();

  const handleDelete = (confirmation) => {
    if (confirmation) {
      setIsLoading(true);
      deleteMember(member.id)
        .then((response) => {
          if (!response.error) {
            dispatch(deleteMemberStore(response.data));
            handleBackClick();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setShowDeleteConfirmation(false);
  };

  const handleEdit = (confirmed, data) => {
    if (confirmed) {
      setIsLoading(true);
      editMember(member.id, data)
        .then((response) => {
          if (!response.error) {
            dispatch(updateMember(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    setShowEditMemberDialog(false);
  };

  return (
    <>
      <Container>
        <Button onClick={handleBackClick} size={1.5}>
          <IoReturnUpBack />
        </Button>
        {!isLoading && member !== null ? (
          <>
            <FlexRow>
              <ContainerInlineTextAlignLeft>
                <div class="card">
                  <dl>
                    <dt>
                      <b>FIRST NAME -:</b>
                    </dt>
                    <DD>
                      <b>{member.firstName}</b>
                    </DD>
                    <dt>
                      <b>LAST NAME -:</b>
                    </dt>
                    <DD>
                      <b>{member.lastName}</b>
                    </DD>
                    <dt>
                      <b>NIC -:</b>
                    </dt>
                    <DD>{member.nic}</DD>
                    <dt>
                      <b>ADDRESS -:</b>
                    </dt>
                    <DD>{member.address}</DD>
                    <dt>
                      <b>TELE NO. -:</b>
                    </dt>
                    <DD>{member.contactNumber}</DD>
                    <dt>
                      <b>USER TYPE -:</b>
                    </dt>
                    <DD>{member.userType}</DD>
                  </dl>
                </div>
              </ContainerInlineTextAlignLeft>
              <ContainerInline>
                <img src={UserImage} alt="userImage" />
              </ContainerInline>
            </FlexRow>
            <FlexRow>
              <>
                <Button onClick={() => setShowEditMemberDialog(true)}>
                  Edit
                </Button>
                {!book ? (
                <Button
                  color="danger"
                  onClick={() => setShowDeleteConfirmation(true)}
                >
                  Delete
                </Button>
                ) : (
                  ""
                )}
              </>
            </FlexRow>
          </>
        ) : (
          <Spinner />
        )}
      </Container>
      <ConfirmationDialog
        handleClose={handleDelete}
        show={showDeleteConfirmation}
        headerText="Confirm member deletion"
        detailText="Are you sure want to delete this member? This action can't be undone."
      />

      <AddEditMemberDialog
        isEdit={true}
        show={showEditMemberDialog}
        handleClose={handleEdit}
        data={member}
      />
    </>
  );
};

export default Member;
