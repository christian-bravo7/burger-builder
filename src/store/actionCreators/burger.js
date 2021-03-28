import {
  DECREMENT_INGREDIENT_COUNT,
  INCREMENT_INGREDIENT_COUNT,
} from '@/store/actions/burger';

const incrementIngredientCount = ingredient => ({
  type: INCREMENT_INGREDIENT_COUNT,
  payload: { ingredient },
});

const decrementIngredientCount = ingredient => ({
  type: DECREMENT_INGREDIENT_COUNT,
  payload: { ingredient },
});

export { incrementIngredientCount, decrementIngredientCount };
