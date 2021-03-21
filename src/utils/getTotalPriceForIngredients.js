import ingredientsConfig from '@/utils/config';

const getTotalPriceForIngredients = ingredients => {
  const cost = Object.keys(ingredients).reduce(
    (accumulator, currentIngredient) => {
      const unitCost =
        ingredientsConfig[currentIngredient]?.price ?? 0;
      const quantity = ingredients[currentIngredient] ?? 0;

      return accumulator + unitCost * quantity;
    },
    0
  );

  return cost;
};

export default getTotalPriceForIngredients;
