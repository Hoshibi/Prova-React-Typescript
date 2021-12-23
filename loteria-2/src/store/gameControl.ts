import { createSlice } from '@reduxjs/toolkit';

interface initialGameStateProps {
  gameSelected: number,
  indexGameSelected: number,
  selectedNumberList: Array<number>;
  randomNumberList: Array<number>;
}

const initialGameState: initialGameStateProps = {
  gameSelected: 0,
  indexGameSelected: -1,
  selectedNumberList: [],
  randomNumberList: [],
};

const gameSlice = createSlice({
  name: 'gameControl',
  initialState: initialGameState,
  reducers: {
    setGame(state, action) {
      let dados = action.payload;
      state.gameSelected = dados[0];
      state.indexGameSelected = dados[1];
    },
    addNumberToList(state, action) {
      let list = [...state.selectedNumberList];
      state.selectedNumberList = [...list, action.payload]
    },
    removeNumberToList(state, action) {
      let list = [...state.selectedNumberList];
      let listRandom = state.randomNumberList;

      let index = list.indexOf(action.payload);
      let indexListRandom = listRandom.indexOf(action.payload);

      if (index > -1) {
        list.splice(index, 1);
      }
      state.selectedNumberList = [...list];

      if (indexListRandom > -1) {
        listRandom.splice(indexListRandom, 1);
      }
      state.randomNumberList = [...listRandom];
    },
    completeGame(state, action) {
      let list = [...state.selectedNumberList];
      let listRandom = [...state.randomNumberList];
      let data:[range:number, maxNumber: number] = action.payload;

      let min = 1;
      let max = data[0];
      let numeroGerado = 0;

      if(listRandom.length !== 0 ){
        listRandom.map((item) => {
          let index = list.indexOf(item);
          if (index > -1) {
            list.splice(index, 1);
          }
          return list
        })  
      }

      listRandom = [];

      let qtdGerar = data[1] - list.length;
      for(var i=0; i<qtdGerar ; i++){
        min = Math.ceil(min);
        max = Math.floor(max);
        numeroGerado = Math.floor(Math.random() * (max - min + 1)) + min

        // eslint-disable-next-line no-loop-func
        if(!list.includes(numeroGerado)) { 
          list.push(numeroGerado); 
          listRandom = [...listRandom, numeroGerado];
        }
        else { i--; }
      }
      state.selectedNumberList = [...list];
      state.randomNumberList = [...listRandom];
    },
    clearGame(state) {
      state.selectedNumberList = [];
      state.randomNumberList = [];
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;