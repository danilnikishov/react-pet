const initialState = {
  category: null,
  sortBy: {
    type: 'popular', // Тип сортировки: популярность
    order: 'desc', // Порядок: убывание
  },
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export default filters;
