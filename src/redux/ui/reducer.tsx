import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
    loading: boolean;
    isLight: boolean;
}

const initialState: UIState = {
    loading: false,
    isLight: false,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setIsLight: (state, action: PayloadAction<boolean>) => {
            state.isLight = action.payload;
        },
    },
});

export const { setLoading, setIsLight } = uiSlice.actions;

export default uiSlice.reducer;
