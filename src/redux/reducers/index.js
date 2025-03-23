import { combineReducers } from 'redux';

import filters from './filters';
import pizzas from './pizzas';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  pizzas,
  cart,
});

export default rootReducer;

// import { combineReducers } from 'redux';

// import filtersReducer from './filters';
// import pizzasReducer from './pizzas';

// const rootReducer = combineReducers({
//   filters: filtersReducer,
//   pizzas: pizzasReducer,
// });

// export default rootReducer;
