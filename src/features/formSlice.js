import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    formStatus: true,
    hasSubmitted: false  
  },
  reducers: {
    setFormStatus: (state, action) => {
      state.formStatus = action.payload;
    },
    setHasSubmitted: (state, action) => {
      state.hasSubmitted = action.payload;
    }
  }
});

export const { setFormStatus, setHasSubmitted } = formSlice.actions;
export default formSlice.reducer;
