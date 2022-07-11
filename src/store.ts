import { configureStore } from '@reduxjs/toolkit';
import informationSlice from './features/information/state/informationSlice';
import shelterSlice from './features/shelter/state/shelterSlice';

export default configureStore({
    reducer: {
        shelters: shelterSlice,
        information: informationSlice
    }
});