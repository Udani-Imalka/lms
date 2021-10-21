import { createSlice } from '@reduxjs/toolkit';


export const membersSlice = createSlice({
    name: 'members',
    initialState: {
      value: null,
    },
    reducers: {
      setMembers: (state,action) => {
          state.value = action.payload;
      },
      updateMember: (state,action) => {
        const updatedMembers = [...state.value];
        const id = action.payload.id;
        const index= updatedMembers.findIndex(
          (element) => element.id === id
        );
        updatedMembers.splice(index, 1,action.payload);
        state.value = updatedMembers;
      },
      addMember: (state,action) => {
        const updatedMembers = [...state.value];
        updatedMembers.push(action.payload);
        state.value = updatedMembers;
      },
      deleteMember: (state,action) => {
        const updatedMembers = [...state.value];
        const id = action.payload;
        const index= updatedMembers.findIndex(
          (element) => element.id === id
        );
        updatedMembers.splice(index, 1);
        state.value = updatedMembers;
      },
    },
  })

  export const { setMembers, updateMember , addMember, deleteMember } = membersSlice.actions;

export default membersSlice.reducer;