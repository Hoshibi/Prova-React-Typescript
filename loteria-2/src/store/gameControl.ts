import { createSlice } from '@reduxjs/toolkit';

const initialGameState = {
  gameSelected: 0,
};

const gameSlice = createSlice({
  name: 'gameControl',
  initialState: initialGameState,
  reducers: {
    setGame(state, action) {
      state.gameSelected = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;