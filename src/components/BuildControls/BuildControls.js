import BuildControl from '@/components/BuildControls/BuildControl/BuildControl';
import proptypes from 'prop-types';

const controls = [
  { label: 'Salad', ingredient: 'salad' },
  { label: 'Bacon', ingredient: 'bacon' },
  { label: 'Cheese', ingredient: 'cheese' },
  { label: 'Meat', ingredient: 'meat' },
];

const BuildControls = ({ onAddIngredient, onRemoveIngredient }) => {
  return (
    <div>
      {controls.map(({ label, ingredient }, index) => (
        <BuildControl
          key={index}
          label={label}
          onAdd={() => {
            onAddIngredient(ingredient);
          }}
          onRemove={() => {
            onRemoveIngredient(ingredient);
          }}
        />
      ))}
    </div>
  );
};

BuildControls.propTypes = {
  onAddIngredient: proptypes.func.isRequired,
  onRemoveIngredient: proptypes.func.isRequired,
};

export default BuildControls;
