import {
  INCREMENT_INGREDIENT_COUNT,
  DECREMENT_INGREDIENT_COUNT,
} from '@/store/actions/burger';

const initialState = {
  ingredients: {
    bacon: 2,
    meat: 2,
    salad: 0,
    cheese: 1,
  },
};

const burgerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT_INGREDIENT_COUNT:
      return incrementIngredientCount(state, payload);
    case DECREMENT_INGREDIENT_COUNT:
      return decrementIngredientCount(state, payload);
    default:
      return state;
  }
};

const incrementIngredientCount = (state, { ingredient }) => {
  const ingredients = { ...state.ingredients };

  ingredients[ingredient] += 1;

  return {
    ...state,
    ingredients,
  };
};

const decrementIngredientCount = (state, { ingredient }) => {
  const ingredients = { ...state.ingredients };

  ingredients[ingredient] -= 1;

  return {
    ...state,
    ingredients,
  };
};

export default burgerReducer;
