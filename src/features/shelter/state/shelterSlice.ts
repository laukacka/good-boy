import { createSlice } from '@reduxjs/toolkit';
import { Shelter } from '../models/Shelter';

export interface ShelterState {
  shelters: Shelter[],
  selectedShelter: number | undefined,
  value: string
}

const initialState: ShelterState = {
  shelters: [],
  selectedShelter: undefined,
  value: '0'
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
      state.value = action.payload.value;
    },
    getShelterInfo: (state) => {
      return state;
    }
  }
});

export const { setShelters, setShelterInfo } = sheltersSlice.actions;

export default sheltersSlice.reducer;