import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Shelter } from '../models/Shelter';

// export const fetchShelters = createAsyncThunk('shelters/fetchShelters', async () => { //TODO
//   const result = [];
//   await fetch('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters')
//     .then(res => res.json())
//     .then(
//       (result) => {
//         result = result.shelters;
//       },
//       (error) => {
//         console.log(error);
//       }
//     )
//   return result;
// })

export interface ShelterState {
  shelters: Shelter[],
  selectedShelter: string | undefined,
  value: number
}

const initialState: ShelterState = {
  shelters: [],
  selectedShelter: undefined,
  value: 0
}

export const sheltersSlice = createSlice({
  name: 'shelters',
  initialState,
  reducers: {
    setShelters: (state, action) => {
      state.shelters = action.payload;
    },
    setShelterInfo: (state, action) => {
      state.selectedShelter = action.payload.selectedShelter;
      state.value = action.payload.value
    }
  },
  // extraReducers(builder) { //TODO
  //   builder
  //     .addCase(fetchShelters.fulfilled, (state, action) => {
  //       state = action.payload
  //     })
  // }
});

export const { setShelters, setShelterInfo } = sheltersSlice.actions;

export default sheltersSlice.reducer;