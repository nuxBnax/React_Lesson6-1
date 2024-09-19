import { createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: "counter",
	initialState: {
		count: 0
	},
	reducers: {
		increment: (state) => { state.count++; },
		decrement: (state) => { state.count--; }
	}
});

export const {increment, decrement} = counterSlice.actions;
console.log(increment, decrement);
export default counterSlice.reducer;