import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface gameDetail {
  num: string;
  game: number;
  price: number;
}

interface purchaseDetail {
  "id": number,
	"numbers": Array<number>
}

interface initialGameStateProps {
  gameSelected: number;
  indexGameSelected: number;
  priceGameSelected: number;
  selectedNumberList: Array<number>;
  randomNumberList: Array<number>;
  selectedNumberString: Array<string>;
  gamesToCart: Array<gameDetail>;
  totalPrice: number;
  savePurchaseList: Array<purchaseDetail>;
  modalOpen: boolean;
  permissionToAddCart: boolean;
  gameToFilter: Array<string>
}

const initialGameState: initialGameStateProps = {
  gameSelected: 0,
  indexGameSelected: -1,
  priceGameSelected: 0,
  selectedNumberList: [],
  randomNumberList: [],
  selectedNumberString: [],
  gamesToCart: [],
  totalPrice: 0,
  savePurchaseList: [],
  modalOpen: false,
  permissionToAddCart: false,
  gameToFilter: [],
};

const gameSlice = createSlice({
  name: 'gameControl',
  initialState: initialGameState,
  reducers: {
    setGame(state, action) {
      let dados = action.payload;
      state.gameSelected = dados[0];
      state.indexGameSelected = dados[1];
      state.priceGameSelected = dados[2];
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
    addToCart(state) {
      let aux = [...state.selectedNumberList];
      state.selectedNumberString = [];

      let list = [...state.gamesToCart];
      state.gamesToCart = [];

      aux.sort((a, b) => { return a - b; } );
      for(var i=0 ; i < aux.length; i++){
        aux[i] < 10 && state.selectedNumberString.push(`0${aux[i]}`);
        aux[i] >= 10 && state.selectedNumberString.push(`${aux[i]}`);
      }
      
      let num = [...state.selectedNumberString].join(', ').toString();
      let game = state.indexGameSelected;
      let price = state.priceGameSelected;

      if(list.length === 0){
        let data = {
          num : num,
          game : game,
          price: price,
        }
  
        list.push(data);
      }else{
        var have = 0;
        for(var i = 0; i < list.length; i++){
          if(num === list[i].num){ have++; }
        }

        if(have>0){ 
          state.modalOpen = true; 
        }else{
          let data = {
            num : num,
            game : game,
            price: price,
          }
          list.push(data);
        }
      }

      state.gamesToCart = [...list];

      state.totalPrice = 0;
      list.map((item) => {
        return state.totalPrice = state.totalPrice + item.price; 
        ;
      })
    },
    deleteToCart(state, action) {
      let list = [...state.gamesToCart];

      for(var i=0 ; i<list.length; i++){
        if(list[i].num === action.payload){
          var index = list[i].num.indexOf(action.payload);
          if (index > -1) {
            list.splice(i, 1);
          }
        }
      }
      state.gamesToCart = [...list];
      
      state.totalPrice = 0;
      list.map((item) => {
        return state.totalPrice = state.totalPrice + item.price; 
        ;
      })

    },
    savePurchase(state){
      let aux = [...state.gamesToCart];

      if(aux.length === 0 ){
        toast.warn("Carrinho Vazio !", {position: "top-right", autoClose: 10000, closeOnClick: true, pauseOnHover: true});
      }else{
        let list:Array<purchaseDetail> = [];

        aux.map((item) => {
          let arr = item.num.split(', ');
          let arrList = [];

          for (var i = 0; i < arr.length; i++)
            arrList.push(parseInt(arr[i]));

          list.push(
            {
              "id": item.game+1,
              "numbers": arrList,
            }
          )
          state.savePurchaseList = list;
          return list
        })
      }
    },
    cleanCart(state){
      state.gamesToCart = [];
      state.totalPrice = 0;
    },
    modalState(state,action){
      state.modalOpen = action.payload;
    },
    addPermission(state,action){
      state.permissionToAddCart = action.payload;
    },
    addToCartAfterPermission(state){
      let aux = [...state.selectedNumberList];

      let list = [...state.gamesToCart];
      state.gamesToCart = [];

      aux.sort((a, b) => { return a - b; } );
      for(var i=0 ; i < aux.length; i++){
        aux[i] < 10 && state.selectedNumberString.push(`0${aux[i]}`);
        aux[i] >= 10 && state.selectedNumberString.push(`${aux[i]}`);
      }
      
      let num = [...state.selectedNumberString].join(', ').toString();
      let game = state.indexGameSelected;
      let price = state.priceGameSelected;

      let data = {
        num : num,
        game : game,
        price: price,
      }

      list.push(data);
      state.gamesToCart = [...list];

      state.totalPrice = 0;
      list.map((item) => {
        return state.totalPrice = state.totalPrice + item.price; 
        ;
      })
    },
    addGameToFilter(state,action){
      state.gameToFilter.push(action.payload);
    },
    removeGameToFilter(state,action){
      let arr = [...state.gameToFilter]
      var index = arr.indexOf(action.payload);
      if (index > -1) {
        arr.splice(index, 1);
      }
      state.gameToFilter = arr;
    },
    clearGameToFilter(state){
      state.gameToFilter = [];
    }
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;