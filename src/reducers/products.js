import { LOADING_PRODUCTS, SET_PRODUCT_CATEGORIES, SET_PRODUCTS } from './../actions/products/const';

// The initial application state
const initialState = {
    isLoading: true,
    categories: [],
    products: [],
};


// Takes care of changing the application state
export default function products(state = initialState, action) {
  switch (action.type) {
    case LOADING_PRODUCTS:
        return {
            ...state,
            isLoading: action.state
        }
    case SET_PRODUCT_CATEGORIES:
        return {
            ...state,
            categories: action.categories
        }
    case SET_PRODUCTS:
    return {
        ...state,
        products: action.products,
        isLoading: false,
    }
    default:
      return state;
  }
}
