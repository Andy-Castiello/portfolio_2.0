import { createSlice } from '@reduxjs/toolkit';

type MainStateType = {
	display: 'normal' | 'contactResult';
};

const initialState: MainStateType = {
	display: 'normal',
};

const mainSlice = createSlice({
	name: 'mainSlice',
	initialState,
	reducers: {
		setMainDisplay: (state, action) => {
			state.display = action.payload;
		},
	},
});

export default mainSlice.reducer;

export const { setMainDisplay } = mainSlice.actions;
