import carSlice from './cars/carSlice';
import cartSlice from './cart/cartSlice';
import counterSlice from './counter/counterSlice';
import {todosApi} from '../config/todosApi';
import itemsSlice from './items/itemsSlice';
import userSlice from './user/userSlice';

export default {
  counter: counterSlice,
  car: carSlice,
  cart: cartSlice,
  todos: todosApi.reducer,
  item: itemsSlice,
  user: userSlice,
};
