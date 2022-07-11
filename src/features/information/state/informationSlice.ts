import { createSlice } from '@reduxjs/toolkit';
import { Information } from '../models/Information';

export interface InformationState {
    information: Information
}

const initialState: InformationState = {
    information: {
        firstName: '',
        lastName: '',
        email: ''
    }
}

export const informationSlice = createSlice({
    name: 'information',
    initialState,
    reducers: {
        setInformation: (state, action) => {
            state.information = action.payload;
        },
        getInformation: (state) => {
            return state;
        }
    }
});

export const { setInformation } = informationSlice.actions;

export default informationSlice.reducer;