import { configureStore } from '@reduxjs/toolkit';
import shelterSlice from './features/shelterSelect/state/shelterSlice';

export default configureStore({
    reducer: {
        shelters: shelterSlice
    }
});